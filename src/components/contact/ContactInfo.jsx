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
    <aside className="contact-info">
      {items.map(([Icon, label, value]) => (
        <div className="contact-item" key={label}>
          <Icon size={22} />
          <div>
            <h4>{label}</h4>
            <p>{value}</p>
          </div>
        </div>
      ))}
      <div className="map-card">
        <iframe
          title="Industrial Area Al Sajja, Sharjah map"
          src={contactInfo.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </aside>
  );
}
