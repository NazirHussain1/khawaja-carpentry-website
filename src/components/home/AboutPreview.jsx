import { CheckCircle2 } from 'lucide-react';

const points = [
  'Manufacturing new wooden pallets in all sizes',
  'Refurbishing and repairing used pallets',
  'Selling used and new plastic pallets',
  'Custom wooden crates for export',
  'ISPM-15 heat treatment certified',
  'Fast delivery across UAE'
];

export default function AboutPreview() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="min-h-80 rounded-lg bg-gradient-to-br from-slate-900 via-slate-700 to-emerald-900 p-6 shadow-xl">
          <div className="grid h-full min-h-72 grid-cols-3 gap-4">
            <div className="rounded bg-white/10" />
            <div className="rounded bg-emerald-300/40" />
            <div className="rounded bg-white/10" />
            <div className="col-span-3 rounded bg-black/20" />
          </div>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Trusted Since 2009</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Trusted Wooden Pallet Supplier in UAE Since 2009</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Khawaja-Carpentry-WoodPallets is a leading manufacturer, supplier, and repairer of wooden pallets based in
            Sharjah, UAE. With over 15 years of industry experience, we specialize in high-quality new and refurbished
            wooden pallets, plastic pallets, and custom wooden crates for businesses across Dubai, Abu Dhabi, JAFZA,
            Ras Al Khaimah, Mussafah, Jabal Ali, and Umm Al Quwain.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li className="flex items-start gap-2 text-sm font-medium text-slate-700" key={point}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18} /> {point}
              </li>
            ))}
          </ul>
          <a className="mt-7 inline-flex rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800" href="#/about">Read more about us</a>
        </div>
      </div>
    </section>
  );
}
