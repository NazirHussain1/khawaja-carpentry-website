import { Boxes, ChevronDown, Grid2X2, Menu, MessageCircle, Package, PackageCheck, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  ['Home', '/', 'home'],
  ['About Us', '/about', 'about'],
  ['Gallery', '/gallery', 'gallery'],
  ['Testimonials', '/testimonials', 'testimonials'],
  ['Contact', '/contact', 'contact']
];

const productLinks = [
  ['All Products', '/products', 'products', Boxes],
  ['Wooden Pallets', '/products/wooden-pallets', 'wooden-pallets', PackageCheck],
  ['Wooden Crates', '/products/wooden-crates', 'wooden-crates', Package],
  ['Plastic Pallets', '/products/plastic-pallets', 'plastic-pallets', Grid2X2],
  ['Plastic Jumbo Bags', '/products/plastic-jumbo-bags', 'plastic-jumbo-bags', Boxes]
];

const mobileLinks = [
  ['Home', '/', 'home'],
  ['About Us', '/about', 'about'],
  ['Our Products', '/products', 'products'],
  ['Wooden Pallets', '/products/wooden-pallets', 'wooden-pallets'],
  ['Wooden Crates', '/products/wooden-crates', 'wooden-crates'],
  ['Plastic Pallets', '/products/plastic-pallets', 'plastic-pallets'],
  ['Plastic Jumbo Bags', '/products/plastic-jumbo-bags', 'plastic-jumbo-bags'],
  ['Gallery', '/gallery', 'gallery'],
  ['Testimonials', '/testimonials', 'testimonials'],
  ['Contact', '/contact', 'contact']
];

function linkClass(isActive) {
  return `rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-violet-700 hover:to-sky-600 ${
    isActive ? 'bg-violet-950/80 shadow-inner shadow-black/30' : 'text-white/85'
  }`;
}

export default function Navbar({ activePage, whatsappUrl }) {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const isProductsActive = activePage === 'products';

  return (
    <nav className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:min-h-[100px] lg:px-8" aria-label="Primary navigation">
      <a className="flex min-w-0 items-center gap-3 text-white" href="/" data-spa-link="true" aria-label="Mujahid Hussain Carpentry home">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-indigo-500/20 text-white ring-1 ring-sky-300/30">
          <Grid2X2 size={23} />
        </span>
        <span className="min-w-0">
          <strong className="block truncate text-base font-extrabold tracking-wide sm:text-lg">Mujahid Hussain</strong>
          <span className="block bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-sm font-bold text-transparent sm:text-base">Carpentry</span>
        </span>
      </a>

      <div className="hidden items-center gap-2 lg:flex">
        {navLinks.slice(0, 2).map(([label, href, key]) => (
          <a className={linkClass(activePage === key)} href={href} key={href} data-spa-link="true">{label}</a>
        ))}

        <div className="group relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
          <button
            className={`${linkClass(isProductsActive)} inline-flex items-center gap-1.5`}
            type="button"
            onClick={() => setProductsOpen((value) => !value)}
            aria-expanded={productsOpen}
          >
            Our Products <ChevronDown className={`transition ${productsOpen ? 'rotate-180' : ''}`} size={16} />
          </button>
          <div className={`${productsOpen ? 'grid' : 'hidden'} absolute left-0 top-full z-[120] mt-3 w-72 overflow-hidden rounded-2xl border border-indigo-400/30 bg-[#04043f] p-2 shadow-2xl shadow-slate-950/50 group-hover:grid`}>
            {productLinks.map(([label, href, key, Icon], index) => (
              <a
                className={`group/item flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:translate-x-1 hover:bg-indigo-500/20 hover:text-white ${index === 0 ? 'border-b border-white/10 pb-4' : ''}`}
                href={href}
                key={href}
                data-spa-link="true"
              >
                <Icon className={activePage === key || (key === 'products' && isProductsActive) ? 'text-sky-300' : 'text-indigo-300'} size={17} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {navLinks.slice(2).map(([label, href, key]) => (
          <a className={linkClass(activePage === key)} href={href} key={href} data-spa-link="true">{label}</a>
        ))}
      </div>

      <div className="hidden items-center gap-3 lg:flex">
        <a
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-indigo-950/30 transition duration-300 hover:scale-105 hover:from-violet-600 hover:to-sky-400"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} />
          Get Quote
        </a>
      </div>

      <button
        className="inline-flex size-11 items-center justify-center rounded-xl border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>

      {open && (
        <div className="absolute inset-x-4 top-full z-[120] grid max-h-[calc(100vh-9rem)] gap-1 overflow-y-auto rounded-2xl border border-indigo-400/30 bg-[#04043f] p-3 shadow-2xl shadow-slate-950/50 lg:hidden">
          {mobileLinks.map(([label, href, key]) => (
            <a
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${activePage === key ? 'bg-violet-950 text-white' : 'text-slate-200 hover:bg-indigo-500/20 hover:text-white'}`}
              href={href}
              key={href}
              data-spa-link="true"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-3 text-sm font-extrabold text-white"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={18} />
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
}
