import { CheckCircle2, ChevronDown, Droplets, Feather, HeartPulse, PackageCheck, Recycle, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { CallIcon } from '../components/common/ContactIcons.jsx';
import WhatsAppIcon from '../components/common/WhatsAppIcon.jsx';
import ProductInquirySection from '../components/contact/ProductInquirySection.jsx';

const imageBase = import.meta.env.VITE_PRODUCT_IMAGE_BASE_URL || 'https://fiasal-fareed-woods.vercel.app/images/';
const whatsappBase = 'https://wa.me/971509253127?text=';

const introFeatures = ['New Pallets', 'Used Pallets', 'Heavy Duty', 'Normal Duty', 'Hygienic & Washable', 'Weather Resistant'];

const plasticSizes = [
  {
    id: 'plastic-80x120',
    label: '80120',
    quoteLabel: '80x120',
    size: '80 cm x 120 cm',
    title: '80 cm x 120 cm Plastic Pallet',
    note: 'Euro Size',
    description: 'European standard size. Ideal for food and beverage logistics, pharmaceutical warehousing, and international shipping. Stackable and nestable designs available.',
    image: 'plastic pallets.jpeg',
    load: 'Up to 1500 kg HD static',
    material: 'HDPE / PP Recycled Plastic'
  },
  {
    id: 'plastic-100x100',
    label: '100100',
    quoteLabel: '100x100',
    size: '100 cm x 100 cm',
    title: '100 cm x 100 cm Plastic Pallet',
    description: 'Square plastic pallet perfect for drum storage, chemical containers, and IBC tank bases. Excellent chemical resistance and easy to clean.',
    image: 'new plastic pallet normal duty.jpeg',
    load: 'Up to 1500 kg HD static',
    material: 'HDPE / PP Recycled Plastic'
  },
  {
    id: 'plastic-100x120',
    label: '100120',
    quoteLabel: '100x120',
    size: '100 cm x 120 cm',
    title: '100 cm x 120 cm Plastic Pallet',
    note: 'Most Popular',
    description: 'Most popular industrial size. High demand across supermarkets, FMCG distribution centers, and warehousing operations. Strong racking capability.',
    image: '100 cm x 120 cm heavy duty new plastic pallet.jpeg',
    load: 'Up to 2000 kg HD static',
    material: 'HDPE / PP Recycled Plastic'
  },
  {
    id: 'plastic-114x114',
    label: '114114',
    quoteLabel: '114x114',
    size: '114 cm x 114 cm',
    title: '114 cm x 114 cm Plastic Pallet',
    description: 'North American GMA standard, approximately 48 inch x 45 inch. Suitable for export to US and Canada. Compatible with standard racking systems.',
    image: 'plastic 100 cm x120 cm used heavu duty.jpeg',
    load: 'Up to 1800 kg HD static',
    material: 'HDPE / PP Recycled Plastic'
  },
  {
    id: 'plastic-110x130',
    label: '110130',
    quoteLabel: '110x130',
    size: '110 cm x 130 cm',
    title: '110 cm x 130 cm Plastic Pallet',
    description: 'Large industrial plastic pallet for heavy machinery, bulky storage, and construction material logistics. Ideal for outdoor use in UAE weather.',
    image: 'new plastic pallet normal duty.jpeg',
    load: 'Up to 2000 kg HD static',
    material: 'HDPE / PP Virgin/Recycled Plastic'
  }
];

const advantages = [
  [Feather, 'Lightweight', 'Easier handling and lower transport weight compared with many wood pallets.'],
  [Droplets, 'Moisture Proof', 'Resistant to water, humidity, mold, rotting, and warping.'],
  [HeartPulse, 'Hygienic', 'Easy to wash and sanitize for food and pharmaceutical storage.'],
  [ShieldCheck, 'Safe Handling', 'No nails, splinters, or sharp broken timber edges.'],
  [Recycle, '100% Recyclable', 'Reusable plastic material that can be recycled at end of life.'],
  [CheckCircle2, 'Longer Lifespan', 'Designed for repeated industrial use and strong long-term value.']
];

const industries = [
  ['Food & Beverage', 'Washable pallets for food-grade storage and logistics.'],
  ['Pharmaceutical', 'Clean handling for sensitive and regulated stock.'],
  ['Chemical Industry', 'Chemical-resistant pallets for drums and containers.'],
  ['Logistics & Shipping', 'Lightweight pallets for local and export movement.'],
  ['Warehousing', 'Durable pallets for repeated storage and handling.'],
  ['Supermarkets / FMCG', 'Popular sizes for retail distribution and FMCG supply chains.']
];

const faqs = [
  ['Do you sell new plastic pallets or only used?', 'We sell both new and used plastic pallets, depending on stock, size, and customer requirement.'],
  ['What is the difference between Normal and Heavy Duty?', 'Normal duty pallets are for standard warehouse loads. Heavy-duty pallets are stronger and built for heavier industrial handling.'],
  ['Are plastic pallets suitable for food storage?', 'Yes, plastic pallets are hygienic, washable, and commonly used in food and beverage supply chains.'],
  ['Do plastic pallets need ISPM-15 treatment?', 'No. Plastic pallets do not require ISPM-15 heat treatment for export.'],
  ['What is bulk order minimum?', 'There is no strict minimum. Bulk discounts are available for larger orders.']
];

function imageUrl(file) {
  return `${imageBase}${encodeURIComponent(file)}`;
}

function quoteUrl(size) {
  return `${whatsappBase}${encodeURIComponent(`Hello, I need a quote for ${size} plastic pallet.`)}`;
}

function displaySizeLabel(item) {
  return item.quoteLabel.includes('x') ? item.quoteLabel.toUpperCase().replace('X', ' X ') : item.label;
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-black text-[#02024f] sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function PlasticSizeSection({ item, index }) {
  const isAlt = index % 2 === 1;

  return (
    <section className={`${isAlt ? 'bg-[#fbf7ff]' : 'bg-white'} scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8`} id={item.id}>
      <div className={`mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center ${isAlt ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <img
          className="h-80 w-full rounded-3xl object-cover shadow-2xl shadow-slate-950/10 sm:h-96"
          src={imageUrl(item.image)}
          alt={item.title}
          width="1000"
          height="680"
          loading="lazy"
          decoding="async"
        />
        <div>
          <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-indigo-700 ring-1 ring-indigo-100">
            Normal &amp; Heavy Duty - New &amp; Used
          </span>
          <h2 className="mt-4 text-3xl font-black leading-tight text-[#02024f] sm:text-4xl">
            {item.title} {item.note && <small className="text-base font-black text-indigo-600">({item.note})</small>}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
            {[
              ['Dimensions', item.size],
              ['Availability', 'New & Used'],
              ['Type', 'Normal & Heavy Duty'],
              ['Load Capacity', item.load],
              ['Material', item.material]
            ].map(([label, value]) => (
              <div className="grid grid-cols-[44%_1fr] border-b border-slate-100 last:border-b-0" key={label}>
                <strong className="bg-[#fbf7ff] px-4 py-3 text-sm text-[#02024f]">{label}</strong>
                <span className="px-4 py-3 text-sm font-medium text-slate-700">{value}</span>
              </div>
            ))}
          </div>
          <a
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/20 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400"
            href={quoteUrl(item.quoteLabel)}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon className="size-5" /> Get Quote {item.label}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function PlasticPallets() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSize, setActiveSize] = useState(plasticSizes[0].id);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#02024f] via-indigo-800 to-sky-600 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(125,211,252,0.16),transparent_28%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-sky-100" aria-label="Breadcrumb">
            <a className="transition hover:text-white" href="/" data-spa-link="true">Home</a>
            <span>/</span>
            <a className="transition hover:text-white" href="/products" data-spa-link="true">Products</a>
            <span>/</span>
            <span className="text-white">Plastic Pallets</span>
          </nav>
          <div className="mt-10 max-w-4xl">
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">Plastic Pallets - All Sizes</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100 sm:text-xl">
              New &amp; Used Plastic Pallets. Normal &amp; Heavy Duty. 5 standard sizes. Free delivery across UAE.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <img
            className="h-[360px] w-full rounded-3xl object-cover shadow-2xl shadow-slate-950/15 sm:h-[460px]"
            src={imageUrl('plastic pallets.jpeg')}
            alt="Plastic pallets stack"
            width="1200"
            height="800"
            decoding="async"
          />
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">Plastic Pallets</span>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#02024f] sm:text-5xl">Durable &amp; Hygienic Plastic Pallets for Modern Logistics</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Plastic pallets are lightweight, weather-resistant, hygienic, and suitable for industrial use across warehouses, food storage, pharmaceuticals, chemicals, logistics, and export handling.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {introFeatures.map((feature) => (
                <li className="flex items-start gap-2 text-sm font-bold text-slate-700" key={feature}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} /> {feature}
                </li>
              ))}
            </ul>
            <a
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400"
              href={quoteUrl('plastic pallets')}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="size-5" /> Get Best Price
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-14 sm:px-6 lg:px-8" id="plastic-sizes">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Available Sizes" />
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {plasticSizes.map((item) => (
              <a
                className={`rounded-full border px-4 py-2 text-sm font-black shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 ${activeSize === item.id ? 'border-[#02024f] bg-[#02024f] text-white shadow-indigo-950/25' : 'border-indigo-200 bg-white text-indigo-700 hover:border-[#02024f] hover:bg-[#02024f] hover:text-white'}`}
                href={`#${item.id}`}
                onClick={() => setActiveSize(item.id)}
                key={item.id}
              >
                {displaySizeLabel(item)}
              </a>
            ))}
          </div>
        </div>
      </section>

      {plasticSizes.map((item, index) => <PlasticSizeSection item={item} index={index} key={item.id} />)}

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="All Plastic Pallet Sizes at a Glance" />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-950/5">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#02024f] text-white">
                <tr>
                  {['Size', 'New', 'Used', 'Normal', 'Heavy Duty', 'Load Capacity'].map((head) => <th className="px-4 py-3 font-black" key={head}>{head}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {plasticSizes.map((item) => (
                  <tr className={item.note ? 'bg-indigo-50/60' : ''} key={item.id}>
                    <td className="px-4 py-3 font-black text-[#02024f]">{item.label}</td>
                    <td className="px-4 py-3 text-emerald-600">Yes</td>
                    <td className="px-4 py-3 text-emerald-600">Yes</td>
                    <td className="px-4 py-3 text-emerald-600">Yes</td>
                    <td className="px-4 py-3 text-emerald-600">Yes</td>
                    <td className="px-4 py-3">{item.load.replace(' HD static', '')}</td>
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
              <article className="rounded-2xl border border-indigo-100 bg-white p-6 text-center shadow-lg shadow-indigo-950/5" key={title}>
                <Icon className="mx-auto text-indigo-600" size={32} />
                <h3 className="mt-4 text-lg font-black text-[#02024f]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
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
                  ['Weight', 'Lighter and easier to handle', 'Heavier in most industrial uses'],
                  ['Lifespan', 'Longer repeated service life', 'Shorter repeated service life'],
                  ['Moisture Resistance', 'Moisture proof', 'Can absorb moisture or warp'],
                  ['Hygiene', 'Easy to wash and sanitize', 'Porous material'],
                  ['Splinters', 'No splinters', 'Splinters possible'],
                  ['Insects', 'No insect treatment needed', 'May require treatment'],
                  ['Cost', 'Higher upfront, lower long-term', 'Lower upfront cost'],
                  ['Recyclable', '100% recyclable', 'Limited reuse/recycling']
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
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(([title, text]) => (
              <article className="rounded-2xl border border-indigo-100 bg-white p-6 text-center shadow-lg shadow-indigo-950/5" key={title}>
                <PackageCheck className="mx-auto text-indigo-600" size={32} />
                <h3 className="mt-4 text-lg font-black text-[#02024f]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
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

      <ProductInquirySection productType="Plastic Pallets" />

      <section className="bg-[#02024f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Order Plastic Pallets Today</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">5 sizes. New &amp; Used. Normal &amp; Heavy Duty. Free delivery across UAE.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={quoteUrl('plastic pallets')} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> WhatsApp Us
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971509253127">
            <CallIcon className="size-5" /> Call Now
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="/contact" data-spa-link="true">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
