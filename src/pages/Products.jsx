import { useState } from "react";
import "../styles/products.css";
import { useNavigate } from "react-router-dom";


function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

   const navigate = useNavigate();
  const products = [
    {
      title: "Heavy Duty Truck Tarpaulin",
      category: "Truck",
      image: "/images/truck.jpg",
      desc: "Durable UV-treated tarpaulin designed for heavy transportation.",
      gsm: "400 GSM",
    },

    {
      title: "Agriculture Tarpaulin",
      category: "Agriculture",
      image: "/images/agriculture.jpg",
      desc: "Reliable tarpaulin for crop and storage protection.",
      gsm: "200 GSM",
    },

    {
      title: "Construction Tarpaulin",
      category: "Construction",
      image: "/images/construction.jpg",
      desc: "Built to withstand harsh construction environments.",
      gsm: "300 GSM",
    },

    {
      title: "Industrial Tarpaulin",
      category: "Industrial",
      image: "/images/industrial.jpg",
      desc: "Industrial-grade covers engineered for durability.",
      gsm: "500 GSM",
    },

    {
      title: "Waterproof Cover",
      category: "Waterproof",
      image: "/images/waterproof.jpg",
      desc: "100% waterproof protection for equipment and assets.",
      gsm: "250 GSM",
    },

    {
      title: "Custom Tarpaulin",
      category: "Custom",
      image: "/images/custom.jpg",
      desc: "Tailor-made tarpaulin solutions for every requirement.",
      gsm: "Custom",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section className="products-page">
      <div className="products-header">
        <p>OUR PRODUCTS</p>

        <h1>Industrial Tarpaulin Solutions</h1>

        <span>
          Premium tarpaulin products engineered for transportation,
          agriculture, construction and industrial applications.
        </span>
      </div>

      <div className="search-bar">
  <input
    type="text"
    placeholder="Search Truck, Agriculture, Waterproof..."
  />

  <button>Search</button>
</div>


      <div className="products-container">
        {/* Sidebar */}

        <aside className="sidebar">
          <div className="filter-box">
            <h3>Categories</h3>


  <ul>
     <li onClick={() => setSelectedCategory("All")}>
                All Products
              </li>

              <li onClick={() => setSelectedCategory("Truck")}>
                Truck Tarpaulin
              </li>

              <li onClick={() => setSelectedCategory("Agriculture")}>
                Agriculture
              </li>

              <li onClick={() => setSelectedCategory("Construction")}>
                Construction
              </li>

              <li onClick={() => setSelectedCategory("Industrial")}>
                Industrial
              </li>

              <li onClick={() => setSelectedCategory("Waterproof")}>
                Waterproof
              </li>

              <li onClick={() => setSelectedCategory("Custom")}>
                Custom Solutions
              </li>

  </ul>
</div>

<div className="filter-box">
  <h3>GSM</h3>

  <select>
    <option>All GSM</option>
    <option>100 GSM</option>
    <option>200 GSM</option>
    <option>300 GSM</option>
    <option>400 GSM</option>
    <option>500 GSM</option>
  </select>
</div>
        </aside>

        {/* Products */}

        <div className="products-grid">
          {filteredProducts.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="product-content">
                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <div className="product-info">
  <span>{item.gsm}</span>
  <span>UV Treated</span>
  <span>100% Waterproof</span>
</div>
<div className="buttons">
  <button onClick={() => navigate("/quote")}>
  Get Quote
</button>

  <a href="tel:+919999999999" className="call-btn">
    Call Now
  </a>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;