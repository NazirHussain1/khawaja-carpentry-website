import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className={`product-visual ${product.imageClass}`} aria-hidden="true" />
      <div>
        <span className="product-category">{product.category}</span>
        <h3>{product.title}</h3>
        <p>{product.summary}</p>
        <a className="text-link" href={`#/products/${product.slug}`}>
          View details <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}
