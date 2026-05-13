import { ArrowRight, Boxes, Factory, ShieldCheck } from 'lucide-react';
import { createWhatsAppUrl } from '../../utils/whatsapp.js';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg" aria-hidden="true">
        <div className="pallet-illustration">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="hero-content">
        <span className="eyebrow">#1 Rated Pallet Supplier in UAE</span>
        <h1>Premium Wooden Pallets Manufacturer & Supplier</h1>
        <p>
          Manufacturing, supplying, and repairing high-quality wooden pallets, plastic pallets, wooden crates, and
          jumbo bags serving businesses across all 7 UAE Emirates.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={createWhatsAppUrl('Hello, I need an instant quote for pallets.')} target="_blank" rel="noreferrer">
            Get Instant Quote <ArrowRight size={18} />
          </a>
          <a className="btn btn-outline" href="#/products">Our Products</a>
        </div>
        <div className="hero-stats">
          <span><Boxes size={18} /> Custom sizes</span>
          <span><Factory size={18} /> All UAE Emirates</span>
          <span><ShieldCheck size={18} /> ISPM-15 certified</span>
        </div>
      </div>
    </section>
  );
}
