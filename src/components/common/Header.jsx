import { Phone } from 'lucide-react';
import Navbar from './Navbar.jsx';
import contactInfo from '../../data/contactInfo.js';

export default function Header({ activePage }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 shadow-lg backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a className="flex min-w-0 flex-1 items-center gap-3 text-white lg:flex-none" href="#/home" aria-label="Khawaja-Carpentry-WoodPallets home">
          <span className="grid size-11 shrink-0 place-items-center rounded-md bg-emerald-500 text-sm font-black text-white">KC</span>
          <span className="min-w-0">
            <strong className="block truncate text-sm font-bold sm:text-base">{contactInfo.businessName}</strong>
            <small className="block truncate text-xs text-slate-300">{contactInfo.tagline}</small>
          </span>
        </a>
        <Navbar activePage={activePage} />
        <a className="hidden items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500 xl:inline-flex" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
          <Phone size={18} />
          <span>{contactInfo.phone}</span>
        </a>
      </div>
    </header>
  );
}
