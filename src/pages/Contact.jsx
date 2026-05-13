import ContactForm from '../components/contact/ContactForm.jsx';
import ContactInfo from '../components/contact/ContactInfo.jsx';
import QuoteForm from '../components/contact/QuoteForm.jsx';

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Contact</span>
        <h1>Request pricing for pallets, crates, and jumbo bags</h1>
        <p>Send your pallet type, size, quantity, and delivery location. We will respond with custom pricing.</p>
      </section>
      <section className="contact-layout">
        <ContactInfo />
        <ContactForm />
      </section>
      <section className="section light-section">
        <QuoteForm />
      </section>
    </>
  );
}
