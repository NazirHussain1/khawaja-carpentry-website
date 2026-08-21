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

const whatsappUrl = `https://wa.me/971542046121?text=${encodeURIComponent('Hello, I need a service quote for pallets and packaging.')}`;

export default function ServicesSection() {
  return (
    <section className="bg-transparent px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 border-b border-[#d9bd98] px-1 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#8b4f24]">
            <Hammer size={14} />
            Our Services
          </span>
          <h2 className="mt-5 font-serif text-4xl font-normal text-[#2a170f] sm:text-5xl">Wood Packaging Services</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Complete pallet and packaging solutions for warehouses, factories, exporters, and logistics companies across UAE.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon }, index) => (
            <article
              className="group relative min-h-72 overflow-hidden rounded-md border border-[#ead2b5] bg-white p-7 shadow-[0_18px_38px_rgba(63,36,23,0.08)] transition-colors duration-500 hover:border-[#d18a2f] hover:bg-[#fffaf2]"
              key={title}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5b351f] via-[#8b4f24] to-[#d18a2f]" />
              <span
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a170f]/6 via-transparent to-[#d18a2f]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-[#d18a2f]/10"
                aria-hidden="true"
              />
              <div className="relative grid size-14 place-items-center rounded-md bg-[#fff2dd] text-[#8b4f24] ring-1 ring-[#d9bd98] transition-colors duration-500 group-hover:bg-[#5b351f] group-hover:text-white">
                <Icon size={28} />
              </div>
              <div className="relative">
                <span className="mt-6 block text-xs font-black uppercase tracking-[0.18em] text-[#d18a2f]">0{index + 1}</span>
                <h3 className="mt-2 font-serif text-2xl font-normal text-[#2a170f] transition duration-500 group-hover:text-[#8b4f24]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>
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
