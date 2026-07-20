import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

   const navigate = useNavigate();
  return (
    <>
      <header className="topnav">
        {/* LOGO */}

        <div className="logo-group">
          <div className="logo-box">KV</div>

          <div className="logo-text">
            <div className="name">KV ENTERPRISES</div>
            <div className="sub">TARPAULIN INDUSTRIES</div>
          </div>
        </div>

        {/* DESKTOP NAV */}

        <nav className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        {/* DESKTOP BUTTONS */}

        <div className="nav-right">
          <button
  className="quote-btn"
  onClick={() => navigate("/quote")}
>
  Get Quote &nbsp;
  <i className="fa-solid fa-file"></i>
</button>

          <a
            href="https://wa.me/9818171023"
            className="whatsapp-btn"
          >
            <FaWhatsapp/>
          </a>
        </div>

        {/* MOBILE HAMBURGER */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </header>

      {/* MOBILE MENU */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <Link to="/" onClick={() => setMenuOpen(false)}>
          HOME
        </Link>

        <Link to="/products" onClick={() => setMenuOpen(false)}>
          PRODUCTS
        </Link>

        <Link to="/about" onClick={() => setMenuOpen(false)}>
          ABOUT
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          CONTACT
        </Link>

        <Link to="/quote" onClick={() => setMenuOpen(false)}>
          GET QUOTE <i className="fa-solid fa-file"></i>
        </Link>

        <a href="https://wa.me/9818171023">
          WHATSAPP <FaWhatsapp />
        </a>
      </div>
    </>
  );
}

export default Navbar;