import { BadgeCheck, MessageCircle, Phone, Quote, Star } from 'lucide-react';

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I want to work with a trusted pallet supplier in UAE.')}`;

const testimonials = [
  ['Ahmed Logistics LLC', 'Excellent quality wooden pallets and fast delivery in Dubai.'],
  ['Al Noor Warehouse', 'Affordable pricing and custom pallet sizes exactly as required.'],
  ['Global Shipping UAE', 'Reliable export pallet supplier with great support.'],
  ['Industrial Packing Solutions', 'Wooden crates and pallets are always delivered on time.'],
  ['UAE Factory Supplies', 'Professional team and strong quality pallets for bulk orders.'],
  ['Gulf Storage Company', 'Best supplier for warehouse pallets and packaging materials.']
];

export default function Testimonials() {
  return (
    <>
      <section
        className="relative isolate min-h-[460px] bg-slate-950 text-white sm:min-h-[500px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 2, 79, 0.94), rgba(22, 17, 86, 0.86), rgba(2, 6, 23, 0.62)), url('https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=65&fm=webp')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="mx-auto flex min-h-[460px] max-w-7xl items-center px-4 py-16 sm:min-h-[500px] sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/10">Verified Reviews</span>
            <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">Client Testimonials</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl">
              Trusted by warehouses, factories, exporters, logistics companies, and industrial businesses across UAE.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/30 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> Get Free Quote
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700 shadow-sm">
              <BadgeCheck size={14} /> Trusted Feedback
            </span>
            <h2 className="mt-5 text-3xl font-black text-[#02024f] sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Premium pallet and packaging supply trusted by UAE businesses.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map(([name, review], index) => (
              <article className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-md shadow-slate-950/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-950/10" key={name}>
                <div className="flex items-start justify-between gap-4">
                  <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20">
                    <Quote size={23} />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    <BadgeCheck size={13} />
                    Verified Client
                  </span>
                </div>

                <div className="mt-5 flex gap-1 text-yellow-400" aria-label="5 star rating">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star className="transition duration-300 group-hover:scale-110" fill="currentColor" size={18} strokeWidth={0} style={{ transitionDelay: `${star * 40}ms` }} key={star} />
                  ))}
                </div>

                <p className="mt-5 text-base leading-8 text-slate-600">&quot;{review}&quot;</p>
                <h3 className="mt-7 text-xl font-black text-[#02024f]">{name}</h3>
                <span className="mt-2 block text-sm font-semibold text-indigo-700">UAE Industrial Client #{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#02024f] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Ready to Work With a Trusted Pallet Supplier?</h2>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> Request Quote
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971509253127">
            <Phone size={19} /> Call Now
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
