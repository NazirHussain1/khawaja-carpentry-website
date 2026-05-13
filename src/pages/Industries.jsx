import CTASection from '../components/common/CTASection.jsx';
import { industries, serviceAreas } from '../data/industries.js';

export default function Industries() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Industries</span>
        <h1>Pallet and packaging supply for UAE business sectors</h1>
        <p>Serving construction, logistics, food, pharma, manufacturing, oil and gas, and export operations.</p>
      </section>
      <section className="section light-section">
        <div className="section-heading">
          <span className="eyebrow">Industries We Serve</span>
          <h2>Built for demanding commercial and industrial workflows</h2>
        </div>
        <div className="industry-list centered-list">
          {industries.map((industry) => <span key={industry}>{industry}</span>)}
        </div>
      </section>
      <section className="section dark-section">
        <div className="section-heading">
          <span className="eyebrow">Service Areas</span>
          <h2>Fast supply across UAE</h2>
        </div>
        <div className="industry-list centered-list dark-list">
          {serviceAreas.map((area) => <span key={area}>{area}</span>)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
