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

const logoSrc = '/logo.png';

function linkClass(isActive, isTransparent) {
  return `border-b-2 border-transparent px-3 py-4 text-sm font-semibold transition duration-300 ${
    isTransparent ? 'text-[#5b351f] hover:border-[#d18a2f] hover:text-[#2a170f]' : 'text-[#5b351f] hover:border-[#d18a2f] hover:text-[#2a170f]'
  } ${
    isActive ? (isTransparent ? 'border-[#8b4f24] text-[#2a170f]' : 'border-[#8b4f24] text-[#2a170f]') : ''
  }`;
}

export default function Navbar({ activePage, whatsappUrl, isTransparent = false }) {
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
      <a className="flex min-w-0 items-center text-[#2a170f]" href="/" data-spa-link="true" aria-label="FIASAL FAREED WOODS TR L.L.C home">
        <img className="brand-logo block h-12 w-auto shrink-0 object-contain sm:h-14 lg:h-16" src={logoSrc} alt="FIASAL FAREED WOODS TR L.L.C logo" />
      </a>

      <div className="hidden items-center gap-2 lg:flex">
        {navLinks.slice(0, 2).map(([label, href, key]) => (
          <a className={linkClass(activePage === key, isTransparent)} href={href} key={href} data-spa-link="true">{label}</a>
        ))}

        <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
          <button
            className={`${linkClass(isProductsActive, isTransparent)} inline-flex items-center gap-1.5`}
            type="button"
            onClick={() => setProductsOpen((value) => !value)}
            aria-expanded={productsOpen}
            aria-haspopup="true"
          >
            Our Products <ChevronDown className={`transition ${productsOpen ? 'rotate-180' : ''}`} size={16} />
          </button>
          <div className={`${productsOpen ? 'block' : 'hidden'} absolute left-1/2 top-full z-[120] w-[360px] -translate-x-1/2 pt-3`}>
            <div className="overflow-hidden rounded-none border border-[#ead2b5] bg-white p-2 text-slate-900 shadow-2xl shadow-[#2a170f]/20 ring-1 ring-[#8b4f24]/10">
              {productLinks.map(([label, href, key, Icon, description], index) => {
                const isActive = activePage === key;
                return (
                  <a
                    className={`group/item flex items-center gap-3 rounded-2xl px-4 py-3 transition duration-300 hover:bg-[#fff2dd] ${isActive ? 'bg-[#fff2dd] text-[#2a170f]' : 'text-slate-700'} ${index === 0 ? 'mb-1 border-b border-[#ead2b5] pb-4' : ''}`}
                    href={href}
                    key={href}
                    data-spa-link="true"
                    onClick={() => setProductsOpen(false)}
                  >
                    <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${isActive ? 'bg-[#5b351f] text-white' : 'bg-[#fff2dd] text-[#8b4f24] group-hover/item:bg-[#5b351f] group-hover/item:text-white'}`}>
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
          <a className={linkClass(activePage === key, isTransparent)} href={href} key={href} data-spa-link="true">{label}</a>
        ))}
        {isAdmin && <a className={linkClass(activePage === 'control-center', isTransparent)} href="/control-center" data-spa-link="true">Admin</a>}
      </div>

      <div className="hidden items-center gap-3 lg:flex">
        <a
          className={`inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-extrabold text-white transition duration-300 ${
            isTransparent ? 'bg-transparent text-[#5b351f] ring-1 ring-[#5b351f]/40 hover:bg-[#fff2dd]/40' : 'bg-[#5b351f] shadow-lg shadow-[#2a170f]/20 hover:bg-[#2a170f]'
          }`}
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon className="size-5" />
          Get Quote
        </a>
      </div>

      <button
        className={`inline-flex size-11 items-center justify-center border transition lg:hidden ${
          isTransparent ? 'border-[#d9bd98] bg-transparent text-[#5b351f] hover:bg-[#fff2dd]/40' : 'border-[#d9bd98] text-[#5b351f] hover:bg-[#fff2dd]'
        }`}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>

      {open && (
        <div className="animate-mobile-panel fixed inset-0 z-[140] bg-[#fff8ed] text-[#2a170f] lg:hidden">
          <div className="flex min-h-dvh flex-col overflow-y-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4 border-b border-[#ead2b5] pb-4">
                <a className="flex min-w-0 items-center text-[#2a170f]" href="/" data-spa-link="true" onClick={closeMobileMenu}>
                <img className="brand-logo block h-12 w-auto shrink-0 object-contain" src={logoSrc} alt="FIASAL FAREED WOODS TR L.L.C logo" />
              </a>
              <button
                className="grid size-11 shrink-0 place-items-center border border-[#d9bd98] text-[#5b351f] transition hover:bg-[#fff2dd]"
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
                  className={`border-b px-5 py-4 text-base font-semibold transition duration-300 ${activePage === key ? 'border-[#8b4f24] bg-[#fff2dd] text-[#2a170f]' : 'border-transparent text-[#5b351f] hover:translate-x-1 hover:bg-[#fff8ed]'}`}
                  href={href}
                  key={href}
                  data-spa-link="true"
                  onClick={closeMobileMenu}
                >
                  {label}
                </a>
              ))}
              <div className="overflow-hidden border border-[#ead2b5]">
                <button
                  className={`flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-base font-semibold transition ${isProductsActive ? 'bg-[#fff2dd] text-[#2a170f]' : 'text-[#5b351f] hover:bg-[#fff8ed]'}`}
                  type="button"
                  onClick={() => setMobileProductsOpen((value) => !value)}
                  aria-expanded={mobileProductsOpen}
                >
                  Our Products
                  <ChevronDown className={`shrink-0 transition ${mobileProductsOpen ? 'rotate-180' : ''}`} size={19} />
                </button>
                <div className={`grid transition-all duration-300 ${mobileProductsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid gap-1 border-t border-[#ead2b5] bg-[#fff8ed] p-2">
                      {productLinks.map(([label, href, key, Icon, description]) => (
                        <a
                          className={`flex items-center gap-3 rounded-sm px-4 py-3 text-sm transition ${activePage === key ? 'bg-white text-[#2a170f]' : 'text-[#5b351f] hover:bg-white'}`}
                          href={href}
                          key={href}
                          data-spa-link="true"
                          onClick={closeMobileMenu}
                        >
                          <Icon className="shrink-0 text-[#d18a2f]" size={18} />
                          <span>
                            <span className="block font-bold">{label}</span>
                            <span className="block text-xs text-[#8b4f24]/80">{description}</span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {navLinks.slice(2).map(([label, href, key]) => (
                <a
                  className={`border-b px-5 py-4 text-base font-semibold transition duration-300 ${activePage === key ? 'border-[#8b4f24] bg-[#fff2dd] text-[#2a170f]' : 'border-transparent text-[#5b351f] hover:translate-x-1 hover:bg-[#fff8ed]'}`}
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
                  className={`inline-flex items-center gap-2 border-b px-5 py-4 text-base font-semibold transition ${activePage === 'control-center' ? 'border-[#8b4f24] bg-[#fff2dd] text-[#2a170f]' : 'border-transparent text-[#5b351f] hover:translate-x-1 hover:bg-[#fff8ed]'}`}
                  href="/control-center"
                  data-spa-link="true"
                  onClick={closeMobileMenu}
                >
                  <ShieldCheck size={18} /> Admin
                </a>
              )}
              <a
                className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#5b351f] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#2a170f]/20 transition hover:bg-[#2a170f]"
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
