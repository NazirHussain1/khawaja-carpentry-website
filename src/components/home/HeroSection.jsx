import { ArrowRight, Boxes, Clock, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import { createWhatsAppUrl } from '../../utils/whatsapp.js';
import contactInfo from '../../data/contactInfo.js';

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
        <span className="eyebrow">#1 Wooden Pallet Supplier in UAE</span>
        <h1>Premium Wooden Pallets, Plastic Pallets & Wooden Crates Manufacturer in UAE</h1>
        <p>
          {contactInfo.businessName} is a trusted manufacturer and supplier of high-quality wooden pallets, plastic
          pallets, export crates, and industrial packaging solutions in UAE. Serving businesses across Dubai, Sharjah,
          Abu Dhabi, JAFZA, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain since 2009.
        </p>
        <div className="hero-badges">
          <span>ISPM-15 Certified</span>
          <span>Fast UAE Delivery</span>
          <span>Custom Sizes Available</span>
          <span>Bulk Orders Accepted</span>
          <span>New & Used Pallets</span>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href={createWhatsAppUrl('Hello, I need an instant quote for pallets.')} target="_blank" rel="noreferrer">
            Get Instant Quote <ArrowRight size={18} />
          </a>
          <a className="btn btn-outline" href={createWhatsAppUrl('Hello, I want to discuss pallets on WhatsApp.')} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>
        <div className="hero-stats">
          <span><ShieldCheck size={18} /> <strong>15+</strong> Years Experience</span>
          <span><Boxes size={18} /> <strong>5000+</strong> Bulk Orders Completed</span>
          <span><Clock size={18} /> <strong>24-48</strong> Hours Delivery</span>
          <span><Truck size={18} /> All 7 Emirates Covered</span>
        </div>
      </div>
    </section>
  );
}
