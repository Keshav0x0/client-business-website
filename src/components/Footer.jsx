import "../styles/footer.css";

function Footer() {
  return (
    <>
      <section className="cta-section">
        <div className="cta-box">
          <p>NEED SOMETHING SPECIFIC</p>

          <h2>
            CUSTOM SIZE. <span>BULK PRICE.</span>
          </h2>

          <p className="cta-text">
            Send us your dimensions, GSM and quantity. We'll quote
            you within 2 working hours.
          </p>

          <button>GET FREE QUOTE →</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">

          <div>
            <h2>KV ENTERPRISES</h2>

            <p>
              Heavy-duty plastic tarpaulins for transport,
              agriculture, construction and industrial storage.
            </p>
          </div>

          <div>
            <h4>SHOP</h4>

            <ul>
              <li>Waterproof Tarps</li>
              <li>Truck Covers</li>
              <li>Agriculture</li>
              <li>Construction</li>
            </ul>
          </div>

          <div>
            <h4>COMPANY</h4>

            <ul>
              <li>Request Quote</li>
              <li>Business Account</li>
            </ul>
          </div>

          <div>
            <h4>CONTACT</h4>

            <ul>
              <li>+91 XXXXX XXXXX</li>
              <li>kventerprises@gmail.com</li>
              <li>Sonipat, Haryana</li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          © 2026 KV Enterprises
        </div>
      </footer>
    </>
  );
}

export default Footer;