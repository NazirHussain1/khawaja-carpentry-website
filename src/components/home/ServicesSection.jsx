import { Boxes, Factory, Hammer, PackageCheck, Recycle, Ruler } from 'lucide-react';
import services from '../../data/services.js';

const icons = [PackageCheck, Hammer, Ruler, Recycle, Boxes, Factory];

export default function ServicesSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">What We Do</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Main services for industrial pallet and packaging buyers</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg" key={service.title}>
                <div className="grid size-12 place-items-center rounded-md bg-emerald-50 text-emerald-700">
                  <Icon size={28} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
