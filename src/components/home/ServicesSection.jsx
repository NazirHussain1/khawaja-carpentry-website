import { Boxes, Factory, Hammer, Package, Recycle } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';

const services = [
  {
    title: 'Pallet Manufacturing',
    description: 'We manufacture strong wooden pallets in standard and custom sizes for storage, shipping, export, and warehouse use.',
    icon: Factory
  },
  {
    title: 'Pallet Refurbishing',
    description: 'We repair and refurbish used wooden pallets to extend their life and reduce replacement costs.',
    icon: Recycle
  },
  {
    title: 'Bulk Pallet Supply',
    description: 'We supply wooden pallets, plastic pallets, crates, and jumbo bags in bulk for industrial and commercial customers.',
    icon: Boxes
  },
  {
    title: 'Custom Wooden Crating',
    description: 'Custom wooden crates are available for packing, storing, and transporting heavy, fragile, or export goods.',
    icon: Package
  }
];

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need a service quote for pallets and packaging.')}`;

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700 shadow-sm">
            <Hammer size={14} />
            Our Services
          </span>
          <h2 className="mt-5 text-3xl font-black text-[#02024f] sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Complete pallet and packaging solutions for warehouses, factories, exporters, and logistics companies across UAE.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <article className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-md shadow-slate-950/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-950/10" key={title}>
              <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20 transition duration-300 group-hover:shadow-sky-500/35">
                <Icon size={28} />
              </div>
              <h3 className="mt-6 text-xl font-black text-[#02024f]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition duration-300 hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon className="size-5" />
            Get Service Quote
          </a>
        </div>
      </div>
    </section>
  );
}
