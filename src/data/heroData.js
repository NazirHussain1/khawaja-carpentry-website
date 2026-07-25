/**
 * Hero Section Data
 * All hero content, products, and configuration
 */

export const heroProducts = [
  {
    id: 'wooden-pallets',
    title: 'Wooden Pallets',
    subtitle: '20+ Sizes Available',
    thumbnail: 'https://mujahidhussaincarpentry.store/images/100cm%20x%20120cm.jpg',
    backgroundImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80&fm=webp',
    heading: 'Wooden Pallets Manufacturer',
    description: 'Premium new and refurbished wooden pallets available in all standard and custom sizes for logistics, warehousing and export industries.',
    link: '/wooden-pallets'
  },
  {
    id: 'plastic-pallets',
    title: 'Plastic Pallets',
    subtitle: '5+ Sizes Available',
    thumbnail: 'https://mujahidhussaincarpentry.store/images/plastic%20pallets.jpeg',
    backgroundImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1920&q=80&fm=webp',
    heading: 'Plastic Pallets Supplier',
    description: 'Durable lightweight plastic pallets ideal for warehouses, food industries and pharmaceutical businesses.',
    link: '/plastic-pallets'
  },
  {
    id: 'wooden-crates',
    title: 'Wooden Crates',
    subtitle: 'Custom Made',
    thumbnail: 'https://mujahidhussaincarpentry.store/images/wooden%20boxes.jpeg',
    backgroundImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1920&q=80&fm=webp',
    heading: 'Custom Wooden Crates',
    description: 'Heavy-duty export quality wooden crates for machinery, industrial equipment and fragile goods.',
    link: '/wooden-crates'
  },
  {
    id: 'plastic-jumbo-bags',
    title: 'Plastic Jumbo Bags',
    subtitle: '500kg–2.5 Ton Capacity',
    thumbnail: 'https://mujahidhussaincarpentry.store/images/CP3%20Pallets.jpg',
    backgroundImage: 'https://images.unsplash.com/photo-1581093458791-9d09ccfed1c1?auto=format&fit=crop&w=1920&q=80&fm=webp',
    heading: 'Industrial Jumbo Bags',
    description: 'High-capacity FIBC jumbo bags for agriculture, construction materials and bulk transportation.',
    link: '/plastic-jumbo-bags'
  }
];

export const heroConfig = {
  mainHeading: 'Manufacturer & Supplier',
  mainDescription: 'Manufacturing, supplying & repairing high-quality wooden pallets, plastic pallets, wooden crates and jumbo bags for industries across UAE.',
  primaryButton: {
    text: 'Get Free Quote',
    href: 'https://wa.me/971588441600?text=' + encodeURIComponent('Hello, I need a free quote for pallets.')
  },
  secondaryButton: {
    text: 'View Products',
    href: '/products'
  }
};
