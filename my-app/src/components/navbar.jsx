import React, { useState, useEffect } from "react";
import "./navbar.css";

const Header = () => {
  const [search, setSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "Features", "Pricing", "About"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-bar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo">
          <div className="nav-logo-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" />
              <circle cx="8" cy="8" r="2.5" fill="white" />
            </svg>
          </div>
          <span className="nav-logo-name">Folio</span>
        </div>

        <div className="nav-links hide-mobile">
          {navLinks.map((l) => (
            <a key={l} href="#" className="nav-link">
              {l}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="#" className="nav-link hide-mobile">Sign in</a>
          <button className="cta-btn cta-btn--sm">Get started</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;