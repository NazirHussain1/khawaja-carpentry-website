import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const fieldClass = 'mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15';
const labelClass = 'text-sm font-bold text-slate-700';
const whatsappNumber = '971509253127';

export default function QuoteForm() {
  const [status, setStatus] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus({ type: 'error', message: 'Please complete all required fields before submitting.' });
      return;
    }

    const formData = new FormData(form);
    const message = [
      'Hello, I need a free quote.',
      `Full Name: ${formData.get('fullName')}`,
      `Phone Number: ${formData.get('phone')}`,
      `Email Address: ${formData.get('email')}`,
      `Product Type: ${formData.get('productType')}`,
      `Quantity: ${formData.get('quantity')}`,
      `Message: ${formData.get('message')}`
    ].join('\n');

    setStatus({ type: 'success', message: 'Your quote request is ready. WhatsApp will open with your details.' });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    form.reset();
  }

  return (
    <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5 lg:p-8" onSubmit={handleSubmit}>
      <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">
        Quote Form
      </span>
      <h2 className="mt-5 text-3xl font-black text-[#02024f]">Request a Free Quote</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Share your requirements and our team will assist with fast pricing for UAE delivery.
      </p>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <label className={labelClass}>
          Full Name
          <input className={fieldClass} type="text" name="fullName" placeholder="Your full name" required minLength="2" />
        </label>
        <label className={labelClass}>
          Phone Number
          <input className={fieldClass} type="tel" inputMode="tel" name="phone" placeholder="+971 ..." required pattern="^[+0-9\\s-]{7,}$" />
        </label>
        <label className={labelClass}>
          Email Address
          <input className={fieldClass} type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label className={labelClass}>
          Product Type
          <select className={fieldClass} name="productType" defaultValue="" required>
            <option value="" disabled>Select product type</option>
            <option>Wooden Pallets</option>
            <option>Wooden Crates</option>
            <option>Plastic Pallets</option>
            <option>Plastic Jumbo Bags</option>
            <option>Custom Order</option>
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
      </div>

      <button className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition duration-300 hover:-translate-y-1 hover:shadow-sky-500/30 hover:from-violet-600 hover:to-sky-400" type="submit">
        <MessageCircle size={19} />
        Get Free Quote
      </button>

      {status && (
        <p className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
