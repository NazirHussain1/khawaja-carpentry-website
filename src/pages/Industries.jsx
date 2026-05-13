import CTASection from '../components/common/CTASection.jsx';
import { industries, serviceAreas } from '../data/industries.js';

export default function Industries() {
  return (
    <>
      <section className="bg-slate-950 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Industries</span>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Pallet and packaging supply for UAE business sectors</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">Serving construction, logistics, food, pharma, manufacturing, oil and gas, and export operations.</p>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Industries We Serve</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Built for demanding commercial and industrial workflows</h2>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {industries.map((industry) => <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700" key={industry}>{industry}</span>)}
        </div>
        </div>
      </section>
      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Delivery Locations</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">We Deliver Across UAE</h2>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {serviceAreas.map((area) => <span className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white" key={area}>{area}</span>)}
        </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
