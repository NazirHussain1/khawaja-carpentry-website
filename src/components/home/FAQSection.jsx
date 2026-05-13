import { Minus, MessageCircle, Phone, Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What types of pallets do you supply?',
    answer: 'We supply wooden pallets, plastic pallets, wooden crates, and plastic jumbo bags for warehouses, factories, exporters, logistics, and industrial businesses across UAE.'
  },
  {
    question: 'Do you provide custom pallet sizes?',
    answer: 'Yes, we manufacture custom wooden pallets and wooden crates according to your required dimensions and load capacity.'
  },
  {
    question: 'Which UAE locations do you serve?',
    answer: 'We provide delivery services across Dubai, Sharjah, Abu Dhabi, JAFZA, Jebel Ali, Ras Al Khaimah, Ajman, Fujairah, and all Emirates.'
  },
  {
    question: 'Do you offer bulk pallet supply?',
    answer: 'Yes, we handle bulk and wholesale orders for warehouses, factories, shipping companies, and industrial businesses.'
  },
  {
    question: 'Are your pallets export standard?',
    answer: 'Yes, we provide export-quality wooden pallets and crates suitable for international shipping requirements.'
  },
  {
    question: 'How can I request a quotation?',
    answer: 'You can contact us directly by phone, WhatsApp, email, or through the website quote form for fast pricing assistance.'
  }
];

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I have questions about pallets and packaging.')}`;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700 shadow-sm">
            FAQ
          </span>
          <h2 className="mt-5 text-3xl font-black text-[#02024f] sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Common questions about wooden pallets, wooden crates, plastic pallets, jumbo bags, pricing, delivery, and custom orders in UAE.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article className={`overflow-hidden rounded-2xl border bg-white shadow-md shadow-slate-950/5 transition duration-300 hover:border-indigo-200 hover:shadow-lg ${isOpen ? 'border-indigo-300' : 'border-slate-200'}`} key={faq.question}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-black text-[#02024f] sm:text-lg">{faq.question}</span>
                  <span className={`grid size-9 shrink-0 place-items-center rounded-full text-white transition duration-300 ${isOpen ? 'bg-sky-500' : 'bg-indigo-600'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl bg-[#02024f] px-6 py-8 text-center text-white shadow-2xl shadow-slate-950/10">
          <h3 className="text-2xl font-black">Still have questions?</h3>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition duration-300 hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              href="tel:+971509253127"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
