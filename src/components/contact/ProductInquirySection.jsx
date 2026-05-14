import QuoteForm from './QuoteForm.jsx';

export default function ProductInquirySection({ productType = 'Custom Orders' }) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Product Inquiry</span>
          <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">Request Pricing for {productType}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Share your required quantity, size, delivery location, and packing details. The inquiry will be saved and sent
            to Mujahid Hussain Carpentry for fast follow-up.
          </p>
        </div>
        <QuoteForm defaultProduct={productType} source={`product-${productType.toLowerCase().replace(/\s+/g, '-')}`} title={`Get ${productType} Quote`} />
      </div>
    </section>
  );
}
