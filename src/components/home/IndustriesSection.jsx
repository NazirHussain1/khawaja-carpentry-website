const serviceAreas = ['Dubai', 'Sharjah', 'JAFZA', 'Jabal Ali', 'Mussafah', 'Ras Al Khaimah', 'Umm Al Quwain', 'Abu Dhabi', 'Ajman', 'Fujairah'];
const industries = ['Construction', 'Pharmaceutical', 'Food & Beverage', 'Manufacturing', 'Logistics', 'Oil & Gas'];

export default function IndustriesSection() {
  return (
    <section className="industries-section">
      <div>
        <span className="eyebrow">Service Areas</span>
        <h2>Serving major industrial and business areas across UAE</h2>
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
