import { useNavigate } from "react-router-dom";

function PricingCard({ title, price }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>₹{price}</h3>
      <button
        className="btn-primary"
        onClick={() =>
          navigate("/requirement", { state: { price } })
        }
      >
        Get Started
      </button>
    </div>
  );
}

export default PricingCard;