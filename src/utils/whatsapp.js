import contactInfo from '../data/contactInfo.js';

export function createWhatsAppUrl(message = 'Hello, I need a quote for wooden pallets.') {
  const phone = contactInfo.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function createTelUrl(phone = contactInfo.phone) {
  return `tel:${phone.replace(/\s/g, '')}`;
}

export function createMailUrl(email = contactInfo.email) {
  return `mailto:${email}`;
}
