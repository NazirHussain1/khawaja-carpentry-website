import { BadgeCheck, Quote, Star } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';

const testimonials = [
  {
    name: 'Ahmed Logistics LLC',
    review: 'Excellent quality wooden pallets and very fast delivery service in Dubai. Highly recommended supplier.'
  },
  {
    name: 'Al Noor Warehouse',
    review: 'Professional company with affordable pricing and custom pallet sizes exactly as required.'
  },
  {
    name: 'Global Shipping UAE',
    review: 'Reliable pallet supplier for export shipments and warehouse operations. Great customer support.'
  },
  {
    name: 'Industrial Packing Solutions',
    review: 'We regularly order wooden crates and pallets in bulk. Always delivered on time with good quality.'
  }
];

const whatsappUrl = `https://wa.me/923321716508?text=${encodeURIComponent('Hello, I need a free quote from a trusted pallet supplier in UAE.')}`;

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">
            <BadgeCheck size={14} />
            Verified Client Reviews
          </span>
          <h2 className="mt-5 text-3xl font-black text-[#02024f] sm:text-4xl">Client Testimonials</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Trusted by warehouses, factories, exporters, and logistics companies across UAE.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <article className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-md shadow-slate-950/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-950/10" key={item.name}>
              <div className="flex items-start justify-between gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20">
                  <Quote size={23} />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  <BadgeCheck size={13} />
                  Verified
                </span>
              </div>

              <div className="mt-5 flex gap-1 text-yellow-400" aria-label="5 star rating">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star fill="currentColor" size={18} strokeWidth={0} key={star} />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">&quot;{item.review}&quot;</p>
              <h3 className="mt-6 text-lg font-black text-[#02024f]">{item.name}</h3>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#02024f] px-6 py-8 text-center text-white shadow-2xl shadow-slate-950/10">
          <h3 className="text-2xl font-black">Looking for a trusted pallet supplier in UAE?</h3>
          <div className="mt-5 flex justify-center">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition duration-300 hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="size-5" />
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
