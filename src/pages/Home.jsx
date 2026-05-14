import CTASection from '../components/common/CTASection.jsx';
import QuoteForm from '../components/contact/QuoteForm.jsx';
import AboutPreview from '../components/home/AboutPreview.jsx';
import FAQSection from '../components/home/FAQSection.jsx';
import HeroSection from '../components/home/HeroSection.jsx';
import HowWeWork from '../components/home/HowWeWork.jsx';
import IndustriesSection from '../components/home/IndustriesSection.jsx';
import ProductsPreview from '../components/home/ProductsPreview.jsx';
import ServicesSection from '../components/home/ServicesSection.jsx';
import TestimonialsSection from '../components/home/TestimonialsSection.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <ProductsPreview />
      <WhyChooseUs />
      <HowWeWork />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Quick Quote</span>
            <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">Request a Free Pallet Quote</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Send your product type, quantity, size, and UAE delivery location. The request is saved and sent to our team
              for follow-up.
            </p>
          </div>
          <QuoteForm source="homepage-quote-form" />
        </div>
      </section>
      <CTASection />
    </>
  );
}
