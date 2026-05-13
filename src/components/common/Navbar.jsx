import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'HOME', href: '#/home', key: 'home' },
  { label: 'ABOUT US', href: '#/about', key: 'about' },
  { label: 'SERVICES', href: '#/services', key: 'services' },
  {
    label: 'PRODUCTS',
    href: '#/products',
    key: 'products',
    children: [
      ['Wooden Pallets', '#/products/wooden-pallets'],
      ['Plastic Pallets', '#/products/plastic-pallets'],
      ['Wooden Crates', '#/products/wooden-crates'],
      ['Export Boxes', '#/products/export-boxes'],
      ['Used Pallets', '#/products/used-pallets'],
      ['Repaired Pallets', '#/products/repaired-pallets'],
      ['Jumbo Bags', '#/products/plastic-jumbo-bags']
    ]
  },
  { label: 'INDUSTRIES', href: '#/industries', key: 'industries' },
  { label: 'GALLERY', href: '#/gallery', key: 'gallery' },
  { label: 'TESTIMONIALS', href: '#/testimonials', key: 'testimonials' },
  { label: 'FAQ', href: '#/faq', key: 'faq' },
  { label: 'CONTACT', href: '#/contact', key: 'contact' },
  { label: 'GET QUOTE', href: '#/quote', key: 'quote', cta: true }
];

export default function Navbar({ activePage }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <button className="nav-toggle" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <div className={`nav-links ${open ? 'is-open' : ''}`}>
        {navItems.map((item) => {
          const className = `${activePage === item.key ? 'active' : ''}${item.cta ? ' nav-quote' : ''}`;

          if (item.children) {
            return (
              <div className="nav-item-with-menu" key={item.key}>
                <a className={className} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
                <div className="nav-dropdown">
                  {item.children.map(([label, href]) => (
                    <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <a
              className={className}
              href={item.href}
              key={item.key}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
