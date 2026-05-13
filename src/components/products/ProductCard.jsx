import { ArrowRight } from 'lucide-react';

const visualClasses = {
  'visual-pallet-stack': 'from-slate-900 via-slate-700 to-emerald-800',
  'visual-box': 'from-emerald-800 via-emerald-600 to-emerald-300',
  'visual-crate': 'from-slate-900 via-stone-700 to-emerald-900',
  'visual-warehouse': 'from-slate-950 via-slate-800 to-emerald-900'
};

export default function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`h-44 bg-gradient-to-br ${visualClasses[product.imageClass] || visualClasses['visual-pallet-stack']}`} aria-hidden="true">
        <div className="flex h-full items-end p-5">
          <div className="h-16 w-full rounded-md bg-white/20 backdrop-blur-sm" />
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">{product.category}</span>
        <h3 className="mt-3 text-xl font-black text-slate-950">{product.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{product.summary}</p>
        <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-600" href={`#/products/${product.slug}`}>
          View details <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}
