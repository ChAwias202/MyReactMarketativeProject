import { Link } from "react-router-dom";
import "./Pricing.css";
import { PLANS } from "./plans";



function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <p className="pricing__label">PRICING</p>
      <h2 className="pricing__title">Simple pricing. No surprises.</h2>
      <p className="pricing__subtitle">
        Clear packages, listed right here, so you always know what it costs.
      </p>

      <ul className="pricing__cards">
        {PLANS.map((plan) => (
          <li
            key={plan.name}
            className={`pricing__card ${plan.featured ? "is-featured" : ""}`}
          >
            <span className="pricing__name">{plan.name}</span>
            <p className="pricing__price">
              {plan.price}
              
            </p>
          </li>
        ))}
      </ul>

      {/* Opens the full pricing page */}
      <Link to="/pricing" className="pricing__cta">
        See full pricing
      </Link>

<div className="pricing__webdev">
  <h3 className="pricing__webdev-title">
    Website Development Pricing
  </h3>

  <div className="pricing__webdev-cards">
    <div className="pricing__webdev-card">
      <h4>Standard 2D Website</h4>
      <p>A$1,999 – A$4,999</p>
    </div>

    <div className="pricing__webdev-card">
      <h4>3D Interactive Website</h4>
      <p>A$2,499 – A$7,999</p>
    </div>
  </div>
</div>

    </section>
  );
}

export default Pricing;
