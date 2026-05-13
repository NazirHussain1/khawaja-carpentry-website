export default function QuoteForm() {
  return (
    <form className="form-card quote-form">
      <h3>Request a quote</h3>
      <div className="form-row">
        <label>
          Product Type
          <select name="productType" defaultValue="">
            <option value="" disabled>Select product</option>
            <option>Wooden pallets</option>
            <option>Plastic pallets</option>
            <option>Wooden crates</option>
            <option>Plastic jumbo bags</option>
          </select>
        </label>
        <label>
          Quantity
          <input type="number" name="quantity" min="1" placeholder="100" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Size / Dimensions
          <input type="text" name="dimensions" placeholder="Length x width x height" />
        </label>
        <label>
          Delivery Emirate
          <input type="text" name="delivery" placeholder="Dubai, Sharjah..." />
        </label>
      </div>
      <label>
        Requirements
        <textarea name="requirements" placeholder="Load weight, export need, delivery date, drawings..." />
      </label>
      <button className="btn btn-primary" type="submit">Send Quote Request</button>
    </form>
  );
}
