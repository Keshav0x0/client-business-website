import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="/quote" className="quote-btn">
            GET QUOTE
          </Link>

          <a
            href="https://wa.me/919999999999"
            className="whatsapp-btn"
          >
            WHATSAPP
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
          GET QUOTE
        </Link>

        <a href="https://wa.me/919999999999">
          WHATSAPP
        </a>
      </div>
    </>
  );
}

export default Navbar;