import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Factory,
  Globe2,
  Hammer,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Star,
  Truck,
  Users,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CallIcon } from '../components/common/ContactIcons.jsx';
import WhatsAppIcon from '../components/common/WhatsAppIcon.jsx';

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need a quote for pallets, crates, plastic pallets, or jumbo bags.')}`;

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
  ['2009', 'Company Founded'],
  ['2012', 'Expanded Manufacturing'],
  ['2016', 'Added Plastic Pallets'],
  ['2019', 'Added Wooden Crates'],
  ['2022', 'Bulk Supply Expansion'],
  ['2025', 'Serving Customers Nationwide']
];

const chooseUs = [
  [Award, 'Premium Quality Materials'],
  [PackageCheck, 'Custom Sizes Available'],
  [Truck, 'Fast Delivery'],
  [CheckCircle2, 'Competitive Pricing'],
  [Users, 'Experienced Team'],
  [ShieldCheck, 'Trusted by Businesses']
];

const products = [
  ['Wooden Pallets', 'New, used, refurbished, heat-treated, and custom-size wooden pallets for industrial supply.', '/wooden-pallets', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Plastic Pallets', 'Washable, durable, normal-duty and heavy-duty plastic pallets for logistics and warehouses.', '/plastic-pallets', 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Wooden Crates', 'Export-quality crates for machinery, industrial cargo, storage, and safe transportation.', '/wooden-crates', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Plastic Jumbo Bags', 'Heavy-duty FIBC jumbo bags for bulk construction, agriculture, minerals, and warehouse use.', '/plastic-jumbo-bags', 'https://images.unsplash.com/photo-1581093458791-9d09ccfed1c1?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Pallet Repair Services', 'Repair, sorting, reconditioning, and refurbishing services for reusable pallet stock.', '/products', 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=65&fm=webp'],
  ['Custom Packaging Solutions', 'Made-to-order industrial packaging for non-standard sizes, export cargo, and bulk supply.', '/contact', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=65&fm=webp']
];

const process = [
  ['Step 1', 'Requirement Discussion', 'We confirm size, material, quantity, treatment, delivery location, and usage requirements.'],
  ['Step 2', 'Design & Planning', 'Our team prepares the right pallet, crate, plastic pallet, or jumbo bag specification.'],
  ['Step 3', 'Manufacturing', 'Products are manufactured or prepared with durable materials and industrial handling in mind.'],
  ['Step 4', 'Quality Check & Delivery', 'Every order is checked for strength, dimensions, finish, and delivery readiness.']
];

const industries = ['Logistics', 'Warehousing', 'Construction', 'Food Industry', 'Pharmaceutical', 'Manufacturing', 'Retail', 'Export & Shipping'];
const qualityItems = ['High-grade timber', 'Strong construction', 'Export standards', 'ISPM-15 compliance', 'Durable materials', 'Quality inspections'];
const serviceAreas = ['Lahore', 'Karachi', 'Islamabad', 'Faisalabad', 'Multan', 'Sialkot', 'Gujranwala', 'Peshawar'];

const team = [
  ['Founder / CEO', 'Company leadership, customer relationships, and long-term supply standards.'],
  ['Production Manager', 'Manufacturing planning, workforce coordination, and order preparation.'],
  ['Sales Manager', 'Quotations, product guidance, bulk order handling, and customer follow-up.'],
  ['Quality Supervisor', 'Inspection, product strength checks, and final delivery approval.']
];

const testimonials = Array.from({ length: 36 }, (_, index) => {
  const names = [
    'Al Noor Logistics', 'Prime Warehouse', 'Metro Exporters', 'Royal Foods', 'Atlas Manufacturing', 'Swift Cargo',
    'United Traders', 'Blue Line Shipping', 'Eastern Packaging', 'Alpha Chemicals', 'Star Retail Group', 'Crescent Pharma'
  ];
  const quotes = [
    'Reliable pallet quality and fast response for repeat industrial orders.',
    'Their team understands bulk supply requirements and delivery timing.',
    'Strong wooden crates and pallets with consistent dimensions.',
    'Good support for custom sizes and urgent packaging needs.',
    'Professional service, fair pricing, and dependable product quality.',
    'We use them for regular pallet and packaging supply requirements.'
  ];
  return [names[index % names.length], quotes[index % quotes.length]];
});

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
      {eyebrow && <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>}
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
    <article className="rounded-3xl border border-white/10 bg-white/10 p-7 text-center shadow-xl shadow-black/10 backdrop-blur">
      <strong className="block text-4xl font-black text-white sm:text-5xl">{formatted}{suffix}</strong>
      <span className="mt-3 block text-xs font-black uppercase tracking-wide text-slate-300">{label}</span>
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
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#02024f] via-indigo-800 to-sky-600 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(125,211,252,0.16),transparent_28%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-sky-100" aria-label="Breadcrumb">
            <a className="transition hover:text-white" href="/" data-spa-link="true">Home</a>
            <span>/</span>
            <span className="text-white">About Us</span>
          </nav>
          <div className="mt-10 max-w-4xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-sky-100 ring-1 ring-white/15">Since 2009</span>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">About Our Company</h1>
            <h2 className="mt-4 text-xl font-extrabold text-sky-100 sm:text-2xl">Trusted Wooden Pallet & Packaging Solutions Provider</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-100 sm:text-lg">
              We manufacture and supply wooden pallets, wooden crates, plastic pallets, jumbo bags, and custom industrial packaging solutions for businesses that need strong materials, reliable delivery, and consistent quality.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400" href={whatsappUrl} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> Get Quote
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href="/contact" data-spa-link="true">
                Contact Us <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <img className="h-[360px] w-full rounded-3xl object-cover shadow-2xl shadow-slate-950/15 sm:h-[500px]" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=65&fm=webp" alt="Industrial warehouse and manufacturing facility" width="1200" height="820" loading="lazy" decoding="async" />
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">About Us</span>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#02024f] sm:text-5xl">Trusted Wooden Pallet Manufacturer & Supplier</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Our company supports logistics firms, exporters, warehouses, manufacturers, retailers, construction suppliers, food businesses, and industrial customers with dependable packaging products. We combine practical manufacturing experience, custom sizing, bulk supply capability, and quality-focused inspection to deliver products that are ready for demanding daily use.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {introChecklist.map((item) => (
                <li className="flex items-start gap-2 text-sm font-bold text-slate-700" key={item}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} /> {item}
                </li>
              ))}
            </ul>
            <a className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition hover:-translate-y-1" href="#our-journey">
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#02024f] px-4 py-16 text-white sm:px-6 lg:px-8" ref={statsRef}>
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => <CounterCard stat={stat} active={statsActive} key={stat[3]} />)}
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8" id="our-journey">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Story" title="Our Journey" subtitle="A steady expansion from pallet supply to complete industrial packaging support." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map(([year, title]) => (
              <article className="relative rounded-3xl border border-indigo-100 bg-white p-7 shadow-xl shadow-indigo-950/5 transition hover:-translate-y-1 hover:shadow-2xl" key={year}>
                <span className="text-4xl font-black text-indigo-600">{year}</span>
                <h3 className="mt-3 text-xl font-black text-[#02024f]">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[
            ['Mission', 'Provide reliable, durable, cost-effective pallet and packaging solutions.'],
            ['Vision', 'Become the leading pallet and industrial packaging supplier.']
          ].map(([title, text]) => (
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5" key={title}>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">{title}</span>
              <h2 className="mt-3 text-3xl font-black text-[#02024f]">Our {title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Choose Us" subtitle="Built for businesses that need consistent supply, practical advice, and dependable packaging." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {chooseUs.map(([Icon, title]) => (
              <article className="rounded-3xl border border-indigo-100 bg-white p-7 shadow-lg shadow-indigo-950/5 transition hover:-translate-y-1 hover:shadow-2xl" key={title}>
                <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20">
                  <Icon size={27} />
                </div>
                <h3 className="mt-5 text-xl font-black text-[#02024f]">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Products We Manufacture" subtitle="Complete pallet and packaging support for warehouses, factories, exporters, and logistics operations." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(([title, description, href, image]) => (
              <article className="group overflow-hidden rounded-3xl bg-white shadow-md shadow-slate-950/5 ring-1 ring-slate-200 transition hover:-translate-y-2 hover:shadow-2xl" key={title}>
                <div className="overflow-hidden">
                  <img className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" src={image} alt={title} width="900" height="560" loading="lazy" decoding="async" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#02024f]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                  <a className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1" href={href} data-spa-link="true">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Manufacturing Process" subtitle="A clear workflow from requirement discussion to quality check and delivery." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([step, title, text]) => (
              <article className="rounded-3xl border border-indigo-100 bg-white p-7 shadow-lg shadow-indigo-950/5" key={step}>
                <span className="inline-flex rounded-full bg-[#02024f] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">{step}</span>
                <h3 className="mt-5 text-xl font-black text-[#02024f]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Industries We Serve" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg" key={industry}>
                <Building2 className="mx-auto text-indigo-600" size={30} />
                <h3 className="mt-4 font-black text-[#02024f]">{industry}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">Quality Commitment</span>
            <h2 className="mt-4 text-4xl font-black text-[#02024f]">Quality You Can Trust</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We focus on product strength, accurate dimensions, practical construction, and inspection before dispatch. For export requirements, ISPM-15 heat treatment options are available where needed.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {qualityItems.map((item) => (
              <div className="flex items-center gap-3 rounded-2xl border border-indigo-100 bg-white p-5 shadow-lg shadow-indigo-950/5" key={item}>
                <ShieldCheck className="shrink-0 text-indigo-600" size={22} />
                <span className="font-black text-[#02024f]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Areas We Serve" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <article className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-950/5" key={area}>
                <MapPin className="shrink-0 text-indigo-600" size={22} />
                <span className="font-black text-[#02024f]">{area}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Meet Our Team" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(([role, text], index) => (
              <article className="overflow-hidden rounded-3xl border border-indigo-100 bg-white shadow-lg shadow-indigo-950/5" key={role}>
                <div className="grid h-44 place-items-center bg-gradient-to-br from-[#02024f] via-indigo-800 to-sky-600 text-white">
                  {[Hammer, Factory, Globe2, ClipboardCheck].map((Icon, iconIndex) => iconIndex === index && <Icon size={58} key={role} />)}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#02024f]">{role}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Customer Reviews" subtitle="Industrial customers trust us for practical support, repeat supply, and consistent product quality." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(([name, quote], index) => (
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm" key={`${name}-${index}`}>
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }, (_, star) => <Star fill="currentColor" size={16} key={star} />)}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{quote}</p>
                <h3 className="mt-5 text-sm font-black text-[#02024f]">{name}</h3>
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

      <section className="bg-[#02024f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Need Reliable Packaging Solutions?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">Contact us today for pallets, crates, plastic pallets, and jumbo bags.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> Get Quote
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> WhatsApp Now
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971509253127">
            <CallIcon className="size-5" /> Call Now
          </a>
        </div>
      </section>
    </>
  );
}
