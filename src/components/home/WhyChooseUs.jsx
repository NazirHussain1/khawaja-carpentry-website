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
    <section className="section light-section">
      <div className="section-heading">
        <span className="eyebrow">Why Choose Us</span>
        <h2>Why Businesses Choose {contactInfo.businessName}</h2>
      </div>
      <div className="reason-grid six-grid">
        {reasons.map(([title, text], index) => (
          <article className="reason-card" key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
