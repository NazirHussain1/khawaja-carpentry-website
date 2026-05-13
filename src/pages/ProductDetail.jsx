import CTASection from '../components/common/CTASection.jsx';
import ProductDetails from '../components/products/ProductDetails.jsx';
import products from '../data/products.js';
import PlasticPallets from './PlasticPallets.jsx';
import WoodenCrates from './WoodenCrates.jsx';
import WoodenPallets from './WoodenPallets.jsx';

export default function ProductDetail({ slug }) {
  if (slug === 'wooden-pallets') {
    return <WoodenPallets />;
  }

  if (slug === 'wooden-crates') {
    return <WoodenCrates />;
  }

  if (slug === 'plastic-pallets') {
    return <PlasticPallets />;
  }

  const product = products.find((item) => item.slug === slug) || products[0];

  return (
    <>
      <ProductDetails product={product} />
      <CTASection />
    </>
  );
}
