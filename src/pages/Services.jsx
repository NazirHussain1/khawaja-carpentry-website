import CTASection from '../components/common/CTASection.jsx';
import ServicesSection from '../components/home/ServicesSection.jsx';
import HowWeWork from '../components/home/HowWeWork.jsx';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Services</span>
        <h1>Main Services</h1>
        <p>Complete pallet manufacturing, repair, crating, export packaging, and bulk supply support across UAE.</p>
      </section>
      <ServicesSection />
      <HowWeWork />
      <CTASection />
    </>
  );
}
