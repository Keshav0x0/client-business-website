import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dashboard from "../cms/Dashboard";
import ProductsCMS from "../cms/ProductsCMS";
import AboutCMS from "../cms/AboutCMS";
import ContactCMS from "../cms/ContactCMS";
import QuotesCMS from "../cms/QuotesCMS";

import axios from "axios";

// import SettingsCMS from "../cms/SettingsCMS";

import "../styles/adminDashboard.css";

function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/kv-admin/login", { replace: true });
          return;
        }

        await axios.get("http://localhost:5000/api/admin/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/kv-admin/login", { replace: true });
      }
    };

    verify();
  }, [navigate]);
  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <h2>KV CMS</h2>

        <div className="admin-menu">
          <p
            className={`admin-menu-item ${
              activePage === "dashboard" ? "active" : ""
            }`}
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </p>

          <p
            className={`admin-menu-item ${
              activePage === "products" ? "active" : ""
            }`}
            onClick={() => setActivePage("products")}
          >
            Products
          </p>

          <p
            className={`admin-menu-item ${
              activePage === "about" ? "active" : ""
            }`}
            onClick={() => setActivePage("about")}
          >
            About
          </p>

          <p
            className={`admin-menu-item ${
              activePage === "contact" ? "active" : ""
            }`}
            onClick={() => setActivePage("contact")}
          >
            Contact
          </p>

          <p
            className={`admin-menu-item ${
              activePage === "quotes" ? "active" : ""
            }`}
            onClick={() => setActivePage("quotes")}
          >
            Quotes
          </p>

          {/* <p
      className={`admin-menu-item ${
        activePage === "settings" ? "active" : ""
      }`}
      onClick={() => setActivePage("settings")}
    >
      Settings
    </p> */}

          <p
            className="admin-menu-item logout-btn"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/kv-admin/login", { replace: true });
            }}
          >
            Logout
          </p>
        </div>
      </div>

      <div className="admin-content">
        {activePage === "dashboard" && <Dashboard />}
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
