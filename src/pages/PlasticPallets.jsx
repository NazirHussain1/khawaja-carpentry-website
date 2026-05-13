import { CheckCircle2, ChevronDown, MessageCircle, Phone, ShieldCheck, Star } from 'lucide-react';
import { useState } from 'react';

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need a quote for plastic pallets in UAE.')}`;

const bullets = [
  'Reusable long-life pallets',
  'Hygienic and easy to clean',
  'Lightweight and durable',
  'Moisture resistant',
  'Suitable for warehouse storage',
  'Bulk orders available'
];

const palletTypes = [
  ['Heavy-Duty Plastic Pallets', 'Strong reusable plastic pallets for heavy loads, warehouses, and industrial operations.', 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Lightweight Plastic Pallets', 'Easy-to-handle pallets for retail storage, logistics, and repeated warehouse movement.', 'https://images.unsplash.com/photo-1586528116493-da5b8f76c643?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Rackable Plastic Pallets', 'Plastic pallets suitable for racking systems, storage facilities, and organized stock handling.', 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Nestable Plastic Pallets', 'Space-saving plastic pallets for efficient return logistics and compact storage.', 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Hygienic Plastic Pallets', 'Cleanable pallets for food, pharmaceutical, and hygiene-sensitive storage environments.', 'https://images.unsplash.com/photo-1581093458791-9d09ccfed1c1?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Export Plastic Pallets', 'Durable pallets for export handling, cargo movement, and international supply chains.', 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=900&q=65&fm=webp']
];

const industries = ['Warehouses', 'Food Industry', 'Pharmaceutical Industry', 'Logistics Companies', 'Retail Storage', 'Export Businesses'];
const features = ['Strong load capacity', 'Long reusable lifespan', 'Hygienic material', 'Weather resistant', 'Easy handling', 'Affordable bulk pricing'];
const gallery = [
  'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=65&fm=webp',
  'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=65&fm=webp',
  'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=65&fm=webp'
];

const faqs = [
  ['Are plastic pallets reusable?', 'Yes, plastic pallets are reusable and designed for long service life in warehouse, logistics, food, and industrial environments.'],
  ['Do you supply heavy-duty pallets?', 'Yes, we supply heavy-duty plastic pallets suitable for industrial loads, storage, and repeated handling.'],
  ['Which UAE areas do you deliver to?', 'We deliver plastic pallets across Dubai, Sharjah, Abu Dhabi, JAFZA, Jebel Ali, Ras Al Khaimah, Ajman, Fujairah, and all UAE.'],
  ['Are plastic pallets export suitable?', 'Yes, plastic pallets are suitable for export handling, cargo movement, and international shipping operations.'],
  ['Can I order in bulk?', 'Yes, bulk and wholesale plastic pallet orders are available for warehouses, factories, logistics companies, and exporters.']
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

export default function PlasticPallets() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section
        className="relative isolate min-h-[520px] bg-slate-950 text-white sm:min-h-[620px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 2, 79, 0.94), rgba(22, 17, 86, 0.86), rgba(2, 6, 23, 0.62)), url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=65&fm=webp')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:min-h-[620px] sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/10">
              <Star className="text-sky-200" size={15} /> Plastic Pallets UAE
            </span>
            <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">Plastic Pallets Supplier in UAE</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl">
              Durable and reusable plastic pallets for warehouses, food industries, logistics, pharmaceutical storage, export, and industrial use across UAE.
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
            <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">High-Quality Plastic Pallets for Industrial Use</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We supply strong and reusable plastic pallets suitable for warehouses, logistics companies, factories,
              food industries, pharmaceutical storage, and export businesses across UAE.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {bullets.map((item) => (
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-700" key={item}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <img className="min-h-96 rounded-3xl object-cover shadow-2xl shadow-slate-950/10" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1100&q=65&fm=webp" alt="Plastic pallets in industrial warehouse" width="1100" height="720" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Plastic Pallet Types" subtitle="Reusable plastic pallet options for storage, export, food, pharma, and industrial use." />
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
          <SectionHeading title="Industries We Serve" subtitle="Plastic pallets for clean, durable, and repeated industrial handling." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {industries.map((item) => (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-bold text-[#02024f] shadow-sm" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Choose Our Plastic Pallets" subtitle="Durable, reusable, hygienic, and suitable for UAE industrial supply chains." />
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
          <SectionHeading title="Plastic Pallets Gallery" subtitle="Plastic pallet warehouse, product, and industrial storage images." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {gallery.map((image, index) => (
              <img className="h-72 w-full rounded-3xl object-cover shadow-xl shadow-slate-950/10" src={image} alt={`Plastic pallet product ${index + 1}`} width="900" height="560" loading="lazy" decoding="async" key={image} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Plastic Pallets FAQ" subtitle="Answers about reusable pallets, heavy-duty supply, delivery, export use, and bulk orders." />
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
        <h2 className="text-3xl font-black">Need Plastic Pallets in UAE?</h2>
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
