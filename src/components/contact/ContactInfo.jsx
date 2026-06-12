import { Clock, MapPin } from 'lucide-react';
import { CallIcon, MailIcon } from '../common/ContactIcons.jsx';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';

const contact = {
  location: 'Sajja Industrial, Sharjah-U.A.E',
  mapsUrl: 'https://www.google.com/maps?q=Sajja%20Industrial%2C%20Sharjah-U.A.E',
  phone: '03321716508',
  whatsappPhone: '+923321716508',
  whatsappUrl: `https://wa.me/923321716508?text=${encodeURIComponent('Hello, I need a quote for pallets and packaging.')}`,
  email: 'nh534392@gmail.com',
  hours: 'Monday - Saturday : 8:00 AM - 7:00 PM'
};

const items = [
  [MapPin, 'Location', contact.location, contact.mapsUrl],
  [CallIcon, 'Phone', contact.phone, `tel:${contact.phone.replace(/\s/g, '')}`],
  [WhatsAppIcon, 'WhatsApp', contact.whatsappPhone, contact.whatsappUrl],
  [MailIcon, 'Email', contact.email, `mailto:${contact.email}`],
  [Clock, 'Working Hours', contact.hours, null]
];

export default function ContactInfo() {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5 lg:p-8">
      <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">
        Contact Details
      </span>
      <h2 className="mt-5 text-3xl font-black text-[#02024f]">Get In Touch</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        Our team is ready to assist you with pallet supply, custom orders, pricing, and delivery services across UAE.
      </p>

      <div className="mt-7 grid gap-4">
        {items.map(([Icon, label, value, href]) => {
          const content = (
            <>
              <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20">
                <Icon className="size-[21px]" />
              </div>
              <div>
                <h3 className="font-black text-[#02024f]">{label}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{value}</p>
              </div>
            </>
          );

          return href ? (
            <a
              className="group flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg"
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              key={label}
            >
              {content}
            </a>
          ) : (
            <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4" key={label}>
              {content}
            </div>
          );
        })}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <iframe
          className="h-64 w-full"
          title="Sajja Industrial, Sharjah map"
          src="https://www.google.com/maps?q=Sajja%20Industrial%2C%20Sharjah-U.A.E&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </aside>
  );
}
