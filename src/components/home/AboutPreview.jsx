import { ArrowRight, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';

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

const videos = [
  ['Warehouse Operations', '/2711298-uhd_3840_2160_24fps.mp4'],
  ['Bulk Packaging', '/192778-893446884_medium.mp4'],
  ['Supply Workflow', '/166808-835670743_medium.mp4']
];

const whatsappUrl = `https://wa.me/971542046121?text=${encodeURIComponent('Hello, I need a quote for wooden pallets.')}`;

export default function AboutPreview() {
  return (
    <section className="bg-[#f7efe2] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">How We Support Your Supply Chain</span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#02024f] sm:text-4xl">
            Practical pallet and packaging support from request to delivery.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Share your product type, size, quantity, load weight, and delivery area. Our team helps you choose the right
            wooden pallet, plastic pallet, crate, or jumbo bag, then prepares the order for warehouse handling, export
            packing, factory dispatch, or bulk material movement.
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
              <div className="rounded-none border border-slate-200 bg-slate-50 p-4 text-center shadow-sm" key={label}>
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
              <WhatsAppIcon className="size-5" />
              Get Quote
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {videos.map(([title, src], index) => (
            <article className={`group relative min-h-56 overflow-hidden bg-[#2a170f] shadow-[0_18px_38px_rgba(63,36,23,0.14)] ${index === 0 ? 'sm:col-span-2 min-h-72' : ''}`} key={src}>
              <video
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a170f]/90 via-[#2a170f]/25 to-transparent" />
              <div className={`relative flex flex-col justify-end p-5 text-white ${index === 0 ? 'min-h-72' : 'min-h-56'}`}>
                <span className="text-xs font-black uppercase tracking-[0.18em] text-[#f3c16a]">{title}</span>
                <span className="mt-3 h-px w-20 bg-[#f3c16a]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
