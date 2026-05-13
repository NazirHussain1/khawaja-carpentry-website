import { CheckCircle2, ChevronDown, MessageCircle, Phone, ShieldCheck, Star } from 'lucide-react';
import { useState } from 'react';

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need a quote for wooden pallets in UAE.')}`;

const bullets = [
  'Heavy-duty wooden pallets',
  'Export-quality pallets',
  'Custom dimensions available',
  'Heat-treated pallets',
  'Affordable bulk pricing',
  'Fast UAE delivery'
];

const palletTypes = [
  ['Euro Pallets', 'Standardized pallets for warehouse storage, distribution, and commercial supply chains.', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Two-Way Pallets', 'Reliable entry pallets suitable for common forklift handling and storage operations.', 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Four-Way Pallets', 'Flexible pallet handling from all sides for efficient warehouse movement.', 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Heavy-Duty Pallets', 'Strong pallets built for heavy industrial products, machinery, and bulk loads.', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Heat Treated Pallets', 'Export-ready heat-treated pallets for international shipping requirements.', 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Custom Wooden Pallets', 'Made-to-size pallet solutions according to load, dimensions, and shipping needs.', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=900&q=65&fm=webp']
];

const applications = ['Warehouses', 'Logistics', 'Shipping', 'Factories', 'Retail Storage', 'Export Companies'];
const features = ['Strong load capacity', 'Long-lasting wood quality', 'Custom manufacturing', 'Competitive pricing', 'UAE-wide delivery', 'Export standards'];
const gallery = [
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=65&fm=webp',
  'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=65&fm=webp',
  'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=65&fm=webp'
];

const faqs = [
  ['Do you provide custom wooden pallet sizes?', 'Yes, we manufacture custom wooden pallets according to your required dimensions, load capacity, and warehouse or shipping needs.'],
  ['Which UAE delivery areas do you cover?', 'We deliver wooden pallets across Dubai, Sharjah, Abu Dhabi, JAFZA, Jebel Ali, Ras Al Khaimah, Ajman, Fujairah, and all UAE.'],
  ['Do you supply export pallets?', 'Yes, we provide export-quality wooden pallets, including heat-treated pallet options suitable for international shipping.'],
  ['Can you handle bulk wooden pallet orders?', 'Yes, we support bulk and wholesale wooden pallet supply for warehouses, factories, logistics companies, and exporters.'],
  ['How is wooden pallet pricing calculated?', 'Pricing depends on pallet size, quantity, wood type, load requirements, treatment needs, and delivery location. Contact us for a fast quote.']
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default function WoodenPallets() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section
        className="relative isolate min-h-[520px] bg-slate-950 text-white sm:min-h-[620px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 2, 79, 0.94), rgba(22, 17, 86, 0.86), rgba(2, 6, 23, 0.62)), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=65&fm=webp')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:min-h-[620px] sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/10">
              <Star className="text-sky-200" size={15} /> Wooden Pallets UAE
            </span>
            <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">Premium Wooden Pallets Supplier in UAE</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl">
              High-quality wooden pallets for warehouses, logistics, factories, export, shipping, and industrial use across UAE.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/30 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> Get Free Quote
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">About Product</span>
            <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">Reliable Wooden Pallets for Industrial Use</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We manufacture and supply durable wooden pallets in standard and custom sizes for warehouses, shipping companies,
              factories, and logistics businesses across UAE.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {bullets.map((item) => (
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-700" key={item}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <img className="min-h-96 rounded-3xl object-cover shadow-2xl shadow-slate-950/10" src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1100&q=65&fm=webp" alt="Wooden pallets in warehouse" width="1100" height="720" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Pallet Types" subtitle="Choose from standard, export-ready, and custom wooden pallet solutions." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {palletTypes.map(([title, description, image]) => (
              <article className="group overflow-hidden rounded-3xl bg-white shadow-md shadow-slate-950/5 ring-1 ring-slate-200 transition hover:-translate-y-2 hover:shadow-2xl" key={title}>
                <div className="overflow-hidden">
                  <img className="h-48 w-full object-cover transition duration-500 group-hover:scale-110" src={image} alt={title} width="900" height="520" loading="lazy" decoding="async" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#02024f]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Industries We Serve" subtitle="Wooden pallet supply for demanding commercial and industrial operations." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {applications.map((item) => (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-bold text-[#02024f] shadow-sm" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Choose Our Pallets" subtitle="Built for strength, value, export use, and fast UAE delivery." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-950/5 transition hover:-translate-y-2 hover:shadow-2xl" key={feature}>
                <ShieldCheck className="text-indigo-600" size={28} />
                <h3 className="mt-4 text-lg font-black text-[#02024f]">{feature}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Wooden Pallet Gallery" subtitle="Warehouse stock, pallet loading, and export packaging visuals." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {gallery.map((image, index) => (
              <img className="h-72 w-full rounded-3xl object-cover shadow-xl shadow-slate-950/10" src={image} alt={`Wooden pallet product ${index + 1}`} width="900" height="560" loading="lazy" decoding="async" key={image} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Wooden Pallets FAQ" subtitle="Answers about custom sizes, delivery, export pallets, bulk orders, and pricing." />
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
        <h2 className="text-3xl font-black">Need Wooden Pallets in UAE?</h2>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> Request Quote
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971509253127">
            <Phone size={19} /> Call Now
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
