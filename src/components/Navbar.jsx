import { useState } from 'react';

const NAV_ITEMS = [
  { id: 'home',    label: 'Home' },
  { id: 'solar',   label: '☀️ Solar' },
  { id: 'hostel',  label: '🏠 Hostel' },
  { id: 'mess',    label: '🍛 Mess' },
  { id: 'library', label: '📚 Library' },
];

export default function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav>
      {/* Logo */}
      <div className="nav-logo" onClick={() => go('home')}>
        <div className="nav-logo-mark">🌿</div>
        <div className="nav-logo-text">
          Vidya Groups
          <small>Ghaziabad, UP</small>
        </div>
      </div>

      {/* Nav Links */}
      <ul className={`nav-center${menuOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              className={activePage === item.id ? 'active' : ''}
              onClick={() => go(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="nav-right">
        <a href="tel:+919999999999" className="btn-call">
          📞 <span>Call Karo</span>
        </a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
