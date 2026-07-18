import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="topnav">
      <div className="logo-group">
        <div className="logo-box">KV</div>

        <div className="logo-text">
          <div className="name">KV ENTERPRISES</div>
          <div className="sub">HEAVY DUTY · INDIA</div>
        </div>
      </div>

      <nav className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/quote">CUSTOM QUOTE</Link>
      </nav>

      <div className="nav-right">
        <button className="signin-btn">LOGIN</button>
      </div>
    </header>
  );
}

export default Navbar;
