import { ArrowRight, Boxes, CheckCircle2, ClipboardCheck, Factory, MessageCircle, Package, Phone, Truck } from 'lucide-react';
import { useEffect } from 'react';

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need a quote from a reliable pallet supplier in UAE.')}`;

const reasons = [
  'Premium quality products',
  'Custom manufacturing',
  'Fast UAE delivery',
  'Competitive pricing',
  'Experienced team',
  'Bulk order handling',
  'Export-standard solutions',
  'Reliable customer support'
];

const stats = [
  ['15+', 'Years Experience'],
  ['500+', 'Happy Clients'],
  ['100K+', 'Pallets Delivered'],
  ['7', 'Emirates Covered']
];

const products = [
  ['Wooden Pallets', 'Strong pallets for warehouses, factories, logistics, export, and industrial storage.', '/products/wooden-pallets', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80'],
  ['Wooden Crates', 'Custom crates for cargo packing, heavy machinery, fragile goods, and export shipping.', '/products/wooden-crates', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=900&q=80'],
  ['Plastic Pallets', 'Reusable plastic pallets for food, pharma, logistics, export, and warehouse storage.', '/products/plastic-pallets', 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80'],
  ['Plastic Jumbo Bags', 'Industrial bulk bags for construction, agriculture, material handling, and storage.', '/products/plastic-jumbo-bags', 'https://images.unsplash.com/photo-1581093458791-9d09ccfed1c1?auto=format&fit=crop&w=900&q=80']
];

const areas = ['Dubai', 'Sharjah', 'Abu Dhabi', 'JAFZA', 'Jebel Ali', 'Ras Al Khaimah', 'Ajman', 'Fujairah'];
const process = [
  [Factory, 'Manufacturing Process', 'Industrial production of pallets, crates, and packaging according to customer requirements.'],
  [Boxes, 'Warehouse Operations', 'Stock handling and preparation for bulk pallet and packaging orders.'],
  [Truck, 'Delivery Process', 'Fast supply and delivery support across major UAE industrial locations.'],
  [ClipboardCheck, 'Quality Inspection', 'Careful checks for strength, dimensions, and customer specifications before dispatch.']
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

export default function About() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');

    document.title = 'About Mujahid Hussain Carpentry | Wooden Pallet Supplier UAE';
    description?.setAttribute('content', 'Learn about Mujahid Hussain Carpentry, a trusted supplier of wooden pallets, crates, plastic pallets, and jumbo bags across UAE since 2009.');

    return () => {
      document.title = previousTitle;
      if (previousDescription) description?.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <>
      <section
        className="relative isolate min-h-[560px] bg-slate-950 text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 2, 79, 0.94), rgba(22, 17, 86, 0.86), rgba(2, 6, 23, 0.62)), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/10">Since 2009</span>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">About Mujahid Hussain Carpentry</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl">
              Trusted wooden pallet, wooden crate, plastic pallet, and jumbo bag supplier serving UAE industries since 2009.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href="/contact" data-spa-link="true">
                Contact Us <ArrowRight size={18} />
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/30 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <img className="min-h-96 rounded-3xl object-cover shadow-2xl shadow-slate-950/10" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1100&q=80" alt="Industrial warehouse storage" />
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Company Introduction</span>
            <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">Leading Industrial Packaging Supplier in UAE</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Mujahid Hussain Carpentry is a leading manufacturer and supplier of wooden pallets, wooden crates, plastic
              pallets, and plastic jumbo bags in UAE. Based in Industrial Area Al Sajja, Sharjah, we proudly serve
              warehouses, logistics companies, factories, exporters, and industrial businesses across Dubai, Abu Dhabi,
              JAFZA, Jebel Ali, Ras Al Khaimah, Ajman, Fujairah, and all Emirates.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Mission</span>
            <h2 className="mt-3 text-3xl font-black text-[#02024f]">Our Mission</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">Providing durable, affordable, and reliable industrial packaging solutions with excellent customer service.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Vision</span>
            <h2 className="mt-3 text-3xl font-black text-[#02024f]">Our Vision</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">To become one of the most trusted pallet and packaging suppliers across UAE and GCC.</p>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Choose Us" subtitle="A reliable UAE supplier for industrial packaging, pallets, crates, and bulk orders." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm" key={reason}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={20} />
                <span className="font-bold text-[#02024f]">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#02024f] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div className="rounded-3xl border border-white/10 bg-white/10 p-7 text-center shadow-xl shadow-black/10" key={label}>
              <strong className="block text-4xl font-black">{value}</strong>
              <span className="mt-2 block text-sm font-bold uppercase tracking-wide text-slate-300">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Our Products" subtitle="Industrial packaging products supplied across UAE." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(([title, description, href, image]) => (
              <article className="group overflow-hidden rounded-3xl bg-white shadow-md shadow-slate-950/5 ring-1 ring-slate-200 transition hover:-translate-y-2 hover:shadow-2xl" key={title}>
                <img className="h-44 w-full object-cover transition duration-500 group-hover:scale-110" src={image} alt={title} loading="lazy" />
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#02024f]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                  <a className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-3 text-sm font-bold text-white" href={href} data-spa-link="true">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Service Areas" subtitle="Supplying pallets, crates, plastic pallets, and jumbo bags across major UAE industrial areas." />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span className="rounded-full border border-indigo-200 bg-indigo-50 px-5 py-3 text-sm font-bold text-indigo-700" key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Team & Work Process" subtitle="A practical workflow built around quality, preparation, and reliable UAE delivery." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([Icon, title, description]) => (
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-950/5 transition hover:-translate-y-2 hover:shadow-2xl" key={title}>
                <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20">
                  <Icon size={27} />
                </div>
                <h3 className="mt-6 text-xl font-black text-[#02024f]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#02024f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Looking for a Reliable Pallet Supplier in UAE?</h2>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> WhatsApp Us
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971509253127">
            <Phone size={19} /> Call Now
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="/contact" data-spa-link="true">
            <Package size={19} /> Request Quote
          </a>
        </div>
      </section>
    </>
  );
}
