import { ChevronRight, MapPin } from 'lucide-react';
import { CallIcon, MailIcon } from './ContactIcons.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const company = {
  name: 'FIASAL FAREED WOODS TR L.L.C',
  legalName: 'FIASAL FAREED WOODS TR L.L.C',
  trn: '105168940200003',
  description: 'Leading manufacturer and supplier of premium wooden pallets, plastic pallets, and wooden crates in UAE.',
  whatsapp: '971542046121',
  phonePrimary: '+971 58 844 1600',
  phoneSecondary: '+971 54 204 6121',
  email: 'faislfareed786@gmail.com',
  location: 'Sajja Industrial, Sharjah-U.A.E',
  mapsUrl: 'https://www.google.com/maps?q=Sajja%20Industrial%2C%20Sharjah-U.A.E'
};

const logoSrc = '/logo.png';

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
      <span className="mt-3 block h-1 w-12 rounded-full bg-gradient-to-r from-[#8b4f24] to-[#d18a2f]" />
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <a className="group inline-flex items-center gap-2 text-sm text-[#e8dccb] transition duration-300 hover:translate-x-1.5 hover:text-[#f3c16a]" href={href}>
      <ChevronRight className="text-[#d18a2f] transition group-hover:text-[#f3c16a]" size={15} />
      {children}
    </a>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      className="grid size-10 place-items-center rounded-full bg-[#8b4f24]/35 text-white ring-1 ring-[#d18a2f]/25 transition duration-300 hover:scale-110 hover:bg-[#8b4f24]/80 hover:ring-[#d18a2f]/60"
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
      className="group flex items-start gap-3 text-sm leading-6 text-[#e8dccb] transition duration-300 hover:text-[#f3c16a]"
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      <Icon className="mt-1 shrink-0 text-[#d18a2f] transition group-hover:text-[#f3c16a]" size={18} />
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
    <footer className="bg-[#2a170f] text-[#e8dccb]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <section aria-labelledby="footer-company">
          <div className="flex items-center gap-3">
            <img className="brand-logo block h-16 w-auto shrink-0 object-contain" src={logoSrc} alt="FIASAL FAREED WOODS TR L.L.C logo" />
            <h2 id="footer-company" className="sr-only">{company.name}</h2>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#e8dccb]/85">{company.description}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#c8ad88]">TRN: {company.trn}</p>
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

      <div className="border-t border-[#d18a2f]/15 px-5 py-5 text-center text-xs text-[#e8dccb]/70">
        &copy; 2026 {company.legalName}. All Rights Reserved.
      </div>
    </footer>
  );
}
