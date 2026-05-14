import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { formDataToInquiry, productOptions, submitInquiry } from '../../utils/inquiries.js';

const fieldClass = 'mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15';
const labelClass = 'text-sm font-bold text-slate-700';

export default function QuoteForm({ defaultProduct = '', source = 'quote-form', title = 'Request a Free Quote' }) {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus({ type: 'error', message: 'Please complete all required fields before submitting.' });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      const result = await submitInquiry(formDataToInquiry(form, source));
      setStatus({ type: 'success', message: result.message || 'Inquiry submitted successfully. Our team will contact you shortly.' });
      form.reset();
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5 lg:p-8" onSubmit={handleSubmit}>
      <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">
        Quote Form
      </span>
      <h2 className="mt-5 text-3xl font-black text-[#02024f]">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Share your requirements and our team will assist with fast pricing for UAE delivery.
      </p>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <label className={labelClass}>
          Full Name
          <input className={fieldClass} type="text" name="name" placeholder="Your full name" required minLength="2" autoComplete="name" />
        </label>
        <label className={labelClass}>
          Phone Number
          <input className={fieldClass} type="tel" inputMode="tel" name="phone" placeholder="+971 ..." required pattern="^[+0-9\\s-]{7,}$" autoComplete="tel" />
        </label>
        <label className={labelClass}>
          Email Address
          <input className={fieldClass} type="email" name="email" placeholder="you@example.com" required autoComplete="email" />
        </label>
        <label className={labelClass}>
          Product Type
          <select className={fieldClass} name="productType" defaultValue={defaultProduct} required>
            <option value="" disabled>Select product type</option>
            {productOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className={labelClass}>
          Quantity
          <input className={fieldClass} type="number" inputMode="numeric" name="quantity" min="1" placeholder="100" required />
        </label>
        <label className={`${labelClass} md:col-span-2`}>
          Message
          <textarea className={`${fieldClass} min-h-36 resize-y`} name="message" placeholder="Tell us product size, delivery location, load weight, or special requirements..." required minLength="10" />
        </label>
        <input className="hidden" type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      </div>

      <button className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition duration-300 hover:-translate-y-1 hover:shadow-sky-500/30 hover:from-violet-600 hover:to-sky-400 disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={submitting}>
        <MessageCircle size={19} />
        {submitting ? 'Sending Inquiry...' : 'Get Free Quote'}
      </button>

      {status && (
        <p
          className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}
          role={status.type === 'success' ? 'status' : 'alert'}
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
