import testimonials from '../../data/testimonials.js';

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Testimonials</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Trusted by operations and procurement teams</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article className="rounded-lg border border-white/10 bg-white/5 p-6" key={`${item.name}-${item.company}`}>
              <p className="text-sm leading-7 text-slate-200">&quot;{item.quote}&quot;</p>
              <h4 className="mt-5 font-bold text-white">{item.name}</h4>
              <span className="text-sm text-emerald-300">{item.company}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
