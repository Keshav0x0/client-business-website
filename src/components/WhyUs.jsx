import "../styles/whyUs.css"
import "../styles/products.css";

function WhyUs() {
  return (
    <section className="why-us">
      <p className="section-subtitle">WHY CHOOSE US</p>

      <h2>Built for Durability. Trusted Across India.</h2>

      <div className="why-grid">
        <div className="why-card">
          <h3>10+ Years Experience</h3>
          <p>
            Delivering premium tarpaulin solutions to businesses nationwide.
          </p>
        </div>

        <div className="why-card">
          <h3>Custom Sizes</h3>
          <p>
            We manufacture tarpaulins according to your exact requirements.
          </p>
        </div>

        <div className="why-card">
          <h3>Fast Dispatch</h3>
          <p>
            Bulk orders are processed quickly with reliable delivery support.
          </p>
        </div>

        <div className="why-card">
          <h3>Premium Quality</h3>
          <p>
            UV resistant, waterproof and heavy-duty materials for every use.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;