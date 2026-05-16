import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="nav">
      <Link className="nav-logo" to="/">
        <div className="nav-logo-icon">🌿</div>

        <div className="nav-logo-text">
          Vidya Groups
          <span>Ghaziabad, UP</span>
        </div>
      </Link>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <Link
            className={location.pathname === "/" ? "active" : ""}
            to="/"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className={location.pathname === "/solar" ? "active" : ""}
            to="/solar"
          >
            Solar Services
          </Link>
        </li>

        <li>
          <a href="tel:+919999999999" className="nav-cta">
            📞 Call Now
          </a>
        </li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}