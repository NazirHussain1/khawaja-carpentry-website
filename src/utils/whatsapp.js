import contactInfo from '../data/contactInfo.js';

export function createWhatsAppUrl(message = 'Hello, I need a quote for wooden pallets.') {
  const phone = contactInfo.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
