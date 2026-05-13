import CTASection from '../components/common/CTASection.jsx';
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
      <CTASection />
    </>
  );
}
