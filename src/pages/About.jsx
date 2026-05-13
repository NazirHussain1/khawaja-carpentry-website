import CTASection from '../components/common/CTASection.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';

const offerings = [
  'New wooden pallets',
  'Reconditioned pallets',
  'Plastic pallets',
  'Wooden crates',
  'Export packaging',
  'Jumbo bags',
  'Custom pallet manufacturing'
];

export default function About() {
  return (
    <>
      <section className="bg-slate-950 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">About Us</span>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Trusted Wooden Pallet Manufacturer in UAE</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
          Established in Sharjah&apos;s industrial hub, we specialize in manufacturing, repairing, and supplying industrial
          wooden pallets and packaging solutions for businesses across UAE.
          </p>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="min-h-80 rounded-lg bg-gradient-to-br from-slate-900 via-slate-700 to-emerald-900 shadow-xl" aria-hidden="true" />
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Company Introduction</span>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Reliable pallet and industrial packaging support since 2009</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
            With over 15 years of experience, we have built a strong reputation for reliability, product durability,
            competitive pricing, and timely delivery.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
            Our team focuses on quality craftsmanship, industrial-grade materials, and customer satisfaction.
            </p>
            <h3 className="mt-6 text-lg font-bold text-slate-950">We provide</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {offerings.map((item) => <li className="rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700" key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Mission</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950">Our Mission</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            To provide reliable, durable, and cost-effective pallet and packaging solutions that help businesses safely
            transport and store goods across UAE and international markets.
          </p>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Vision</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950">Our Vision</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            To become one of the most trusted pallet manufacturers and industrial packaging suppliers in the UAE and GCC
            region.
          </p>
        </article>
        </div>
      </section>
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
