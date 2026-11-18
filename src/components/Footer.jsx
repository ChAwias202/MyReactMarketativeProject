import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        
        {/* Top Section: Brand & Links */}
        <div className="footer__top">
          
          {/* Brand Column */}
          <div className="footer__brand">
            <h2 className="footer__logo">MARKETATIVE</h2>
            <p className="footer__desc">
              Marketative is a full-service digital agency specializing in web development, interactive experiences, and digital marketing.
            </p>
          </div>

          {/* Links Grid */}
          <div className="footer__links">
            
            <div className="footer__col">
              <h4 className="footer__col-title">Quick link</h4>
              <ul className="footer__list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Others</h4>
              <ul className="footer__list">
                <li><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Social</h4>
              <ul className="footer__list">
                {/* 👈 REPLACE # WITH YOUR ACTUAL LINKS */}
                <li><p style={{ margin: 0, color: "#a1a1aa", fontSize: "0.9rem" }}>marketative@gmail.com</p></li>
                <li><a href="https://www.instagram.com/market.ative?rpxt=MTdwYms2bmN5b2p1MA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://www.facebook.com/share/1EEVMpb9t6/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Facebook</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Copyright & Credits */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            ©{currentYear} Marketative. All rights reserved.
          </p>
          <p className="footer__credit">
            Design by Marketative
          </p>
        </div>
      </div>

      {/* Giant Background Text Effect */}
      <div className="footer__giant-text">
        MARKETATIVE
      </div>
    </footer>
  );
}