import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>KV Enterprises</h2>

          <p>
            Delivering premium tarpaulin solutions across India
            with over 20 years of industry experience.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/quote">Get Quote</Link>
        </div>

        <div className="footer-section">
          <h3>Our Products</h3>

          <p>Truck Tarpaulin</p>
          <p>Agriculture Tarpaulin</p>
          <p>Construction Tarpaulin</p>
          <p>Industrial Tarpaulin</p>
          <p>Custom Solutions</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📞 +91 XXXXX XXXXX</p>
          <p>✉ info@kventerprises.com</p>
          <p>📍 Sonipat, Haryana, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 KV Enterprises. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;