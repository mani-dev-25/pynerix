import PricingCard from "../components/PricingCard";

function Pricing() {
  return (
    <div className="page">
      <h1>Choose Your Plan</h1>
      <div className="pricing-grid">
        <PricingCard title="Basic" price={1500} />
        <PricingCard title="Pro" price={3000} />
        <PricingCard title="Advanced" price={6999} />
      </div>
    </div>
  );
}

export default Pricing;