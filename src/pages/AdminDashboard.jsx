import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard";
import HomeCMS from "../HomeCMS";
import ProductsCMS from "../ProductsCMS";
import AboutCMS from "../AboutCMS";
import ContactCMS from "../ContactCMS";
import QuotesCMS from "../QuotesCMS";
import SettingsCMS from "../SettingsCMS";
import "../styles/adminDashboard.css";

function AdminDashboard() {

  const [activePage, setActivePage] =
  useState("dashboard");

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if(!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
  <div className="admin-layout">

    <div className="admin-sidebar">
      <h2>KV CMS</h2>

      {/* Dashboard */}
      <p
        className={`admin-menu-item ${
          activePage === "dashboard" ? "active" : ""
        }`}
        onClick={() => setActivePage("dashboard")}
      >
        Dashboard
      </p>

      {/* Home */}
      <p
        className={`admin-menu-item ${
          activePage === "home" ? "active" : ""
        }`}
        onClick={() => setActivePage("home")}
      >
        Home
      </p>

      {/* Products */}
      <p
        className={`admin-menu-item ${
          activePage === "products" ? "active" : ""
        }`}
        onClick={() => setActivePage("products")}
      >
        Products
      </p>

      {/* About */}
      <p
        className={`admin-menu-item ${
          activePage === "about" ? "active" : ""
        }`}
        onClick={() => setActivePage("about")}
      >
        About
      </p>

      {/* Contact */}
      <p
        className={`admin-menu-item ${
          activePage === "contact" ? "active" : ""
        }`}
        onClick={() => setActivePage("contact")}
      >
        Contact
      </p>

      {/* Quotes */}
      <p
        className={`admin-menu-item ${
          activePage === "quotes" ? "active" : ""
        }`}
        onClick={() => setActivePage("quotes")}
      >
        Quotes
      </p>

      {/* Settings */}
      <p
        className={`admin-menu-item ${
          activePage === "settings" ? "active" : ""
        }`}
        onClick={() => setActivePage("settings")}
      >
        Settings
      </p>

      <p
  className="admin-menu-item"
  onClick={() => {
    localStorage.removeItem("token");
    console.log("Token Deleted");
    navigate("/login");
  }}
>
  Logout
</p>
    </div>

    <div className="admin-content">
      {activePage === "dashboard" && <Dashboard />}
      {activePage === "home" && <HomeCMS />}
      {activePage === "products" && <ProductsCMS />}
      {activePage === "about" && <AboutCMS />}
      {activePage === "contact" && <ContactCMS />}
      {activePage === "quotes" && <QuotesCMS />}
      {activePage === "settings" && <SettingsCMS />}
    </div>

  </div>
);
}

export default AdminDashboard;