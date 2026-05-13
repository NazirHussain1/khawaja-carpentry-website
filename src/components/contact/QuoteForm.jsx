import { useState } from 'react';

const fieldClass = 'mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20';
const labelClass = 'text-sm font-semibold text-slate-700';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-black text-slate-950">Request a quote</h3>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <label className={labelClass}>
          Product Type
          <select className={fieldClass} name="productType" defaultValue="" required>
            <option value="" disabled>Select product</option>
            <option>Wooden pallets</option>
            <option>Plastic pallets</option>
            <option>Wooden crates</option>
            <option>Plastic jumbo bags</option>
            <option>Export boxes</option>
            <option>Used pallets</option>
            <option>Repaired pallets</option>
          </select>
        </label>
        <label className={labelClass}>
          Quantity
          <input className={fieldClass} type="number" name="quantity" min="1" placeholder="100" required />
        </label>
        <label className={labelClass}>
          Size / Dimensions
          <input className={fieldClass} type="text" name="dimensions" placeholder="Length x width x height" required />
        </label>
        <label className={labelClass}>
          Delivery Emirate
          <input className={fieldClass} type="text" name="delivery" placeholder="Dubai, Sharjah..." required />
        </label>
      </div>
      <label className={`${labelClass} mt-5 block`}>
        Requirements
        <textarea className={`${fieldClass} min-h-32 resize-y`} name="requirements" placeholder="Load weight, export need, delivery date, drawings..." required minLength="10" />
      </label>
      <button className="mt-6 w-full rounded-md bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-500" type="submit">Send Quote Request</button>
      {submitted && <p className="mt-4 rounded-md bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Quote request validated. Connect backend/email to receive submissions.</p>}
    </form>
  );
}
