import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchManagedProducts } from '../../utils/productsApi.js';

const fallbackProducts = [
  {
    title: 'Wooden Pallets',
    description: 'New & refurbished wooden pallets available in standard, Euro, and custom sizes for warehouses, manufacturing, logistics, and export industries.',
    href: '/wooden-pallets',
    image: 'https://res.cloudinary.com/dqrldug5h/image/upload/w_900,h_600,c_fill,f_auto,q_auto/khawaja-carpentry/gvlxhu5tub1xya5e6nwl.webp',
    badge: 'Best Seller',
    badgeColor: 'from-purple-600 to-indigo-600'
  },
  {
    title: 'Wooden Crates',
    description: 'Heavy-duty custom wooden crates designed for safe transportation of machinery, industrial equipment, fragile products, and export shipments.',
    href: '/wooden-crates',
    image: 'https://res.cloudinary.com/dqrldug5h/image/upload/w_900,h_600,c_fill,f_auto,q_auto/khawaja-carpentry/emja7hszpeitqkazbndq.webp',
    badge: 'Custom Made',
    badgeColor: 'from-indigo-600 to-blue-600'
  },
  {
    title: 'Plastic Pallets',
    description: 'Durable and lightweight plastic pallets suitable for food processing, pharmaceuticals, warehouses, and hygienic storage applications.',
    href: '/plastic-pallets',
    image: 'https://res.cloudinary.com/dqrldug5h/image/upload/w_900,h_600,c_fill,f_auto,q_auto/khawaja-carpentry/m4gejoh6ibzeyxbbrlau.webp',
    badge: 'Durable',
    badgeColor: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Plastic Jumbo Bags',
    description: 'High-capacity FIBC jumbo bags ideal for bulk storage, transportation, agriculture, construction materials, and industrial packaging.',
    href: '/plastic-jumbo-bags',
    image: 'https://res.cloudinary.com/dqrldug5h/image/upload/w_900,h_600,c_fill,f_auto,q_auto/khawaja-carpentry/zmohrfj5occsegwwl97q.webp',
    badge: 'Bulk Available',
    badgeColor: 'from-cyan-600 to-teal-600'
  }
];

function ProductCard({ product, index }) {
  return (
    <article
      className="group relative overflow-hidden bg-transparent"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="800"
    >
      {/* Image Container with Overlay Button */}
      <div className="relative h-[280px] overflow-hidden bg-[#dfe7e2]">
        <img
          className="h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.08]"
          src={product.image}
          alt={product.title}
          width="900"
          height="600"
          loading="lazy"
          decoding="async"
        />
        
        {/* Hover Overlay with Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/35 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
          <a
            className="translate-y-4 rounded-sm bg-white px-7 py-3 text-sm font-bold text-[#173b42] shadow-xl opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#edf4f0]"
            href={product.href}
            data-spa-link="true"
          >
            View Details
          </a>
        </div>

        {/* Badge */}
        <div className="absolute left-4 top-4 transition-transform duration-300 group-hover:scale-105">
          <span className="inline-flex bg-white/95 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-[#315b5d] shadow-sm">
            {product.badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-1 pb-2 pt-5">
        <h3 className="font-serif text-2xl font-normal text-[#173b42] transition-colors duration-300 group-hover:text-[#52837d]">
          {product.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {product.description}
        </p>
      </div>
    </article>
  );
}

export default function ProductsPreview() {
  const [managedProducts, setManagedProducts] = useState([]);
  
  const products = managedProducts.length > 0 
    ? managedProducts.slice(0, 4).map((product, idx) => ({
        title: product.title,
        description: product.summary || product.description,
        href: product.href || `/products/${product.slug}`,
        image: product.imageUrl,
        badge: ['Best Seller', 'Custom Made', 'Durable', 'Bulk Available'][idx % 4],
        badgeColor: [
          'from-purple-600 to-indigo-600',
          'from-indigo-600 to-blue-600',
          'from-blue-600 to-cyan-600',
          'from-cyan-600 to-teal-600'
        ][idx % 4]
      }))
    : fallbackProducts;

  useEffect(() => {
    let isMounted = true;
    fetchManagedProducts()
      .then((items) => {
        if (isMounted) setManagedProducts(items.filter((item) => item.featured !== false));
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="bg-[#fffefa] px-4 py-[100px] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up" data-aos-duration="800">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#52837d]">
            Our Products
          </span>
          <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-[#173b42] sm:text-5xl">
            Premium Pallet Solutions
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore our wide range of wooden pallets, plastic pallets, wooden crates, and jumbo bags designed to meet your logistics and supply chain needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-10 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.href} product={product} index={index} />
          ))}
        </div>

        {/* View All Products Link */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
          <a
            className="button-hover-scale inline-flex items-center gap-2 rounded-[50px] bg-gradient-to-r from-indigo-600 to-sky-500 px-9 py-[14px] text-base font-semibold text-white shadow-xl shadow-indigo-950/20 transition-all duration-300 hover:from-violet-600 hover:to-sky-400"
            href="/products"
            data-spa-link="true"
          >
            View All Products <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
