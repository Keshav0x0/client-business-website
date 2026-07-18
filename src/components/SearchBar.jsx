import "../styles/searchbar.css";

function SearchBar() {
  return (
    <section className="search-container">
      <div className="search-header">
        <h2>Find the Perfect Tarpaulin</h2>

        <p>
          Search by GSM, category, usage, or custom requirements.
        </p>
      </div>

      <div className="search-box">
        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search tarps — e.g. truck cover, 400 GSM, waterproof..."
        />

        <button>SEARCH</button>
      </div>
    </section>
  );
}

export default SearchBar;