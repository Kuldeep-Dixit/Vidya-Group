import StatsBar        from '../components/StatsBar';
import TestimonialCard from '../components/TestimonialCard';
import SolarCalculator from '../components/SolarCalculator';
import ContactForm     from '../components/ContactForm';

const SOLAR_STATS = [
  { num: '200+', label: 'Installations'      },
  { num: '1MW+', label: 'Total Capacity'     },
  { num: '₹2Cr+',label: 'Customer Savings'  },
  { num: '6 Yr', label: 'Experience'         },
];

const SERVICES = [
  { icon: '🏠', h: 'Residential Solar',       p: 'Rooftop solar for your home. 1kW to 10kW systems with PM Surya Ghar subsidy.'                 },
  { icon: '🏢', h: 'Commercial Solar',         p: '10kW to 100kW systems for offices, factories & shops. Cut your bill by up to 80%.'           },
  { icon: '🔧', h: 'Annual Maintenance (AMC)', p: 'Complete care — cleaning, checkups & performance monitoring. Annual plans available.'          },
  { icon: '🔋', h: 'Battery Backup',           p: 'No more power cuts. 24/7 electricity with Li-ion battery backup systems.'                     },
  { icon: '📋', h: 'Subsidy Assistance',       p: 'From PM Surya Ghar Yojana application to receiving the money — we handle it all.'             },
  { icon: '⚡', h: 'Net Metering',             p: 'Sell extra electricity to DISCOM and earn credits. We handle all registration.'                },
];

const PROCESS = [
  { n: '1', h: 'Free Call / Visit',    p: 'Free site survey ke liye contact karo.'       },
  { n: '2', h: 'Custom Quotation',     p: '24 ghante mein best-price plan.'               },
  { n: '3', h: 'Installation',         p: '2–3 din mein professional kaam complete.'      },
  { n: '4', h: 'Savings Enjoy Karo!',  p: 'Zero bill — har month savings.'                },
];

const PRODUCTS = [
  { icon: '☀️', h: 'Solar Panels',         p: 'Mono PERC & Bifacial. Waaree, Adani, Tata Solar.' },
  { icon: '⚡', h: 'Inverters',             p: 'On-grid, off-grid & hybrid. Solis, Growatt, Havells.' },
  { icon: '🔋', h: 'Batteries',             p: 'Li-ion & Lead Acid. Luminous, Exide, Amaron.'         },
  { icon: '🔩', h: 'Mounting Structures',   p: 'GI & Aluminium. Wind & weather resistant.'             },
];

const PROJECTS = [
  { icon: '🏠', badge: 'Residential', h: '3kW Rooftop System',       loc: 'Indirapuram, Ghaziabad', kw: '3kW',  save: 'Saves ₹1,800/mo' },
  { icon: '🏢', badge: 'Commercial',  h: '15kW Commercial System',   loc: 'Kaushambi, Ghaziabad',   kw: '15kW', save: 'Saves ₹9,000/mo' },
  { icon: '🏫', badge: 'Institution', h: '10kW School System',       loc: 'Vasundhara, Ghaziabad',  kw: '10kW', save: 'Saves ₹6,500/mo' },
];

const CONTACT_ITEMS = [
  ['📞', '+91 99999 99999',              'Mon–Sat, 9am–7pm'          ],
  ['💬', 'WhatsApp: +91 99999 99999',    '24/7 Available'            ],
  ['📍', 'Vidya Groups Office, Ghaziabad, UP', 'Walk-in Welcome'     ],
  ['✉️', 'info@vidyagroups.in',          '24 Ghante mein Reply'      ],
];

const CONTACT_FIELDS = [
  { name: 'name',     label: 'Your Name *',           type: 'text',     placeholder: 'Full name'                 },
  { name: 'mobile',   label: 'Mobile Number *',        type: 'tel',      placeholder: '10-digit mobile number'   },
  { name: 'proptype', label: 'Property Type',          type: 'select',   options: ['Home (Residential)','Shop / Office','Factory / Warehouse','School / Institution'] },
  { name: 'bill',     label: 'Approx. Monthly Bill',   type: 'text',     placeholder: 'e.g. ₹2,000 per month'    },
  { name: 'query',    label: 'Any Questions? (optional)', type: 'textarea', placeholder: 'Write any specific questions...' },
];

export default function Solar() {
  const scrollToCalc = () =>
    document.getElementById('solar-calc')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      {/* ── Hero ── */}
      <section className="solar-hero">
        <div className="solar-hero-bg" />
        <div className="solar-hero-inner">
          {/* Left copy */}
          <div style={{ animation: 'fadeUp .7s ease both' }}>
            <div className="hero-badge" style={{ marginBottom: 16 }}>
              ☀️ PM Surya Ghar Yojana Available
            </div>
            <div className="biz-logo logo-solar" style={{ marginBottom: 18 }}>
              <div className="biz-logo-mark" style={{ width: 40, height: 40, fontSize: 20 }}>☀️</div>
              <div className="biz-logo-name" style={{ color: '#fde68a', fontSize: 18 }}>
                Vidya Solar
                <small style={{ color: 'rgba(255,255,255,0.45)' }}>Services · Ghaziabad</small>
              </div>
            </div>
            <h1>Bijli Bill karo <em>Zero</em></h1>
            <p className="solar-hero-sub">
              Ghaziabad ka trusted solar partner. Rooftop solar lagao, government subsidy lo,
              aur bijli bill se hamesha ke liye chutkara pao.
            </p>
            <div className="solar-badges">
              {['✓ Free Site Survey','✓ Govt. Subsidy Help','✓ 25 Saal Panel Warranty','✓ 5 Saal AMC Plans'].map((b) => (
                <span key={b} className="solar-badge">{b}</span>
              ))}
            </div>
            <div className="hero-btns">
              <button className="btn-primary" onClick={scrollToCalc}>
                Apni Savings Calculate Karo ↓
              </button>
              <a href="https://wa.me/919999999999" className="btn-outline">
                📞 Free Quote Lo
              </a>
            </div>
          </div>

          {/* Right — animated solar panel visual */}
          <div className="solar-visual">
            <div className="panel-grid">
              <div className="panel-cell a" /><div className="panel-cell b" /><div className="panel-cell c" />
              <div className="panel-cell b" /><div className="panel-cell c" /><div className="panel-cell a" />
            </div>
            <div className="solar-stats-mini">
              {SOLAR_STATS.map((s) => (
                <div key={s.label} className="solar-stat-mini">
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Hum Kya Karte Hain</span>
          <h2>Complete Solar Solutions</h2>
          <p>Installation se maintenance tak — sab kuch ek hi jagah.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div key={s.h} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Hamara Process</span>
          <h2>Solar Lagwana Itna Aasaan Hai</h2>
          <p>Bas 4 simple steps mein aapka ghar solar powered ho jaata hai.</p>
        </div>
        <div className="process-steps">
          {PROCESS.map((s) => (
            <div key={s.n} className="process-step">
              <div className="step-num">{s.n}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="section section-alt" id="solar-calc">
        <div className="section-header">
          <span className="section-tag">Savings Calculator</span>
          <h2>Aap Kitna Bachayenge?</h2>
          <p>Apna monthly bill daalo aur estimated solar savings dekho.</p>
        </div>
        <SolarCalculator />
      </section>

      {/* ── Products ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Products Jo Hum Use Karte Hain</span>
          <h2>Top Brands, Best Quality</h2>
        </div>
        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <div key={p.h} className="product-card">
              <span className="product-icon">{p.icon}</span>
              <h4>{p.h}</h4>
              <p>{p.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Recent Projects ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Hamara Kaam</span>
          <h2>Recent Installations</h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.h} className="project-card">
              <div className="project-img">
                {p.icon}
                <span className="project-badge">{p.badge}</span>
              </div>
              <div className="project-info">
                <h4>{p.h}</h4>
                <p>{p.loc}</p>
                <div className="project-meta">
                  <span>{p.kw}</span>
                  <span>{p.save}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section" id="solar-contact">
        <div className="section-header">
          <span className="section-tag">Free Consultation</span>
          <h2>Aaj Hi Contact Karo</h2>
          <p>Free site survey aur quotation — koi obligation nahi.</p>
        </div>
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Hum Aapke Paas Aate Hain</h3>
            <p>
              Apna naam aur number do — hamara expert 24 ghante mein contact karega
              aur free site visit schedule karega.
            </p>
            {CONTACT_ITEMS.map(([icon, main, sub]) => (
              <div key={main} className="contact-item">
                <div className="contact-item-icon">{icon}</div>
                <div className="contact-item-text">{main}<span>{sub}</span></div>
              </div>
            ))}
          </div>
          <ContactForm
            fields={CONTACT_FIELDS}
            submitLabel="Free Consultation Book Karo →"
            onSubmit={() => alert('Shukriya! Hamari team 24 ghante mein contact karegi. 🙏')}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <h2>PM Surya Ghar — ₹78,000 tak Subsidy!</h2>
        <p style={{ color: 'var(--green-light)' }}>
          Is badi government scheme ka fayda uthao — limited time, abhi apply karo.
        </p>
        <a
          href="https://wa.me/919999999999?text=I%20want%20to%20know%20about%20PM%20Surya%20Ghar%20subsidy"
          className="btn-primary"
        >
          💬 Subsidy ke Baare Mein Poochho
        </a>
      </section>
    </div>
  );
}
