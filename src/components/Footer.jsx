import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>🌿 Vidya Groups</h3>

          <p>
            Ghaziabad ke students aur ghar walon
            ka bharosa.
          </p>
        </div>

        <div className="footer-col">
          <h4>Businesses</h4>

          <ul>
            <li>
              <Link to="/solar">
                Solar Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>

          <ul>
            <li>
              <a href="tel:+919999999999">
                📞 +91 99999 99999
              </a>
            </li>

            <li>
              <a href="mailto:info@vidyagroups.in">
                ✉️ info@vidyagroups.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2024 Vidya Groups
        </span>

        <span>
          Made with ❤️ in UP
        </span>
      </div>
    </footer>
  );
}