import { industries, serviceAreas } from '../../data/industries.js';

export default function IndustriesSection() {
  return (
    <section className="industries-section">
      <div>
        <span className="eyebrow">Delivery Locations</span>
        <h2>We Deliver Across UAE</h2>
      </div>
      <div className="industry-list">
        {serviceAreas.map((area) => <span key={area}>{area}</span>)}
      </div>
      <div>
        <span className="eyebrow">Industries We Serve</span>
        <h2>Built for demanding business sectors</h2>
      </div>
      <div className="industry-list">
        {industries.map((industry) => <span key={industry}>{industry}</span>)}
      </div>
    </section>
  );
}
