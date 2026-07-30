import { useState } from "react";
import axios from "axios";
import "../styles/quote.css";

function Quote() {
  const [quote, setQuote] = useState({
    name: "",
    phone: "",
    email: "",
    productType: "",
    size: "",
    gsm: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setQuote({
      ...quote,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/quotes",
        quote
      );

      alert("Quote Request Submitted Successfully!");

      setQuote({
        name: "",
        phone: "",
        email: "",
        productType: "",
        size: "",
        gsm: "",
        quantity: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="quote-page">
      <div className="quote-header">
        <p>REQUEST A QUOTE</p>

        <h1>Get Custom Tarpaulin Solutions</h1>

        <span>
          Fill out the form below and our team will get back to you
          with the best pricing and recommendations for your needs.
        </span>
      </div>

      <div className="quote-container">
        <div className="quote-info">
          <h2>Why Choose KV Enterprises?</h2>

          <ul>
            <li>✓ 20+ Years of Industry Experience</li>
            <li>✓ Custom Size Manufacturing</li>
            <li>✓ UV Treated & Waterproof Materials</li>
            <li>✓ Fast Delivery Across India</li>
            <li>✓ Trusted by Hundreds of Businesses</li>
          </ul>
        </div>

        <form
          className="quote-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={quote.name}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={quote.phone}
            onChange={handleChange}
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={quote.email}
            onChange={handleChange}
          />

          <label htmlFor="productType">Product Type</label>
          <select
            id="productType"
            name="productType"
            value={quote.productType}
            onChange={handleChange}
          >
            <option value="">Select Product Type</option>
            <option>Truck Tarpaulin</option>
            <option>Agriculture Tarpaulin</option>
            <option>Construction Tarpaulin</option>
            <option>Industrial Tarpaulin</option>
            <option>Custom Tarpaulin</option>
          </select>

          <label htmlFor="size">Required Size</label>
          <input
            id="size"
            name="size"
            type="text"
            placeholder="e.g. 20 x 30 ft"
            value={quote.size}
            onChange={handleChange}
          />

          <label htmlFor="gsm">Select GSM</label>
          <select
            id="gsm"
            name="gsm"
            value={quote.gsm}
            onChange={handleChange}
          >
            <option value="">Select GSM</option>
            <option>100 GSM</option>
            <option>200 GSM</option>
            <option>300 GSM</option>
            <option>400 GSM</option>
            <option>500 GSM</option>
          </select>

          <label htmlFor="quantity">Quantity Required</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            placeholder="Enter quantity"
            value={quote.quantity}
            onChange={handleChange}
          />

          <label htmlFor="message">
            Additional Requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write any additional requirements..."
            value={quote.message}
            onChange={handleChange}
          />

          <button type="submit">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default Quote;