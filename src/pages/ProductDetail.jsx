import { Suspense, lazy } from 'react';
import CTASection from '../components/common/CTASection.jsx';
import ProductDetails from '../components/products/ProductDetails.jsx';
import products from '../data/products.js';

const productPageMap = {
  'wooden-pallets': lazy(() => import('./WoodenPallets.jsx')),
  'wooden-crates': lazy(() => import('./WoodenCrates.jsx')),
  'plastic-pallets': lazy(() => import('./PlasticPallets.jsx')),
  'plastic-jumbo-bags': lazy(() => import('./PlasticJumboBags.jsx'))
};

export default function ProductDetail({ slug }) {
  const ProductPage = productPageMap[slug];
  if (ProductPage) {
    return (
      <Suspense fallback={<ProductPageSkeleton />}>
        <ProductPage />
      </Suspense>
    );
  }

  const product = products.find((item) => item.slug === slug) || products[0];

  return (
    <>
      <ProductDetails product={product} />
      <CTASection />
    </>
  );
}

function ProductPageSkeleton() {
  return (
    <section className="min-h-[520px] bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8" aria-label="Loading product page">
      <div className="mx-auto max-w-7xl">
        <div className="h-8 w-40 animate-pulse rounded-full bg-white/10" />
        <div className="mt-8 h-14 max-w-4xl animate-pulse rounded-2xl bg-white/10 sm:h-20" />
        <div className="mt-5 h-5 max-w-2xl animate-pulse rounded-full bg-white/10" />
      </div>
    </section>
  );
}
