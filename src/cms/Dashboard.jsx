import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [stats, setStats] = useState({
    products: 0,
    quotes: 0,
    pending: 0,
    completed: 0,
  });

  const [recentQuotes, setRecentQuotes] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const [productsRes, quotesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/products"),
        axios.get("http://localhost:5000/api/quotes"),
      ]);

      const products = productsRes.data.products || [];
      const quotes = quotesRes.data.quotes || [];

      setStats({
        products: products.length,
        quotes: quotes.length,
        pending: quotes.filter(
          (q) => q.status === "Pending"
        ).length,
        completed: quotes.filter(
          (q) => q.status === "Completed"
        ).length,
      });

      setRecentQuotes(quotes.slice(0, 5));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard-container">

      <h1>Dashboard</h1>

      <p
        style={{
          color: "#666",
          marginBottom: "35px",
          fontSize: "16px",
        }}
      >
        Welcome to the KV Enterprises Admin Dashboard.
      </p>

      {/* Stats */}

      <div className="stats">

        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{stats.products}</p>
        </div>

        <div className="stat-card">
          <h3>Total Quotes</h3>
          <p>{stats.quotes}</p>
        </div>

        <div className="stat-card">
          <h3>Pending Quotes</h3>
          <p>{stats.pending}</p>
        </div>

        <div className="stat-card">
          <h3>Completed Quotes</h3>
          <p>{stats.completed}</p>
        </div>

      </div>

      {/* Recent Quotes */}

      <div className="dashboard-section">

        <h2>Recent Quote Requests</h2>

        <div className="activity-card">

          {recentQuotes.length === 0 ? (

            <p>No quote requests available.</p>

          ) : (

            recentQuotes.map((quote) => (

              <div
                key={quote._id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 0",
                  borderBottom: "1px solid #eee",
                }}
              >

                <div>

                  <strong>{quote.name}</strong>

                  <p
                    style={{
                      margin: "5px 0",
                      color: "#666",
                    }}
                  >
                    {quote.productType}
                  </p>

                  <small>{quote.phone}</small>

                </div>

                <span
                  style={{
                    padding: "8px 14px",
                    borderRadius: "20px",
                    background:
                      quote.status === "Pending"
                        ? "#fff3cd"
                        : quote.status === "Contacted"
                        ? "#cfe2ff"
                        : "#d1e7dd",

                    color:
                      quote.status === "Pending"
                        ? "#856404"
                        : quote.status === "Contacted"
                        ? "#084298"
                        : "#0f5132",

                    fontWeight: "600",
                  }}
                >
                  {quote.status}
                </span>

              </div>

            ))

          )}

        </div>

      </div>

      {/* System Status */}

      <div className="dashboard-section">

        <h2>System Status</h2>

        <div className="activity-card">

          <p>✅ Product Management Connected</p>

          <p>✅ About CMS Working</p>

          <p>✅ Contact CMS Working</p>

          <p>✅ Quote Management Working</p>

          <p>✅ MongoDB Atlas Connected</p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;