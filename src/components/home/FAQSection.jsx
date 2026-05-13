import faqs from '../../data/faqs.js';

export default function FAQSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">FAQ</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Common questions before requesting a quote</h2>
        </div>
        <div className="mt-10 grid gap-3">
          {faqs.map((faq) => (
            <details className="group rounded-lg border border-slate-200 bg-slate-50 p-5" key={faq.question}>
              <summary className="cursor-pointer list-none text-base font-bold text-slate-950">{faq.question}</summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
