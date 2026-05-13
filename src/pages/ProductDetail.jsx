import CTASection from '../components/common/CTASection.jsx';
import ProductDetails from '../components/products/ProductDetails.jsx';
import products from '../data/products.js';

export default function ProductDetail({ slug }) {
  const product = products.find((item) => item.slug === slug) || products[0];

  return (
    <>
      <ProductDetails product={product} />
      <CTASection />
    </>
  );
}
