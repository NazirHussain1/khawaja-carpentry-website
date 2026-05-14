const contactInfo = {
  businessName: 'Mujahid Hussain Carpentry',
  tagline: 'Premium Wooden Pallets Manufacturer & Supplier in UAE',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+971 50 92 53127',
  secondaryPhone: import.meta.env.VITE_CONTACT_SECONDARY_PHONE || '+971 52 51 73794',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '971509253127',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'mujahidhussaincarpentry@gmail.com',
  address: 'Industrial Area Al Sajja, Sharjah, UAE',
  serviceArea: 'Dubai, Sharjah, JAFZA, Jabal Ali, Mussafah, Ras Al Khaimah, Umm Al Quwain, Abu Dhabi, Ajman, Fujairah',
  hours: 'Monday - Saturday: 8:00 AM - 7:00 PM',
  quoteMessage: 'Send pallet type, size, quantity, and delivery location for custom pricing.',
  mapsUrl: 'https://www.google.com/maps?q=Industrial%20Area%20Al%20Sajja%2C%20Sharjah%2C%20UAE',
  mapEmbedUrl: 'https://www.google.com/maps?q=Industrial%20Area%20Al%20Sajja%2C%20Sharjah%2C%20UAE&output=embed',
  socialLinks: [
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' }
  ]
};

export default contactInfo;
