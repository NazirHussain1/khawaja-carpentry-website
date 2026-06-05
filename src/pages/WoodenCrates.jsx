import { CheckCircle2, ChevronDown, Clock, PackageCheck, Ruler, ShieldCheck, Truck } from 'lucide-react';
import { useState } from 'react';
import { CallIcon } from '../components/common/ContactIcons.jsx';
import WhatsAppIcon from '../components/common/WhatsAppIcon.jsx';
import ProductInquirySection from '../components/contact/ProductInquirySection.jsx';

const imageBase = import.meta.env.VITE_PRODUCT_IMAGE_BASE_URL || 'https://khawaja-carpentry-woodpallets.vercel.app/images/';
const whatsappBase = 'https://wa.me/971509253127?text=';

const introFeatures = ['NEW Only', 'Custom Sizes Available', 'ISPM-15 Treated', 'Export Quality'];

const crateSizes = [
  {
    id: 'crate-100x100',
    label: '100100',
    quoteLabel: '100x100',
    heading: '100 cm x 100 cm Wooden Crate',
    description: 'Compact square crate ideal for machinery parts, automotive components, electrical equipment, and medium-sized industrial goods. Sturdy construction with reinforced corners.',
    image: 'wooden boxes.jpeg',
    badge: 'NEW Only',
    specs: [
      ['Base Dimensions', '100 cm x 100 cm'],
      ['Height', 'Custom (typically 60-100 cm)'],
      ['Availability', 'New Only'],
      ['Construction', 'Plywood / Timber boards'],
      ['Treatment', 'ISPM-15 Heat Treatment available']
    ]
  },
  {
    id: 'crate-100x120',
    label: '100120',
    quoteLabel: '100x120',
    heading: '100 cm x 120 cm Wooden Crate',
    description: 'Standard pallet-compatible crate size. Fits perfectly on 100x120 pallets for seamless logistics. Ideal for export shipments and containerized cargo.',
    image: 'wooden boxes heavy duty.jpeg',
    badge: 'NEW Only',
    specs: [
      ['Base Dimensions', '100 cm x 120 cm'],
      ['Height', 'Custom (typically 60-120 cm)'],
      ['Availability', 'New Only'],
      ['Construction', 'Heavy-duty timber frame'],
      ['Treatment', 'ISPM-15 Heat Treatment available']
    ]
  },
  {
    id: 'crate-80x200',
    label: '80200',
    quoteLabel: '80x200',
    heading: '80 cm x 200 cm Wooden Crate',
    description: 'Long-form crate designed for pipes, structural steel, long machinery parts, and elongated industrial equipment. Reinforced bottom and sides for heavy loads.',
    image: '80 cm x 200 cm heavy duty.jpeg',
    badge: 'NEW Only',
    specs: [
      ['Base Dimensions', '80 cm x 200 cm'],
      ['Height', 'Custom'],
      ['Availability', 'New Only'],
      ['Construction', 'Reinforced timber with steel banding'],
      ['Treatment', 'ISPM-15 available']
    ]
  },
  {
    id: 'crate-200x400',
    label: '200400',
    quoteLabel: '200x400',
    heading: '200 cm x 400 cm Wooden Crate',
    description: 'Extra-large heavy-duty crate for heavy machinery, generators, transformers, construction equipment, and large industrial exports.',
    image: 'wooden boxes heavy duty.jpeg',
    badge: 'NEW Only - Heavy Duty',
    specs: [
      ['Base Dimensions', '200 cm x 400 cm'],
      ['Height', 'Custom up to 250 cm'],
      ['Availability', 'New Only'],
      ['Construction', 'Heavy-duty engineered timber + steel reinforcement'],
      ['Load Capacity', 'Up to 5000+ kg']
    ]
  },
  {
    id: 'crate-100x400',
    label: '100400',
    quoteLabel: '100x400',
    heading: '100 cm x 400 cm Wooden Crate',
    description: 'Extra-long narrow crate for elongated industrial cargo, steel beams, piping systems, scaffolding, turbine blades, and long machinery components.',
    image: '100cm x 200 cm normal.jpeg',
    badge: 'NEW Only - Heavy Duty',
    specs: [
      ['Base Dimensions', '100 cm x 400 cm'],
      ['Height', 'Custom'],
      ['Availability', 'New Only'],
      ['Construction', 'Reinforced timber frame with steel banding'],
      ['Load Capacity', 'Up to 4000+ kg']
    ]
  }
];

const customChecklist = [
  'Any width, length, and height',
  'Lid options: open-top, nailed, bolted, hinged',
  'Foam-lined and moisture barriers',
  'Stenciling, branding, and labeling',
  'ISPM-15 heat treated for export',
  'Fast turnaround 24 to 72 hours'
];

const benefits = [
  [Ruler, 'Made to Order'],
  [ShieldCheck, 'Maximum Protection'],
  [PackageCheck, 'Export Compliant'],
  [Clock, 'Quick Turnaround'],
  [Truck, 'Free Delivery'],
  [CheckCircle2, '15+ Years Experience']
];

const useCases = ['Export & Shipping', 'Machinery Protection', 'Warehouse Storage', 'Automotive Parts', 'Electronics', 'Construction Materials'];

const faqs = [
  ['Do you sell used wooden crates?', 'No, wooden crates are manufactured new only so the size, structure, and protection match the cargo requirement.'],
  ['Can I get a custom size crate?', 'Yes, custom wooden crates can be manufactured in any width, length, height, and lid style.'],
  ['Are your crates ISPM-15 compliant?', 'Yes, ISPM-15 heat treatment is available for export wooden crates.'],
  ['How fast can you deliver?', 'Standard and custom crate orders can usually be completed within 24 to 72 hours depending on size and quantity.'],
  ['Can crates be foam-lined for fragile items?', 'Yes, foam lining, moisture barriers, labeling, and extra protection can be added for fragile cargo.']
];

function imageUrl(file) {
  return `${imageBase}${encodeURIComponent(file)}`;
}

function quoteUrl(size) {
  return `${whatsappBase}${encodeURIComponent(`Hello, I need a quote for ${size} wooden crate.`)}`;
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-black text-[#02024f] sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function CrateSizeSection({ item, index }) {
  const isAlt = index % 2 === 1;

  return (
    <section className={`${isAlt ? 'bg-[#fbf7ff]' : 'bg-white'} scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8`} id={item.id}>
      <div className={`mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center ${isAlt ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <img
          className="h-80 w-full rounded-3xl object-cover shadow-2xl shadow-slate-950/10 sm:h-96"
          src={imageUrl(item.image)}
          alt={item.heading}
          width="1000"
          height="680"
          loading="lazy"
          decoding="async"
        />
        <div>
          <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-indigo-700 ring-1 ring-indigo-100">
            {item.badge}
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
            <WhatsAppIcon className="size-5" /> Get Quote {item.label}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function WoodenCrates() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSize, setActiveSize] = useState(crateSizes[0].id);

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
            <span className="text-white">Wooden Crates</span>
          </nav>
          <div className="mt-10 max-w-4xl">
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">Wooden Crates - All Sizes</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100 sm:text-xl">
              Brand new wooden crates for shipping, storage &amp; export. Standard &amp; custom sizes. Free delivery across UAE.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <img
            className="h-[360px] w-full rounded-3xl object-cover shadow-2xl shadow-slate-950/15 sm:h-[460px]"
            src={imageUrl('wooden boxes heavy duty.jpeg')}
            alt="Heavy-duty wooden crates"
            width="1200"
            height="800"
            decoding="async"
          />
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">Wooden Crates</span>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#02024f] sm:text-5xl">Heavy-Duty Wooden Crates for Safe Shipping &amp; Storage</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              We manufacture brand new wooden crates for industrial packaging, export shipping, machinery protection, warehouse storage, fragile cargo, and heavy equipment transport across UAE.
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
              href={quoteUrl('wooden crates')}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="size-5" /> Get Best Price
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-14 sm:px-6 lg:px-8" id="crate-sizes">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Standard Crate Sizes" />
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {crateSizes.map((item) => (
              <a
                className={`rounded-full border px-4 py-2 text-sm font-black shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 ${activeSize === item.id ? 'border-[#02024f] bg-[#02024f] text-white shadow-indigo-950/25' : 'border-indigo-200 bg-white text-indigo-700 hover:border-[#02024f] hover:bg-[#02024f] hover:text-white'}`}
                href={`#${item.id}`}
                onClick={() => setActiveSize(item.id)}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
            <a
              className={`rounded-full border px-4 py-2 text-sm font-black shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 ${activeSize === 'custom-crate' ? 'border-[#02024f] bg-[#02024f] text-white shadow-indigo-950/25' : 'border-indigo-200 bg-white text-indigo-700 hover:border-[#02024f] hover:bg-[#02024f] hover:text-white'}`}
              href="#custom-crate"
              onClick={() => setActiveSize('custom-crate')}
            >
              Custom Size
            </a>
          </div>
        </div>
      </section>

      {crateSizes.map((item, index) => <CrateSizeSection item={item} index={index} key={item.id} />)}

      <section className="scroll-mt-24 bg-[#f4f8ff] px-4 py-16 sm:px-6 lg:px-8" id="custom-crate">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid min-h-80 place-items-center rounded-3xl bg-white p-10 text-center shadow-2xl shadow-indigo-950/10 ring-1 ring-indigo-100">
            <div>
              <Ruler className="mx-auto text-indigo-600" size={76} />
              <h3 className="mt-5 text-3xl font-black text-[#02024f]">Any Size. Any Shape.</h3>
              <p className="mx-auto mt-3 max-w-md text-slate-600">We build custom crates to your exact specifications.</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#02024f] sm:text-4xl">Custom Wooden Crates</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">Need a non-standard size? We manufacture custom wooden crates in any dimension for any purpose.</p>
            <ul className="mt-6 grid gap-3">
              {customChecklist.map((item) => (
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-700" key={item}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} /> {item}
                </li>
              ))}
            </ul>
            <a className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={quoteUrl('custom size')} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-5" /> Discuss Custom Crate
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Our Wooden Crates?" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([Icon, title]) => (
              <article className="rounded-2xl border border-indigo-100 bg-white p-6 text-center shadow-lg shadow-indigo-950/5" key={title}>
                <Icon className="mx-auto text-indigo-600" size={32} />
                <h3 className="mt-4 text-lg font-black text-[#02024f]">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="What Are Wooden Crates Used For?" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {useCases.map((item) => <span className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#02024f] shadow-sm ring-1 ring-indigo-100" key={item}>{item}</span>)}
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

      <ProductInquirySection productType="Wooden Crates" />

      <section className="bg-[#02024f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Need Wooden Crates in UAE?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">Send your crate size, cargo details, and delivery location to get the best price.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={quoteUrl('wooden crates')} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> Request Quote
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971509253127">
            <CallIcon className="size-5" /> Call Now
          </a>
        </div>
      </section>
    </>
  );
}
