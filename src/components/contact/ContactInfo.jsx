import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import contactInfo from '../../data/contactInfo.js';

export default function ContactInfo() {
  const items = [
    [Phone, 'Phone', contactInfo.phone],
    [Phone, 'Second Phone', contactInfo.secondaryPhone],
    [Mail, 'Email', contactInfo.email],
    [MapPin, 'Location', contactInfo.address],
    [Clock, 'Hours', contactInfo.hours]
  ].filter(([, , value]) => value);

  return (
    <aside className="grid gap-4">
      {items.map(([Icon, label, value]) => (
        <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={label}>
          <div className="grid size-11 shrink-0 place-items-center rounded-md bg-emerald-50 text-emerald-700">
            <Icon size={22} />
          </div>
          <div>
            <h4 className="font-bold text-slate-950">{label}</h4>
            <p className="mt-1 text-sm leading-6 text-slate-600">{value}</p>
          </div>
        </div>
      ))}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <iframe
          className="h-72 w-full"
          title="Industrial Area Al Sajja, Sharjah map"
          src={contactInfo.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </aside>
  );
}
