import { CheckCircle2, ChevronDown, ShieldCheck, X } from 'lucide-react';
import { useState } from 'react';
import { CallIcon } from '../components/common/ContactIcons.jsx';
import WhatsAppIcon from '../components/common/WhatsAppIcon.jsx';
import ProductInquirySection from '../components/contact/ProductInquirySection.jsx';

const imageBase = 'https://khawaja-carpentry-woodpallets.vercel.app/images/';
const whatsappBase = 'https://wa.me/971509253127?text=';

const heroFeatures = [
  'New Pallets',
  'Used Pallets',
  'ISPM-15 Certified',
  'Refurbished Pallets',
  'Heavy Duty & Normal',
  'Custom Sizes'
];

const palletSizes = [
  {
    id: 'size-80x80',
    label: '8080',
    quoteLabel: '80x80',
    dimensions: '80 cm x 80 cm',
    heading: '80 cm x 80 cm Wooden Pallet',
    description: 'Compact wooden pallet for smaller shipments, light-duty warehouse storage, retail stock handling, and tight storage spaces.',
    image: '80cm x 80cm.jpg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 800 kg static'
  },
  {
    id: 'size-80x100',
    label: '80100',
    quoteLabel: '80x100',
    dimensions: '80 cm x 100 cm',
    heading: '80 cm x 100 cm Wooden Pallet',
    description: 'Mid-size wooden pallet suitable for manufacturing plants, distribution centers, and general warehouse movement.',
    image: '80 cm x 120 cm.jpg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 1000 kg'
  },
  {
    id: 'size-80x110',
    label: '80110',
    quoteLabel: '80x110',
    dimensions: '80 cm x 110 cm',
    heading: '80 cm x 110 cm Wooden Pallet',
    description: 'Extended wooden pallet for slightly longer cargo, food processing stock, pharmaceutical handling, and electronics shipments.',
    image: '90 cm x 110 cm.jpeg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 1000 kg'
  },
  {
    id: 'size-80x120',
    label: '80120',
    quoteLabel: '80x120',
    dimensions: '80 cm x 120 cm',
    heading: '80 cm x 120 cm Wooden Pallet',
    description: 'Popular Euro-style footprint for warehousing, logistics, retail distribution, export handling, and repeated forklift movement.',
    image: '80 cm x 120 cm.jpg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 1200 kg'
  },
  {
    id: 'size-80x200',
    label: '80200',
    quoteLabel: '80x200',
    dimensions: '80 cm x 200 cm',
    heading: '80 cm x 200 cm Wooden Pallet',
    description: 'Extra-long wooden pallet for pipes, steel beams, construction materials, machinery parts, and oversized industrial cargo.',
    image: '80 cm x 200 cm heavy duty.jpeg',
    availability: 'New, Refurbished',
    type: 'Heavy Duty & Normal',
    load: 'As per requirement'
  },
  {
    id: 'size-90x90',
    label: '9090',
    quoteLabel: '90x90',
    dimensions: '90 cm x 90 cm',
    heading: '90 cm x 90 cm Wooden Pallet',
    description: 'Square wooden pallet commonly used for drums, chemical containers, paint stock, and compact industrial storage.',
    image: '90 cm x 90 cm.jpg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 1000 kg'
  },
  {
    id: 'size-90x100',
    label: '90100',
    quoteLabel: '90x100',
    dimensions: '90 cm x 100 cm',
    heading: '90 cm x 100 cm Wooden Pallet',
    description: 'Practical pallet size for medium-duty goods, routine warehouse storage, and stable distribution center handling.',
    image: '90 cm x 110 cm.jpeg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 1000 kg'
  },
  {
    id: 'size-95x95',
    label: '9595',
    quoteLabel: '95x95',
    dimensions: '95 cm x 95 cm',
    heading: '95 cm x 95 cm Wooden Pallet',
    description: 'Special square pallet for drum-based storage, compact cargo layouts, and customer-specific warehouse requirements.',
    image: '95 cm x 95 cm.jpeg',
    availability: 'New, Refurbished',
    type: 'Normal',
    load: 'Up to 1000 kg'
  },
  {
    id: 'size-100x100',
    label: '100100',
    quoteLabel: '100x100',
    dimensions: '100 cm x 100 cm',
    heading: '100 cm x 100 cm Wooden Pallet',
    description: 'Strong square wooden pallet for drums, chemical goods, industrial containers, and balanced heavy warehouse loads.',
    image: '100 cm x 100 cm.jpg',
    availability: 'New, Refurbished',
    type: 'Heavy Duty & Normal',
    load: 'As per requirement'
  },
  {
    id: 'size-100x110',
    label: '100110',
    quoteLabel: '100x110',
    dimensions: '100 cm x 110 cm',
    heading: '100 cm x 110 cm Wooden Pallet',
    description: 'Industrial pallet for factories, packaging lines, storage racks, shipping areas, and frequent material handling.',
    image: '100 cm x 110 cm.jpg',
    availability: 'New, Refurbished',
    type: 'Heavy Duty & Normal',
    load: 'As per requirement'
  },
  {
    id: 'size-100x120',
    label: '100120',
    quoteLabel: '100x120',
    dimensions: '100 cm x 120 cm',
    heading: '100 cm x 120 cm Wooden Pallet',
    description: 'High-demand wooden pallet for UAE warehouses, factories, logistics hubs, retail distribution, and export operations.',
    image: '100 cm x 120 cm Heavy Duty.jpg',
    availability: 'New, Refurbished',
    type: 'Heavy Duty & Normal',
    load: 'Up to 1200 kg'
  },
  {
    id: 'size-100x200',
    label: '100200',
    quoteLabel: '100x200',
    dimensions: '100 cm x 200 cm',
    heading: '100 cm x 200 cm Wooden Pallet',
    description: 'Oversized wooden pallet for long cargo, machinery components, construction items, and custom industrial movement.',
    image: '100cm x 200 cm normal.jpeg',
    availability: 'New, Refurbished',
    type: 'Heavy Duty & Normal',
    load: 'As per requirement'
  },
  {
    id: 'size-110x110',
    label: '110110',
    quoteLabel: '110x110',
    dimensions: '110 cm x 110 cm',
    heading: '110 cm x 110 cm Wooden Pallet',
    description: 'Square heavy-duty pallet for chemical, oil and gas, bulk storage, drums, and robust industrial distribution.',
    image: '110 cm x 110 cm.jpeg',
    availability: 'New, Refurbished',
    type: 'Heavy Duty & Normal',
    load: 'As per requirement'
  },
  {
    id: 'size-110x130',
    label: '110130',
    quoteLabel: '110x130',
    dimensions: '110 cm x 130 cm',
    heading: '110 cm x 130 cm Wooden Pallet',
    description: 'Large wooden pallet for bulky warehouse goods, construction materials, export loads, and industrial cargo movement.',
    image: '110 cm x 130 cm.jpeg',
    availability: 'New, Refurbished',
    type: 'Heavy Duty & Normal',
    load: 'As per requirement'
  },
  {
    id: 'size-114x114',
    label: '114114',
    quoteLabel: '114x114',
    dimensions: '114 cm x 114 cm',
    heading: '114 cm x 114 cm Wooden Pallet',
    description: 'CP3-style pallet size used for chemical drums, export cargo, North American shipping, and specialized industrial loads.',
    image: 'CP3 Pallets.jpg',
    availability: 'New, Refurbished',
    type: 'Heavy Duty & Normal',
    load: 'As per requirement'
  },
  {
    id: 'size-120x120',
    label: '120120',
    quoteLabel: '120x120',
    dimensions: '120 cm x 120 cm',
    heading: '120 cm x 120 cm Wooden Pallet',
    description: 'Large square wooden pallet for heavy stock, bulk cargo, drums, machinery support, and demanding warehouse operations.',
    image: '120 cm x 120 cm heavy duty.jpg',
    availability: 'New, Refurbished',
    type: 'Heavy Duty & Normal',
    load: 'As per requirement'
  },
  {
    id: 'size-130x130',
    label: '130130',
    quoteLabel: '130x130',
    dimensions: '130 cm x 130 cm',
    heading: '130 cm x 130 cm Wooden Pallet',
    description: 'Oversized square pallet for special industrial loads, large containers, machinery bases, and custom storage requirements.',
    image: '130cm x 130 cm.jpeg',
    availability: 'New, Refurbished',
    type: 'Heavy Duty & Normal',
    load: 'As per requirement'
  },
  {
    id: 'size-euro-white',
    label: 'Euro White',
    quoteLabel: 'Euro White',
    dimensions: '80 cm x 120 cm',
    heading: 'Euro White Wooden Pallet',
    description: 'Premium Euro white wooden pallet for export handling, retail distribution, professional warehouse storage, and clean presentation.',
    image: 'Euro Pallets.jpg',
    availability: 'New, Refurbished',
    type: 'Heavy Duty & Normal',
    load: 'As per requirement'
  },
  {
    id: 'size-euro-black',
    label: 'Euro Black',
    quoteLabel: 'Euro Black',
    dimensions: '80 cm x 120 cm',
    heading: 'Euro Black Wooden Pallet',
    description: 'Durable Euro black pallet for high-volume storage, supply chain movement, export handling, and repeated industrial use.',
    image: 'Euro Pallets.jpg',
    availability: 'New, Refurbished',
    type: 'Heavy Duty & Normal',
    load: 'As per requirement'
  },
  {
    id: 'size-custom',
    label: 'Custom Size',
    quoteLabel: 'custom size',
    dimensions: 'As required',
    heading: 'Custom Size Wooden Pallet',
    description: 'Made-to-order wooden pallets built to your required dimensions, load capacity, entry type, board thickness, and export needs.',
    image: '100cm x 120cm.jpg',
    availability: 'New',
    type: 'Heavy Duty & Normal',
    load: 'As per requirement'
  }
];

const benefits = ['15+ Years Experience', 'Free UAE Delivery', 'ISPM-15 Certified', 'Fast Turnaround', 'Best Prices', '20+ Sizes Available'];

const faqs = [
  ['What wooden pallet sizes are available?', 'We supply all listed standard sizes plus Euro White, Euro Black, and custom-size wooden pallets.'],
  ['Can I order used or refurbished pallets?', 'Yes, new, used, and refurbished pallets are available depending on the requested size and stock.'],
  ['Do you provide ISPM-15 heat-treated pallets?', 'Yes, heat-treated ISPM-15 wooden pallets are available for export shipments.'],
  ['Can you manufacture custom wooden pallets?', 'Yes, custom pallets can be made according to size, load capacity, entry type, and treatment requirements.']
];

function imageUrl(file) {
  return `${imageBase}${encodeURIComponent(file)}`;
}

function quoteUrl(size) {
  return `${whatsappBase}${encodeURIComponent(`Hello, I need a quote for ${size} wooden pallet.`)}`;
}

function sizeButtonLabel(item) {
  return item.quoteLabel.includes('x') ? item.quoteLabel.toUpperCase() : item.label;
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-black text-[#02024f] sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function SizeSection({ item, index, onImageOpen }) {
  const isAlt = index % 2 === 1;
  const fullImageUrl = imageUrl(item.image);

  return (
    <section className={`${isAlt ? 'bg-[#fbf7ff]' : 'bg-white'} scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8`} id={item.id}>
      <div className={`mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center ${isAlt ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <button
          className="group block overflow-hidden rounded-3xl text-left shadow-2xl shadow-slate-950/10 outline-none ring-offset-4 transition hover:-translate-y-1 hover:shadow-indigo-950/20 focus:ring-4 focus:ring-indigo-300"
          type="button"
          onClick={() => onImageOpen({ src: fullImageUrl, alt: item.heading })}
          aria-label={`Open full image for ${item.heading}`}
        >
          <img
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96"
            src={fullImageUrl}
            alt={item.heading}
            width="1000"
            height="680"
            loading="lazy"
            decoding="async"
          />
        </button>
        <div>
          <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-indigo-700 ring-1 ring-indigo-100">
            New &amp; Refurbished
          </span>
          <h2 className="mt-4 text-3xl font-black leading-tight text-[#02024f] sm:text-4xl">{item.heading}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
            {[
              ['Dimensions', item.dimensions],
              ['Availability', item.availability],
              ['Type', item.type],
              ['Load Capacity', item.load],
              ['Treatment', 'Heat Treated ISPM-15 available']
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
            <WhatsAppIcon className="size-5" /> Get Quote {sizeButtonLabel(item)}
          </a>
        </div>
      </div>
    </section>
  );
}

function ImageLightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Product image preview"
      onClick={onClose}
    >
      <button
        className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white text-[#02024f] shadow-xl transition hover:scale-105 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-white/40 sm:right-6 sm:top-6"
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
      >
        <X size={24} />
      </button>
      <img
        className="max-h-[86vh] max-w-[94vw] rounded-2xl object-contain shadow-2xl shadow-black/40"
        src={image.src}
        alt={image.alt}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}

export default function WoodenPallets() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSize, setActiveSize] = useState(palletSizes[0].id);
  const [lightboxImage, setLightboxImage] = useState(null);
  const heroImage = {
    src: imageUrl('100 cm x 120 cm Heavy Duty.jpg'),
    alt: 'Premium wooden pallets'
  };

  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <button
            className="group block overflow-hidden rounded-3xl text-left shadow-2xl shadow-slate-950/15 outline-none ring-offset-4 transition hover:-translate-y-1 hover:shadow-indigo-950/20 focus:ring-4 focus:ring-indigo-300"
            type="button"
            onClick={() => setLightboxImage(heroImage)}
            aria-label="Open full wooden pallets image"
          >
            <img
              className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[460px]"
              src={heroImage.src}
              alt={heroImage.alt}
              width="1200"
              height="800"
              decoding="async"
            />
          </button>
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">Wooden Pallets</span>
            <h1 className="mt-4 text-4xl font-black leading-tight text-[#02024f] sm:text-5xl lg:text-6xl">Premium Quality Wooden Pallets for Every Industry</h1>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              We manufacture and supply high-quality wooden pallets across UAE for warehouses, factories, logistics, export, shipping, and industrial storage. Choose from new, used, refurbished, heavy-duty, normal, ISPM-15, and custom-size pallets.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {heroFeatures.map((feature) => (
                <li className="flex items-start gap-2 text-sm font-bold text-slate-700" key={feature}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} /> {feature}
                </li>
              ))}
            </ul>
            <a
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400"
              href={quoteUrl('wooden pallets')}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="size-5" /> WhatsApp / Get Best Price
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-14 sm:px-6 lg:px-8" id="sizes">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Jump to Any Size" />
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {palletSizes.map((item) => (
              <a
                className={`rounded-full border px-4 py-2 text-sm font-black shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 ${activeSize === item.id ? 'border-[#02024f] bg-[#02024f] text-white shadow-indigo-950/25' : 'border-indigo-200 bg-white text-indigo-700 hover:border-[#02024f] hover:bg-[#02024f] hover:text-white'}`}
                href={`#${item.id}`}
                onClick={() => setActiveSize(item.id)}
                key={item.id}
              >
                {sizeButtonLabel(item)}
              </a>
            ))}
          </div>
        </div>
      </section>

      {palletSizes.map((item, index) => (
        <SizeSection item={item} index={index} onImageOpen={setLightboxImage} key={item.id} />
      ))}

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Buy Wooden Pallets from Us?" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((feature) => (
              <article className="rounded-2xl border border-indigo-100 bg-white p-6 text-center shadow-lg shadow-indigo-950/5" key={feature}>
                <ShieldCheck className="mx-auto text-indigo-600" size={32} />
                <h3 className="mt-4 text-lg font-black text-[#02024f]">{feature}</h3>
              </article>
            ))}
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
        <h2 className="text-3xl font-black">Need Wooden Pallets in UAE?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">Choose your size, send a WhatsApp message, and get the best price for your order.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={quoteUrl('wooden pallets')} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> Request Quote
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971509253127">
            <CallIcon className="size-5" /> Call Now
          </a>
        </div>
      </section>

      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
}
