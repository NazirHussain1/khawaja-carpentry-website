import { BadgeDollarSign, Globe2, Leaf, Ruler, ShieldCheck, Truck } from 'lucide-react';

const features = [
  {
    title: 'Premium Quality',
    description: 'Strong and durable wooden pallets manufactured using quality materials for long-lasting performance.',
    icon: ShieldCheck
  },
  {
    title: 'Fast UAE Delivery',
    description: 'Quick delivery service across Dubai, Sharjah, Abu Dhabi, JAFZA, Ras Al Khaimah, and all UAE.',
    icon: Truck
  },
  {
    title: 'Custom Sizes',
    description: 'Customized pallet and crate sizes available according to your warehouse and shipping requirements.',
    icon: Ruler
  },
  {
    title: 'Affordable Pricing',
    description: 'Competitive wholesale pricing for bulk orders without compromising quality.',
    icon: BadgeDollarSign
  },
  {
    title: 'ISPM-15 Export Standard',
    description: 'Export-ready wooden pallets and crates manufactured according to international shipping standards.',
    icon: Globe2
  },
  {
    title: 'Eco-Friendly Solutions',
    description: 'Recycled and refurbished pallet solutions supporting sustainable industrial practices.',
    icon: Leaf
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#fff8ed] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex border-b border-[#d9bd98] px-1 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#8b4f24]">
              Trusted Industrial Supplier
            </span>
            <h2 className="mt-5 font-serif text-4xl font-normal leading-tight text-[#2a170f] sm:text-6xl">Why Choose Us</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Trusted by warehouses, factories, exporters, and logistics companies across UAE.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              From custom specifications to export-ready delivery, we make industrial packaging straightforward and dependable.
            </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }, index) => (
            <article
              className="group relative min-h-64 overflow-hidden rounded-md border border-[#ead2b5] bg-white p-7 shadow-[0_18px_38px_rgba(63,36,23,0.08)] transition-colors duration-500 hover:border-[#d18a2f] hover:bg-[#fffaf2]"
              key={title}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5b351f] via-[#8b4f24] to-[#d18a2f]" />
              <span
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a170f]/6 via-transparent to-[#d18a2f]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="relative flex items-start justify-between gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-md bg-[#fff2dd] text-[#8b4f24] ring-1 ring-[#d9bd98] transition-colors duration-500 group-hover:bg-[#5b351f] group-hover:text-white">
                  <Icon size={27} />
                </span>
                <span className="font-serif text-2xl text-[#d9bd98] transition-colors duration-500 group-hover:text-[#d18a2f]">0{index + 1}</span>
              </div>
              <div className="relative mt-6">
                <h3 className="font-serif text-2xl font-normal text-[#2a170f] transition-colors duration-500 group-hover:text-[#8b4f24]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
