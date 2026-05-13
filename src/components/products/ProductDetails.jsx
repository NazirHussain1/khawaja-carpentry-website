import { CheckCircle2 } from 'lucide-react';
import { createWhatsAppUrl } from '../../utils/whatsapp.js';

export default function ProductDetails({ product }) {
  return (
    <section className="product-detail-layout">
      <div className={`product-detail-visual ${product.imageClass}`} aria-hidden="true" />
      <div>
        <span className="eyebrow">{product.category}</span>
        <h1>{product.title}</h1>
        <p>{product.summary}</p>
        <ul className="check-list">
          {product.specs.map((spec) => (
            <li key={spec}><CheckCircle2 size={18} /> {spec}</li>
          ))}
        </ul>
        <a
          className="btn btn-primary"
          href={createWhatsAppUrl(`Hello, I need a quote for ${product.title}.`)}
          target="_blank"
          rel="noreferrer"
        >
          Request Product Quote
        </a>
      </div>
    </section>
  );
}
