import { BadgeDollarSign, Factory, Truck } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';

const steps = [
  {
    title: 'Request Quote',
    description: 'Contact us by phone, WhatsApp, or quote form with your pallet or packaging requirements.',
    icon: WhatsAppIcon,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Get Best Pricing',
    description: 'Our team provides competitive pricing and customized solutions based on your quantity and specifications.',
    icon: BadgeDollarSign,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Manufacturing & Preparation',
    description: 'We manufacture or prepare wooden pallets, crates, plastic pallets, or jumbo bags according to your order.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Fast UAE Delivery',
    description: 'Your order is delivered quickly and safely across Dubai, Sharjah, Abu Dhabi, JAFZA, and all UAE.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=85'
  }
];

const whatsappUrl = `https://wa.me/971542046121?text=${encodeURIComponent('Hello, I need a free quote for pallets and packaging.')}`;

export default function HowWeWork() {
  return (
    <section className="bg-[#fffefa] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#52837d]">Process</span>
          <h2 className="mt-3 font-serif text-4xl font-normal text-[#173b42] sm:text-5xl">How Our Process Works</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Simple and fast process for ordering wooden pallets and industrial packaging solutions in UAE.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-indigo-200 via-sky-300 to-indigo-200 lg:block" aria-hidden="true" />
          {steps.map(({ title, description, icon: Icon, image }) => (
            <article className="group relative min-h-80 overflow-hidden bg-slate-900 text-left text-white" key={title}>
              <img className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src={image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-slate-950/10 transition duration-500 group-hover:via-slate-950/75" />
              <div className="relative flex min-h-80 flex-col justify-end p-6">
                <div className="flex items-center text-sky-200">
                  <Icon size={23} />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-normal">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
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
    </section>
  );
}
