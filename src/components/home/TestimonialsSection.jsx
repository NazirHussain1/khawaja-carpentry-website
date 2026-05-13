import testimonials from '../../data/testimonials.js';

export default function TestimonialsSection() {
  return (
    <section className="section dark-section">
      <div className="section-heading">
        <span className="eyebrow">Testimonials</span>
        <h2>Trusted by operations and procurement teams</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={`${item.name}-${item.company}`}>
            <p>“{item.quote}”</p>
            <h4>{item.name}</h4>
            <span>{item.company}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
