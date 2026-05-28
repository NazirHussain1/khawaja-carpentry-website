import { CheckCircle2, ChevronDown, Droplets, Feather, HeartPulse, Recycle, ShieldCheck, Star } from 'lucide-react';
import { useState } from 'react';
import { CallIcon } from '../components/common/ContactIcons.jsx';
import ProductInquirySection from '../components/contact/ProductInquirySection.jsx';
import WhatsAppIcon from '../components/common/WhatsAppIcon.jsx';

const imageBase = 'https://mujahidhussaincarpentry.store/images/';
const whatsappBase = 'https://wa.me/971509253127?text=';
const whatsappUrl = `${whatsappBase}${encodeURIComponent('Hello, I need a quote for plastic pallets in UAE.')}`;

const bullets = [
  'New plastic pallets',
  'Used plastic pallets',
  'Normal duty options',
  'Heavy duty options',
  'Hygienic and washable',
  'Weather resistant'
];

const plasticSizes = [
  {
    id: 'pp80x120',
    size: '80 cm x 120 cm',
    title: '80 cm x 120 cm Plastic Pallet',
    note: 'Euro Size',
    badge: 'Normal and Heavy Duty - New and Used',
    description: 'European standard plastic pallet size for food and beverage logistics, pharmaceutical warehousing, and international shipping.',
    image: 'plastic pallets.jpeg',
    load: 'Up to 1500 kg heavy duty static',
    material: 'HDPE / PP Recycled Plastic'
  },
  {
    id: 'pp100x100',
    size: '100 cm x 100 cm',
    title: '100 cm x 100 cm Plastic Pallet',
    badge: 'Normal and Heavy Duty - New and Used',
    description: 'Square plastic pallet for drum storage, chemical containers, IBC tank bases, and easy-clean industrial handling.',
    image: 'new plastic pallet normal duty.jpeg',
    load: 'Up to 1500 kg heavy duty static',
    material: 'HDPE / PP Recycled Plastic'
  },
  {
    id: 'pp100x120',
    size: '100 cm x 120 cm',
    title: '100 cm x 120 cm Plastic Pallet',
    note: 'Most Popular',
    badge: 'Normal and Heavy Duty - New and Used',
    description: 'Most popular industrial plastic pallet size for supermarkets, FMCG distribution centers, warehousing, and racking operations.',
    image: '100 cm x 120 cm heavy duty new plastic pallet.jpeg',
    load: 'Up to 2000 kg heavy duty static',
    material: 'HDPE / PP Recycled Plastic'
  },
  {
    id: 'pp114x114',
    size: '114 cm x 114 cm',
    title: '114 cm x 114 cm Plastic Pallet',
    badge: 'Normal and Heavy Duty - New and Used',
    description: 'North American GMA-style plastic pallet size for export to US and Canada and compatibility with standard racking systems.',
    image: 'plastic 100 cm x120 cm used heavu duty.jpeg',
    load: 'Up to 1800 kg heavy duty static',
    material: 'HDPE / PP Recycled Plastic'
  },
  {
    id: 'pp110x130',
    size: '110 cm x 130 cm',
    title: '110 cm x 130 cm Plastic Pallet',
    badge: 'Normal and Heavy Duty - New and Used',
    description: 'Large industrial plastic pallet for heavy machinery, bulky product storage, construction material logistics, and outdoor UAE use.',
    image: 'new plastic pallet normal duty.jpeg',
    load: 'Up to 2000 kg heavy duty static',
    material: 'HDPE / PP Virgin/Recycled Plastic'
  }
];

const advantages = [
  [Feather, 'Lightweight', '30-40% lighter than wood, reducing freight cost and improving handling.'],
  [Droplets, 'Moisture Proof', 'Resistant to water, rain, humidity, warping, rotting, and mold.'],
  [HeartPulse, 'Hygienic', 'Easy to wash and sanitize for food and pharmaceutical storage.'],
  [ShieldCheck, 'Safe Handling', 'No nails, splinters, or sharp edges for safer operations.'],
  [Recycle, '100% Recyclable', 'Environmentally friendly and recyclable at end of life.'],
  [CheckCircle2, 'Longer Lifespan', 'Built for repeated use with strong long-term value.']
];

const industries = [
  ['Food and Beverage', 'Hygienic, washable pallets for food-grade storage.'],
  ['Pharmaceutical', 'Clean handling with low contamination risk.'],
  ['Chemical Industry', 'Chemical-resistant pallets for drums and hazmat storage.'],
  ['Logistics and Shipping', 'Lightweight export-ready pallets with no fumigation required.']
];

const faqs = [
  ['Do you sell new plastic pallets or only used?', 'We offer both new and used plastic pallets. New pallets suit premium requirements, and quality-inspected used pallets are available at competitive prices.'],
  ['What is the difference between normal and heavy duty?', 'Normal plastic pallets handle standard warehouse loads. Heavy-duty pallets are reinforced for heavier industrial loads.'],
  ['Are plastic pallets suitable for food storage?', 'Yes, plastic pallets are non-porous, easy to sanitize, and preferred for food-industry storage.'],
  ['Do plastic pallets need ISPM-15 treatment?', 'No. Plastic pallets are exempt from ISPM-15 requirements, which saves time and cost for international exports.'],
  ['What is bulk order minimum?', 'There is no strict minimum. Bulk discounts are available for larger pallet orders.']
];

function imageUrl(file) {
  return `${imageBase}${encodeURIComponent(file)}`;
}

function quoteUrl(size) {
  return `${whatsappBase}${encodeURIComponent(`Hi, I need ${size} plastic pallets.`)}`;
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
              ['Availability', 'New and Used'],
              ['Type', 'Normal and Heavy Duty'],
              ['Load Capacity', item.load],
              ['Material', item.material]
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

export default function PlasticPallets() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section
        className="relative isolate min-h-[520px] bg-slate-950 text-white sm:min-h-[620px]"
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(2, 2, 79, 0.94), rgba(22, 17, 86, 0.86), rgba(2, 6, 23, 0.62)), url('${imageUrl('plastic pallets.jpeg')}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:min-h-[620px] sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/10">
              <Star className="text-sky-200" size={15} /> Plastic Pallets UAE
            </span>
            <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">Plastic Pallets - All Sizes</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl">
              New and used plastic pallets in 5 standard sizes. Normal and heavy duty options with hygienic, washable, weather-resistant material.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/30 transition hover:-translate-y-1" href={whatsappUrl} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> Get Best Price
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href="#sizes">
                View Available Sizes
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <img className="h-96 w-full rounded-3xl object-cover shadow-2xl shadow-slate-950/10" src={imageUrl('plastic pallets.jpeg')} alt="Plastic pallets stack" width="1100" height="720" loading="lazy" decoding="async" />
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Plastic Pallets</span>
            <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">Durable and Hygienic Plastic Pallets for Modern Logistics</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Mujahid Hussain Carpentry LLC supplies premium plastic pallets across Dubai, Sharjah, and all UAE. These pallets are lightweight, weather-resistant, hygienic, and built for industrial use.
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
          <SectionHeading title="Available Sizes" subtitle="Choose from 5 standard plastic pallet sizes with normal and heavy-duty options." />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {plasticSizes.map((item) => (
              <a className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-black text-indigo-700 shadow-sm transition hover:border-indigo-500 hover:bg-indigo-50" href={`#${item.id}`} key={item.id}>
                {item.size.replaceAll(' cm', '')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {plasticSizes.map((item, index) => <SizeSection item={item} index={index} key={item.id} />)}

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="All Plastic Pallet Sizes at a Glance" />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-950/5">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#02024f] text-white">
                <tr>
                  {['Size', 'New', 'Used', 'Normal', 'Heavy Duty', 'Load'].map((head) => <th className="px-4 py-3 font-black" key={head}>{head}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {plasticSizes.map((item) => (
                  <tr className={item.note ? 'bg-indigo-50/60' : ''} key={item.id}>
                    <td className="px-4 py-3 font-black text-[#02024f]">{item.size}</td>
                    <td className="px-4 py-3 text-emerald-600">Yes</td>
                    <td className="px-4 py-3 text-emerald-600">Yes</td>
                    <td className="px-4 py-3 text-emerald-600">Yes</td>
                    <td className="px-4 py-3 text-emerald-600">Yes</td>
                    <td className="px-4 py-3">{item.load.replace('heavy duty static', '')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Choose Plastic Pallets?" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map(([Icon, title, text]) => (
              <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-md shadow-slate-950/5 transition hover:-translate-y-2 hover:shadow-2xl" key={title}>
                <Icon className="mx-auto text-indigo-600" size={32} />
                <h3 className="mt-4 text-lg font-black text-[#02024f]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Plastic Pallets vs Wooden Pallets" />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-950/5">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  {['Feature', 'Plastic Pallets', 'Wooden Pallets'].map((head) => <th className="px-4 py-3 font-black" key={head}>{head}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Weight', 'Lighter, usually 5-15 kg', 'Heavier, usually 15-30 kg'],
                  ['Lifespan', 'Longer repeated use', 'Shorter repeated use'],
                  ['Moisture', 'Water resistant', 'Can warp or rot'],
                  ['Hygiene', 'Easy to clean and wash', 'Porous material'],
                  ['Splinters', 'None', 'Possible'],
                  ['Insects', 'Immune', 'Requires treatment'],
                  ['Cost', 'Higher upfront, lower long-term', 'Lower upfront'],
                  ['Recyclable', '100%', 'Limited']
                ].map(([feature, plastic, wood]) => (
                  <tr key={feature}>
                    <td className="px-4 py-3 font-black text-[#02024f]">{feature}</td>
                    <td className="px-4 py-3">{plastic}</td>
                    <td className="px-4 py-3">{wood}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Industries Using Plastic Pallets" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map(([title, text]) => (
              <article className="rounded-2xl bg-slate-50 p-6 text-center ring-1 ring-slate-200" key={title}>
                <ShieldCheck className="mx-auto text-indigo-600" size={32} />
                <h3 className="mt-4 text-lg font-black text-[#02024f]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
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

      <ProductInquirySection productType="Plastic Pallets" />

      <section className="bg-[#02024f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Order Plastic Pallets Today</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">5 sizes. New and used. Normal and heavy duty. Free delivery across UAE.</p>
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
