import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // your transparent infinity logo

const NAV_LINKS = ["Home", "Products", "Technology", "About", "Support"];

function Navbar() {
  // Which link is currently highlighted (underlined)
  const [activeLink, setActiveLink] = useState("Home");
  // Whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setMenuOpen(false); // close the mobile menu after a click
  };

  return (
    <header className="navbar">
      {/* Logo + brand name */}
      <a
        href="#home"
        className="navbar__brand"
        onClick={() => handleLinkClick("Home")}
      >
        <img src={logo} alt="" className="navbar__logo" />
        <span className="navbar__name">Marketative</span>
      </a>

      {/* Menu links (and Contact button on mobile) */}
      <nav
        id="main-menu"
        aria-label="Main"
        className={`navbar__links ${menuOpen ? "is-open" : ""}`}
      >
        <ul>
          {NAV_LINKS.map((name) => (
            <li key={name}>
              <a
                href={`#${name.toLowerCase()}`}
                className={`navbar__link ${
                  activeLink === name ? "is-active" : ""
                }`}
                aria-current={activeLink === name ? "page" : undefined}
                onClick={() => handleLinkClick(name)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="navbar__cta navbar__cta--mobile"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </nav>

      {/* Contact button (desktop) */}
      <a href="#contact" className="navbar__cta navbar__cta--desktop">
        Contact
      </a>

      {/* Hamburger button (mobile only) */}
      <button
        type="button"
        className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="main-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;