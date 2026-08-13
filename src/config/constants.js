// Centralized configuration constants
import contactInfo from '../data/contactInfo.js';

export const WHATSAPP_NUMBER = contactInfo.whatsapp;
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const PRODUCT_IMAGE_BASE_URL = 'https://res.cloudinary.com/dqrldug5h/image/upload/v1786590697/khawaja-carpentry/';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// Cloudinary image mapping for product detail pages
export const CLOUDINARY_IMAGES = {
  // Wooden Pallets
  '80cm x 80cm.jpg': 'gvlxhu5tub1xya5e6nwl.webp',
  '80 cm x 120 cm.jpg': 'gvlxhu5tub1xya5e6nwl.webp',
  '90 cm x 110 cm.jpeg': 'iff96ytyfhmksuskt1kl.webp',
  '80 cm x 200 cm heavy duty.jpeg': 'a57buvlmujgv90f1k32q.webp',
  '90 cm x 90 cm.jpg': 'gvlxhu5tub1xya5e6nwl.webp',
  '95 cm x 95 cm.jpeg': 'gvlxhu5tub1xya5e6nwl.webp',
  '100 cm x 100 cm.jpg': 'gvlxhu5tub1xya5e6nwl.webp',
  '100 cm x 110 cm.jpg': 'iff96ytyfhmksuskt1kl.webp',
  '100 cm x 120 cm Heavy Duty.jpg': 'gvlxhu5tub1xya5e6nwl.webp',
  '100cm x 200 cm normal.jpeg': 'a57buvlmujgv90f1k32q.webp',
  '110 cm x 110 cm.jpeg': 'iff96ytyfhmksuskt1kl.webp',
  '110 cm x 130 cm.jpeg': 'iff96ytyfhmksuskt1kl.webp',
  'CP3 Pallets.jpg': 'zmohrfj5occsegwwl97q.webp',
  '120 cm x 120 cm heavy duty.jpg': 'gvlxhu5tub1xya5e6nwl.webp',
  '130cm x 130 cm.jpeg': 'gvlxhu5tub1xya5e6nwl.webp',
  'Euro Pallets.jpg': 'dbegytbei3vvaflnkfny.webp',
  '100cm x 120cm.jpg': 'gvlxhu5tub1xya5e6nwl.webp',
  
  // Wooden Crates
  'wooden boxes.jpeg': 'emja7hszpeitqkazbndq.webp',
  'wooden boxes heavy duty.jpeg': 'a57buvlmujgv90f1k32q.webp',
  'wooden boxes 100 x 100 cm.jpeg': 'kjh8lnzkbwucivdfport.webp',
  'wooden boxes 80 cm x 400 cm.jpeg': 'a57buvlmujgv90f1k32q.webp',
  
  // Plastic Pallets
  'plastic pallets.jpeg': 'm4gejoh6ibzeyxbbrlau.webp',
  'new plastic pallet normal duty.jpeg': 'd7jqiagljk0korncdhkr.webp',
  '100 cm x 120 cm heavy duty new plastic pallet.jpeg': 'edizp0jtgrjsuzfkoh34.webp',
  'plastic 100 cm x120 cm used heavu duty.jpeg': 'edizp0jtgrjsuzfkoh34.webp'
};

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
  // Check if we have a Cloudinary mapping for this image
  if (CLOUDINARY_IMAGES[filename]) {
    return `https://res.cloudinary.com/dqrldug5h/image/upload/v1786590697/khawaja-carpentry/${CLOUDINARY_IMAGES[filename]}`;
  }
  
  // Fallback to default (will show generic pallet image)
  return `https://res.cloudinary.com/dqrldug5h/image/upload/v1786590697/khawaja-carpentry/gvlxhu5tub1xya5e6nwl.webp`;
}
