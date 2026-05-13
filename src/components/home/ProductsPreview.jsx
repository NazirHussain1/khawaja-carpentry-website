import ProductGrid from '../products/ProductGrid.jsx';
import products from '../../data/products.js';

export default function ProductsPreview() {
  return (
    <section className="section dark-section">
      <div className="section-heading">
        <span className="eyebrow">Products</span>
        <h2>Wooden pallets and crates made for UAE supply chains</h2>
      </div>
      <ProductGrid products={products.slice(0, 4)} />
    </section>
  );
}
