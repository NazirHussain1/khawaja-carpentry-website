import { useState } from 'react';
import { submitInquiry } from '../../utils/inquiries.js';
import { createTelUrl, createWhatsAppUrl } from '../../utils/whatsapp.js';

const fieldClass = 'mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20';
const labelClass = 'text-sm font-semibold text-slate-700';

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const inquiry = {
      name: formData.get('name') || '',
      phone: formData.get('phone') || '',
      email: formData.get('email') || '',
      productType: 'Custom Orders',
      message: formData.get('message') || '',
      source: 'contact-form'
    };

    setSubmitting(true);
    setStatus(null);
    try {
      const result = await submitInquiry(inquiry);
      setStatus({ type: 'success', message: result.message || 'Inquiry submitted successfully. Our team will contact you shortly.' });
      form.reset();
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message,
        whatsappUrl: createWhatsAppUrl(formatContactMessage(inquiry)),
        callUrl: createTelUrl()
      });
    } finally {
      setSubmitting(false);
    }
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
      <button className="mt-6 w-full rounded-md bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>
      {status && (
        <div className={`mt-4 rounded-md px-4 py-3 text-sm font-semibold ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`} role={status.type === 'success' ? 'status' : 'alert'} aria-live="polite">
          <p>{status.message}</p>
          {status.type === 'error' && (
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <a className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white transition hover:bg-emerald-500" href={status.whatsappUrl} target="_blank" rel="noreferrer">
                Send on WhatsApp
              </a>
              <a className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-black text-red-700 ring-1 ring-red-200 transition hover:bg-red-50" href={status.callUrl}>
                Call Now
              </a>
            </div>
          )}
        </div>
      )}
    </form>
  );
}

function formatContactMessage(inquiry) {
  return [
    'Hello, I need assistance.',
    `Name: ${inquiry.name}`,
    `Phone: ${inquiry.phone}`,
    inquiry.message ? `Message: ${inquiry.message}` : ''
  ].filter(Boolean).join('\n');
}
