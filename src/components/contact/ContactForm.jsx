import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h3>Send a message</h3>
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" required minLength="2" />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" placeholder="+971 ..." required pattern="^[+0-9\\s-]{7,}$" />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="you@example.com" required />
      </label>
      <label>
        Message
        <textarea name="message" placeholder="Tell us what you need" required minLength="10" />
      </label>
      <button className="btn btn-primary" type="submit">Submit Inquiry</button>
      {submitted && <p className="form-success">Thanks. Your inquiry is ready for follow-up.</p>}
    </form>
  );
}
