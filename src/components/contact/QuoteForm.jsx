import { useState } from 'react';

export default function QuoteForm() {
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
    <form className="form-card quote-form" onSubmit={handleSubmit}>
      <h3>Request a quote</h3>
      <div className="form-row">
        <label>
          Product Type
          <select name="productType" defaultValue="" required>
            <option value="" disabled>Select product</option>
            <option>Wooden pallets</option>
            <option>Plastic pallets</option>
            <option>Wooden crates</option>
            <option>Plastic jumbo bags</option>
            <option>Export boxes</option>
            <option>Used pallets</option>
            <option>Repaired pallets</option>
          </select>
        </label>
        <label>
          Quantity
          <input type="number" name="quantity" min="1" placeholder="100" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Size / Dimensions
          <input type="text" name="dimensions" placeholder="Length x width x height" required />
        </label>
        <label>
          Delivery Emirate
          <input type="text" name="delivery" placeholder="Dubai, Sharjah..." required />
        </label>
      </div>
      <label>
        Requirements
        <textarea name="requirements" placeholder="Load weight, export need, delivery date, drawings..." required minLength="10" />
      </label>
      <button className="btn btn-primary" type="submit">Send Quote Request</button>
      {submitted && <p className="form-success">Quote request validated. Connect backend/email to receive submissions.</p>}
    </form>
  );
}
