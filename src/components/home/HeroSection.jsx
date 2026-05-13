import { ArrowRight, Boxes, Clock, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import { createWhatsAppUrl } from '../../utils/whatsapp.js';
import contactInfo from '../../data/contactInfo.js';

export default function HeroSection() {
  const badges = ['ISPM-15 Certified', 'Fast UAE Delivery', 'Custom Sizes Available', 'Bulk Orders Accepted', 'New & Used Pallets'];

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">#1 Wooden Pallet Supplier in UAE</span>
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Premium Wooden Pallets, Plastic Pallets & Wooden Crates Manufacturer in UAE</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {contactInfo.businessName} is a trusted manufacturer and supplier of high-quality wooden pallets, plastic
            pallets, export crates, and industrial packaging solutions in UAE. Serving businesses across Dubai, Sharjah,
            Abu Dhabi, JAFZA, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain since 2009.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200" key={badge}>{badge}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-500" href={createWhatsAppUrl('Hello, I need an instant quote for pallets.')} target="_blank" rel="noreferrer">
              Get Instant Quote <ArrowRight size={18} />
            </a>
            <a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10" href={createWhatsAppUrl('Hello, I want to discuss pallets on WhatsApp.')} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            <span className="flex items-center gap-2"><ShieldCheck className="text-emerald-400" size={18} /> <strong className="text-white">15+</strong> Years Experience</span>
            <span className="flex items-center gap-2"><Boxes className="text-emerald-400" size={18} /> <strong className="text-white">5000+</strong> Bulk Orders Completed</span>
            <span className="flex items-center gap-2"><Clock className="text-emerald-400" size={18} /> <strong className="text-white">24-48</strong> Hours Delivery</span>
            <span className="flex items-center gap-2"><Truck className="text-emerald-400" size={18} /> All 7 Emirates Covered</span>
          </div>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 p-6 shadow-2xl">
          <div className="absolute inset-6 rounded-lg border border-emerald-300/20" />
          <div className="relative flex h-full min-h-72 items-end justify-center">
            <div className="grid w-full max-w-md gap-4">
              {[0, 1, 2].map((row) => (
                <div className="grid grid-cols-5 gap-3" key={row}>
                  {[0, 1, 2, 3, 4].map((piece) => (
                    <span className="h-10 rounded bg-slate-500 shadow-lg shadow-black/30" key={piece} />
                  ))}
                </div>
              ))}
              <div className="mt-4 grid grid-cols-3 gap-6 px-8">
                <span className="h-16 rounded bg-slate-700" />
                <span className="h-16 rounded bg-slate-700" />
                <span className="h-16 rounded bg-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
