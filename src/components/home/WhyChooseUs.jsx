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
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">
            Trusted Industrial Supplier
          </span>
          <h2 className="mt-5 text-3xl font-black text-[#02024f] sm:text-4xl">Why Choose Us</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Trusted by warehouses, factories, exporters, and logistics companies across UAE.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-md shadow-slate-950/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-950/10" key={title}>
              <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20 transition duration-300 group-hover:shadow-sky-500/35">
                <Icon size={28} />
              </div>
              <h3 className="mt-6 text-xl font-black text-[#02024f]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
