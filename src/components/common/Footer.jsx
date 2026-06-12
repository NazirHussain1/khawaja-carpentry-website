import { ChevronRight, Grid2X2, MapPin } from 'lucide-react';
import { CallIcon, MailIcon } from './ContactIcons.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const company = {
  name: 'FIASAL FAREED WOODS TR L.L.C',
  legalName: 'FIASAL FAREED WOODS TR L.L.C',
  trn: '105168940200003',
  description: 'Leading manufacturer and supplier of premium wooden pallets, plastic pallets, and wooden crates in UAE.',
  whatsapp: '923321716508',
  phonePrimary: '03321716508',
  phoneSecondary: '03321716508',
  email: 'nh534392@gmail.com',
  location: 'Sajja Industrial, Sharjah-U.A.E',
  mapsUrl: 'https://www.google.com/maps?q=Sajja%20Industrial%2C%20Sharjah-U.A.E'
};

const quickLinks = [
  ['Home', '#/home'],
  ['About Us', '#/about'],
  ['Products', '#/products'],
  ['Gallery', '#/gallery'],
  ['Testimonials', '#/testimonials'],
  ['Contact Us', '#/contact']
];

const productLinks = [
  ['Wooden Pallets', '#/wooden-pallets'],
  ['Wooden Crates', '#/wooden-crates'],
  ['Plastic Pallets', '#/plastic-pallets'],
  ['Plastic Jumbo Bags', '#/plastic-jumbo-bags']
];

function FooterHeading({ children }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white">{children}</h3>
      <span className="mt-3 block h-1 w-12 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400" />
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <a className="group inline-flex items-center gap-2 text-sm text-slate-300 transition duration-300 hover:translate-x-1.5 hover:text-sky-300" href={href}>
      <ChevronRight className="text-indigo-300 transition group-hover:text-sky-300" size={15} />
      {children}
    </a>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      className="grid size-10 place-items-center rounded-full bg-indigo-400/15 text-white ring-1 ring-white/10 transition duration-300 hover:scale-110 hover:bg-indigo-500/70 hover:ring-indigo-300/50"
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
    >
      {children}
    </a>
  );
}

function ContactItem({ href, icon: Icon, children }) {
  return (
    <a
      className="group flex items-start gap-3 text-sm leading-6 text-slate-300 transition duration-300 hover:text-sky-300"
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      <Icon className="mt-1 shrink-0 text-indigo-300 transition group-hover:text-sky-300" size={18} />
      <span>{children}</span>
    </a>
  );
}

export default function Footer() {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello, I need a quote for wooden pallets.')}`;
  const primaryTel = `tel:${company.phonePrimary.replace(/\s/g, '')}`;
  const secondaryTel = `tel:${company.phoneSecondary.replace(/\s/g, '')}`;
  const mailto = `mailto:${company.email}`;

  return (
    <footer className="bg-[#02024f] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <section aria-labelledby="footer-company">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md bg-indigo-400/20 text-white ring-1 ring-indigo-300/30">
              <Grid2X2 size={20} />
            </span>
            <h2 id="footer-company" className="text-lg font-bold text-white">{company.name}</h2>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300/85">{company.description}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">TRN: {company.trn}</p>
          <div className="mt-6 flex items-center gap-3">
            <SocialIcon href={whatsappUrl} label="Chat on WhatsApp">
              <WhatsAppIcon className="size-5" />
            </SocialIcon>
            <SocialIcon href={primaryTel} label="Call FIASAL FAREED WOODS TR L.L.C">
              <CallIcon className="size-[18px]" />
            </SocialIcon>
            <SocialIcon href={mailto} label="Email FIASAL FAREED WOODS TR L.L.C">
              <MailIcon className="size-[18px]" />
            </SocialIcon>
          </div>
        </section>

        <nav aria-labelledby="footer-quick-links">
          <FooterHeading>Quick Links</FooterHeading>
          <div id="footer-quick-links" className="mt-6 grid gap-3">
            {quickLinks.map(([label, href]) => (
              <FooterLink href={href} key={href}>{label}</FooterLink>
            ))}
          </div>
        </nav>

        <nav aria-labelledby="footer-products">
          <FooterHeading>Our Products</FooterHeading>
          <div id="footer-products" className="mt-6 grid gap-3">
            {productLinks.map(([label, href]) => (
              <FooterLink href={href} key={href}>{label}</FooterLink>
            ))}
          </div>
        </nav>

        <section aria-labelledby="footer-contact">
          <FooterHeading>Contact Us</FooterHeading>
          <div id="footer-contact" className="mt-6 grid gap-4">
            <ContactItem href={company.mapsUrl} icon={MapPin}>{company.location}</ContactItem>
            <ContactItem href={primaryTel} icon={CallIcon}>{company.phonePrimary}</ContactItem>
            <ContactItem href={secondaryTel} icon={CallIcon}>{company.phoneSecondary}</ContactItem>
            <ContactItem href={mailto} icon={MailIcon}>{company.email}</ContactItem>
          </div>
        </section>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-300/70">
        &copy; 2026 {company.legalName}. All Rights Reserved.
      </div>
    </footer>
  );
}
