import CTASection from '../components/common/CTASection.jsx';
import FAQSection from '../components/home/FAQSection.jsx';

export default function FAQ() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">FAQ</span>
        <h1>Questions about wooden pallets, plastic pallets, and crates</h1>
        <p>Quick answers for buyers requesting sizes, bulk quantities, export treatment, and UAE delivery.</p>
      </section>
      <FAQSection />
      <CTASection />
    </>
  );
}
