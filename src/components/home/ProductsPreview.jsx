import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Wooden Pallets',
    description: 'Strong and durable wooden pallets for warehouses, factories, shipping, logistics, and export use.',
    href: '/products/wooden-pallets',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Wooden Crates',
    description: 'Custom wooden crates for safe packing, storage, and transportation of heavy or fragile goods.',
    href: '/products/wooden-crates',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Plastic Pallets',
    description: 'Reusable plastic pallets suitable for hygiene-sensitive industries and long-term warehouse use.',
    href: '/products/plastic-pallets',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Plastic Jumbo Bags',
    description: 'High-quality jumbo bags for bulk packaging, industrial materials, and transportation needs.',
    href: '/products/plastic-jumbo-bags',
    image: 'https://images.unsplash.com/photo-1581093458791-9d09ccfed1c1?auto=format&fit=crop&w=900&q=80'
  }
];

export default function ProductsPreview() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Our Products</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Premium wooden pallets, plastic pallets, wooden crates, and plastic jumbo bags supplied across UAE.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article className="group overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-950/5 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-950/12" key={product.href}>
              <div className="overflow-hidden">
                <img className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" src={product.image} alt={product.title} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-[#02024f]">{product.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">{product.description}</p>
                <a
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition duration-300 hover:from-violet-600 hover:to-sky-400"
                  href={product.href}
                  data-spa-link="true"
                >
                  View Details <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
