import CTASection from '../components/common/CTASection.jsx';
import TestimonialsSection from '../components/home/TestimonialsSection.jsx';

export default function Testimonials() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Testimonials</span>
        <h1>Buyer feedback from logistics and industrial teams</h1>
        <p>Use this page for real customer reviews once client-approved testimonials are collected.</p>
      </section>
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
