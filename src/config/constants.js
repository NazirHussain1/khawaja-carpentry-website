// Centralized configuration constants
import contactInfo from '../data/contactInfo.js';

export const WHATSAPP_NUMBER = contactInfo.whatsapp;
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const PRODUCT_IMAGE_BASE_URL = import.meta.env.VITE_PRODUCT_IMAGE_BASE_URL || 'https://mujahidhussaincarpentry.store/images/';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const PHONE_NUMBERS = {
  primary: contactInfo.phone,
  secondary: contactInfo.secondaryPhone,
  whatsapp: contactInfo.whatsapp
};

export const CONTACT = {
  email: contactInfo.email,
  address: contactInfo.address,
  businessName: contactInfo.businessName,
  trn: contactInfo.trn
};

// Helper function to create WhatsApp URL with custom message
export function createWhatsAppUrl(message) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

// Helper function to get image URL
export function getImageUrl(filename) {
  return `${PRODUCT_IMAGE_BASE_URL}${encodeURIComponent(filename)}`;
}
