import { CheckCircle2, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { CallIcon, MailIcon } from '../components/common/ContactIcons.jsx';
import WhatsAppIcon from '../components/common/WhatsAppIcon.jsx';
import { formDataToInquiry, productOptions, submitInquiry } from '../utils/inquiries.js';

const contact = {
  location: 'Industrial Area Al Sajja, Sharjah, UAE',
  mapsUrl: 'https://www.google.com/maps?q=Industrial%20Area%20Al%20Sajja%2C%20Sharjah%2C%20UAE',
  mapEmbed: 'https://www.google.com/maps?q=Industrial%20Area%20Al%20Sajja%2C%20Sharjah%2C%20UAE&output=embed',
  phonePrimary: '+971 50 92 53127',
  phoneSecondary: '+971 52 51 73794',
  email: 'mujahidhussaincarpentry@gmail.com',
  whatsappUrl: `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need industrial packaging solutions in UAE.')}`
};

const areas = ['Dubai', 'Sharjah', 'Abu Dhabi', 'JAFZA', 'Jebel Ali', 'Ras Al Khaimah', 'Ajman', 'Fujairah'];
const faqs = [
  ['How quickly can I get a quote?', 'Most quote requests can be reviewed quickly after you share product type, quantity, size, and delivery location.'],
  ['Do you handle bulk orders?', 'Yes, we handle bulk orders for warehouses, factories, logistics companies, exporters, and industrial customers.'],
  ['Which areas do you serve?', 'We serve Dubai, Sharjah, Abu Dhabi, JAFZA, Jebel Ali, Ras Al Khaimah, Ajman, Fujairah, and all UAE.'],
  ['Are custom pallet sizes available?', 'Yes, custom wooden pallet and crate sizes are available according to dimensions, load capacity, and usage requirements.']
];

const fieldClass = 'mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15';
const labelClass = 'text-sm font-bold text-slate-700';

function ContactCard({ icon: Icon, title, children }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-950/5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="grid size-13 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20">
        <Icon className="size-7" />
      </div>
      <h3 className="mt-5 text-xl font-black text-[#02024f]">{title}</h3>
      <div className="mt-3 grid gap-2 text-sm leading-7 text-slate-600">{children}</div>
    </article>
  );
}

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

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
      const result = await submitInquiry(formDataToInquiry(form, 'contact-page'));
      setStatus({ type: 'success', message: result.message || 'Inquiry submitted successfully. Our team will contact you shortly.' });
      form.reset();
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section
        className="relative isolate min-h-[460px] bg-slate-950 text-white sm:min-h-[520px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 2, 79, 0.94), rgba(22, 17, 86, 0.86), rgba(2, 6, 23, 0.62)), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=65&fm=webp')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="mx-auto flex min-h-[460px] max-w-7xl items-center px-4 py-16 sm:min-h-[520px] sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/10">Contact Us</span>
            <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">Contact Mujahid Hussain Carpentry</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl">
              Get in touch for wooden pallets, wooden crates, plastic pallets, jumbo bags, and industrial packaging solutions across UAE.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/30 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> WhatsApp Now
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href={`tel:${contact.phonePrimary.replace(/\s/g, '')}`}>
                <CallIcon className="size-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Contact Information</span>
            <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Our team is ready to assist you with product inquiries, custom orders, bulk pricing, and delivery services across UAE.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ContactCard icon={MapPin} title="Location">
              <a className="font-semibold text-slate-700 hover:text-indigo-700" href={contact.mapsUrl} target="_blank" rel="noreferrer">{contact.location}</a>
              <span className="text-xs font-bold uppercase tracking-wide text-indigo-700">Open Google Maps</span>
            </ContactCard>
            <ContactCard icon={CallIcon} title="Phone Number">
              <a className="font-semibold text-slate-700 hover:text-indigo-700" href={`tel:${contact.phonePrimary.replace(/\s/g, '')}`}>{contact.phonePrimary}</a>
              <a className="font-semibold text-slate-700 hover:text-indigo-700" href={`tel:${contact.phoneSecondary.replace(/\s/g, '')}`}>{contact.phoneSecondary}</a>
            </ContactCard>
            <ContactCard icon={MailIcon} title="Email Address">
              <a className="font-semibold text-slate-700 hover:text-indigo-700" href={`mailto:${contact.email}`}>{contact.email}</a>
            </ContactCard>
            <ContactCard icon={Clock} title="Working Hours">
              <span>Monday  Saturday</span>
              <span>8:00 AM  7:00 PM</span>
            </ContactCard>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/8 lg:p-8" onSubmit={handleSubmit}>
            <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">Contact Form</span>
            <h2 className="mt-5 text-3xl font-black text-[#02024f]">Request a Free Quote</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <label className={labelClass}>Full Name<input className={fieldClass} name="name" type="text" required minLength="2" placeholder="Your full name" /></label>
              <label className={labelClass}>Phone Number<input className={fieldClass} name="phone" type="tel" inputMode="tel" required pattern="^[+0-9\\s-]{7,}$" placeholder="+971 ..." /></label>
              <label className={labelClass}>Email Address<input className={fieldClass} name="email" type="email" required placeholder="you@example.com" /></label>
              <label className={labelClass}>Product Type
                <select className={fieldClass} name="productType" defaultValue="" required>
                  <option value="" disabled>Select product</option>
                  {productOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className={labelClass}>Quantity<input className={fieldClass} name="quantity" type="number" inputMode="numeric" min="1" required placeholder="100" /></label>
              <label className={labelClass}>City/Location<input className={fieldClass} name="city" type="text" required placeholder="Dubai, Sharjah..." /></label>
              <label className={`${labelClass} md:col-span-2`}>Message<textarea className={`${fieldClass} min-h-36 resize-y`} name="message" required minLength="10" placeholder="Share product sizes, delivery location, quantity, and requirements..." /></label>
              <input className="hidden" type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            </div>
            <button className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition hover:-translate-y-1 hover:shadow-sky-500/30 hover:from-violet-600 hover:to-sky-400 disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={submitting}>
              <WhatsAppIcon className="size-5" /> {submitting ? 'Sending Inquiry...' : 'Send Inquiry'}
            </button>
            {status && (
              <p
                className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}
                role={status.type === 'success' ? 'status' : 'alert'}
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </form>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/8">
            <iframe className="h-80 w-full sm:h-[420px] lg:h-[520px]" title="Industrial Area Al Sajja, Sharjah map" src={contact.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black text-[#02024f] sm:text-4xl">Service Areas</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Delivery and service support across major UAE industrial and commercial areas.</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {areas.map((area) => <span className="rounded-full border border-indigo-200 bg-white px-5 py-3 text-sm font-bold text-indigo-700 shadow-sm" key={area}>{area}</span>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-black text-[#02024f] sm:text-4xl">Contact FAQs</h2>
          </div>
          <div className="mt-10 grid gap-4">
            {faqs.map(([question, answer]) => (
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm" key={question}>
                <h3 className="font-black text-[#02024f]">{question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#02024f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Need Industrial Packaging Solutions in UAE?</h2>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> WhatsApp Us
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href={`tel:${contact.phonePrimary.replace(/\s/g, '')}`}>
            <CallIcon className="size-5" /> Call Now
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="#top">
            <CheckCircle2 size={19} /> Get Free Quote
          </a>
        </div>
      </section>
    </>
  );
}
