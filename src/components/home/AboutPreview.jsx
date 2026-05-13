import { CheckCircle2 } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="split-section">
      <div className="industrial-panel visual-warehouse" aria-hidden="true" />
      <div className="split-content">
        <span className="eyebrow">Trusted Since 2009</span>
        <h2>Trusted Wooden Pallet Supplier in UAE Since 2009</h2>
        <p>
          Mujahid Hussain Carpentry LLC is a leading manufacturer, supplier, and repairer of wooden pallets based in
          Sharjah, UAE. With over 15 years of industry experience, we specialize in high-quality new and refurbished
          wooden pallets, plastic pallets, and custom wooden crates for businesses across Dubai, Abu Dhabi, JAFZA,
          Ras Al Khaimah, Mussafah, Jabal Ali, and Umm Al Quwain.
        </p>
        <ul className="check-list">
          <li><CheckCircle2 size={18} /> Manufacturing new wooden pallets in all sizes</li>
          <li><CheckCircle2 size={18} /> Refurbishing and repairing used pallets</li>
          <li><CheckCircle2 size={18} /> Selling used and new plastic pallets</li>
          <li><CheckCircle2 size={18} /> Custom wooden crates for export</li>
          <li><CheckCircle2 size={18} /> ISPM-15 heat treatment certified</li>
          <li><CheckCircle2 size={18} /> Fast delivery across UAE</li>
        </ul>
        <a className="text-link" href="#/about">Read more about us</a>
      </div>
    </section>
  );
}
