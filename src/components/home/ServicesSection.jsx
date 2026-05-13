import { Hammer, PackageCheck, Recycle, Ruler } from 'lucide-react';
import services from '../../data/services.js';

const icons = [PackageCheck, Hammer, Ruler, Recycle];

export default function ServicesSection() {
  return (
    <section className="section light-section">
      <div className="section-heading">
        <span className="eyebrow">What We Do</span>
        <h2>Manufacturing and woodwork services for industrial operations</h2>
      </div>
      <div className="service-grid">
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
