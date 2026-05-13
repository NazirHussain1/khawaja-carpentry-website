const steps = [
  ['Request a Quote', 'Contact us via phone, WhatsApp, or email.'],
  ['Get Custom Pricing', 'We provide pricing based on pallet type, size, quantity, and location.'],
  ['Manufacturing', 'Our skilled carpenters prepare pallets using quality timber.'],
  ['Fast Delivery', 'We deliver directly to your warehouse, factory, or site across UAE.']
];

export default function HowWeWork() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">How We Work</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">From quote request to delivery at your site</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map(([title, text], index) => (
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={title}>
              <span className="grid size-10 place-items-center rounded-md bg-slate-950 text-sm font-black text-emerald-300">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
