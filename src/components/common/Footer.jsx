import { Mail, MapPin, Phone } from 'lucide-react';
import contactInfo from '../../data/contactInfo.js';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a className="flex items-center gap-3 text-white" href="#/home">
            <span className="grid size-11 place-items-center rounded-md bg-emerald-500 text-sm font-black text-white">KC</span>
            <span>
              <strong className="block text-sm font-bold">{contactInfo.businessName}</strong>
              <small className="block text-xs text-slate-400">{contactInfo.tagline}</small>
            </span>
          </a>
          <p className="mt-4 text-sm leading-6 text-slate-400">Premium wooden pallets manufacturer and supplier serving businesses across all 7 UAE Emirates.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Company</h4>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            <a className="hover:text-white" href="#/about">About</a>
            <a className="hover:text-white" href="#/products">Products</a>
            <a className="hover:text-white" href="#/gallery">Gallery</a>
            <a className="hover:text-white" href="#/contact">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <p className="flex items-start gap-2"><Phone className="mt-0.5 shrink-0 text-emerald-300" size={16} /> {contactInfo.phone}</p>
            {contactInfo.secondaryPhone && <p className="flex items-start gap-2"><Phone className="mt-0.5 shrink-0 text-emerald-300" size={16} /> {contactInfo.secondaryPhone}</p>}
            <p className="flex items-start gap-2"><Mail className="mt-0.5 shrink-0 text-emerald-300" size={16} /> {contactInfo.email}</p>
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 shrink-0 text-emerald-300" size={16} /> {contactInfo.address}</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white">Social</h4>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
          {contactInfo.socialLinks.map((link) => (
            <a className="hover:text-white" href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label}</a>
          ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {contactInfo.businessName}. All rights reserved.
      </div>
    </footer>
  );
}
