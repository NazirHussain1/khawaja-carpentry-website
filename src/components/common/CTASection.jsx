import { ArrowRight } from 'lucide-react';
import contactInfo from '../../data/contactInfo.js';
import { createWhatsAppUrl } from '../../utils/whatsapp.js';
import { CallIcon } from './ContactIcons.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function CTASection() {
  return (
    <section className="bg-slate-900 px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Fast UAE Supply</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Need wooden pallets, plastic pallets, crates, or jumbo bags?</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">Share your pallet type, size, quantity, and location. We will prepare custom pricing for your order.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] sm:w-auto" href={createWhatsAppUrl('Hello, I need an instant quote for pallets.')} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" /> Get Quote <ArrowRight size={18} />
          </a>
          <a className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
            <CallIcon className="size-5" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
