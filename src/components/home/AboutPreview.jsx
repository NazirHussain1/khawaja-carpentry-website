import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

const points = [
  'Premium quality wooden pallets',
  'Custom pallet sizes available',
  'Bulk supply for factories and warehouses',
  'Fast delivery across UAE',
  'Affordable wholesale pricing',
  'Reliable service since 2009'
];

const stats = [
  ['15+', 'Years Experience'],
  ['500+', 'Happy Clients'],
  ['100K+', 'Pallets Supplied'],
  ['7', 'Emirates Covered']
];

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need a quote for wooden pallets.')}`;

export default function AboutPreview() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-3xl shadow-2xl shadow-slate-950/10 ring-1 ring-slate-200">
          <img
            className="h-full min-h-96 w-full object-cover"
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1100&q=80"
            alt="Wooden pallets stacked inside an industrial warehouse"
          />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">About Mujahid Hussain Carpentry</span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#02024f] sm:text-4xl">
            Trusted wooden pallet manufacturer and supplier in UAE since 2009.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Mujahid Hussain Carpentry is a leading manufacturer and supplier of wooden pallets, wooden crates, plastic
            pallets, and plastic jumbo bags in UAE. Based in Industrial Area Al Sajja, Sharjah, we serve customers
            across Dubai, Sharjah, JAFZA, Jebel Ali, Abu Dhabi, Ras Al Khaimah, Ajman, Fujairah, and all UAE.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li className="flex items-start gap-2 text-sm font-semibold text-slate-700" key={point}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm" key={label}>
                <strong className="block text-2xl font-black text-[#02024f]">{value}</strong>
                <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-slate-500">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-200 bg-white px-6 py-3 text-sm font-bold text-indigo-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-50"
              href="/about"
              data-spa-link="true"
            >
              Learn More <ArrowRight size={17} />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition duration-300 hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
