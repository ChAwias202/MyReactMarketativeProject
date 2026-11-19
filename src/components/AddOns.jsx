import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // 👈 Ensure Link is imported
import "./AddOns.css";

const ADD_ONS = [
  {
    id: "ads",
    name: "Meta, Google & TikTok Ads Management",
    desc: "Ongoing campaign setup, creative & reporting.",
    price: 799,
  },
  {
    id: "ai-video",
    name: "AI Video Ads (4 videos)",
    desc: "Script → edit → delivery, ready to run.",
    price: 499,
  },
  {
    id: "audit",
    name: "Social Media Audit & Strategy",
    desc: "Channel audit + 90-day content plan.",
    price: 399,
  },
  {
    id: "pixel",
    name: "Meta Pixel & Conversion API Setup",
    desc: "Full tracking install, verified conversions.",
    price: 399,
  },
];

const AUD = (n) => `A$${n.toLocaleString("en-AU")}`;

export default function AddOns() {
  const [selected, setSelected] = useState([]);

  const toggle = (id) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const total = ADD_ONS.filter((a) => selected.includes(a.id)).reduce(
    (sum, a) => sum + a.price,
    0
  );

  return (
    <section className="addons" id="addons">
      <div className="addons__inner">
        <header className="addons__head">
          <p className="addons__eyebrow">Marketing &amp; Add‑ons</p>
          <h2 className="addons__title">Top up your package</h2>
          <p className="addons__sub">
            Mix and match what you need. Tick the services you'd like a quote for.
          </p>
        </header>

        <ul className="addons__list">
          {ADD_ONS.map((a) => {
            const isOn = selected.includes(a.id);
            return (
              <li key={a.id} className={`addon ${isOn ? "addon--on" : ""}`}>
                <label className="addon__row">
                  <input
                    type="checkbox"
                    className="addon__check"
                    checked={isOn}
                    onChange={() => toggle(a.id)}
                  />
                  <span className="addon__text">
                    <span className="addon__name">{a.name}</span>
                    <span className="addon__desc">{a.desc}</span>
                  </span>
                  <span className="addon__price">{AUD(a.price)}</span>
                </label>
              </li>
            );
          })}
        </ul>

        <motion.div
          className="addons__bar"
          animate={{ opacity: selected.length ? 1 : 0.55 }}
        >
          <span className="addons__count">{selected.length} selected</span>
          <span className="addons__total">
            {selected.length ? AUD(total) : "—"}
          </span>
          
          {/* 👈 This Link goes to the page where you render <Contact2 /> */}
          <Link
            to={selected.length ? "/pricing-enquiry" : "#"} // Update this route if yours is different!
            className={`addons__cta ${
              selected.length ? "" : "addons__cta--disabled"
            }`}
            onClick={(e) => {
              if (selected.length === 0) e.preventDefault(); 
            }}
            aria-disabled={selected.length === 0}
          >
            Contact Us →
          </Link>
          
        </motion.div>
      </div>
    </section>
  );
}