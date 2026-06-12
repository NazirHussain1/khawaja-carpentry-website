import { CheckCircle2, ChevronDown, PackageCheck, Recycle, Ruler, ShieldCheck, Sun, Truck, X } from 'lucide-react';
import { useState } from 'react';
import { CallIcon } from '../components/common/ContactIcons.jsx';
import WhatsAppIcon from '../components/common/WhatsAppIcon.jsx';
import ProductInquirySection from '../components/contact/ProductInquirySection.jsx';

const imageBase = import.meta.env.VITE_PRODUCT_IMAGE_BASE_URL || 'https://mujahidhussaincarpentry.store/images/';
const whatsappBase = 'https://wa.me/923321716508?text=';

const introFeatures = ['New Bags', 'Multiple Capacities', 'UV Resistant', 'Export Quality', 'Custom Printing', 'Food Grade Options'];

const capacities = [
  {
    id: 'jumbo-500kg',
    label: '500 KG',
    quoteLabel: '500 KG',
    heading: '500 KG Plastic Jumbo Bag',
    description: 'Compact jumbo bag suitable for sand, gravel, agricultural products, animal feed, and lightweight bulk materials.',
    image: 'CP3 Pallets.jpg',
    specs: [
      ['Capacity', '500 KG'],
      ['Typical Size (cm)', '75 x 75 x 100'],
      ['Material', 'Woven Polypropylene'],
      ['Availability', 'New'],
      ['Safety Factor', '5:1'],
      ['UV Protection', 'Available'],
      ['Food Grade', 'Optional']
    ],
    application: 'Animal feed, sand, gravel, agricultural products',
    safety: '5:1',
    industry: 'Agriculture / Construction'
  },
  {
    id: 'jumbo-1000kg',
    label: '1 Ton',
    quoteLabel: '1000 KG',
    heading: '1000 KG Plastic Jumbo Bag (1 Ton)',
    description: 'Most popular FIBC bag size for construction materials, cement, chemicals, minerals, and industrial storage.',
    image: 'CP3 Pallets.jpg',
    specs: [
      ['Capacity', '1000 KG'],
      ['Typical Size (cm)', '90 x 90 x 120'],
      ['Material', 'Woven Polypropylene'],
      ['Availability', 'New'],
      ['Safety Factor', '5:1 / 6:1'],
      ['UV Protection', 'Available'],
      ['Food Grade', 'Available']
    ],
    application: 'Cement, chemicals, minerals, industrial storage',
    safety: '5:1 / 6:1',
    industry: 'Construction / Industrial'
  },
  {
    id: 'jumbo-1500kg',
    label: '1.5 Ton',
    quoteLabel: '1500 KG',
    heading: '1500 KG Plastic Jumbo Bag',
    description: 'Heavy-duty bulk bag for industrial manufacturing, export materials, aggregates, fertilizers, and warehouse storage.',
    image: 'CP3 Pallets.jpg',
    specs: [
      ['Capacity', '1500 KG'],
      ['Typical Size (cm)', '100 x 100 x 130'],
      ['Material', 'Heavy-Duty PP Fabric'],
      ['Availability', 'New'],
      ['Safety Factor', '6:1'],
      ['UV Protection', 'Available'],
      ['Food Grade', 'Available']
    ],
    application: 'Aggregates, fertilizers, export materials',
    safety: '6:1',
    industry: 'Manufacturing / Export'
  },
  {
    id: 'jumbo-2000kg',
    label: '2 Ton',
    quoteLabel: '2000 KG',
    heading: '2000 KG Plastic Jumbo Bag (2 Ton)',
    description: 'Industrial-grade jumbo bag designed for heavy materials including minerals, metal scrap, chemicals, and construction products.',
    image: 'CP3 Pallets.jpg',
    specs: [
      ['Capacity', '2000 KG'],
      ['Typical Size (cm)', '110 x 110 x 140'],
      ['Material', 'Reinforced Polypropylene'],
      ['Availability', 'New'],
      ['Safety Factor', '6:1'],
      ['UV Protection', 'Available'],
      ['Food Grade', 'Optional']
    ],
    application: 'Minerals, metal scrap, chemicals, construction products',
    safety: '6:1',
    industry: 'Mining / Chemical'
  },
  {
    id: 'jumbo-2500kg',
    label: '2.5 Ton',
    quoteLabel: '2500 KG',
    heading: '2500 KG Plastic Jumbo Bag',
    description: 'Maximum-capacity jumbo bag for bulk export shipments, mining materials, industrial raw materials, and large-scale storage.',
    image: 'CP3 Pallets.jpg',
    specs: [
      ['Capacity', '2500 KG'],
      ['Typical Size (cm)', '120 x 120 x 150'],
      ['Material', 'Extra Heavy-Duty PP Fabric'],
      ['Availability', 'New'],
      ['Safety Factor', '6:1'],
      ['UV Protection', 'Available'],
      ['Food Grade', 'Optional']
    ],
    application: 'Mining materials, raw materials, large-scale storage',
    safety: '6:1',
    industry: 'Mining / Bulk Export'
  }
];

const customChecklist = [
  'Any size & capacity',
  'Printed company logo',
  'Food-grade bags',
  'Liner options',
  'Baffle bags',
  'UN certified bags',
  'UV protection',
  'Bulk quantity supply',
  'Fast delivery'
];

const bagTypes = ['U-Panel Bags', 'Circular Bags', 'Baffle Bags', 'Ventilated Bags', 'Food Grade Bags', 'UN Certified Bags', 'Conductive Bags', 'Liner Bags'];
const industries = ['Construction', 'Agriculture', 'Chemical Industry', 'Mining', 'Food Processing', 'Logistics', 'Waste Management', 'Manufacturing'];

const features = [
  [PackageCheck, 'High Load Capacity'],
  [Sun, 'UV Resistant'],
  [Recycle, 'Reusable'],
  [CheckCircle2, 'Cost Effective'],
  [ShieldCheck, 'Export Quality'],
  [Truck, 'Strong Lifting Loops'],
  [ShieldCheck, 'Moisture Protection'],
  [PackageCheck, 'Bulk Supply Available']
];

const capacityGlanceRows = [
  ['500 kg', '75 x 75 x 100', 'Woven PP', '4 loops', '5:1 / 6:1'],
  ['1 TON', '90 x 90 x 120', 'Woven PP + PE liner', '4 loops', '5:1 / 6:1'],
  ['1.5 TON', '100 x 100 x 130', 'Heavy-duty PP', '4 reinforced', '5:1'],
  ['2 TON', '110 x 110 x 140', 'Extra-heavy PP', '4 HD loops', '5:1'],
  ['2.5 TON', '120 x 120 x 150', 'Maximum-grade PP', '4 ultra-reinforced', '5:1']
];

const faqs = [
  ['What is the difference between 1 ton and 2 ton jumbo bags?', '1 ton bags are suitable for standard bulk materials, while 2 ton bags use stronger fabric and construction for heavier industrial loads.'],
  ['Do you provide food-grade jumbo bags?', 'Yes, food-grade jumbo bags are available for grains, food ingredients, and other clean bulk materials.'],
  ['Can I print my logo on jumbo bags?', 'Yes, custom printing, branding, labeling, and stenciling options are available for bulk orders.'],
  ['What safety factor do your bags use?', 'Common safety factors include 5:1 and 6:1 depending on capacity, use case, and customer requirement.'],
  ['Do you supply jumbo bags in bulk quantity?', 'Yes, bulk quantity supply is available for construction, agriculture, logistics, mining, and manufacturing customers.'],
  ['Can you manufacture custom-size FIBC bags?', 'Yes, custom FIBC bags can be made with specific capacity, loop style, liner, fabric, printing, and certification requirements.']
];

function imageUrl(file) {
  return `${imageBase}${encodeURIComponent(file)}`;
}

function quoteUrl(capacity) {
  return `${whatsappBase}${encodeURIComponent(`Hello, I need a quote for ${capacity} Plastic Jumbo Bags.`)}`;
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-black text-[#02024f] sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function ImageLightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-white text-[#02024f] shadow-xl transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-white/40"
        type="button"
        aria-label="Close image preview"
        onClick={onClose}
      >
        <X size={24} />
      </button>
      <img
        className="max-h-[88vh] max-w-[94vw] rounded-3xl object-contain shadow-2xl shadow-black/40"
        src={image.src}
        alt={image.alt}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}

function CapacitySection({ item, index, onImageOpen }) {
  const isAlt = index % 2 === 1;
  const productImage = {
    src: imageUrl(item.image),
    alt: item.heading
  };

  return (
    <section className={`${isAlt ? 'bg-[#fbf7ff]' : 'bg-white'} scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8`} id={item.id}>
      <div className={`mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center ${isAlt ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <button
          className="group block cursor-pointer overflow-hidden rounded-3xl shadow-2xl shadow-slate-950/10 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          type="button"
          aria-label={`Open full image for ${item.heading}`}
          onClick={() => onImageOpen(productImage)}
        >
          <img
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96"
            src={productImage.src}
            alt={productImage.alt}
            width="1000"
            height="680"
            loading="lazy"
            decoding="async"
          />
        </button>
        <div>
          <span className="inline-flex rounded-full bg-[#02024f] px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-indigo-950/20">
            {item.label} Capacity
          </span>
          <h2 className="mt-4 text-3xl font-black leading-tight text-[#02024f] sm:text-4xl">{item.heading}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
            {item.specs.map(([label, value]) => (
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
            <WhatsAppIcon className="size-5" /> Get Quote {item.quoteLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function PlasticJumboBags() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeCapacity, setActiveCapacity] = useState(capacities[0].id);
  const [lightboxImage, setLightboxImage] = useState(null);
  const introImage = {
    src: imageUrl('CP3 Pallets.jpg'),
    alt: 'Plastic jumbo bags for bulk material handling'
  };

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
            <span className="text-white">Plastic Jumbo Bags</span>
          </nav>
          <div className="mt-10 max-w-4xl">
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">Plastic Jumbo Bags - All Capacities</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100 sm:text-xl">
              Heavy-duty FIBC jumbo bags for bulk material storage, transportation, export, construction, agriculture, and industrial applications. Available in multiple load capacities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400" href={quoteUrl('Plastic Jumbo Bags')} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> Get Best Price
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href={quoteUrl('Plastic Jumbo Bags')} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <button
            className="group block cursor-pointer overflow-hidden rounded-3xl shadow-2xl shadow-slate-950/15 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            type="button"
            aria-label="Open full image for plastic jumbo bags"
            onClick={() => setLightboxImage(introImage)}
          >
            <img
              className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[460px]"
              src={introImage.src}
              alt={introImage.alt}
              width="1200"
              height="800"
              decoding="async"
            />
          </button>
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">Plastic Jumbo Bags</span>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#02024f] sm:text-5xl">Heavy-Duty FIBC Jumbo Bags for Bulk Material Handling</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              High-quality polypropylene jumbo bags designed for safe storage and transportation of sand, cement, chemicals, grains, minerals, fertilizers, industrial waste, and bulk materials.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {introFeatures.map((feature) => (
                <li className="flex items-start gap-2 text-sm font-bold text-slate-700" key={feature}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} /> {feature}
                </li>
              ))}
            </ul>
            <a className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400" href={quoteUrl('Plastic Jumbo Bags')} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-5" /> Get Best Price
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-14 sm:px-6 lg:px-8" id="jumbo-capacities">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Choose Jumbo Bag Capacity" />
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {capacities.map((item) => (
              <a
                className={`rounded-full border px-4 py-2 text-sm font-black shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 ${activeCapacity === item.id ? 'border-[#02024f] bg-[#02024f] text-white shadow-indigo-950/25' : 'border-indigo-200 bg-white text-indigo-700 hover:border-[#02024f] hover:bg-[#02024f] hover:text-white'}`}
                href={`#${item.id}`}
                onClick={() => setActiveCapacity(item.id)}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
            <a
              className={`rounded-full border px-4 py-2 text-sm font-black shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 ${activeCapacity === 'custom-jumbo-bag' ? 'border-[#02024f] bg-[#02024f] text-white shadow-indigo-950/25' : 'border-indigo-200 bg-white text-indigo-700 hover:border-[#02024f] hover:bg-[#02024f] hover:text-white'}`}
              href="#custom-jumbo-bag"
              onClick={() => setActiveCapacity('custom-jumbo-bag')}
            >
              Custom Capacity
            </a>
          </div>
        </div>
      </section>

      {capacities.map((item, index) => (
        <CapacitySection item={item} index={index} onImageOpen={setLightboxImage} key={item.id} />
      ))}

      <section className="bg-[#fbf7ff] px-4 py-[70px] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="All Capacities at a Glance" />
          <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-950/5">
            <table className="min-w-[760px] overflow-hidden text-left text-sm">
              <thead className="bg-[#02024f] text-white">
                <tr>
                  {['Capacity', 'Typical Size (cm)', 'Material', 'Loops', 'Safety Factor'].map((head) => (
                    <th className="px-5 py-4 font-black first:rounded-tl-3xl last:rounded-tr-3xl" key={head}>
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {capacityGlanceRows.map(([capacity, size, material, loops, safety]) => (
                  <tr className="transition hover:bg-indigo-50/60" key={capacity}>
                    <td className="px-5 py-4 font-black text-[#02024f]">{capacity}</td>
                    <td className="px-5 py-4 font-semibold text-slate-700">{size}</td>
                    <td className="px-5 py-4 text-slate-700">{material}</td>
                    <td className="px-5 py-4 text-slate-700">{loops}</td>
                    <td className="px-5 py-4 text-slate-700">{safety}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 bg-[#f4f8ff] px-4 py-16 sm:px-6 lg:px-8" id="custom-jumbo-bag">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid min-h-80 place-items-center rounded-3xl bg-white p-10 text-center shadow-2xl shadow-indigo-950/10 ring-1 ring-indigo-100">
            <div>
              <Ruler className="mx-auto text-indigo-600" size={76} />
              <h3 className="mt-5 text-3xl font-black text-[#02024f]">Any Capacity. Any Design.</h3>
              <p className="mx-auto mt-3 max-w-md text-slate-600">We manufacture jumbo bags according to your exact requirements.</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#02024f] sm:text-4xl">Custom Jumbo Bags</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">Need a specific size, loop style, liner, or printed branding? We manufacture custom FIBC bags for industrial and export requirements.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {customChecklist.map((item) => (
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-700" key={item}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} /> {item}
                </li>
              ))}
            </ul>
            <a className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={quoteUrl('custom capacity')} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-5" /> Discuss Custom Jumbo Bag
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Types of Jumbo Bags" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bagTypes.map((type) => (
              <article className="rounded-2xl border border-indigo-100 bg-white p-6 text-center shadow-lg shadow-indigo-950/5" key={type}>
                <PackageCheck className="mx-auto text-indigo-600" size={32} />
                <h3 className="mt-4 text-lg font-black text-[#02024f]">{type}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Industries We Serve" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <article className="rounded-2xl border border-indigo-100 bg-white p-6 text-center shadow-lg shadow-indigo-950/5" key={industry}>
                <Truck className="mx-auto text-indigo-600" size={32} />
                <h3 className="mt-4 text-lg font-black text-[#02024f]">{industry}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Choose Our Jumbo Bags?" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([Icon, title]) => (
              <article className="rounded-2xl border border-indigo-100 bg-white p-6 text-center shadow-lg shadow-indigo-950/5" key={title}>
                <Icon className="mx-auto text-indigo-600" size={32} />
                <h3 className="mt-4 text-lg font-black text-[#02024f]">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Jumbo Bag Capacity Guide" />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-950/5">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#02024f] text-white">
                <tr>
                  {['Capacity', 'Application', 'Safety Factor', 'Industry'].map((head) => <th className="px-4 py-3 font-black" key={head}>{head}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {capacities.map((item) => (
                  <tr className={item.quoteLabel === '1000 KG' ? 'bg-indigo-50/60' : ''} key={item.id}>
                    <td className="px-4 py-3 font-black text-[#02024f]">{item.quoteLabel}</td>
                    <td className="px-4 py-3">{item.application}</td>
                    <td className="px-4 py-3">{item.safety}</td>
                    <td className="px-4 py-3">{item.industry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      <ProductInquirySection productType="Jumbo Bags" />

      <section className="bg-[#02024f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Need Plastic Jumbo Bags?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">500 KG to 2500 KG capacities available. Bulk orders, custom printing, and fast UAE delivery.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={quoteUrl('Plastic Jumbo Bags')} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> WhatsApp Us
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href={quoteUrl('Plastic Jumbo Bags')} target="_blank" rel="noreferrer">
            Get Quote
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+923321716508">
            <CallIcon className="size-5" /> Call Now
          </a>
        </div>
      </section>
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
}
