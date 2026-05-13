import { BadgeDollarSign, Factory, MessageCircle, Truck } from 'lucide-react';

const steps = [
  {
    title: 'Request Quote',
    description: 'Contact us by phone, WhatsApp, or quote form with your pallet or packaging requirements.',
    icon: MessageCircle
  },
  {
    title: 'Get Best Pricing',
    description: 'Our team provides competitive pricing and customized solutions based on your quantity and specifications.',
    icon: BadgeDollarSign
  },
  {
    title: 'Manufacturing & Preparation',
    description: 'We manufacture or prepare wooden pallets, crates, plastic pallets, or jumbo bags according to your order.',
    icon: Factory
  },
  {
    title: 'Fast UAE Delivery',
    description: 'Your order is delivered quickly and safely across Dubai, Sharjah, Abu Dhabi, JAFZA, and all UAE.',
    icon: Truck
  }
];

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need a free quote for pallets and packaging.')}`;

export default function HowWeWork() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Process</span>
          <h2 className="mt-3 text-3xl font-black text-[#02024f] sm:text-4xl">How Our Process Works</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Simple and fast process for ordering wooden pallets and industrial packaging solutions in UAE.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-indigo-200 via-sky-300 to-indigo-200 lg:block" aria-hidden="true" />
          {steps.map(({ title, description, icon: Icon }, index) => (
            <article className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-md shadow-slate-950/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-950/10" key={title}>
              <div className="relative mx-auto grid size-20 place-items-center rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-xl shadow-indigo-950/20 transition duration-300 group-hover:shadow-sky-500/40">
                <Icon size={30} />
                <span className="absolute -right-2 -top-2 grid size-9 place-items-center rounded-full border-4 border-white bg-[#02024f] text-xs font-black text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-black text-[#02024f]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
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
            <MessageCircle size={19} />
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
