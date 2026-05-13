import { CheckCircle2 } from 'lucide-react';
import { createWhatsAppUrl } from '../../utils/whatsapp.js';

const visualClasses = {
  'visual-pallet-stack': 'from-slate-900 via-slate-700 to-emerald-800',
  'visual-box': 'from-emerald-800 via-emerald-600 to-emerald-300',
  'visual-crate': 'from-slate-900 via-stone-700 to-emerald-900',
  'visual-warehouse': 'from-slate-950 via-slate-800 to-emerald-900'
};

export default function ProductDetails({ product }) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
        <div className={`min-h-96 rounded-lg bg-gradient-to-br ${visualClasses[product.imageClass] || visualClasses['visual-pallet-stack']} p-8 shadow-xl`} aria-hidden="true">
          <div className="flex h-80 items-end rounded-lg border border-white/20 bg-black/10 p-6">
            <div className="grid w-full gap-3">
              <div className="h-12 rounded bg-white/20" />
              <div className="h-12 rounded bg-white/25" />
              <div className="h-12 rounded bg-white/20" />
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{product.category}</span>
          <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">{product.title}</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">{product.summary}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {product.specs.map((spec) => (
              <li className="flex items-start gap-2 text-sm font-medium text-slate-700" key={spec}><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18} /> {spec}</li>
            ))}
          </ul>
          {product.details?.length > 0 && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.details.map((group) => (
                <article className="rounded-lg border border-slate-200 bg-slate-50 p-5" key={group.title}>
                  <h3 className="font-bold text-slate-950">{group.title}</h3>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          )}
          <a
            className="mt-8 inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
            href={createWhatsAppUrl(`Hello, I need a quote for ${product.title}.`)}
            target="_blank"
            rel="noreferrer"
          >
            Request Product Quote
          </a>
        </div>
      </div>
    </section>
  );
}
