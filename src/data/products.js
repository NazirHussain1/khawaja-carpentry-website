const products = [
  {
    id: 1,
    slug: 'wooden-pallets',
    title: 'Wooden Pallets',
    category: 'Industrial Wooden Pallets',
    summary: 'New, refurbished, and used wooden pallets available in 20+ standard and custom sizes.',
    specs: ['80x80 cm', '80x120 cm', '100x120 cm', '114x114 cm CP3', 'Euro Pallets', '130x130 cm', 'Heavy Duty', 'Custom Sizes'],
    details: [
      { title: 'Available Sizes', items: ['80x80 cm', '80x100 cm', '80x110 cm', '80x120 cm', '80x200 cm', '90x90 cm', '90x100 cm', '95x95 cm', '100x100 cm', '100x110 cm', '100x120 cm', '100x200 cm', '110x110 cm', '110x130 cm', '114x114 cm CP3', '120x120 cm', '130x130 cm', 'Euro White', 'Euro Black', 'Custom Size'] },
      { title: 'Availability', items: ['New Pallets', 'Refurbished Pallets', 'Used Pallets', 'Normal Duty', 'Heavy Duty', 'ISPM-15 Heat Treatment'] },
      { title: 'Applications', items: ['Warehousing', 'Shipping', 'Construction', 'Industrial Storage', 'Export Packaging', 'Food and Beverage', 'Oil and Gas'] }
    ],
    imageClass: 'visual-pallet-stack'
  },
  {
    id: 2,
    slug: 'plastic-pallets',
    title: 'Plastic Pallets',
    category: 'Reusable Plastic Pallets',
    summary: 'New and used plastic pallets in 5 standard sizes for hygienic industrial applications.',
    specs: ['80x120 cm', '100x100 cm', '100x120 cm', '114x114 cm', '110x130 cm', 'Normal Duty', 'Heavy Duty', 'Washable'],
    details: [
      { title: 'Available Sizes', items: ['80x120 cm', '100x100 cm', '100x120 cm', '114x114 cm', '110x130 cm'] },
      { title: 'Benefits', items: ['Water Resistant', 'Lightweight', 'Long Lifespan', 'Easy Cleaning', 'Chemical Resistant', 'No ISPM-15 Required'] },
      { title: 'Industries', items: ['Food Industry', 'Pharmaceutical Industry', 'Cold Storage', 'Chemical Industry', 'Logistics and Shipping'] }
    ],
    imageClass: 'visual-box'
  },
  {
    id: 3,
    slug: 'wooden-crates',
    title: 'Wooden Crates',
    category: 'Custom Wooden Crates',
    summary: 'Brand-new wooden crates and boxes for export, machinery transportation, and warehouse protection.',
    specs: ['100x100 cm', '100x120 cm', '80x200 cm', '200x400 cm', 'Custom Dimensions', 'Export Compliant'],
    details: [
      { title: 'Features', items: ['Heavy-duty construction', 'Export compliant', 'Shock-resistant structure', 'Custom dimensions', 'Industrial-grade wood'] }
    ],
    imageClass: 'visual-crate'
  },
  {
    id: 4,
    slug: 'plastic-jumbo-bags',
    title: 'Jumbo Bags',
    category: 'FIBC Jumbo Bags',
    summary: 'Industrial FIBC jumbo bags for bulk material handling and transportation.',
    specs: ['500 KG', '1 TON', '1.5 TON', '2 TON', '2.5 TON', 'Bulk material handling', 'Industrial transportation'],
    details: [
      { title: 'Capacity', items: ['500 KG - 2500 KG'] },
      { title: 'Applications', items: ['Cement', 'Sand', 'Chemicals', 'Agriculture', 'Construction Materials'] }
    ],
    imageClass: 'visual-warehouse'
  },
  {
    id: 5,
    slug: 'export-boxes',
    title: 'Export Boxes',
    category: 'Export Packaging',
    summary: 'Strong export boxes for safe shipping, storage, and handling of commercial and industrial goods.',
    specs: ['Export-ready wooden boxes', 'Custom dimensions available', 'Suitable for machinery and fragile cargo'],
    imageClass: 'visual-crate'
  },
  {
    id: 6,
    slug: 'used-pallets',
    title: 'Used Pallets',
    category: 'Used Pallet Supply',
    summary: 'Cost-effective used wooden pallets inspected and supplied for warehouse, logistics, and industrial use.',
    specs: ['Affordable pallet options', 'Bulk quantities available', 'Suitable for general warehouse use'],
    imageClass: 'visual-pallet-stack'
  },
  {
    id: 7,
    slug: 'repaired-pallets',
    title: 'Repaired Pallets',
    category: 'Refurbished Pallets',
    summary: 'Repaired and refurbished pallets prepared for reuse, helping businesses reduce cost and waste.',
    specs: ['Repaired timber sections', 'Eco-friendly reuse', 'Competitive pricing for recurring buyers'],
    imageClass: 'visual-box'
  }
];

export default products;
