import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../../utils/whatsapp.js';

export default function WhatsAppButton() {
  return (
    <a className="whatsapp-button" href={createWhatsAppUrl('Hello, I need an instant quote for pallets.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <MessageCircle size={24} />
    </a>
  );
}
