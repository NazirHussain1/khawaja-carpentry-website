import { Boxes, Factory, Hammer, PackageCheck, Recycle, Ruler } from 'lucide-react';
import services from '../../data/services.js';

const icons = [PackageCheck, Hammer, Ruler, Recycle, Boxes, Factory];

export default function ServicesSection() {
  return (
    <section className="section light-section">
      <div className="section-heading">
        <span className="eyebrow">What We Do</span>
        <h2>Main services for industrial pallet and packaging buyers</h2>
      </div>
      <div className="service-grid six-grid">
        {services.map((service, index) => {
          const Icon = icons[index];
          return (
            <article className="service-card" key={service.title}>
              <Icon size={34} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
