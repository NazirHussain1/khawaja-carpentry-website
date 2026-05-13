const contactInfo = {
  businessName: 'Khawaja-Carpentry-WoodPallets',
  tagline: 'Premium Wooden Pallets Manufacturer & Supplier in UAE',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+971 58 844 1600',
  secondaryPhone: '',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '971588441600',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'khawajaCarpentry@gmail.com',
  address: 'Industrial Area Al Sajja, Sharjah, UAE',
  serviceArea: 'Dubai, Sharjah, JAFZA, Jabal Ali, Mussafah, Ras Al Khaimah, Umm Al Quwain, Abu Dhabi, Ajman, Fujairah',
  hours: 'Saturday - Thursday: 8:00 AM - 6:00 PM',
  quoteMessage: 'Send pallet type, size, quantity, and delivery location for custom pricing.',
  mapEmbedUrl: 'https://www.google.com/maps?q=Industrial%20Area%20Al%20Sajja%2C%20Sharjah%2C%20UAE&output=embed',
  socialLinks: [
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' }
  ]
};

export default contactInfo;
