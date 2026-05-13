const products = [
  {
    id: 1,
    slug: 'wooden-pallets',
    title: 'Wooden Pallets',
    category: 'Industrial Wooden Pallets',
    summary: 'High-quality industrial wooden pallets available in standard and custom sizes.',
    specs: ['Euro Pallets', 'Heavy Duty Pallets', 'Two-Way Entry Pallets', 'Four-Way Entry Pallets', 'Block Pallets', 'Stringer Pallets', 'Export Pallets', 'Recycled Pallets'],
    details: [
      { title: 'Available Types', items: ['Euro Pallets', 'Heavy Duty Pallets', 'Two-Way Entry Pallets', 'Four-Way Entry Pallets', 'Block Pallets', 'Stringer Pallets', 'Export Pallets', 'Recycled Pallets'] },
      { title: 'Sizes', items: ['80x80 cm', '100x120 cm', '120x120 cm', 'Custom Dimensions'] },
      { title: 'Applications', items: ['Warehousing', 'Shipping', 'Construction', 'Industrial Storage', 'Export Packaging'] }
    ],
    imageClass: 'visual-pallet-stack'
  },
  {
    id: 2,
    slug: 'plastic-pallets',
    title: 'Plastic Pallets',
    category: 'Reusable Plastic Pallets',
    summary: 'Strong, moisture-resistant, and reusable plastic pallets designed for hygienic industrial applications.',
    specs: ['Water Resistant', 'Lightweight', 'Long Lifespan', 'Easy Cleaning', 'Chemical Resistant'],
    details: [
      { title: 'Benefits', items: ['Water Resistant', 'Lightweight', 'Long Lifespan', 'Easy Cleaning', 'Chemical Resistant'] },
      { title: 'Industries', items: ['Food Industry', 'Pharmaceutical Industry', 'Cold Storage', 'Chemical Industry'] }
    ],
    imageClass: 'visual-box'
  },
  {
    id: 3,
    slug: 'wooden-crates',
    title: 'Wooden Crates',
    category: 'Custom Wooden Crates',
    summary: 'Custom wooden crates and boxes designed for machinery transportation and export safety.',
    specs: ['Heavy-duty construction', 'Export compliant', 'Shock-resistant structure', 'Custom dimensions', 'Industrial-grade wood'],
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
    specs: ['500 KG - 2500 KG capacity', 'Bulk material handling', 'Industrial transportation'],
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
