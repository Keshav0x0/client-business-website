import "../styles/carousel.css";

function Carousel() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        <span>BULK ORDERS</span>
        <span>UV TREATED</span>
        <span>REINFORCED EYELETS</span>
        <span>48 HOUR DISPATCH</span>
        <span>HEAVY DUTY</span>
        <span>WEATHERPROOF</span>
        <span>CUSTOM SIZE</span>

        {/* Duplicate for infinite effect */}

        <span>BULK ORDERS</span>
        <span>UV TREATED</span>
        <span>REINFORCED EYELETS</span>
        <span>48 HOUR DISPATCH</span>
        <span>HEAVY DUTY</span>
        <span>WEATHERPROOF</span>
        <span>CUSTOM SIZE</span>
      </div>
    </div>
  );
}

export default Carousel;