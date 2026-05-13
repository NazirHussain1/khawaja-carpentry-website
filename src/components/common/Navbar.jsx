import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#/home', key: 'home' },
  { label: 'About', href: '#/about', key: 'about' },
  { label: 'Products', href: '#/products', key: 'products' },
  { label: 'Gallery', href: '#/gallery', key: 'gallery' },
  { label: 'Testimonials', href: '#/testimonials', key: 'testimonials' },
  { label: 'Contact', href: '#/contact', key: 'contact' }
];

export default function Navbar({ activePage }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <button className="nav-toggle" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <div className={`nav-links ${open ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <a
            className={activePage === item.key ? 'active' : ''}
            href={item.href}
            key={item.key}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
