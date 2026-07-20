import "../styles/featuredProducts.css"

function FeaturedProducts() {
 const products = [
  {
    title: "Truck Tarpaulin",
    desc: "Heavy-duty covers designed for maximum protection during transportation across all weather conditions.",
    image: "/images/truck.jpg",
  },
  {
    title: "Agriculture Tarpaulin",
    desc: "Reliable and weather-resistant tarpaulins ideal for crop protection, storage, and agricultural applications.",
    image: "/images/agriculture.jpg",
  },
  {
    title: "Construction Tarpaulin",
    desc: "Durable solutions built to withstand harsh construction environments, dust, and debris exposure.",
    image: "/images/construction.jpg",
  },
  {
    title: "Industrial Tarpaulin",
    desc: "Premium industrial-grade covers engineered for strength, durability, and long-term performance.",
    image: "/images/industrial.jpg",
  },
  {
    title: "Waterproof Covers",
    desc: "100% waterproof covers providing dependable protection for machinery, equipment, and valuable assets.",
    image: "/images/waterproof.jpg",
  },
  {
    title: "Custom Tarpaulin Solutions",
    desc: "Tailor-made tarpaulin products manufactured to meet your exact size, material, and application requirements.",
    image: "/images/custom.jpg",
  },
];

  return (
    <section className="featured">
      <p className="section-subtitle">OUR PRODUCTS</p>

      <h2>Explore Our Product Range</h2>

      <div className="featured-grid">
  {products.map((item, index) => (
    <div
      key={index}
      className="featured-card"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="featured-overlay">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>

        <button>
          Explore Products
        </button>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}

export default FeaturedProducts;