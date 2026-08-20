import { Boxes, ChevronDown, Grid2X2, Menu, Package, PackageCheck, ShieldCheck, X } from 'lucide-react';
import { useEffect, useState } from 'react';
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
  return `border-b-2 border-transparent px-3 py-4 text-sm font-semibold text-[#315b5d] transition duration-300 hover:border-[#8eb4aa] hover:text-[#173b42] ${
    isActive ? 'border-[#52837d] text-[#173b42]' : ''
  }`;
}

export default function Navbar({ activePage, whatsappUrl }) {
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(() => Boolean(sessionStorage.getItem('adminCredentials')));
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const isProductsActive = productLinks.some(([, , key]) => activePage === key);

  useEffect(() => {
    const syncAdminState = () => setIsAdmin(Boolean(sessionStorage.getItem('adminCredentials')));
    window.addEventListener('admin-auth-change', syncAdminState);
    window.addEventListener('storage', syncAdminState);
    return () => {
      window.removeEventListener('admin-auth-change', syncAdminState);
      window.removeEventListener('storage', syncAdminState);
    };
  }, []);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <nav className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-3 py-3 sm:gap-5 sm:px-6 lg:min-h-[92px] lg:px-8" aria-label="Primary navigation">
      <a className="flex min-w-0 items-center gap-3 text-[#173b42]" href="/" data-spa-link="true" aria-label="FIASAL FAREED WOODS TR L.L.C home">
        <span className="grid size-11 shrink-0 place-items-center bg-[#dce9e4] text-[#315b5d] sm:size-12">
          <Grid2X2 size={23} />
        </span>
        <span className="min-w-0">
          <strong className="block truncate font-serif text-base font-normal tracking-wide sm:text-lg">FIASAL FAREED</strong>
          <span className="block text-sm font-bold uppercase tracking-[0.16em] text-[#52837d] sm:text-xs">Carpentry</span>
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
        {isAdmin && <a className={linkClass(activePage === 'control-center')} href="/control-center" data-spa-link="true">Admin</a>}
      </div>

      <div className="hidden items-center gap-3 lg:flex">
        <a
          className="inline-flex items-center gap-2 rounded-sm bg-[#315b5d] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#173b42]/20 transition duration-300 hover:bg-[#173b42]"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon className="size-5" />
          Get Quote
        </a>
      </div>

      <button
        className="inline-flex size-11 items-center justify-center border border-[#b9c7c2] text-[#315b5d] transition hover:bg-[#edf4f0] lg:hidden"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>

      {open && (
        <div className="animate-mobile-panel fixed inset-0 z-[140] bg-[#fffefa] text-[#173b42] lg:hidden">
          <div className="flex min-h-dvh flex-col overflow-y-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4 border-b border-[#dedbd2] pb-4">
                <a className="flex min-w-0 items-center gap-3 text-[#173b42]" href="/" data-spa-link="true" onClick={closeMobileMenu}>
                <span className="grid size-11 shrink-0 place-items-center bg-[#dce9e4] text-[#315b5d]">
                  <Grid2X2 size={22} />
                </span>
                <span className="min-w-0">
                  <strong className="block truncate font-serif text-base font-normal">FIASAL FAREED</strong>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#52837d]">Carpentry</span>
                </span>
              </a>
              <button
                className="grid size-11 shrink-0 place-items-center border border-[#b9c7c2] text-[#315b5d] transition hover:bg-[#edf4f0]"
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
                  className={`border-b px-5 py-4 text-base font-semibold transition duration-300 ${activePage === key ? 'border-[#52837d] bg-[#edf4f0] text-[#173b42]' : 'border-transparent text-[#315b5d] hover:translate-x-1 hover:bg-[#f4f4ef]'}`}
                  href={href}
                  key={href}
                  data-spa-link="true"
                  onClick={closeMobileMenu}
                >
                  {label}
                </a>
              ))}
              <div className="overflow-hidden border border-[#dedbd2]">
                <button
                  className={`flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-base font-semibold transition ${isProductsActive ? 'bg-[#edf4f0] text-[#173b42]' : 'text-[#315b5d] hover:bg-[#f4f4ef]'}`}
                  type="button"
                  onClick={() => setMobileProductsOpen((value) => !value)}
                  aria-expanded={mobileProductsOpen}
                >
                  Our Products
                  <ChevronDown className={`shrink-0 transition ${mobileProductsOpen ? 'rotate-180' : ''}`} size={19} />
                </button>
                <div className={`grid transition-all duration-300 ${mobileProductsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid gap-1 border-t border-[#dedbd2] bg-[#f4f4ef] p-2">
                      {productLinks.map(([label, href, key, Icon, description]) => (
                        <a
                          className={`flex items-center gap-3 rounded-sm px-4 py-3 text-sm transition ${activePage === key ? 'bg-white text-[#173b42]' : 'text-[#315b5d] hover:bg-white'}`}
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
                  className={`border-b px-5 py-4 text-base font-semibold transition duration-300 ${activePage === key ? 'border-[#52837d] bg-[#edf4f0] text-[#173b42]' : 'border-transparent text-[#315b5d] hover:translate-x-1 hover:bg-[#f4f4ef]'}`}
                  href={href}
                  key={href}
                  data-spa-link="true"
                  onClick={closeMobileMenu}
                >
                  {label}
                </a>
              ))}
              {isAdmin && (
                <a
                  className={`inline-flex items-center gap-2 border-b px-5 py-4 text-base font-semibold transition ${activePage === 'control-center' ? 'border-[#52837d] bg-[#edf4f0] text-[#173b42]' : 'border-transparent text-[#315b5d] hover:translate-x-1 hover:bg-[#f4f4ef]'}`}
                  href="/control-center"
                  data-spa-link="true"
                  onClick={closeMobileMenu}
                >
                  <ShieldCheck size={18} /> Admin
                </a>
              )}
              <a
                className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#315b5d] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#173b42]/20 transition hover:bg-[#173b42]"
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
