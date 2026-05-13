import ContactInfo from '../components/contact/ContactInfo.jsx';
import QuoteForm from '../components/contact/QuoteForm.jsx';

export default function GetQuote() {
  return (
    <>
      <section className="bg-slate-950 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Get Quote</span>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Request a Free Quote</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">Contact us for wooden pallets, plastic pallets, wooden crates, and jumbo bags anywhere in UAE.</p>
        </div>
      </section>
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <ContactInfo />
        <QuoteForm />
        </div>
      </section>
    </>
  );
}
