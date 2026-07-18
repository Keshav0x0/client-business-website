function ProductCard({ title, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />

      <h3>{title}</h3>

      <p>Premium quality tarpaulin for industrial and commercial use.</p>

      <button>VIEW DETAILS</button>
    </div>
  );
}

export default ProductCard;