import { industries, serviceAreas } from '../../data/industries.js';

function PillList({ items }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <span className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm" key={item}>{item}</span>
      ))}
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Delivery Locations</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950">We Deliver Across UAE</h2>
          <PillList items={serviceAreas} />
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Industries We Serve</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950">Built for demanding business sectors</h2>
          <PillList items={industries} />
        </div>
      </div>
    </section>
  );
}
