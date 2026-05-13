import { ArrowRight, Phone } from 'lucide-react';
import contactInfo from '../../data/contactInfo.js';
import { createWhatsAppUrl } from '../../utils/whatsapp.js';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div>
        <span className="eyebrow">Fast UAE Supply</span>
        <h2>Need wooden pallets, plastic pallets, crates, or jumbo bags?</h2>
        <p>Share your pallet type, size, quantity, and location. We will prepare custom pricing for your order.</p>
      </div>
      <div className="cta-actions">
        <a className="btn btn-primary" href={createWhatsAppUrl('Hello, I need an instant quote for pallets.')} target="_blank" rel="noreferrer">
          Get Quote <ArrowRight size={18} />
        </a>
        <a className="btn btn-outline" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
          <Phone size={18} /> Call Now
        </a>
      </div>
    </section>
  );
}
