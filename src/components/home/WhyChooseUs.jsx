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
    <section className="bg-[#fffefa] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div className="max-w-xl">
          <span className="inline-flex border-b border-[#b9c7c2] px-1 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#52837d]">
            Trusted Industrial Supplier
          </span>
          <h2 className="mt-5 font-serif text-4xl font-normal leading-tight text-[#173b42] sm:text-6xl">Why Choose Us</h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Trusted by warehouses, factories, exporters, and logistics companies across UAE.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            From custom specifications to export-ready delivery, we make industrial packaging straightforward and dependable.
          </p>
        </div>

          <div className="border-t border-[#dedbd2]">
            {features.map(({ title, description, icon: Icon }, index) => (
              <article className="group grid gap-4 border-b border-[#dedbd2] py-5 transition-colors duration-300 hover:bg-[#f4f4ef] sm:grid-cols-[48px_44px_1fr] sm:items-start sm:px-4" key={title}>
                <span className="font-serif text-2xl text-[#b9c7c2]">0{index + 1}</span>
                <Icon className="mt-1 text-[#52837d] transition-colors duration-300 group-hover:text-[#173b42]" size={24} />
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#173b42]">{title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
