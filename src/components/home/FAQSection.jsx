import faqs from '../../data/faqs.js';

export default function FAQSection() {
  return (
    <section className="section light-section">
      <div className="section-heading">
        <span className="eyebrow">FAQ</span>
        <h2>Common questions before requesting a quote</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
