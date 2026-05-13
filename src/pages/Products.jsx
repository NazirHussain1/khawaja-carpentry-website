import CTASection from '../components/common/CTASection.jsx';
import ProductGrid from '../components/products/ProductGrid.jsx';
import products from '../data/products.js';

export default function Products() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Products</span>
        <h1>Wooden pallets, plastic pallets, wooden crates, and jumbo bags</h1>
        <p>Choose a product category or request a custom quote based on pallet type, size, quantity, and location.</p>
      </section>
      <section className="section dark-section">
        <ProductGrid products={products} />
      </section>
      <CTASection />
    </>
  );
}
