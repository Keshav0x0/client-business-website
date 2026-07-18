import ProductCard from "./ProductCard";
import "../styles/products.css";

function FeaturedProducts() {
  const products = [
    {
      title: "Truck Tarpaulin",
      image: "./images/truck.jpg",
    },

    {
      title: "Agriculture Tarpaulin",
      image: "./images/agriculture.jpg",
    },

    {
      title: "Construction Tarpaulin",
      image: "./images/construction.jpg",
    },

    {
      title: "Industrial Tarpaulin",
      image: "./images/industrial.jpg",
    },

    {
      title: "Waterproof Covers",
      image: "./images/waterproof.jpg",
    },

    {
      title: "Custom Tarpaulin",
      image: "./images/custom.jpg",
    },
  ];

  return (
    <section className="featured">
      <p className="section-subtitle">OUR PRODUCTS</p>

      <h2>Explore Our Product Range</h2>

      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;