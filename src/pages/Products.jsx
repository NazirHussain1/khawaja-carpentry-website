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
      <section className="bg-slate-950 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Products</span>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Wooden pallets, plastic pallets, wooden crates, and jumbo bags</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">Choose a product category or request a custom quote based on pallet type, size, quantity, and location.</p>
        </div>
      </section>
      <section className="bg-slate-950 px-4 pb-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap justify-center gap-2" aria-label="Product filters">
          {categories.map((category) => (
            <button
              className={`rounded-md px-4 py-2 text-sm font-bold transition ${activeFilter === category ? 'bg-emerald-600 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <ProductGrid products={filteredProducts} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
