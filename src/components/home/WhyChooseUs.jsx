import contactInfo from '../../data/contactInfo.js';

const reasons = [
  ['15+ Years Industry Experience', 'Long-standing expertise in UAE pallet manufacturing and supply.'],
  ['Competitive UAE Market Prices', 'Cost-effective pricing for new, used, and repaired pallet orders.'],
  ['Fast Delivery Across UAE', 'Reliable delivery support for buyers across major UAE locations.'],
  ['Custom Manufacturing', 'Pallets, crates, and packaging built to required dimensions.'],
  ['ISPM-15 Export Compliance', 'Heat-treated pallet options for export and international shipping.'],
  ['Large Production Capacity', 'Bulk quantity supply for factories, warehouses, and logistics companies.'],
  ['Experienced Workforce', 'Skilled team focused on quality craftsmanship and durable materials.'],
  ['Reliable Customer Support', 'Responsive communication for quotes, delivery, and repeat orders.'],
  ['Bulk Quantity Supply', 'Small and large-scale industrial orders handled efficiently.'],
  ['Eco-Friendly Pallet Recycling', 'Used pallet repair and recycling options that reduce waste.']
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Why Businesses Choose {contactInfo.businessName}</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map(([title, text], index) => (
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-5" key={title}>
              <span className="text-xs font-black text-emerald-600">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-base font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
