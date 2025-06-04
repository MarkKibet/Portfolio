import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top bg-light ${isScrolled ? "shadow-sm" : ""}`} style={{ transition: "all 0.3s ease" }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <div className="me-2 rounded d-flex align-items-center justify-content-center moving-border" style={{ width: "165px", height: "70px", background: "var(--gradient-primary)" }}>
            <img src="/mylogo.png" alt="CinqueLabs Logo" className="img-fluid" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <span className="fw-bold text-gradient display-5 text-shadow">
            <span className="text-purple"> C</span>inque<span className="text-purple">L</span>abs
          </span>
        </a>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavCollapsed ? "collapse" : "show"}`} id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/reactjs" className="nav-link">
                ReactJS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/angular" className="nav-link">
                Angular
              </Link>
            </li>
            {/* ...existing nav links... */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
