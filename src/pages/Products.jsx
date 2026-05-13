import { useMemo, useState } from 'react';
import CTASection from '../components/common/CTASection.jsx';
import ProductGrid from '../components/products/ProductGrid.jsx';
import products from '../data/products.js';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = useMemo(() => ['All', ...new Set(products.map((product) => product.title))], []);
  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter((product) => product.title === activeFilter);

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Products</span>
        <h1>Wooden pallets, plastic pallets, wooden crates, and jumbo bags</h1>
        <p>Choose a product category or request a custom quote based on pallet type, size, quantity, and location.</p>
      </section>
      <section className="section dark-section">
        <div className="filter-bar" aria-label="Product filters">
          {categories.map((category) => (
            <button
              className={activeFilter === category ? 'active' : ''}
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <ProductGrid products={filteredProducts} />
      </section>
      <CTASection />
    </>
  );
}
