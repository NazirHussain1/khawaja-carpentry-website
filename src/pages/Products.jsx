import { ArrowRight, Award, CheckCircle2, Clock, PackageCheck, Phone, Ruler, ShieldCheck, Truck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CallIcon } from '../components/common/ContactIcons.jsx';
import WhatsAppIcon from '../components/common/WhatsAppIcon.jsx';
import { fetchManagedProducts } from '../utils/productsApi.js';

const imageBase = 'https://mujahidhussaincarpentry.store/images/';
const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need a quote for pallets and packaging in UAE.')}`;

const fallbackCategories = [
  {
    title: 'Wooden Pallets',
    description: '20+ sizes. New, refurbished and used. Normal and heavy duty. ISPM-15.',
    href: '/wooden-pallets',
    button: 'View All Sizes',
    image: '100cm x 120cm.jpg'
  },
  {
    title: 'Wooden Crates',
    description: 'Brand new. Standard sizes plus custom. Export compliant.',
    href: '/wooden-crates',
    button: 'View All Sizes',
    image: 'wooden boxes.jpeg'
  },
  {
    title: 'Plastic Pallets',
    description: '5 sizes. New and used. Normal and heavy duty. Hygienic.',
    href: '/plastic-pallets',
    button: 'View All Sizes',
    image: 'plastic pallets.jpeg'
  },
  {
    title: 'Plastic Jumbo Bags',
    description: '500 kg to 2.5 TON. FIBC bulk bags for all industries.',
    href: '/plastic-jumbo-bags',
    button: 'View All Sizes',
    image: 'CP3 Pallets.jpg'
  }
];

const highlights = [
  {
    eyebrow: 'Wooden Pallets',
    title: '20+ Sizes in Stock',
    description: 'From compact 80x80 to oversized 130x130. Euro White and Euro Black pallets. New, refurbished, and used. Heavy duty and normal. ISPM-15 heat treated.',
    href: '/wooden-pallets',
    cta: 'Explore All Wooden Pallets',
    image: '100 cm x 120 cm Heavy Duty.jpg',
    badges: ['80x80', '80x120', '100x100', '100x120', '114x114', 'Euro', '+ 14 more']
  },
  {
    eyebrow: 'Plastic Pallets',
    title: '5 Sizes - Hygienic and Durable',
    description: 'Lightweight, moisture-proof, and chemical-resistant. Normal and heavy duty. New and used. Ideal for food, pharmaceutical, and logistics.',
    href: '/plastic-pallets',
    cta: 'Explore All Plastic Pallets',
    image: 'plastic pallets.jpeg',
    badges: ['80x120', '100x100', '100x120', '114x114', '110x130']
  },
  {
    eyebrow: 'Wooden Crates',
    title: 'Brand New - Any Size',
    description: 'Heavy-duty wooden crates for export, shipping, machinery protection, and warehouse storage. Standard sizes plus custom manufacturing. ISPM-15 compliant.',
    href: '/wooden-crates',
    cta: 'Explore All Crates',
    image: 'wooden boxes heavy duty.jpeg',
    badges: ['100x100', '100x120', '80x200', '200x400', 'Custom']
  },
  {
    eyebrow: 'Jumbo Bags',
    title: '500 kg to 2.5 TON',
    description: 'Industrial FIBC bulk bags for construction, agriculture, chemicals, and mining. UV resistant, moisture barriers available, food-grade options.',
    href: '/plastic-jumbo-bags',
    cta: 'Explore All Jumbo Bags',
    image: 'CP3 Pallets.jpg',
    badges: ['500 kg', '1 TON', '1.5 TON', '2 TON', '2.5 TON']
  }
];

const stats = [
  ['20', 'Wooden Pallet Sizes'],
  ['5', 'Plastic Pallet Sizes'],
  ['6', 'Crate Options'],
  ['5', 'Jumbo Bag Capacities']
];

const reasons = [
  [Award, '15+ Years Experience', 'Trusted by hundreds of businesses across all 7 UAE emirates.'],
  [Truck, 'Free Delivery UAE-Wide', 'Free delivery to Dubai, Sharjah, Abu Dhabi, Ajman, and all emirates.'],
  [CheckCircle2, 'Best Prices Guaranteed', 'Competitive wholesale pricing with bulk discounts on all products.'],
  [Clock, 'Same-Day Dispatch', 'In-stock items dispatched same day. Custom orders in 48-72 hours.'],
  [ShieldCheck, 'ISPM-15 Certified', 'Heat-treated pallets and crates for international export compliance.'],
  [Ruler, 'Custom Manufacturing', 'Any size and any specification built to exact requirements.']
];

const industries = ['Logistics', 'Freight', 'Retail', 'Manufacturing', 'Construction', 'Oil and Gas', 'Food', 'Pharma', 'Agriculture', 'Mining'];

function imageUrl(file) {
  return `${imageBase}${encodeURIComponent(file)}`;
}

function productImageUrl(value) {
  return /^https?:\/\//.test(value || '') ? value : imageUrl(value);
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

export default function Products() {
  const [managedProducts, setManagedProducts] = useState([]);
  const categoryProducts = managedProducts.length > 0 ? managedProducts.map((product) => ({
    title: product.title,
    description: product.summary,
    href: product.href || `/products/${product.slug}`,
    button: product.buttonLabel || 'View Details',
    image: product.imageUrl
  })) : fallbackCategories;

  useEffect(() => {
    let isMounted = true;
    fetchManagedProducts()
      .then((items) => {
        if (isMounted) setManagedProducts(items);
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <section
        className="relative isolate min-h-[460px] bg-slate-950 text-white sm:min-h-[520px]"
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(2, 2, 79, 0.94), rgba(22, 17, 86, 0.86), rgba(2, 6, 23, 0.62)), url('${imageUrl('100 cm x 120 cm Heavy Duty.jpg')}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="mx-auto flex min-h-[460px] max-w-7xl items-center px-4 py-16 sm:min-h-[520px] sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/10">Products</span>
            <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">Our Products</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl">
              Complete range of wooden pallets, wooden crates, plastic pallets, and jumbo bags. All sizes with free delivery across UAE.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/30 transition hover:-translate-y-1" href={whatsappUrl} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> Get Quote
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971509253127">
                <CallIcon className="size-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="What We Offer" subtitle="Four product categories serving every industry across the UAE." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {categoryProducts.map((product) => (
              <article className="grid overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-950/5 ring-1 ring-slate-200 md:grid-cols-5" key={product.title}>
                <img className="h-56 w-full object-cover md:col-span-2 md:h-full" src={productImageUrl(product.image)} alt={product.title} width="700" height="460" loading="lazy" decoding="async" />
                <div className="p-6 md:col-span-3">
                  <h3 className="text-2xl font-black text-[#02024f]">{product.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
                  <a className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition hover:-translate-y-1" href={product.href} data-spa-link="true">
                    {product.button} <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {highlights.map((item, index) => {
        const isAlt = index % 2 === 0;
        return (
          <section className={`${isAlt ? 'bg-slate-50' : 'bg-white'} px-4 py-16 sm:px-6 lg:px-8`} key={item.title}>
            <div className={`mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center ${!isAlt ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <img className="h-96 w-full rounded-3xl object-cover shadow-2xl shadow-slate-950/10" src={imageUrl(item.image)} alt={item.title} width="1100" height="720" loading="lazy" decoding="async" />
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">{item.eyebrow}</span>
                <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">{item.title}</h2>
                <p className="mt-5 text-base leading-8 text-slate-600">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.badges.map((badge) => <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#02024f] shadow-sm ring-1 ring-indigo-100" key={badge}>{badge}</span>)}
                </div>
                <a className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition hover:-translate-y-1" href={item.href} data-spa-link="true">
                  {item.cta} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-[#02024f] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong className="block text-5xl font-black text-sky-300">{value}</strong>
              <span className="mt-2 block text-sm font-semibold text-slate-300">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Buy from Mujahid Hussain Carpentry?" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([Icon, title, text]) => (
              <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-md shadow-slate-950/5 transition hover:-translate-y-2 hover:shadow-2xl" key={title}>
                <Icon className="mx-auto text-indigo-600" size={34} />
                <h3 className="mt-4 text-lg font-black text-[#02024f]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-black text-[#02024f] sm:text-4xl">Need a Quick Quote?</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">Tell us what you need on WhatsApp and get a quote within minutes.</p>
            <div className="mt-6 grid gap-4">
              {['Message us on WhatsApp with your requirements', 'Receive a detailed quote within minutes', 'Confirm your order', 'Free delivery to your location across UAE'].map((step, index) => (
                <div className="flex items-center gap-3" key={step}>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-indigo-600 text-sm font-black text-white">{index + 1}</span>
                  <span className="font-semibold text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-sky-50 p-10 text-center ring-1 ring-indigo-100">
            <WhatsAppIcon className="mx-auto size-20 text-[#25D366]" />
            <h3 className="mt-4 text-2xl font-black text-[#02024f]">WhatsApp Us Now</h3>
            <p className="mt-2 font-semibold text-slate-600">+971 50 92 53127</p>
            <a className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/20 transition hover:-translate-y-1" href={whatsappUrl} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-5" /> Start Chat
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#02024f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <PackageCheck className="mx-auto text-sky-300" size={42} />
        <h2 className="mt-4 text-3xl font-black">Browse Our Full Product Range</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">Wooden pallets, plastic pallets, wooden crates and jumbo bags. All sizes. Best prices in UAE.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> Get Quote
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971509253127">
            <Phone size={18} /> Call Now
          </a>
        </div>
      </section>
    </>
  );
}
