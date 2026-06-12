import { MapPin, Navigation } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';

const locations = [
  {
    city: 'Dubai',
    description: 'Fast pallet delivery for warehouses, factories, and logistics businesses in Dubai.'
  },
  {
    city: 'Sharjah',
    description: 'Trusted wooden pallet supplier serving industrial areas across Sharjah.'
  },
  {
    city: 'Abu Dhabi',
    description: 'Bulk supply of pallets and crates for industrial and commercial businesses.'
  },
  {
    city: 'JAFZA',
    description: 'Export-standard pallets and wooden crates for JAFZA logistics and shipping companies.'
  },
  {
    city: 'Jebel Ali',
    description: 'Reliable pallet solutions for warehouses and cargo operations in Jebel Ali.'
  },
  {
    city: 'Ras Al Khaimah',
    description: 'Affordable pallet and packaging supply for factories and industrial customers.'
  },
  {
    city: 'Ajman',
    description: 'Quick supply of wooden pallets and packaging materials in Ajman.'
  },
  {
    city: 'Fujairah',
    description: 'Industrial pallet and crate delivery services across Fujairah.'
  }
];

const whatsappUrl = `https://wa.me/923321716508?text=${encodeURIComponent('Hello, I need pallets anywhere in UAE.')}`;

export default function IndustriesSection() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700 shadow-sm">
              <Navigation size={14} />
              Areas We Serve
            </span>
            <h2 className="mt-5 text-3xl font-black text-[#02024f] sm:text-4xl">Serving All Emirates Across UAE</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Reliable wooden pallet and packaging supply services across major industrial and commercial areas in UAE.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We supply wooden pallets, plastic pallets, wooden crates, and jumbo bags to warehouses, factories,
              logistics companies, exporters, and industrial businesses throughout UAE.
            </p>
          </div>

          <div className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-xl shadow-slate-950/5">
            <div className="relative mx-auto aspect-[4/2.3] max-w-md rounded-2xl bg-gradient-to-br from-[#02024f] via-indigo-900 to-sky-700 p-6 text-white">
              <div className="absolute left-[18%] top-[35%] size-4 rounded-full bg-sky-300 shadow-[0_0_0_8px_rgba(125,211,252,0.16)]" />
              <div className="absolute right-[25%] top-[28%] size-3 rounded-full bg-indigo-200 shadow-[0_0_0_8px_rgba(199,210,254,0.14)]" />
              <div className="absolute bottom-[24%] left-[45%] size-5 rounded-full bg-emerald-300 shadow-[0_0_0_10px_rgba(110,231,183,0.15)]" />
              <MapPin className="absolute bottom-6 right-6 text-white/80" size={42} />
              <div className="absolute inset-x-6 top-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-100">UAE Coverage</p>
                <strong className="mt-2 block text-3xl font-black">7 Emirates</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {locations.map((location) => (
            <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-950/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-950/10" key={location.city}>
              <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20 transition duration-300 group-hover:shadow-sky-500/35">
                <MapPin size={23} />
              </div>
              <h3 className="mt-5 text-xl font-black text-[#02024f]">{location.city}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{location.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#02024f] px-6 py-8 text-center text-white shadow-2xl shadow-slate-950/10">
          <h3 className="text-2xl font-black">Need pallets anywhere in UAE?</h3>
          <div className="mt-5 flex justify-center">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition duration-300 hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="size-5" />
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
