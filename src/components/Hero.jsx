import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="eyebrow">EST. 20+ YEARS · MADE IN INDIA</div>

          <h1>
            TARPS THAT <span className="accent">OUTLAST</span> THE
            WEATHER.
          </h1>

          <p>
            Heavy-duty, UV-treated plastic tarpaulins for trucks,
            godowns, farms and construction sites.
          </p>

          <div className="hero-ctas">
            <Link to="/products" className="btn-solid">
              SHOP THE CATALOGUE →
            </Link>

            <Link to="/quote" className="btn-outline-dark">
              REQUEST CUSTOM SIZE
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              20+
              <span>Years</span>
            </div>

            <div>
              400 GSM
              <span>Max Thickness</span>
            </div>

            <div>
              48 HR
              <span>Dispatch</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-img"></div>

          <div className="hero-tag">
            <div className="eyebrow">FEATURE MODEL</div>

            <div
              style={{
                fontWeight: "700",
                fontSize: "12px",
                margin: "2px 0",
              }}
            >
              Heavy Duty Tarpaulin
            </div>

            <div className="price">₹499</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;