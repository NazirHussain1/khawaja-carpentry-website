import { CheckCircle2, ChevronDown, MessageCircle, Phone, ShieldCheck, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need a quote for custom wooden crates in UAE.')}`;

const bullets = [
  'Custom crate sizes',
  'Heavy-duty wooden crates',
  'Export packing crates',
  'Strong protection for goods',
  'Bulk order available',
  'Fast delivery across UAE'
];

const crateTypes = [
  ['Export Wooden Crates', 'Export-ready crates built for cargo handling, container loading, and international shipment.', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=900&q=80'],
  ['Heavy-Duty Crates', 'Strong wooden crates designed for heavy goods, industrial components, and bulk materials.', 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=900&q=80'],
  ['Machinery Packing Crates', 'Custom crates for machinery, spare parts, fabrication equipment, and technical cargo.', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80'],
  ['Fragile Goods Crates', 'Protective wooden crates for fragile, sensitive, and high-value commercial goods.', 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80'],
  ['Custom Wooden Boxes', 'Made-to-measure wooden boxes for storage, packing, and transport requirements.', 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80'],
  ['Industrial Packing Crates', 'Reliable crate solutions for warehouses, factories, logistics, and shipping companies.', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80']
];

const applications = ['Export Companies', 'Warehouses', 'Factories', 'Machinery Suppliers', 'Logistics Companies', 'Shipping Companies'];
const features = ['Strong wood material', 'Custom-built design', 'Safe cargo protection', 'Affordable pricing', 'UAE-wide delivery', 'Suitable for export packing'];
const gallery = [
  'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80'
];

const faqs = [
  ['Do you make custom crate sizes?', 'Yes, we manufacture wooden crates and boxes according to your required dimensions, cargo weight, and packing needs.'],
  ['Are wooden crates suitable for export?', 'Yes, our wooden crates can be prepared for export packing, cargo protection, and international shipment requirements.'],
  ['Do you handle bulk crate orders?', 'Yes, we supply wooden crates in bulk for factories, exporters, shipping companies, warehouses, and industrial customers.'],
  ['Which UAE areas do you deliver to?', 'We deliver wooden crates across Dubai, Sharjah, Abu Dhabi, JAFZA, Jebel Ali, Ras Al Khaimah, Ajman, Fujairah, and all UAE.'],
  ['How can I get a quote?', 'Contact us by phone or WhatsApp with crate dimensions, quantity, cargo type, and delivery location for fast pricing.']
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

export default function WoodenCrates() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');

    document.title = 'Wooden Crates Supplier in UAE | Custom Packing Crates';
    description?.setAttribute('content', 'Custom wooden crates supplier in Dubai, Sharjah, Abu Dhabi, JAFZA, Jebel Ali, and all UAE for export packing, machinery, and industrial goods.');

    return () => {
      document.title = previousTitle;
      if (previousDescription) description?.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <>
      <section
        className="relative isolate min-h-[620px] bg-slate-950 text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 2, 79, 0.94), rgba(22, 17, 86, 0.86), rgba(2, 6, 23, 0.62)), url('https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1800&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/10">
              <Star className="text-sky-200" size={15} /> Wooden Crates UAE
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">Custom Wooden Crates Supplier in UAE</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl">
              Strong wooden crates for packing, storage, export shipping, heavy machinery, fragile goods, and industrial transport across UAE.
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
            <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">Durable Wooden Crates for Safe Packing</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We manufacture and supply custom wooden crates for industrial packing, export cargo, fragile items, heavy goods,
              machinery, and warehouse storage across UAE.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {bullets.map((item) => (
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-700" key={item}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <img className="min-h-96 rounded-3xl object-cover shadow-2xl shadow-slate-950/10" src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1100&q=80" alt="Wooden crates for cargo packing" />
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Crate Types" subtitle="Custom crate solutions for export, machinery, fragile goods, and industrial packing." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {crateTypes.map(([title, description, image]) => (
              <article className="group overflow-hidden rounded-3xl bg-white shadow-md shadow-slate-950/5 ring-1 ring-slate-200 transition hover:-translate-y-2 hover:shadow-2xl" key={title}>
                <div className="overflow-hidden">
                  <img className="h-48 w-full object-cover transition duration-500 group-hover:scale-110" src={image} alt={title} loading="lazy" />
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
          <SectionHeading title="Applications" subtitle="Wooden crate supply for industrial packing and shipping operations." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {applications.map((item) => (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-bold text-[#02024f] shadow-sm" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Choose Our Wooden Crates" subtitle="Built for cargo safety, export packing, and UAE-wide industrial supply." />
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
          <SectionHeading title="Wooden Crates Gallery" subtitle="Cargo packing, warehouse crates, and export crate visuals." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {gallery.map((image, index) => (
              <img className="h-72 w-full rounded-3xl object-cover shadow-xl shadow-slate-950/10" src={image} alt={`Wooden crate product ${index + 1}`} loading="lazy" key={image} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Wooden Crates FAQ" subtitle="Answers about custom crate sizes, export packing, bulk orders, delivery, and quotes." />
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
        <h2 className="text-3xl font-black">Need Custom Wooden Crates in UAE?</h2>
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
