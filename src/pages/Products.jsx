import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CallIcon } from '../components/common/ContactIcons.jsx';
import WhatsAppIcon from '../components/common/WhatsAppIcon.jsx';

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need industrial packaging solutions in UAE.')}`;

const productCards = [
  {
    title: 'Wooden Pallets',
    description: 'Strong and durable wooden pallets for warehouses, logistics, export, and storage applications.',
    href: '/products/wooden-pallets',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=65&fm=webp'
  },
  {
    title: 'Wooden Crates',
    description: 'Custom wooden crates for machinery, fragile goods, export shipping, and industrial packing.',
    href: '/products/wooden-crates',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=900&q=65&fm=webp'
  },
  {
    title: 'Plastic Pallets',
    description: 'Reusable plastic pallets suitable for warehouse, pharmaceutical, food, and industrial use.',
    href: '/products/plastic-pallets',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=65&fm=webp'
  },
  {
    title: 'Plastic Jumbo Bags',
    description: 'Durable jumbo bags for bulk storage, packaging, transportation, and industrial handling.',
    href: '/products/plastic-jumbo-bags',
    image: 'https://images.unsplash.com/photo-1581093458791-9d09ccfed1c1?auto=format&fit=crop&w=900&q=65&fm=webp'
  }
];

const features = [
  'Premium quality materials',
  'Custom manufacturing',
  'Bulk supply available',
  'Fast UAE delivery',
  'Export-standard products',
  'Competitive wholesale pricing'
];

const industries = [
  'Warehouses',
  'Logistics Companies',
  'Shipping Companies',
  'Factories',
  'Export Businesses',
  'Construction Companies',
  'Agriculture',
  'Retail Storage'
];

export default function Products() {
  return (
    <>
      <section
        className="relative isolate min-h-[460px] bg-slate-950 text-white sm:min-h-[520px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 2, 79, 0.94), rgba(22, 17, 86, 0.86), rgba(2, 6, 23, 0.62)), url('https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=65&fm=webp')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="mx-auto flex min-h-[460px] max-w-7xl items-center px-4 py-16 sm:min-h-[520px] sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/10">Products</span>
            <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">Our Products</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl">
              Premium industrial packaging and pallet solutions for warehouses, factories, logistics, export, and commercial businesses across UAE.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/30 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400" href={whatsappUrl} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> Get Free Quote
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href={whatsappUrl} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Industrial Products</span>
          <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">Industrial Packaging Solutions in UAE</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            We manufacture and supply high-quality wooden pallets, wooden crates, plastic pallets, and jumbo bags for
            industrial and commercial use across Dubai, Sharjah, Abu Dhabi, JAFZA, Jebel Ali, Ras Al Khaimah, and all UAE.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {productCards.map((product) => (
              <article className="group overflow-hidden rounded-3xl bg-white shadow-md shadow-slate-950/5 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-950/10" key={product.href}>
                <div className="overflow-hidden">
                  <img
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                    src={product.image}
                    alt={product.title}
                    width="900"
                    height="520"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#02024f]">{product.title}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">{product.description}</p>
                  <a className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition hover:from-violet-600 hover:to-sky-400" href={product.href} data-spa-link="true">
                    View Details <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black text-[#02024f] sm:text-4xl">Why Choose Our Products</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Reliable packaging materials built for industrial performance and UAE supply chains.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm" key={feature}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={20} />
                <span className="font-bold text-[#02024f]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black text-[#02024f] sm:text-4xl">Industries We Serve</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Supplying pallet and packaging products for UAE commercial and industrial sectors.</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span className="rounded-full border border-indigo-200 bg-white px-5 py-3 text-sm font-bold text-indigo-700 shadow-sm" key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#02024f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Need Industrial Packaging Solutions in UAE?</h2>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> Request Quote
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971509253127">
            <CallIcon className="size-5" /> Call Now
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
