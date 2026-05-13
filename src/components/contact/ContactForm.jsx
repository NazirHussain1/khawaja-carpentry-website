export default function ContactForm() {
  return (
    <form className="form-card">
      <h3>Send a message</h3>
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" placeholder="+971 ..." />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="you@example.com" />
      </label>
      <label>
        Message
        <textarea name="message" placeholder="Tell us what you need" />
      </label>
      <button className="btn btn-primary" type="submit">Submit Inquiry</button>
    </form>
  );
}
