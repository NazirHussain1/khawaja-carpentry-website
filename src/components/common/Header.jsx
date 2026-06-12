import { MapPin } from 'lucide-react';
import Navbar from './Navbar.jsx';
import { CallIcon, MailIcon } from './ContactIcons.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const contact = {
  email: 'nh534392@gmail.com',
  phonePrimary: '03321716508',
  phoneSecondary: '03321716508',
  location: 'Sajja Industrial, Sharjah-U.A.E',
  mapsUrl: 'https://www.google.com/maps?q=Sajja%20Industrial%2C%20Sharjah-U.A.E',
  whatsappUrl: `https://wa.me/923321716508?text=${encodeURIComponent('Hello, I need a quote for wooden pallets.')}`
};

function TopBarLink({ href, icon: Icon, children, className = '' }) {
  return (
    <a
      className={`inline-flex min-w-0 max-w-full items-center gap-1.5 text-xs font-medium text-white/95 transition hover:-translate-y-0.5 hover:text-white ${className}`}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      <Icon className="shrink-0" size={14} />
      <span className="truncate">{children}</span>
    </a>
  );
}

export default function Header({ activePage }) {
  return (
    <header className="sticky top-0 z-[100] bg-[#02024f] shadow-2xl shadow-slate-950/30">
      <div className="bg-gradient-to-r from-violet-700 via-indigo-600 to-sky-600">
        <div className="mx-auto flex min-h-9 max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-3 py-2 sm:gap-x-5 sm:px-6 lg:justify-between lg:px-8 lg:py-0">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 lg:justify-start">
            <TopBarLink className="max-w-[220px] sm:max-w-none" href={`mailto:${contact.email}`} icon={MailIcon}>{contact.email}</TopBarLink>
            <TopBarLink href={`tel:${contact.phonePrimary.replace(/\s/g, '')}`} icon={CallIcon}>{contact.phonePrimary}</TopBarLink>
            <TopBarLink className="hidden md:inline-flex" href={contact.mapsUrl} icon={MapPin}>{contact.location}</TopBarLink>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 lg:justify-end">
            <TopBarLink href={contact.whatsappUrl} icon={WhatsAppIcon}>WhatsApp</TopBarLink>
            <TopBarLink href={`tel:${contact.phoneSecondary.replace(/\s/g, '')}`} icon={CallIcon}>{contact.phoneSecondary}</TopBarLink>
          </div>
        </div>
      </div>
      <Navbar activePage={activePage} whatsappUrl={contact.whatsappUrl} />
    </header>
  );
}
