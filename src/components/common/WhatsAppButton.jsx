import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../../utils/whatsapp.js';

export default function WhatsAppButton() {
  return (
    <a className="fixed bottom-5 right-4 z-40 inline-flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border border-white/20 bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/25 transition hover:-translate-y-0.5 hover:bg-emerald-500 sm:right-5" href={createWhatsAppUrl('Hello, I need an instant quote for pallets.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <MessageCircle size={20} />
      <span>WhatsApp</span>
    </a>
  );
}
