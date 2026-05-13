import CTASection from '../components/common/CTASection.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">About Us</span>
        <h1>Trusted Wooden Pallet Supplier in UAE Since 2009</h1>
        <p>
          Mujahid Hussain Carpentry LLC is a leading manufacturer, supplier, and repairer of wooden pallets based in
          Sharjah, UAE with over 15 years of industry experience.
        </p>
      </section>
      <section className="split-section">
        <div className="industrial-panel visual-crate" aria-hidden="true" />
        <div className="split-content">
          <h2>Premium pallets, crates, plastic pallets, and jumbo bags</h2>
          <p>
            We specialize in high-quality new and refurbished wooden pallets, plastic pallets, and custom wooden
            crates for businesses across Dubai, Abu Dhabi, JAFZA, Ras Al Khaimah, Mussafah, Jabal Ali, and Umm Al
            Quwain.
          </p>
          <p>
            Our team manufactures new wooden pallets in all sizes, refurbishes used pallets, supplies new and used
            plastic pallets, builds custom export crates, and provides fast UAE-wide delivery.
          </p>
        </div>
      </section>
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
