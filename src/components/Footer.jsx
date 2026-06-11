import VidyaLogo from './Logo';

const FOOTER_BRANDS = [
  { color: 'var(--solar-color)',   name: 'Vidya Solar Services' },
  { color: 'var(--hostel-color)',  name: 'Vidya Boys Hostel'    },
  { color: 'var(--mess-color)',    name: 'Vidya Mess'           },
  { color: 'var(--library-color)', name: 'Vidya Library'        },
];

const BIZ_LINKS = [
  { id: 'solar',   label: '☀️ Solar Services' },
  { id: 'hostel',  label: '🏠 Boys Hostel'    },
  { id: 'mess',    label: '🍛 Vidya Mess'      },
  { id: 'library', label: '📚 Library'         },
];

const SOLAR_LINKS = [
  'Residential Solar',
  'Commercial Solar',
  'AMC / Maintenance',
  'Subsidy Help',
];

export default function Footer({ setActivePage }) {
  const go = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-grid">

        {/* ── Brand ── */}
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            {/* Larger badge for footer */}
            <VidyaLogo size={72} variant="circle" />

            <div>
              <h3 style={{ margin: 0, lineHeight: 1.2 }}>Vidya Groups</h3>
              {/* Gold tagline — matches JPEG's "Growth, Service & Light" in gold */}
              <span style={{
                fontSize: 11,
                color: 'var(--gold)',
                fontStyle: 'italic',
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.04em',
              }}>
                Growth, Service &amp; Light
              </span>
            </div>
          </div>

          <p>
            Ghaziabad mein students aur homeowners ka trusted naam.
            Quality, care &amp; commitment.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>
            📍 Ghaziabad, Uttar Pradesh
          </p>

          <div className="footer-logos">
            {FOOTER_BRANDS.map((b) => (
              <div key={b.name} className="footer-logo-item">
                <div className="footer-logo-dot" style={{ background: b.color }} />
                {b.name}
              </div>
            ))}
          </div>
        </div>

        {/* ── Businesses ── */}
        <div className="footer-col">
          <h4>Hamare Businesses</h4>
          <ul>
            {BIZ_LINKS.map((l) => (
              <li key={l.id}><a onClick={() => go(l.id)}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* ── Solar ── */}
        <div className="footer-col">
          <h4>Solar Services</h4>
          <ul>
            {SOLAR_LINKS.map((l) => (
              <li key={l}><a onClick={() => go('solar')}>{l}</a></li>
            ))}
          </ul>
        </div>

        {/* ── Contact ── */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+919599309008">📞 +91 95993 09008</a></li>
            <li><a href="https://wa.me/919599309008">💬 WhatsApp</a></li>
            <li><a href="mailto:info@vidyagroups.in">✉️ info@vidyagroups.in</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 Vidya Groups, Ghaziabad. All rights reserved.</span>
        <span>Design and Developed by Nitin Sharma and <a style={{ textDecoration: "none", color: "white" }} target="_blank" href="https://kuldeeppanditg1234.wixsite.com/mysite">Kuldeep Dixit</a></span>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>Made with ❤️ in UP</span>
      </div>
    </footer>
  );
}
