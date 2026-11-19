import { Link } from "react-router-dom";
import "./PricingPage.css";
import { PLANS } from "./plans";  
import AddOns from "./AddOns"; 

function PricingPage() {
  return (
    <main className="ppage">
      <Link to="/" className="ppage__back">
        ← Back to home
      </Link>

      <p className="ppage__label">PRICING</p>

      <h1 className="ppage__title">
        Everything in every package.
      </h1>

      <p className="ppage__subtitle">
        Choose the package that best suits your business and
        start growing your online presence.
      </p>

      <div className="ppage__grid">
        {PLANS.map((plan) => (
          <article
            key={plan.name}
            className={`ppage__card ${
              plan.featured ? "is-featured" : ""
            }`}
          >
            {plan.featured && (
              <span className="ppage__badge">RECOMMENDED</span>
            )}
            <h2 className="ppage__name">{plan.name}</h2>
            <p className="ppage__price">{plan.price}</p>
            <p className="ppage__summary">{plan.summary}</p>
            <p className="ppage__includes-label">What's included</p>
            <ul className="ppage__list">
              {plan.includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <Link 
              to={`/contact2?package=${encodeURIComponent(plan.name)}`} 
              className="ppage__btn"
            >
             Choose this package
            </Link>
          </article>
        ))}
      </div>

      
      <AddOns />
    </main>
  );
}

export default PricingPage;