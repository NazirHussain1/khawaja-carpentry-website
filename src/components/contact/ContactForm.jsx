import { useState } from 'react';

const fieldClass = 'mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20';
const labelClass = 'text-sm font-semibold text-slate-700';

export default function ContactForm() {
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
      <h3 className="text-2xl font-black text-slate-950">Send a message</h3>
      <div className="mt-6 grid gap-5">
        <label className={labelClass}>
          Name
          <input className={fieldClass} type="text" name="name" placeholder="Your name" required minLength="2" />
        </label>
        <label className={labelClass}>
          Phone
          <input className={fieldClass} type="tel" name="phone" placeholder="033..." required pattern="^[+0-9\\s-]{7,}$" />
        </label>
        <label className={labelClass}>
          Email
          <input className={fieldClass} type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label className={labelClass}>
          Message
          <textarea className={`${fieldClass} min-h-32 resize-y`} name="message" placeholder="Tell us what you need" required minLength="10" />
        </label>
      </div>
      <button className="mt-6 w-full rounded-md bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-500" type="submit">Submit Inquiry</button>
      {submitted && <p className="mt-4 rounded-md bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Thanks. Your inquiry is ready for follow-up.</p>}
    </form>
  );
}
