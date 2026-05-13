import CTASection from '../components/common/CTASection.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';

const offerings = [
  'New wooden pallets',
  'Reconditioned pallets',
  'Plastic pallets',
  'Wooden crates',
  'Export packaging',
  'Jumbo bags',
  'Custom pallet manufacturing'
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">About Us</span>
        <h1>Trusted Wooden Pallet Manufacturer in UAE</h1>
        <p>
          Established in Sharjah's industrial hub, we specialize in manufacturing, repairing, and supplying industrial
          wooden pallets and packaging solutions for businesses across UAE.
        </p>
      </section>
      <section className="split-section">
        <div className="industrial-panel visual-crate" aria-hidden="true" />
        <div className="split-content">
          <span className="eyebrow">Company Introduction</span>
          <h2>Reliable pallet and industrial packaging support since 2009</h2>
          <p>
            With over 15 years of experience, we have built a strong reputation for reliability, product durability,
            competitive pricing, and timely delivery.
          </p>
          <p>
            Our team focuses on quality craftsmanship, industrial-grade materials, and customer satisfaction.
          </p>
          <h3>We provide</h3>
          <ul className="check-list two-column-list">
            {offerings.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>
      <section className="mission-vision-section">
        <article>
          <span className="eyebrow">Mission</span>
          <h2>Our Mission</h2>
          <p>
            To provide reliable, durable, and cost-effective pallet and packaging solutions that help businesses safely
            transport and store goods across UAE and international markets.
          </p>
        </article>
        <article>
          <span className="eyebrow">Vision</span>
          <h2>Our Vision</h2>
          <p>
            To become one of the most trusted pallet manufacturers and industrial packaging suppliers in the UAE and GCC
            region.
          </p>
        </article>
      </section>
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
