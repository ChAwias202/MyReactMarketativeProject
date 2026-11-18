import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // 👈 Added Link import
import "./Results.css";

const STATS = [
  {
    number: "65+",
    label: "PROJECTS DELIVERED",
    desc: "Creative work that drives real results",
  },
  {
    number: "55+",
    label: "HAPPY CLIENTS",
    desc: "Brands that keep coming back for more",
  },
  {
    number: "5+",
    label: "YEARS OF EXPERIENCE",
    desc: "Mastering the art of animation, content and design",
  },
  {
    number: "95%",
    label: "CLIENT SATISFACTION",
    desc: "We mostly focus on exceeding expectations",
  },
];

export default function Results() {
  return (
    <section className="results" id="results">
      <div className="results__inner">
        
        {/* Left Column - Title & Text */}
        <div className="results__left">
          <motion.h2 
            className="results__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            We Turn <br />
            Ideas into <br />
            Visual Masterpieces
          </motion.h2>

          <motion.p 
            className="results__desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Whether it's an engaging explainer video, a vibrant social media
            campaign, or captivating motion graphics, we bring creativity and
            expertise to every project.
          </motion.p>

          {/* 👈 Changed to motion.div wrapping a Link to /work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/about" className="results__btn">
  Know More About us
</Link>
          </motion.div>
        </div>

        {/* Right Column - Stats Grid */}
        <div className="results__right">
          <div className="results__grid">
            {STATS.map((stat, i) => (
              <motion.div 
                key={stat.label} 
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <h3 className="stat-card__number">{stat.number}</h3>
                <span className="stat-card__label">{stat.label}</span>
                <p className="stat-card__desc">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}