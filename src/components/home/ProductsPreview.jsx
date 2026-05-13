import ProductGrid from '../products/ProductGrid.jsx';
import products from '../../data/products.js';

export default function ProductsPreview() {
  return (
    <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Products</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Wooden pallets and crates made for UAE supply chains</h2>
        </div>
        <div className="mt-10">
          <ProductGrid products={products.slice(0, 4)} />
        </div>
      </div>
    </section>
  );
}
