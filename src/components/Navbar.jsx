import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // 👈 Imported Link & useLocation
import "./Navbar.css";
import logo from "../assets/logo.png"; 

// 👈 Changed to objects so we can map names to specific paths
const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/work" }
];

function Navbar() {
  // Whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);
  
  // 👈 Use React Router to automatically detect the current page for the underline
  const location = useLocation();
  const currentPath = location.pathname;
  
  const handleLinkClick = () => {
    setMenuOpen(false); // close the mobile menu after a click
  };

  return (
    <header className="navbar">
      {/* Logo + brand name */}
      <Link
        to="/"
        className="navbar__brand"
        onClick={handleLinkClick}
      >
        <img src={logo} alt="" className="navbar__logo" />
        <span className="navbar__name">Marketative</span>
      </Link>

      {/* Menu links (and Contact button on mobile) */}
      <nav
        id="main-menu"
        aria-label="Main"
        className={`navbar__links ${menuOpen ? "is-open" : ""}`}
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`navbar__link ${
                  currentPath === link.path ? "is-active" : ""
                }`}
                aria-current={currentPath === link.path ? "page" : undefined}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="navbar__cta navbar__cta--mobile"
          onClick={handleLinkClick}
        >
          Contact
        </Link>
      </nav>

      {/* Contact button (desktop) */}
      <Link to="/contact" className="navbar__cta navbar__cta--desktop">
        Contact
      </Link>

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