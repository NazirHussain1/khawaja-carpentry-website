import { ArrowRight, Boxes, Building2, CheckCircle2, ChevronDown, Clock, Factory, Mail, MapPin, MessageCircle, PackageCheck, Phone, Send, Truck, Users } from 'lucide-react';
import { useState } from 'react';
import { CallIcon } from '../components/common/ContactIcons.jsx';
import WhatsAppIcon from '../components/common/WhatsAppIcon.jsx';
import contactInfo from '../data/contactInfo.js';
import { submitInquiry } from '../utils/inquiries.js';
import { createMailUrl, createTelUrl, createWhatsAppUrl } from '../utils/whatsapp.js';

const productOptions = [
  ['Wooden Pallets', 'Wooden Pallets'],
  ['Plastic Pallets', 'Plastic Pallets'],
  ['Wooden Crates', 'Wooden Crates'],
  ['Plastic Jumbo Bags', 'Plastic Jumbo Bags'],
  ['Custom Orders', 'Custom Requirement']
];

const contactCards = [
  [Phone, 'Call Us', contactInfo.phone, createTelUrl(contactInfo.phone), 'Speak directly with our sales team'],
  [Mail, 'Email Us', contactInfo.email, createMailUrl(contactInfo.email), 'Send drawings, sizes, or bulk requirements'],
  [MessageCircle, 'WhatsApp', 'Direct WhatsApp Contact', createWhatsAppUrl('Hello, I need pricing for pallets, crates, plastic pallets, or jumbo bags.'), 'Quick quotations and order support'],
  [MapPin, 'Location', contactInfo.address, contactInfo.mapsUrl, 'Factory / Warehouse Address']
];

const whyContact = [
  [Send, 'Fast Response', 'Quick replies for pricing, sizes, and delivery questions.'],
  [Factory, 'Custom Manufacturing', 'Custom pallets, crates, and packaging built to requirements.'],
  [Boxes, 'Bulk Orders', 'Support for recurring and high-volume industrial supply.'],
  [Truck, 'Nationwide Delivery', 'Delivery coordination for major industrial locations.'],
  [PackageCheck, 'Competitive Pricing', 'Practical pricing for wholesale and business buyers.'],
  [Users, 'Experienced Team', 'Guidance from a team familiar with industrial packaging.']
];

const serviceAreas = ['Lahore', 'Karachi', 'Islamabad', 'Faisalabad', 'Multan', 'Sialkot', 'Gujranwala', 'Peshawar'];

const faqs = [
  ['How quickly do you respond?', 'We usually respond quickly during business hours. For urgent quotes, WhatsApp or call is the fastest option.'],
  ['Can I request custom pallet sizes?', 'Yes, custom wooden pallets, crates, and packaging solutions can be made according to your dimensions and load requirements.'],
  ['Do you handle bulk orders?', 'Yes, bulk orders are supported for warehouses, factories, exporters, logistics companies, and construction suppliers.'],
  ['Do you deliver nationwide?', 'Delivery can be arranged for major service areas depending on product type, quantity, and order schedule.'],
  ['Can I contact through WhatsApp?', 'Yes, WhatsApp is available for quick quotations, order details, product photos, and follow-up support.']
];

const fieldClass = 'mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15';
const labelClass = 'text-sm font-bold text-slate-700';

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function ContactCard({ icon: Icon, title, value, href, caption }) {
  const isExternal = href.startsWith('http');
  return (
    <a
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-950/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-950/10"
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20 transition group-hover:scale-105">
        <Icon size={27} />
      </div>
      <h3 className="mt-5 text-xl font-black text-[#02024f]">{title}</h3>
      <p className="mt-2 break-words text-sm font-bold leading-6 text-slate-700">{value}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">{caption}</p>
    </a>
  );
}

function buildContactInquiry(form) {
  const formData = new FormData(form);
  const company = String(formData.get('companyName') || '').trim();
  const message = String(formData.get('message') || '').trim();

  return {
    name: formData.get('name') || '',
    phone: formData.get('phone') || '',
    email: formData.get('email') || '',
    productType: formData.get('productType') || 'Custom Orders',
    quantity: formData.get('quantity') || '',
    city: formData.get('city') || '',
    message: [company ? `Company: ${company}` : '', message].filter(Boolean).join('\n\n'),
    website: formData.get('website') || '',
    source: 'contact-page'
  };
}

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [quoteForm, setQuoteForm] = useState({ productType: 'Wooden Pallets', size: '', quantity: '', location: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus({ type: 'error', message: 'Please complete all required fields before submitting.' });
      return;
    }

    setSubmitting(true);
    setStatus(null);
    try {
      const result = await submitInquiry(buildContactInquiry(form));
      setStatus({ type: 'success', message: result.message || 'Inquiry submitted successfully. Our team will contact you shortly.' });
      form.reset();
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setSubmitting(false);
    }
  }

  function handleQuickQuote(event) {
    event.preventDefault();
    const message = [
      'Hello, I need a fast quote.',
      `Product Type: ${quoteForm.productType}`,
      `Size: ${quoteForm.size || 'Not specified'}`,
      `Quantity: ${quoteForm.quantity || 'Not specified'}`,
      `Location: ${quoteForm.location || 'Not specified'}`
    ].join('\n');
    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#02024f] via-indigo-800 to-sky-600 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(125,211,252,0.16),transparent_28%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-sky-100" aria-label="Breadcrumb">
            <a className="transition hover:text-white" href="/" data-spa-link="true">Home</a>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </nav>
          <div className="mt-10 max-w-4xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-sky-100 ring-1 ring-white/15">Industrial Contact Desk</span>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">Get in Touch With Us</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100 sm:text-xl">
              Need pallets, crates, plastic pallets, or jumbo bags? Contact our team for pricing, bulk orders, and custom manufacturing solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400" href="#contact-form">
                Get Quote <ArrowRight size={18} />
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href={createWhatsAppUrl('Hello, I need pricing for pallets, crates, plastic pallets, or jumbo bags.')} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Contact Information" title="Talk to Our Industrial Packaging Team" subtitle="Choose the fastest contact method for pricing, technical requirements, bulk supply, or delivery support." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactCards.map(([Icon, title, value, href, caption]) => <ContactCard icon={Icon} title={title} value={value} href={href} caption={caption} key={title} />)}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="contact-form">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/8 lg:p-8" onSubmit={handleSubmit}>
            <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-indigo-700">Contact Form</span>
            <h2 className="mt-5 text-3xl font-black text-[#02024f]">Submit Your Inquiry</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Share your order details and our team will follow up with pricing, availability, and delivery options.</p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <label className={labelClass}>Full Name<input className={fieldClass} name="name" type="text" required minLength="2" placeholder="Your full name" autoComplete="name" /></label>
              <label className={labelClass}>Company Name<input className={fieldClass} name="companyName" type="text" placeholder="Company / warehouse name" autoComplete="organization" /></label>
              <label className={labelClass}>Phone Number<input className={fieldClass} name="phone" type="tel" inputMode="tel" required pattern="^[+0-9\\s-]{7,}$" placeholder="+92 ..." autoComplete="tel" /></label>
              <label className={labelClass}>Email Address<input className={fieldClass} name="email" type="email" required placeholder="you@example.com" autoComplete="email" /></label>
              <label className={labelClass}>Product Required
                <select className={fieldClass} name="productType" defaultValue="" required>
                  <option value="" disabled>Select product</option>
                  {productOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
                </select>
              </label>
              <label className={labelClass}>Quantity<input className={fieldClass} name="quantity" type="number" inputMode="numeric" min="1" required placeholder="100" /></label>
              <label className={`${labelClass} md:col-span-2`}>Message<textarea className={`${fieldClass} min-h-36 resize-y`} name="message" required minLength="10" placeholder="Tell us size, delivery location, load weight, product condition, or custom manufacturing requirements..." /></label>
              <input className="hidden" type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={submitting}>
                <Send size={18} /> {submitting ? 'Sending Inquiry...' : 'Submit Inquiry'}
              </button>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-200 bg-white px-7 py-4 text-sm font-extrabold text-[#02024f] shadow-sm transition hover:-translate-y-1 hover:bg-indigo-50" href={createWhatsAppUrl('Hello, I want to send an inquiry for pallets, crates, plastic pallets, or jumbo bags.')} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> WhatsApp Inquiry
              </a>
            </div>
            {status && (
              <p className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`} role={status.type === 'success' ? 'status' : 'alert'} aria-live="polite">
                {status.message}
              </p>
            )}
          </form>

          <div className="grid gap-6">
            <form className="rounded-3xl border border-indigo-100 bg-[#fbf7ff] p-6 shadow-xl shadow-indigo-950/5" onSubmit={handleQuickQuote}>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">Quick Quote</span>
              <h2 className="mt-3 text-3xl font-black text-[#02024f]">Request a Fast Quote</h2>
              <div className="mt-6 grid gap-4">
                <label className={labelClass}>Product Type
                  <select className={fieldClass} value={quoteForm.productType} onChange={(event) => setQuoteForm((form) => ({ ...form, productType: event.target.value }))} required>
                    {productOptions.map(([, label]) => <option key={label}>{label}</option>)}
                  </select>
                </label>
                <label className={labelClass}>Size<input className={fieldClass} value={quoteForm.size} onChange={(event) => setQuoteForm((form) => ({ ...form, size: event.target.value }))} placeholder="Example: 100 x 120 cm" /></label>
                <label className={labelClass}>Quantity<input className={fieldClass} value={quoteForm.quantity} onChange={(event) => setQuoteForm((form) => ({ ...form, quantity: event.target.value }))} type="number" min="1" placeholder="100" /></label>
                <label className={labelClass}>Location<input className={fieldClass} value={quoteForm.location} onChange={(event) => setQuoteForm((form) => ({ ...form, location: event.target.value }))} placeholder="City / delivery area" /></label>
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/20 transition hover:-translate-y-1" type="submit">
                <WhatsAppIcon className="size-5" /> Get Instant Quote
              </button>
            </form>

            <div className="rounded-3xl bg-[#02024f] p-8 text-white shadow-xl shadow-slate-950/20">
              <h2 className="text-3xl font-black">Need Immediate Assistance?</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">Chat with our team directly on WhatsApp for quick quotations and support.</p>
              <a className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={createWhatsAppUrl('Hello, I need immediate assistance for industrial packaging.')} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Visit Our Facility" subtitle="Use the map for directions or contact us before visiting for stock availability and order planning." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <div className="grid gap-4">
              {[
                [MapPin, 'Address', contactInfo.address],
                [Clock, 'Business Hours', contactInfo.hours],
                [Truck, 'Directions', 'Open Google Maps for route planning and delivery coordination.']
              ].map(([Icon, title, text]) => (
                <article className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-lg shadow-indigo-950/5" key={title}>
                  <Icon className="text-indigo-600" size={28} />
                  <h3 className="mt-4 text-xl font-black text-[#02024f]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
            <iframe className="h-[450px] w-full rounded-3xl border-0 shadow-2xl shadow-slate-950/10" title={`${contactInfo.address} map`} src={contactInfo.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Business Hours" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5">
              <Clock className="text-indigo-600" size={34} />
              <h3 className="mt-5 text-2xl font-black text-[#02024f]">Monday - Saturday</h3>
              <p className="mt-2 text-lg font-bold text-slate-700">8:00 AM - 7:00 PM</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5">
              <Clock className="text-slate-500" size={34} />
              <h3 className="mt-5 text-2xl font-black text-[#02024f]">Sunday</h3>
              <p className="mt-2 text-lg font-bold text-slate-700">Closed</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Contact Us?" subtitle="A practical industrial supplier focused on fast pricing, custom orders, and bulk supply support." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyContact.map(([Icon, title, text]) => (
              <article className="rounded-3xl border border-indigo-100 bg-white p-7 shadow-lg shadow-indigo-950/5 transition hover:-translate-y-1 hover:shadow-2xl" key={title}>
                <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20">
                  <Icon size={27} />
                </div>
                <h3 className="mt-5 text-xl font-black text-[#02024f]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Areas We Serve" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <article className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-950/5 transition hover:-translate-y-1 hover:shadow-lg" key={area}>
                <Building2 className="shrink-0 text-indigo-600" size={24} />
                <span className="font-black text-[#02024f]">{area}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-10 grid gap-4">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" key={question}>
                  <button className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                    <span className="font-black text-[#02024f]">{question}</span>
                    <ChevronDown className={`shrink-0 text-indigo-600 transition ${isOpen ? 'rotate-180' : ''}`} size={20} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-7 text-slate-600">{answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#02024f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Ready to Get a Quote?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">Contact us today and get the best pricing for pallets, crates, jumbo bags, and industrial packaging solutions.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href={createTelUrl(contactInfo.phone)}>
            <CallIcon className="size-5" /> Call Now
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={createWhatsAppUrl('Hello, I am ready to get a quote for industrial packaging solutions.')} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> WhatsApp
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="#contact-form">
            <CheckCircle2 size={19} /> Get Quote
          </a>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-3 gap-2 border-t border-white/10 bg-[#02024f]/95 p-2 text-white shadow-2xl backdrop-blur sm:hidden">
        <a className="inline-flex min-h-12 items-center justify-center gap-1 rounded-full bg-white/10 text-xs font-black" href={createTelUrl(contactInfo.phone)}>
          <Phone size={15} /> Call
        </a>
        <a className="inline-flex min-h-12 items-center justify-center gap-1 rounded-full bg-[#25D366] text-xs font-black text-white" href={createWhatsAppUrl('Hello, I need a quote.')} target="_blank" rel="noreferrer">
          <WhatsAppIcon className="size-4" /> WhatsApp
        </a>
        <a className="inline-flex min-h-12 items-center justify-center gap-1 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-xs font-black" href="#contact-form">
          <Send size={15} /> Quote
        </a>
      </div>
    </>
  );
}
