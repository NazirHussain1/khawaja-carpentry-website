import CTASection from '../components/common/CTASection.jsx';
import FAQSection from '../components/home/FAQSection.jsx';

export default function FAQ() {
  return (
    <>
      <section className="bg-slate-950 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">FAQ</span>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Questions about wooden pallets, plastic pallets, and crates</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">Quick answers for buyers requesting sizes, bulk quantities, export treatment, and UAE delivery.</p>
        </div>
      </section>
      <FAQSection />
      <CTASection />
    </>
  );
}
