import ContactInfo from '../components/contact/ContactInfo.jsx';
import QuoteForm from '../components/contact/QuoteForm.jsx';

export default function GetQuote() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Get Quote</span>
        <h1>Get instant pricing for pallets, crates, and jumbo bags</h1>
        <p>Send product type, size, quantity, and delivery location for custom pricing.</p>
      </section>
      <section className="contact-layout">
        <ContactInfo />
        <QuoteForm />
      </section>
    </>
  );
}
