function ProductCard({ title, image, desc }) {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={title}
        className="card-image"
      />

      <h3>{title}</h3>

      <p>{desc}</p>

      <button className="quote-product">GET QUOTE</button>
    </div>
  );
}

export default ProductCard;