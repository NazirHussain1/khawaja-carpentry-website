const steps = [
  ['Request a Quote', 'Contact us via phone, WhatsApp, or email.'],
  ['Get Custom Pricing', 'We provide pricing based on pallet type, size, quantity, and location.'],
  ['Manufacturing', 'Our skilled carpenters prepare pallets using quality timber.'],
  ['Fast Delivery', 'We deliver directly to your warehouse, factory, or site across UAE.']
];

export default function HowWeWork() {
  return (
    <section className="section light-section">
      <div className="section-heading">
        <span className="eyebrow">How We Work</span>
        <h2>From quote request to delivery at your site</h2>
      </div>
      <div className="reason-grid">
        {steps.map(([title, text], index) => (
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
