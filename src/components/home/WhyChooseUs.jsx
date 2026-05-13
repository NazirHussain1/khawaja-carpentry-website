const reasons = [
  ['Premium Quality', 'Reliable pallet quality for warehouse, export, and industrial use.'],
  ['Competitive Pricing', 'Cost-effective rates for new, used, and refurbished pallets.'],
  ['Timely Delivery', 'Fast delivery support across UAE business locations.'],
  ['Custom Sizes', 'Wooden pallets and crates built to required dimensions.'],
  ['ISPM-15 Certified', 'Heat-treated pallet options for export requirements.'],
  ['Eco-Friendly Recycling', 'Refurbishing and recycling options for used pallets.']
];

export default function WhyChooseUs() {
  return (
    <section className="section light-section">
      <div className="section-heading">
        <span className="eyebrow">Why Choose Us</span>
        <h2>Simple process, strong products, reliable communication</h2>
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
