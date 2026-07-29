import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/about.css";

function About() {
  const [about, setAbout] = useState(null);

  const fetchAbout = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/about"
      );

      setAbout(res.data.about);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  if (!about) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="about-page">
      {/* Header */}

      <div className="about-header">
        <p>ABOUT US</p>

        <h1>{about.title}</h1>

        <span>{about.description}</span>

        {about.image && (
          <img
            src={about.image}
            alt="About KV Enterprises"
            className="about-image"
          />
        )}
      </div>

      {/* Stats */}

      <div className="stats-container">
        <div className="stat-card">
          <h2>{about.experience}</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h2>{about.customers}</h2>
          <p>Customers Served</p>
        </div>

        <div className="stat-card">
          <h2>{about.quality}</h2>
          <p>Quality Assurance</p>
        </div>

        <div className="stat-card">
          <h2>48 HR</h2>
          <p>Average Dispatch</p>
        </div>
      </div>

      {/* Story */}

      <div className="about-card">
        <h2>Our Story</h2>

        <p>
          Founded with a commitment to quality and durability,
          KV Enterprises has grown into a trusted name in the
          tarpaulin industry. Over the years, we have served
          businesses of all sizes with customized and reliable
          tarpaulin solutions.
        </p>
      </div>

      {/* Why Choose Us */}

      <div className="about-card">
        <h2>Why Choose KV Enterprises?</h2>

        <div className="why-grid">
          <div>✓ Premium Quality Materials</div>
          <div>✓ Custom Sizes Available</div>
          <div>✓ UV Treated Products</div>
          <div>✓ Waterproof Solutions</div>
          <div>✓ Fast Delivery</div>
          <div>✓ Competitive Pricing</div>
        </div>
      </div>

      {/* Mission */}

      <div className="about-card">
        <h2>Our Mission</h2>

        <p>
          To provide durable, affordable and innovative
          tarpaulin solutions while maintaining the highest
          standards of quality, customer service and timely
          delivery.
        </p>
      </div>

      {/* Manufacturing Process */}

      <div className="about-card">
        <h2>Manufacturing Process</h2>

        <div className="process-grid">
          <div className="process-card">
            <span>01</span>
            <h3>Raw Material</h3>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Quality Check</h3>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Production</h3>
          </div>

          <div className="process-card">
            <span>04</span>
            <h3>Dispatch</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;