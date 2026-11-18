
import React from "react";
import "./WhyChooseUs.css";

const reasons = [
  "Industry-Focused Strategies",
  "Customized Solutions",
  "Creative Marketing",
  "Growth-Focused Approach",
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-country">AUSTRALIA</div>

      <div className="why-content">
        <div className="why-heading">
          <h2>
            WHY
            <span>CHOOSE</span>
            <span className="why-us">
              <span className="why-arrow">→</span>
              US
            </span>
          </h2>

          <div className="why-question">?</div>
        </div>

        <div className="why-reasons">
          {reasons.map((reason, index) => (
            <div
              className={`why-pill why-pill-${index + 1}`}
              key={reason}
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <span className="why-dot"></span>
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="why-footer">
        DIGITAL MARKETING • LEAD GENERATION • WEB DEVELOPMENT
      </div>
    </section>
  );
}

export default WhyChooseUs;
