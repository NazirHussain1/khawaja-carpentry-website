import { Boxes, ChevronDown, Grid2X2, Menu, Package, PackageCheck, X } from 'lucide-react';
import { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const navLinks = [
  ['Home', '/', 'home'],
  ['About Us', '/about', 'about'],
  ['Gallery', '/gallery', 'gallery'],
  ['Testimonials', '/testimonials', 'testimonials'],
  ['Contact', '/contact', 'contact']
];

const productLinks = [
  ['All Products', '/products', 'products', Boxes, 'Complete product catalogue'],
  ['Wooden Pallets', '/wooden-pallets', 'wooden-pallets', PackageCheck, 'All pallet sizes'],
  ['Wooden Crates', '/wooden-crates', 'wooden-crates', Package, 'Export and custom crates'],
  ['Plastic Pallets', '/plastic-pallets', 'plastic-pallets', Grid2X2, 'New and used sizes'],
  ['Plastic Jumbo Bags', '/plastic-jumbo-bags', 'plastic-jumbo-bags', Boxes, 'FIBC bags by capacity']
];

function linkClass(isActive) {
  return `rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-violet-700 hover:to-sky-600 ${
    isActive ? 'bg-violet-950/80 shadow-inner shadow-black/30' : 'text-white/85'
  }`;
}

export default function Navbar({ activePage, whatsappUrl }) {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const isProductsActive = productLinks.some(([, , key]) => activePage === key);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <nav className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-3 py-3 sm:gap-5 sm:px-6 lg:min-h-[100px] lg:px-8" aria-label="Primary navigation">
      <a className="flex min-w-0 items-center gap-3 text-white" href="/" data-spa-link="true" aria-label="Mujahid Hussain Carpentry home">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-500/20 text-white ring-1 ring-sky-300/30 sm:size-12">
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

        <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
          <button
            className={`${linkClass(isProductsActive)} inline-flex items-center gap-1.5`}
            type="button"
            onClick={() => setProductsOpen((value) => !value)}
            aria-expanded={productsOpen}
            aria-haspopup="true"
          >
            Our Products <ChevronDown className={`transition ${productsOpen ? 'rotate-180' : ''}`} size={16} />
          </button>
          <div className={`${productsOpen ? 'block' : 'hidden'} absolute left-1/2 top-full z-[120] w-[360px] -translate-x-1/2 pt-3`}>
            <div className="overflow-hidden rounded-3xl border border-indigo-100 bg-white p-2 text-slate-900 shadow-2xl shadow-slate-950/35 ring-1 ring-black/5">
              {productLinks.map(([label, href, key, Icon, description], index) => {
                const isActive = activePage === key;
                return (
                  <a
                    className={`group/item flex items-center gap-3 rounded-2xl px-4 py-3 transition duration-300 hover:bg-indigo-50 ${isActive ? 'bg-indigo-50 text-[#02024f]' : 'text-slate-700'} ${index === 0 ? 'mb-1 border-b border-slate-100 pb-4' : ''}`}
                    href={href}
                    key={href}
                    data-spa-link="true"
                    onClick={() => setProductsOpen(false)}
                  >
                    <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${isActive ? 'bg-[#02024f] text-white' : 'bg-indigo-50 text-indigo-700 group-hover/item:bg-[#02024f] group-hover/item:text-white'}`}>
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-black">{label}</span>
                      <span className="block text-xs font-semibold text-slate-500">{description}</span>
                    </span>
                  </a>
                );
              })}
            </div>
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
          <WhatsAppIcon className="size-5" />
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
        <div className="animate-mobile-panel fixed inset-0 z-[140] bg-[#02024f]/95 backdrop-blur lg:hidden">
          <div className="flex min-h-dvh flex-col overflow-y-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <a className="flex min-w-0 items-center gap-3 text-white" href="/" data-spa-link="true" onClick={closeMobileMenu}>
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-500/20 text-white ring-1 ring-sky-300/30">
                  <Grid2X2 size={22} />
                </span>
                <span className="min-w-0">
                  <strong className="block truncate text-base font-extrabold">Mujahid Hussain</strong>
                  <span className="block bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-sm font-bold text-transparent">Carpentry</span>
                </span>
              </a>
              <button
                className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 text-white transition hover:bg-white/10"
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
              >
                <X size={23} />
              </button>
            </div>

            <div className="grid gap-2 py-5">
              {navLinks.slice(0, 2).map(([label, href, key]) => (
                <a
                  className={`rounded-2xl px-5 py-4 text-base font-semibold transition duration-300 ${activePage === key ? 'bg-gradient-to-r from-violet-800 to-indigo-700 text-white shadow-lg shadow-indigo-950/30' : 'text-slate-100 hover:translate-x-1 hover:bg-indigo-500/20 hover:text-white'}`}
                  href={href}
                  key={href}
                  data-spa-link="true"
                  onClick={closeMobileMenu}
                >
                  {label}
                </a>
              ))}
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <button
                  className={`flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-base font-semibold transition ${isProductsActive ? 'bg-gradient-to-r from-violet-800 to-indigo-700 text-white shadow-lg shadow-indigo-950/30' : 'text-slate-100 hover:bg-indigo-500/20'}`}
                  type="button"
                  onClick={() => setMobileProductsOpen((value) => !value)}
                  aria-expanded={mobileProductsOpen}
                >
                  Our Products
                  <ChevronDown className={`shrink-0 transition ${mobileProductsOpen ? 'rotate-180' : ''}`} size={19} />
                </button>
                <div className={`grid transition-all duration-300 ${mobileProductsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid gap-1 border-t border-white/10 bg-white/5 p-2">
                      {productLinks.map(([label, href, key, Icon, description]) => (
                        <a
                          className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${activePage === key ? 'bg-white/12 text-white' : 'text-slate-200 hover:bg-indigo-500/20 hover:text-white'}`}
                          href={href}
                          key={href}
                          data-spa-link="true"
                          onClick={closeMobileMenu}
                        >
                          <Icon className="shrink-0 text-sky-300" size={18} />
                          <span>
                            <span className="block font-bold">{label}</span>
                            <span className="block text-xs text-slate-300">{description}</span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {navLinks.slice(2).map(([label, href, key]) => (
                <a
                  className={`rounded-2xl px-5 py-4 text-base font-semibold transition duration-300 ${activePage === key ? 'bg-gradient-to-r from-violet-800 to-indigo-700 text-white shadow-lg shadow-indigo-950/30' : 'text-slate-100 hover:translate-x-1 hover:bg-indigo-500/20 hover:text-white'}`}
                  href={href}
                  key={href}
                  data-spa-link="true"
                  onClick={closeMobileMenu}
                >
                  {label}
                </a>
              ))}
              <a
                className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-indigo-950/30 transition hover:scale-[1.02]"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
              >
                <WhatsAppIcon className="size-5" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
