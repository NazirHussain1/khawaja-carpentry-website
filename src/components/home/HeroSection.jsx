import { CheckCircle2, Trophy } from 'lucide-react';
import { CallIcon } from '../common/ContactIcons.jsx';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';

const whatsappUrl = `https://wa.me/923321716508?text=${encodeURIComponent('Hello, I need a free quote for wooden pallets.')}`;
const trustPoints = ['Since 2009', 'Fast UAE Delivery', 'Custom Sizes Available', 'Bulk Orders Welcome'];

export default function HeroSection() {
  return (
    <section
      className="relative isolate min-h-[560px] overflow-hidden bg-slate-950 text-white sm:min-h-[650px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(2, 2, 79, 0.95) 0%, rgba(25, 18, 92, 0.88) 46%, rgba(2, 6, 23, 0.66) 100%), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=65&fm=webp')",
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_32%,rgba(99,102,241,0.34),transparent_34%),linear-gradient(180deg,rgba(2,2,79,0.10),rgba(2,2,79,0.62))]" />

      <div className="mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-16 sm:min-h-[650px] sm:px-6 sm:py-20 lg:px-8">
        <div className="animate-hero-enter mx-auto max-w-4xl text-center lg:mx-0 lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-violet-500/20 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-violet-950/20 backdrop-blur">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.15)]" />
            <Trophy className="text-sky-200" size={15} />
            #1 Rated Pallet Supplier in UAE
          </div>

          <h1 className="mt-7 text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Premium{' '}
            <span className="bg-gradient-to-r from-sky-300 via-indigo-200 to-violet-300 bg-clip-text text-transparent">
              Wooden Pallets
            </span>{' '}
            Manufacturer & Supplier in UAE
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg lg:text-xl">
            Trusted manufacturer and supplier of wooden pallets, plastic pallets, wooden crates, and plastic jumbo bags
            in Dubai, Sharjah, JAFZA, Abu Dhabi, Ras Al Khaimah, and all UAE.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/35 transition duration-300 hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400 sm:w-auto"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="size-5" />
              Get Free Quote
            </a>
            <a
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-slate-950/40 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/70 hover:bg-white/10 sm:w-auto"
              href="tel:+923321716508"
            >
              <CallIcon className="size-5" />
              Call Now
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {trustPoints.map((point) => (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 backdrop-blur" key={point}>
                <CheckCircle2 className="text-emerald-300" size={17} />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
