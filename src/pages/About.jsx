import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  PackageCheck,
  ShieldCheck,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CallIcon } from '../components/common/ContactIcons.jsx';
import WhatsAppIcon from '../components/common/WhatsAppIcon.jsx';

const whatsappUrl = `https://wa.me/971542046121?text=${encodeURIComponent('Hello, I need a quote for pallets, crates, plastic pallets, or jumbo bags.')}`;

const introChecklist = [
  'New Wooden Pallets',
  'Refurbished Pallets',
  'Plastic Pallets',
  'Wooden Crates',
  'Jumbo Bags',
  'Custom Manufacturing'
];

const stats = [
  ['15+', 15, '+', 'Years Experience'],
  ['500+', 500, '+', 'Clients Served'],
  ['50,000+', 50000, '+', 'Products Delivered'],
  ['7', 7, '', 'Regions Served'],
  ['100%', 100, '%', 'Customer Support'],
  ['24/7', 24, '/7', 'Quote Assistance']
];

const timeline = [
  ['2009', 'Company Founded', 'Started supplying wooden pallets for local industrial customers.', 'https://res.cloudinary.com/dqrldug5h/image/upload/v1786590697/khawaja-carpentry/gvlxhu5tub1xya5e6nwl.webp'],
  ['2012', 'Expanded Manufacturing', 'Improved production capacity for custom pallet sizes and repeat orders.', 'https://res.cloudinary.com/dqrldug5h/image/upload/v1786590618/khawaja-carpentry/iff96ytyfhmksuskt1kl.webp'],
  ['2016', 'Added Plastic Pallets', 'Introduced durable plastic pallet options for hygienic and reusable handling.', 'https://res.cloudinary.com/dqrldug5h/image/upload/v1786590653/khawaja-carpentry/edizp0jtgrjsuzfkoh34.webp'],
  ['2019', 'Added Wooden Crates', 'Built stronger export crate support for machinery and protected cargo.', 'https://res.cloudinary.com/dqrldug5h/image/upload/v1786590639/khawaja-carpentry/a57buvlmujgv90f1k32q.webp'],
  ['2022', 'Bulk Supply Expansion', 'Scaled supply for warehouses, logistics firms, factories, and exporters.', 'https://res.cloudinary.com/dqrldug5h/image/upload/v1785003710/khawaja-carpentry/kk2edvzkvabmqansnste.webp'],
  ['2025', 'Serving Customers Nationwide', 'Supporting customers across Dubai, Sharjah, Abu Dhabi, JAFZA, and all UAE.', 'https://res.cloudinary.com/dqrldug5h/image/upload/v1785003706/khawaja-carpentry/zmohrfj5occsegwwl97q.webp']
];

const products = [
  ['Wooden Pallets', 'New, used, refurbished, heat-treated, and custom-size wooden pallets for industrial supply.', '/wooden-pallets', 'https://res.cloudinary.com/dqrldug5h/image/upload/v1786590697/khawaja-carpentry/gvlxhu5tub1xya5e6nwl.webp'],
  ['Plastic Pallets', 'Washable, durable, normal-duty and heavy-duty plastic pallets for logistics and warehouses.', '/plastic-pallets', 'https://res.cloudinary.com/dqrldug5h/image/upload/v1786590503/khawaja-carpentry/m4gejoh6ibzeyxbbrlau.webp'],
  ['Wooden Crates', 'Export-quality crates for machinery, industrial cargo, storage, and safe transportation.', '/wooden-crates', 'https://res.cloudinary.com/dqrldug5h/image/upload/v1786590633/khawaja-carpentry/emja7hszpeitqkazbndq.webp'],
  ['Plastic Jumbo Bags', 'Heavy-duty FIBC jumbo bags for bulk construction, agriculture, minerals, and warehouse use.', '/plastic-jumbo-bags', 'https://res.cloudinary.com/dqrldug5h/image/upload/v1785003706/khawaja-carpentry/zmohrfj5occsegwwl97q.webp'],
  ['Pallet Repair Services', 'Repair, sorting, reconditioning, and refurbishing services for reusable pallet stock.', '/products', 'https://res.cloudinary.com/dqrldug5h/image/upload/v1785003710/khawaja-carpentry/kk2edvzkvabmqansnste.webp'],
  ['Custom Packaging Solutions', 'Made-to-order industrial packaging for non-standard sizes, export cargo, and bulk supply.', '/contact', 'https://res.cloudinary.com/dqrldug5h/image/upload/v1786590639/khawaja-carpentry/a57buvlmujgv90f1k32q.webp']
];

const missionVision = [
  {
    eyebrow: 'Our Mission',
    title: 'Reliable Packaging Support for Daily Industrial Work',
    text: 'Our mission is to provide durable, cost-effective, and practical pallet and packaging solutions for companies that depend on safe material movement every day. We focus on accurate sizing, strong construction, responsive quotations, and reliable supply for warehouses, exporters, manufacturers, logistics companies, and construction businesses across UAE.',
    points: ['Custom pallet and crate sizing', 'Bulk supply with practical lead times', 'Quality checks before dispatch'],
    video: '/192778-893446884_medium.mp4',
    poster: 'https://res.cloudinary.com/dqrldug5h/image/upload/v1786590697/khawaja-carpentry/gvlxhu5tub1xya5e6nwl.webp'
  },
  {
    eyebrow: 'Our Vision',
    title: 'To Become UAE’s Most Dependable Industrial Packaging Partner',
    text: 'Our vision is to grow as a trusted long-term supplier for industrial packaging, combining manufacturing experience with modern service standards. We aim to support customers with stronger products, cleaner coordination, wider UAE delivery coverage, and packaging guidance that helps each order move safely from storage to shipment.',
    points: ['Nationwide UAE service coverage', 'Export-ready packaging standards', 'Long-term supply relationships'],
    video: '/166808-835670743_medium.mp4',
    poster: 'https://res.cloudinary.com/dqrldug5h/image/upload/v1786590633/khawaja-carpentry/emja7hszpeitqkazbndq.webp'
  }
];

const industries = [
  {
    title: 'Logistics',
    description: 'Pallets, crates, and bulk packaging for freight, transport, and distribution teams.',
    detail: 'Built for fast loading, safe movement, and repeat handling.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Warehousing',
    description: 'Durable pallet supply for storage racks, inventory movement, and daily warehouse operations.',
    detail: 'Reliable stock for receiving, dispatch, and material handling.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Construction',
    description: 'Heavy-duty packaging support for building materials, site supply, and project logistics.',
    detail: 'Strong solutions for bulky, rough-use, and outdoor handling needs.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Food Industry',
    description: 'Practical pallet and packaging options for food storage, movement, and distribution.',
    detail: 'Support for clean handling, stacking, and regular supply cycles.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Pharmaceutical',
    description: 'Plastic pallets and dependable packaging for controlled storage and careful movement.',
    detail: 'Suitable for organized, hygienic, and traceable handling workflows.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Manufacturing',
    description: 'Industrial pallet, crate, and jumbo bag supply for factories and production lines.',
    detail: 'Made for raw materials, finished goods, and frequent internal movement.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Retail',
    description: 'Cost-effective packaging for stockrooms, wholesale movement, and distribution centers.',
    detail: 'Dependable supply for seasonal stock, bulk orders, and replenishment.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Export & Shipping',
    description: 'Export-ready wooden pallets and crates for ports, cargo, and international shipments.',
    detail: 'ISPM-15 heat treatment options available where required.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=85'
  }
];
const qualityItems = ['High-grade timber', 'Strong construction', 'Export standards', 'ISPM-15 compliance', 'Durable materials', 'Quality inspections'];
const serviceAreas = ['Dubai', 'Sharjah', 'Abu Dhabi', 'JAFZA', 'Jebel Ali', 'Ajman', 'Ras Al Khaimah', 'Fujairah'];

const faqs = [
  ['How many years of experience do you have?', 'We have 15+ years of experience supplying wooden pallets, wooden crates, plastic pallets, jumbo bags, and industrial packaging products.'],
  ['Do you manufacture custom pallets?', 'Yes, custom pallet sizes, load requirements, treatments, and designs can be manufactured according to customer specifications.'],
  ['Can you handle bulk orders?', 'Yes, we support bulk supply for warehouses, manufacturers, logistics companies, exporters, retailers, and construction businesses.'],
  ['Do you provide delivery?', 'Yes, delivery support is available depending on product type, quantity, and service area.'],
  ['Do you manufacture export-quality products?', 'Yes, export-quality pallets and crates can be supplied with ISPM-15 heat treatment where required.']
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <span className="inline-flex border-b border-[#d9bd98] px-1 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#8b4f24]">{eyebrow}</span>}
      <h2 className="mt-5 font-serif text-4xl font-normal leading-tight text-[#2a170f] sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-base leading-8 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function useCountUp(target, active) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    let frame = 0;
    const totalFrames = 58;
    const step = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setValue(Math.round(target * Math.min(progress, 1)));
      if (frame < totalFrames) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    return undefined;
  }, [active, target]);

  return value;
}

function CounterCard({ stat, active }) {
  const [, target, suffix, label] = stat;
  const count = useCountUp(target, active);
  const formatted = target >= 1000 ? count.toLocaleString() : count;

  return (
    <article className="border border-white/15 bg-white/10 p-7 text-center shadow-xl shadow-black/10 backdrop-blur">
      <strong className="block font-serif text-4xl font-normal text-white sm:text-5xl">{formatted}{suffix}</strong>
      <span className="mt-3 block text-xs font-black uppercase tracking-wide text-[#fff2dd]">{label}</span>
    </article>
  );
}

export default function About() {
  const statsRef = useRef(null);
  const [statsActive, setStatsActive] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-150px)] overflow-hidden bg-[#2a170f] text-white lg:h-[calc(100vh-128px)] lg:min-h-[540px]">
        <img className="absolute inset-0 -z-20 h-full w-full object-cover" src="https://res.cloudinary.com/dqrldug5h/image/upload/v1786590697/khawaja-carpentry/gvlxhu5tub1xya5e6nwl.webp" alt="" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(42,23,15,0.92),rgba(91,53,31,0.72)_50%,rgba(42,23,15,0.62))]" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[calc(100svh-150px)] max-w-7xl flex-col justify-center px-4 py-7 sm:px-6 lg:h-full lg:min-h-0 lg:px-8 lg:py-6">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#fff2dd]" aria-label="Breadcrumb">
            <a className="transition hover:text-white" href="/" data-spa-link="true">Home</a>
            <span>/</span>
            <span className="text-white">About Us</span>
          </nav>
          <div className="flex flex-1 items-center pt-6 lg:pt-2">
            <div className="w-full max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f3c16a] sm:text-xs">Since 2009</span>
            <h1 className="brand-arabic-style mt-3 max-w-xl text-4xl leading-[0.98] sm:text-5xl lg:text-6xl">Faisal Fareed Woods TR L.L.C</h1>
            <h2 className="mt-3 text-lg font-semibold text-[#fff2dd] sm:text-xl lg:text-2xl">Trusted Wooden Pallet & Packaging Solutions Provider</h2>
            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-100 sm:text-base sm:leading-7">
              We manufacture and supply wooden pallets, wooden crates, plastic pallets, jumbo bags, and custom industrial packaging solutions for businesses that need strong materials, reliable delivery, and consistent quality.
            </p>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8ed] px-6 py-3 text-sm font-bold text-[#5b351f] shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#fff2dd] sm:min-h-0" href={whatsappUrl} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> Get Quote
              </a>
              <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/45 bg-black/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10 sm:min-h-0" href="/contact" data-spa-link="true">
                Contact Us <ArrowRight size={18} />
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7efe2] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 bg-[#fff8ed] shadow-[0_18px_40px_rgba(63,36,23,0.08)] lg:grid-cols-2 lg:items-center">
          <video
            className="h-[360px] w-full object-cover sm:h-[500px]"
            src="/2711298-uhd_3840_2160_24fps.mp4"
            poster="https://res.cloudinary.com/dqrldug5h/image/upload/v1786590697/khawaja-carpentry/gvlxhu5tub1xya5e6nwl.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Industrial warehouse and packaging operations"
          />
          <div className="p-6 sm:p-8 lg:p-12">
            <span className="inline-flex border-b border-[#d9bd98] px-1 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#8b4f24]">About Us - Premium Supplier</span>
            <h2 className="brand-arabic-style mt-5 text-4xl leading-tight text-[#2a170f] sm:text-5xl">Faisal Fareed Woods TR L.L.C Sharjah UAE</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Our company supports logistics firms, exporters, warehouses, manufacturers, retailers, construction suppliers, food businesses, and industrial customers with dependable packaging products. We combine practical manufacturing experience, custom sizing, bulk supply capability, and quality-focused inspection to deliver products that are ready for demanding daily use.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {introChecklist.map((item) => (
                <li className="flex items-start gap-2 text-sm font-bold text-slate-700" key={item}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#8b4f24]" size={18} /> {item}
                </li>
              ))}
            </ul>
            <a className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#5b351f] px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-[#2a170f]/20 transition hover:-translate-y-1 hover:bg-[#2a170f]" href="#our-journey">
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#2a170f] px-4 py-16 text-white sm:px-6 lg:px-8" ref={statsRef}>
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => <CounterCard stat={stat} active={statsActive} key={stat[3]} />)}
        </div>
      </section>

      <section className="bg-[#fff8ed] px-4 py-20 sm:px-6 lg:px-8" id="our-journey">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Story" title="Our Journey" subtitle="A steady expansion from pallet supply to complete industrial packaging support." />
          <div className="relative mt-14">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-[#d9bd98] md:block lg:left-1/2" aria-hidden="true" />
            <div className="grid gap-7">
              {timeline.map(([year, title, text, image], index) => (
              <article className={`group relative grid overflow-hidden bg-white shadow-[0_18px_38px_rgba(63,36,23,0.08)] md:grid-cols-[0.9fr_1.1fr] lg:w-[72%] ${index % 2 === 1 ? 'lg:ml-auto md:grid-cols-[1.1fr_0.9fr]' : ''}`} key={year}>
                <span className={`absolute top-8 z-20 hidden size-4 rounded-full bg-[#8b4f24] ring-8 ring-[#fff8ed] md:block ${index % 2 === 1 ? 'lg:-left-[calc(38.89%+0.5rem)] left-[-2.05rem]' : 'left-[-2.05rem] lg:-right-[calc(38.89%+0.5rem)] lg:left-auto'}`} />
                <div className={`relative min-h-56 overflow-hidden bg-[#2a170f] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src={image} alt={title} loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a170f]/85 via-[#2a170f]/20 to-transparent" />
                  <div className="relative flex min-h-56 flex-col justify-end p-5 text-white">
                    <span className="font-serif text-5xl font-normal leading-none text-[#f3c16a]">{year}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center border border-[#ead2b5] border-l-0 p-6 sm:p-8">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#8b4f24]">Milestone {String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 font-serif text-3xl font-normal text-[#2a170f]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                  <div className="mt-6 h-1 w-24 bg-gradient-to-r from-[#5b351f] via-[#8b4f24] to-[#d18a2f]" />
                </div>
              </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7efe2] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10">
            {missionVision.map((item, index) => (
              <article className="grid overflow-hidden bg-[#fff8ed] shadow-[0_18px_40px_rgba(63,36,23,0.08)] lg:grid-cols-2 lg:items-stretch" key={item.eyebrow}>
                <div className={`relative min-h-[320px] overflow-hidden bg-[#2a170f] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={item.video}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a170f]/70 via-[#2a170f]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 text-white">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-[#f3c16a]">Industrial packaging</span>
                    <span className="h-px flex-1 bg-white/25" />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                  <span className="inline-flex w-fit border-b border-[#d9bd98] px-1 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#8b4f24]">{item.eyebrow}</span>
                  <h2 className="mt-5 font-serif text-4xl font-normal leading-tight text-[#2a170f] sm:text-5xl">{item.title}</h2>
                  <p className="mt-5 text-base leading-8 text-slate-600">{item.text}</p>
                  <ul className="mt-7 grid gap-3">
                    {item.points.map((point) => (
                      <li className="flex items-start gap-3 text-sm font-bold text-slate-700" key={point}>
                        <CheckCircle2 className="mt-0.5 shrink-0 text-[#8b4f24]" size={18} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7efe2] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Products We Manufacture" subtitle="Complete pallet and packaging support for warehouses, factories, exporters, and logistics operations." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(([title, description, href, image]) => (
              <article className="group overflow-hidden rounded-none border border-[#ead2b5] bg-white shadow-[0_18px_38px_rgba(63,36,23,0.08)] transition hover:border-[#d18a2f]" key={title}>
                <div className="overflow-hidden">
                  <img className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" src={image} alt={title} width="900" height="560" loading="lazy" decoding="async" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-normal text-[#2a170f]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                  <a className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#8b4f24] transition hover:text-[#2a170f]" href={href} data-spa-link="true">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7efe2] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Industries We Serve" subtitle="Image-backed industry cards for the businesses we support every day across UAE." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <article className="group relative min-h-64 overflow-hidden rounded-none bg-[#2a170f] text-white shadow-[0_18px_38px_rgba(63,36,23,0.16)]" key={industry.title}>
                <img className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src={industry.image} alt={`${industry.title} industry`} loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a170f]/95 via-[#2a170f]/55 to-[#2a170f]/10 transition duration-500 group-hover:via-[#2a170f]/75" />
                <div className="relative flex min-h-64 flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-[#f3c16a]">
                    <PackageCheck size={19} />
                    <span className="text-xs font-black uppercase tracking-[0.18em]">Industry supply</span>
                  </div>
                  <h3 className="mt-3 font-serif text-3xl font-normal">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#fff2dd]">{industry.description}</p>
                  <p className="max-h-0 overflow-hidden text-sm leading-6 text-[#ffe4b7] opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-16 group-hover:opacity-100">{industry.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ed] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex border-b border-[#d9bd98] px-1 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#8b4f24]">Quality Commitment</span>
            <h2 className="mt-5 font-serif text-4xl font-normal text-[#2a170f] sm:text-5xl">Quality You Can Trust</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We focus on product strength, accurate dimensions, practical construction, and inspection before dispatch. For export requirements, ISPM-15 heat treatment options are available where needed.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {qualityItems.map((item) => (
              <div className="flex items-center gap-3 rounded-none border border-[#ead2b5] bg-white p-5 shadow-[0_12px_28px_rgba(63,36,23,0.06)]" key={item}>
                <ShieldCheck className="shrink-0 text-[#8b4f24]" size={22} />
                <span className="font-black text-[#2a170f]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7efe2] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Areas We Serve" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <article className="flex items-center gap-3 rounded-none border border-[#ead2b5] bg-white p-5 shadow-[0_12px_28px_rgba(63,36,23,0.06)]" key={area}>
                <MapPin className="shrink-0 text-[#8b4f24]" size={22} />
                <span className="font-black text-[#2a170f]">{area}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ed] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-10 grid gap-4">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <article className="overflow-hidden rounded-none border border-[#ead2b5] bg-white shadow-[0_12px_28px_rgba(63,36,23,0.06)]" key={question}>
                  <button className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                    <span className="font-black text-[#2a170f]">{question}</span>
                    <ChevronDown className={`shrink-0 text-[#8b4f24] transition ${isOpen ? 'rotate-180' : ''}`} size={20} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="border-t border-[#ead2b5] px-6 pb-6 pt-4 text-sm leading-7 text-slate-600">{answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#2a170f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-normal">Need Reliable Packaging Solutions?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#fff2dd]">Contact us today for pallets, crates, plastic pallets, and jumbo bags.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fff8ed] px-7 py-4 text-sm font-extrabold text-[#5b351f] transition hover:-translate-y-1 hover:bg-[#fff2dd]" href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> Get Quote
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> WhatsApp Now
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971588441600">
            <CallIcon className="size-5" /> Call Now
          </a>
        </div>
      </section>
    </>
  );
}
