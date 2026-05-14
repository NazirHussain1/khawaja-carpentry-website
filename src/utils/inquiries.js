import { trackEvent } from './analytics.js';

const endpoint = `${import.meta.env.VITE_API_BASE_URL || ''}/api/inquiries`;

export const productOptions = [
  'Wooden Pallets',
  'Wooden Crates',
  'Plastic Pallets',
  'Jumbo Bags',
  'Custom Orders'
];

export async function submitInquiry(payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString()
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Unable to submit inquiry right now. Please try WhatsApp or call us.');
  }

  trackEvent('quote_request', {
    category: payload.productType || payload.category || 'Custom Orders',
    source: payload.source || 'website'
  });

  return data;
}

export function formDataToInquiry(form, source) {
  const formData = new FormData(form);
  return {
    name: formData.get('name') || formData.get('fullName') || '',
    phone: formData.get('phone') || '',
    email: formData.get('email') || '',
    productType: formData.get('productType') || 'Custom Orders',
    quantity: formData.get('quantity') || '',
    city: formData.get('city') || '',
    message: formData.get('message') || '',
    website: formData.get('website') || '',
    source
  };
}
