import { useEffect, useState } from "react";
import axios from "axios";

const QuotesCMS = () => {
  const [quotes, setQuotes] = useState([]);

  // Fetch all quotes
  const fetchQuotes = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/quotes");

    console.log("API Response:", res.data);

    setQuotes(res.data.quotes);
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
};

  // Update quote status
  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/quotes/${id}`, {
        status,
      });

      fetchQuotes();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Delete quote
  const deleteQuote = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this quote request?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/quotes/${id}`);
      fetchQuotes();
    } catch (error) {
      console.error("Error deleting quote:", error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
  <div className="quotes-cms">
    <h2>Customer Quote Requests</h2>

    {quotes.length === 0 ? (
      <p>No quote requests found.</p>
    ) : (
      quotes.map((quote) => (
        <div key={quote._id} className="quote-card">
          <div className="quote-header">
            <h3>{quote.name}</h3>
            <span className={`status ${quote.status.toLowerCase()}`}>
              {quote.status}
            </span>
          </div>

          <div className="quote-details">
            <p>
              <strong>Phone:</strong> {quote.phone}
            </p>

            <p>
              <strong>Email:</strong> {quote.email}
            </p>

            <p>
              <strong>Product:</strong> {quote.productType}
            </p>

            <p>
              <strong>Size:</strong> {quote.size}
            </p>

            <p>
              <strong>GSM:</strong> {quote.gsm}
            </p>

            <p>
              <strong>Quantity:</strong> {quote.quantity}
            </p>
          </div>

          <div className="quote-message">
            <strong>Message:</strong>
            <p>{quote.message}</p>
          </div>

          <div className="quote-actions">
            <button
              onClick={() => updateStatus(quote._id, "Pending")}
            >
              Pending
            </button>

            <button
              onClick={() => updateStatus(quote._id, "Contacted")}
            >
              Contacted
            </button>

            <button
              onClick={() => updateStatus(quote._id, "Completed")}
            >
              Completed
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteQuote(quote._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))
    )}
  </div>
);
};

export default QuotesCMS;