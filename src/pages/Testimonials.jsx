import CTASection from '../components/common/CTASection.jsx';
import TestimonialsSection from '../components/home/TestimonialsSection.jsx';

export default function Testimonials() {
  return (
    <>
      <section className="bg-slate-950 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Testimonials</span>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Buyer feedback from logistics and industrial teams</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">Use this page for real customer reviews once client-approved testimonials are collected.</p>
        </div>
      </section>
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
