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
    <nav className="flex justify-end lg:flex-1" aria-label="Primary navigation">
      <button className="inline-flex size-10 items-center justify-center rounded-md border border-white/15 text-white lg:hidden" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <div className={`${open ? 'fixed inset-x-4 top-24 grid' : 'hidden'} max-w-[calc(100vw-2rem)] gap-1 rounded-md border border-slate-200 bg-white p-3 shadow-xl lg:static lg:flex lg:max-w-none lg:items-center lg:justify-end lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
        {navItems.map((item) => {
          const className = item.cta
            ? 'rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500'
            : `rounded-md px-3 py-2 text-sm font-semibold transition ${activePage === item.key ? 'bg-slate-100 text-slate-950 lg:bg-white/10 lg:text-emerald-300' : 'text-slate-700 hover:bg-slate-100 lg:text-slate-100 lg:hover:bg-white/10'}`;

          if (item.children) {
            return (
              <div className="group relative" key={item.key}>
                <a className={className} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
                <div className="hidden min-w-56 rounded-md bg-white p-2 shadow-xl group-hover:grid lg:absolute lg:right-0 lg:top-full">
                  {item.children.map(([label, href]) => (
                    <a className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100" href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
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
