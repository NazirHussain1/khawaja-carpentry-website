import CTASection from '../components/common/CTASection.jsx';
import ServicesSection from '../components/home/ServicesSection.jsx';
import HowWeWork from '../components/home/HowWeWork.jsx';

export default function Services() {
  return (
    <>
      <section className="bg-slate-950 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Services</span>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Main Services</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">Complete pallet manufacturing, repair, crating, export packaging, and bulk supply support across UAE.</p>
        </div>
      </section>
      <ServicesSection />
      <HowWeWork />
      <CTASection />
    </>
  );
}
