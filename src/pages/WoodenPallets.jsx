import { CheckCircle2, ChevronDown, Ruler, ShieldCheck, Star } from 'lucide-react';
import { useState } from 'react';
import { CallIcon } from '../components/common/ContactIcons.jsx';
import ProductInquirySection from '../components/contact/ProductInquirySection.jsx';
import WhatsAppIcon from '../components/common/WhatsAppIcon.jsx';

const imageBase = 'https://mujahidhussaincarpentry.store/images/';
const whatsappBase = 'https://wa.me/971509253127?text=';
const whatsappUrl = `${whatsappBase}${encodeURIComponent('Hello, I need a quote for wooden pallets in UAE.')}`;

const bullets = [
  'New wooden pallets',
  'Refurbished wooden pallets',
  'Used wooden pallets',
  'Normal and heavy duty options',
  'ISPM-15 heat treatment available',
  'Custom pallet sizes'
];

const woodenSizes = [
  {
    id: 's80x80',
    size: '80 cm x 80 cm',
    title: '80 cm x 80 cm Wooden Pallet',
    badge: 'New and Refurbished',
    description: 'Compact and versatile pallet ideal for small to medium shipments, retail storage, and light-duty warehousing.',
    image: '80cm x 80cm.jpg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 800 kg static'
  },
  {
    id: 's80x100',
    size: '80 cm x 100 cm',
    title: '80 cm x 100 cm Wooden Pallet',
    badge: 'New and Refurbished',
    description: 'Popular mid-range size for manufacturing plants and distribution centers with balanced footprint and load capacity.',
    image: '80 cm x 120 cm.jpg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 1000 kg'
  },
  {
    id: 's80x110',
    size: '80 cm x 110 cm',
    title: '80 cm x 110 cm Wooden Pallet',
    badge: 'New and Refurbished',
    description: 'Extended-length pallet for bulkier cargo, commonly used in food processing, pharmaceutical, and electronics handling.',
    image: '90 cm x 110 cm.jpeg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 1000 kg'
  },
  {
    id: 's80x120',
    size: '80 cm x 120 cm',
    title: '80 cm x 120 cm Wooden Pallet',
    badge: 'New, Refurbished and Used',
    note: 'Most Popular',
    description: 'Industry standard pallet size for warehousing, logistics, retail, manufacturing, and export operations.',
    image: '80 cm x 120 cm.jpg',
    availability: 'New, Refurbished, Used',
    type: 'Normal',
    load: 'Up to 1200 kg'
  },
  {
    id: 's80x200',
    size: '80 cm x 200 cm',
    title: '80 cm x 200 cm Wooden Pallet',
    badge: 'Normal and Heavy Duty',
    description: 'Extra-long pallet for oversized materials such as pipes, steel beams, machinery parts, and construction material.',
    image: '80 cm x 200 cm heavy duty.jpeg',
    availability: 'New, Refurbished, Used',
    type: 'Normal and Heavy Duty',
    load: 'Up to 2000 kg heavy duty'
  },
  {
    id: 's90x90',
    size: '90 cm x 90 cm',
    title: '90 cm x 90 cm Wooden Pallet',
    badge: 'New and Refurbished',
    description: 'Square pallet ideal for drum storage, chemical containers, paint manufacturers, and oil industry facilities.',
    image: '90 cm x 90 cm.jpg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 1000 kg'
  },
  {
    id: 's90x100',
    size: '90 cm x 100 cm',
    title: '90 cm x 100 cm Wooden Pallet',
    badge: 'New and Refurbished',
    description: 'Practical warehouse pallet for medium-duty goods, distribution, and general industrial storage.',
    image: '90 cm x 110 cm.jpeg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 1000 kg'
  },
  {
    id: 's95x95',
    size: '95 cm x 95 cm',
    title: '95 cm x 95 cm Wooden Pallet',
    badge: 'New and Refurbished',
    description: 'Square wooden pallet for specialized stock, drums, and space-conscious warehouse layouts.',
    image: '95 cm x 95 cm.jpeg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 1000 kg'
  },
  {
    id: 's100x100',
    size: '100 cm x 100 cm',
    title: '100 cm x 100 cm Wooden Pallet',
    badge: 'Normal and Heavy Duty',
    description: 'Strong square pallet for drums, industrial containers, warehouse storage, and heavy-duty handling.',
    image: '100 cm x 100 cm.jpg',
    availability: 'New, Refurbished, Used',
    type: 'Normal and Heavy Duty',
    load: 'Up to 1800 kg heavy duty'
  },
  {
    id: 's100x110',
    size: '100 cm x 110 cm',
    title: '100 cm x 110 cm Wooden Pallet',
    badge: 'Normal and Heavy Duty',
    description: 'Reliable industrial pallet for factories, packaging lines, storage racks, and frequent forklift handling.',
    image: '100 cm x 110 cm.jpg',
    availability: 'New, Refurbished, Used',
    type: 'Normal and Heavy Duty',
    load: 'Up to 1800 kg heavy duty'
  },
  {
    id: 's100x120',
    size: '100 cm x 120 cm',
    title: '100 cm x 120 cm Wooden Pallet',
    badge: 'Normal and Heavy Duty',
    note: 'Most Popular',
    description: 'High-demand industrial size used across UAE warehouses, factories, logistics hubs, and export operations.',
    image: '100 cm x 120 cm Heavy Duty.jpg',
    availability: 'New, Refurbished, Used',
    type: 'Normal and Heavy Duty',
    load: 'Up to 2000 kg heavy duty'
  },
  {
    id: 's100x200',
    size: '100 cm x 200 cm',
    title: '100 cm x 200 cm Wooden Pallet',
    badge: 'Normal and Heavy Duty',
    description: 'Oversized wooden pallet for long industrial cargo, construction products, and heavy machinery components.',
    image: '100cm x 200 cm normal.jpeg',
    availability: 'New, Refurbished, Used',
    type: 'Normal and Heavy Duty',
    load: 'Up to 2500 kg heavy duty'
  },
  {
    id: 's110x110',
    size: '110 cm x 110 cm',
    title: '110 cm x 110 cm Wooden Pallet',
    badge: 'Normal and Heavy Duty',
    description: 'Square heavy-duty pallet for chemical, oil and gas, bulk storage, and industrial distribution.',
    image: '110 cm x 110 cm.jpeg',
    availability: 'New, Refurbished, Used',
    type: 'Normal and Heavy Duty',
    load: 'Up to 2000 kg heavy duty'
  },
  {
    id: 's110x130',
    size: '110 cm x 130 cm',
    title: '110 cm x 130 cm Wooden Pallet',
    badge: 'Normal and Heavy Duty',
    description: 'Large pallet for bulky warehouse stock, construction materials, and industrial cargo movement.',
    image: '110 cm x 130 cm.jpeg',
    availability: 'New, Refurbished, Used',
    type: 'Normal and Heavy Duty',
    load: 'Up to 2200 kg heavy duty'
  },
  {
    id: 's114x114',
    size: '114 cm x 114 cm',
    title: '114 cm x 114 cm CP3 Wooden Pallet',
    badge: 'Normal and Heavy Duty',
    description: 'CP3 pallet size used for chemical drums, export cargo, and North American standard shipping requirements.',
    image: 'CP3 Pallets.jpg',
    availability: 'New, Refurbished, Used',
    type: 'Normal and Heavy Duty',
    load: 'Up to 2200 kg heavy duty'
  },
  {
    id: 's120x120',
    size: '120 cm x 120 cm',
    title: '120 cm x 120 cm Wooden Pallet',
    badge: 'Normal and Heavy Duty',
    description: 'Large square pallet for heavy stock, bulk cargo, drums, and demanding warehouse operations.',
    image: '120 cm x 120 cm heavy duty.jpg',
    availability: 'New, Refurbished, Used',
    type: 'Normal and Heavy Duty',
    load: 'Up to 2500 kg heavy duty'
  },
  {
    id: 's130x130',
    size: '130 cm x 130 cm',
    title: '130 cm x 130 cm Wooden Pallet',
    badge: 'Normal and Heavy Duty',
    description: 'Oversized square pallet for special industrial loads, large containers, and custom warehouse requirements.',
    image: '130cm x 130 cm.jpeg',
    availability: 'New, Refurbished, Used',
    type: 'Normal and Heavy Duty',
    load: 'Up to 3000 kg heavy duty'
  },
  {
    id: 'eurowhite',
    size: 'Euro White 80 cm x 120 cm',
    title: 'Euro White Wooden Pallet',
    badge: 'Heavy Duty',
    description: 'Premium Euro-style wooden pallet for export, retail distribution, and professional warehouse presentation.',
    image: 'Euro Pallets.jpg',
    availability: 'New, Refurbished, Used',
    type: 'Heavy Duty',
    load: 'Up to 2000 kg'
  },
  {
    id: 'euroblack',
    size: 'Euro Black 80 cm x 120 cm',
    title: 'Euro Black Wooden Pallet',
    badge: 'Heavy Duty',
    description: 'Heavy-duty Euro black pallet for high-volume storage, export handling, and repeated supply chain use.',
    image: 'Euro Pallets.jpg',
    availability: 'New, Refurbished, Used',
    type: 'Heavy Duty',
    load: 'Up to 2000 kg'
  }
];

const features = [
  '15+ Years Experience',
  'Free Delivery UAE',
  'ISPM-15 Certified',
  'Fast Turnaround',
  'Best Prices',
  '20+ Sizes'
];

const industries = ['Logistics', 'Freight and Shipping', 'Retail and FMCG', 'Manufacturing', 'Construction', 'Oil and Gas', 'Food and Beverage', 'Pharmaceutical'];

const faqs = [
  ['What is the most popular wooden pallet size in UAE?', 'The 80x120 cm and 100x120 cm sizes are the most popular in UAE logistics and warehousing.'],
  ['What is the difference between new, refurbished, and used pallets?', 'New pallets are freshly manufactured, refurbished pallets are inspected and repaired, and used pallets are pre-owned economical options.'],
  ['What is ISPM-15?', 'ISPM-15 is the international heat-treatment standard for wooden packaging used in export shipments.'],
  ['What is the difference between normal and heavy duty pallets?', 'Normal pallets suit standard loads, while heavy-duty pallets use thicker boards and stronger supports for heavier loads.'],
  ['Do you deliver across all UAE?', 'Yes, delivery is available across Dubai, Sharjah, Abu Dhabi, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.'],
  ['Can you make custom sizes?', 'Yes, custom wooden pallets can be manufactured in any required dimension, height, entry type, and load specification.']
];

function imageUrl(file) {
  return `${imageBase}${encodeURIComponent(file)}`;
}

function quoteUrl(size) {
  return `${whatsappBase}${encodeURIComponent(`Hi, I need ${size} wooden pallets.`)}`;
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function SizeSection({ item, index }) {
  const isAlt = index % 2 === 1;
  return (
    <section className={`${isAlt ? 'bg-slate-50' : 'bg-white'} px-4 py-14 sm:px-6 lg:px-8`} id={item.id}>
      <div className={`mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center ${isAlt ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <img className="h-80 w-full rounded-3xl object-cover shadow-xl shadow-slate-950/10" src={imageUrl(item.image)} alt={item.title} width="900" height="560" loading="lazy" decoding="async" />
        <div>
          <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-indigo-700 ring-1 ring-indigo-100">{item.badge}</span>
          <h2 className="mt-4 text-3xl font-black text-[#02024f]">
            {item.title} {item.note && <small className="text-base font-black text-indigo-600">({item.note})</small>}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {[
              ['Dimensions', item.size],
              ['Availability', item.availability],
              ['Type', item.type],
              ['Load Capacity', item.load],
              ['Treatment', 'Heat Treated ISPM-15 available']
            ].map(([label, value]) => (
              <div className="grid grid-cols-2 border-b border-slate-100 last:border-b-0" key={label}>
                <strong className="bg-slate-50 px-4 py-3 text-sm text-[#02024f]">{label}</strong>
                <span className="px-4 py-3 text-sm text-slate-700">{value}</span>
              </div>
            ))}
          </div>
          <a className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-indigo-950/20 transition hover:-translate-y-1" href={quoteUrl(item.size)} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> Get Quote - {item.size}
          </a>
        </div>
      </div>
    </section>
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
            `linear-gradient(90deg, rgba(2, 2, 79, 0.94), rgba(22, 17, 86, 0.86), rgba(2, 6, 23, 0.62)), url('${imageUrl('100 cm x 120 cm Heavy Duty.jpg')}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:min-h-[620px] sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/10">
              <Star className="text-sky-200" size={15} /> Wooden Pallets UAE
            </span>
            <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">Wooden Pallets - All Sizes</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl">
              New, refurbished, and used wooden pallets in 20+ sizes. Normal and heavy duty options with ISPM-15 treatment available across UAE.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/30 transition hover:-translate-y-1" href={whatsappUrl} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> Get Best Price
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href="#sizes">
                <Ruler size={18} /> View All Sizes
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <img className="h-96 w-full rounded-3xl object-cover shadow-2xl shadow-slate-950/10" src={imageUrl('100cm x 120cm.jpg')} alt="Wooden pallets stack" width="1100" height="720" loading="lazy" decoding="async" />
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Wooden Pallets</span>
            <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">Premium Quality Wooden Pallets for Every Industry</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Mujahid Hussain Carpentry LLC manufactures and supplies wooden pallets in Dubai, Sharjah, and all over UAE with a complete range of standard and custom sizes.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {bullets.map((item) => (
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-700" key={item}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} /> {item}
                </li>
              ))}
            </ul>
            <a className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/20 transition hover:-translate-y-1" href={whatsappUrl} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-5" /> Get Best Price
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8" id="sizes">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Jump to Any Size" subtitle="Choose from standard, Euro, CP3, heavy-duty, refurbished, used, and custom wooden pallet options." />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {woodenSizes.map((item) => (
              <a className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-black text-indigo-700 shadow-sm transition hover:border-indigo-500 hover:bg-indigo-50" href={`#${item.id}`} key={item.id}>
                {item.size.replaceAll(' cm', '')}
              </a>
            ))}
            <a className="rounded-full bg-[#02024f] px-4 py-2 text-sm font-black text-white shadow-sm transition hover:bg-indigo-800" href="#custom">Custom Size</a>
          </div>
        </div>
      </section>

      {woodenSizes.map((item, index) => <SizeSection item={item} index={index} key={item.id} />)}

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="custom">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid min-h-80 place-items-center rounded-3xl bg-gradient-to-br from-indigo-50 to-sky-50 p-10 text-center ring-1 ring-indigo-100">
            <div>
              <Ruler className="mx-auto text-indigo-600" size={76} />
              <h3 className="mt-5 text-3xl font-black text-[#02024f]">Need a Custom Size?</h3>
              <p className="mt-3 text-slate-600">Any dimension. Any specification. We build it.</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#02024f] sm:text-4xl">Custom Size Wooden Pallets</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">We manufacture custom wooden pallets in any dimension to match your load, storage, export, and warehouse requirements.</p>
            <ul className="mt-6 grid gap-3">
              {['Any width and length combination', 'Custom height and board thickness', '2-way or 4-way entry', 'Normal or heavy duty', 'Heat treatment and fumigation', 'Bulk orders with fast turnaround'].map((item) => (
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-700" key={item}><CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} /> {item}</li>
              ))}
            </ul>
            <a className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={quoteUrl('custom size')} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-5" /> Discuss Custom Size
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="All Sizes at a Glance" />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-950/5">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#02024f] text-white">
                <tr>
                  {['Size', 'Type', 'New', 'Refurbished', 'Used', 'Heavy Duty'].map((head) => <th className="px-4 py-3 font-black" key={head}>{head}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {woodenSizes.map((item) => (
                  <tr className={item.note ? 'bg-indigo-50/60' : ''} key={item.id}>
                    <td className="px-4 py-3 font-black text-[#02024f]">{item.size}</td>
                    <td className="px-4 py-3">{item.type}</td>
                    <td className="px-4 py-3 text-emerald-600">Yes</td>
                    <td className="px-4 py-3 text-emerald-600">Yes</td>
                    <td className="px-4 py-3">{item.availability.includes('Used') ? <span className="text-emerald-600">Yes</span> : <span className="text-slate-400">-</span>}</td>
                    <td className="px-4 py-3">{item.type.includes('Heavy') ? <span className="text-emerald-600">Yes</span> : <span className="text-slate-400">-</span>}</td>
                  </tr>
                ))}
                <tr className="bg-sky-50">
                  <td className="px-4 py-3 font-black text-[#02024f]">Custom Size</td>
                  <td className="px-4 py-3">Any</td>
                  <td className="px-4 py-3 text-emerald-600">Yes</td>
                  <td className="px-4 py-3 text-slate-400">-</td>
                  <td className="px-4 py-3 text-slate-400">-</td>
                  <td className="px-4 py-3 text-emerald-600">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Buy Wooden Pallets from Us?" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-md shadow-slate-950/5 transition hover:-translate-y-2 hover:shadow-2xl" key={feature}>
                <ShieldCheck className="mx-auto text-indigo-600" size={32} />
                <h3 className="mt-4 text-lg font-black text-[#02024f]">{feature}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Industries We Serve" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => <span className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#02024f] shadow-sm ring-1 ring-indigo-100" key={industry}>{industry}</span>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
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

      <ProductInquirySection productType="Wooden Pallets" />

      <section className="bg-[#02024f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Order Your Wooden Pallets Today</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">20+ sizes. New, refurbished and used. Free delivery across UAE.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> WhatsApp Us
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971509253127">
            <CallIcon className="size-5" /> Call Now
          </a>
        </div>
      </section>
    </>
  );
}
