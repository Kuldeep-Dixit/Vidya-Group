import StatsBar        from '../components/StatsBar';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm     from '../components/ContactForm';

const HOSTEL_STATS = [
  { num: '50+',  label: 'Rooms Available'         },
  { num: '200+', label: 'Students Reh Chuke Hain' },
  { num: '6+',   label: 'Saal Se Chal Raha Hai'  },
  { num: '100%', label: 'Safe aur Secure'         },
];

const FACILITIES = [
  ['📶', 'High-Speed WiFi',    '24×7 internet connectivity for studies, assignments & streaming.'                  ],
  ['💧', 'RO Drinking Water',  'Clean, purified RO water available on every floor round the clock.'                ],
  ['🔒', '24×7 Security',     'CCTV cameras, main gate security & warden on campus at all times.'                 ],
  ['🍛', 'Mess Facility',      'Vidya Mess is available for hostel students — healthy home-cooked food daily.'     ],
  ['📚', 'Study Room',         'Dedicated quiet study room open till late night for exam preparation.'             ],
  ['👕', 'Laundry Area',       'Dedicated laundry area with washing points for all students.'                      ],
  ['🚿', 'Clean Washrooms',    'Regularly cleaned washrooms maintained to high hygiene standards.'                 ],
  ['🏫', 'Near Colleges',      'Walking distance from colleges & universities — save time & commute costs.'        ],
  ['🌙', 'Hostel Timings',     'Gate closes at 10 PM. Warden available 24×7 for any emergency.'                   ],
];

const NEARBY = [
  ['🎓', 'Colleges & University', 'Walking distance — 5 to 15 mins'            ],
  ['🛒', 'Market & Grocery Shops','2 mins walk'                                  ],
  ['🏥', 'Hospital / Medical',    'Nearby — within 10 mins'                      ],
  ['🍛', 'Vidya Mess',            'On premises — same campus'                    ],
  ['📚', 'Vidya Library',         'Nearby — exclusive access for hostel students'],
];

const RULES = [
  ['🕙', 'Gate Timing: in by 10 PM',    'For safety of all students'                       ],
  ['🚭', 'No Smoking / Alcohol',         'Strictly prohibited on premises'                  ],
  ['🔇', 'Quiet Hours: 11 PM – 6 AM',   "Respect fellow students' sleep & study time"      ],
  ['👥', 'No Outsiders After 8 PM',      'Visitors allowed only in common areas'            ],
  ['🧹', 'Keep Rooms Clean',             'Weekly room inspection by warden'                 ],
  ['📋', 'ID Proof Required at Admission','Aadhaar + college ID card mandatory'             ],
];

const TESTIMONIALS = [
  { av: 'RK', text: '"Stayed here for 2 years during my B.Tech. The rooms are clean, WiFi is fast, and the mess food is just like home. Highly recommend!"', name: 'Rohit Kumar',  role: 'B.Tech Student, 2023 Passout'   },
  { av: 'AS', text: '"The study room is the best part — open till midnight. Also the security is very good, my parents feel completely safe."',              name: 'Aman Singh',   role: 'Engineering Student, 3rd Year'  },
  { av: 'PG', text: '"As a parent, I was worried about my son staying away. But Vidya Hostel gave me complete peace of mind — clean, safe, and disciplined."', name: 'Pramod Gupta', role: 'Parent of Hostel Student'        },
];

const DOCS = ['Aadhaar Card (student)', 'College ID / Admission letter', "Parent's ID proof", '2 passport size photos'];

const CONTACT_ITEMS = [
  ['📞', '+91 99999 99999',                         'Mon–Sat, 9am–7pm'                   ],
  ['💬', 'WhatsApp: +91 99999 99999',               '24/7 Available'                     ],
  ['📍', '[Your hostel address], Ghaziabad, UP',    'Walk-in visits welcome — Mon to Sat'],
];

const CONTACT_FIELDS = [
  { name: 'name',    label: "Student's Name *",     type: 'text',    placeholder: 'Full name'                    },
  { name: 'mobile',  label: 'Mobile Number *',       type: 'tel',     placeholder: "Student or parent's number"  },
  { name: 'room',    label: 'Room Type Needed',      type: 'select',  options: ['Single Room','Double Room','Not decided yet'] },
  { name: 'college', label: 'College / Course',      type: 'text',    placeholder: 'e.g. AKTU, B.Tech CSE'       },
  { name: 'date',    label: 'Joining Date (approx.)',type: 'text',    placeholder: 'e.g. July 2025'              },
  { name: 'query',   label: 'Any Questions? (optional)', type: 'textarea', placeholder: 'Ask anything about the hostel...' },
];

const SINGLE_FEATURES = ['Furnished room (bed, table, chair, almirah)', 'High-speed WiFi', 'RO drinking water', 'Attached / common washroom', 'Laundry area access'];
const DOUBLE_FEATURES = ['Furnished room (2 beds, 2 tables, almirah)',  'High-speed WiFi', 'RO drinking water', 'Common washroom',            'Laundry area access'];

export default function Hostel() {
  const scrollToRooms = () =>
    document.getElementById('hostel-rooms')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        background: 'var(--hostel-dark)', padding: '80px 5% 60px',
        position: 'relative', overflow: 'hidden', minHeight: '72vh',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .05, background: 'repeating-linear-gradient(-45deg,transparent,transparent 28px,rgba(116,198,157,1) 28px,rgba(116,198,157,1) 29px)' }} />
        <div style={{ position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)', width: 'min(320px,40vw)', height: 'min(320px,40vw)', borderRadius: '50%', background: 'radial-gradient(circle,rgba(64,145,108,.18) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 620, animation: 'fadeUp .75s ease both' }}>
          <div className="hero-badge" style={{ marginBottom: 16 }}>🏠 College ke Paas · Boys & Girls</div>
          <div className="biz-logo logo-hostel" style={{ marginBottom: 18 }}>
            <div className="biz-logo-mark" style={{ width: 42, height: 42, fontSize: 22, background: 'var(--hostel-bg)' }}>🏠</div>
            <div className="biz-logo-name" style={{ color: '#a7f3d0', fontSize: 19 }}>
              Vidya Boys & Girls Hostel
              <small style={{ color: 'rgba(255,255,255,0.4)' }}>Ghaziabad, UP</small>
            </div>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4.5vw,3.2rem)', fontWeight: 900, color: 'white', lineHeight: 1.12, marginBottom: 12 }}>
            Your Home <em style={{ fontStyle: 'normal', color: '#6ee7b7' }}>Away From Home</em>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, marginBottom: 28, maxWidth: 500 }}>
            Boys & Girls ke liye safe, clean aur affordable hostel — college ke bilkul paas.
            Single aur double rooms, sab zaroori suvidhaon ke saath.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {['✓ WiFi Included','✓ RO Drinking Water','✓ 24×7 Security','✓ Mess Available','✓ Study Room', '✓ 24*7 Backup'].map((b) => (
              <span key={b} className="solar-badge">{b}</span>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn-primary" onClick={scrollToRooms}>Rooms aur Fees Dekho ↓</button>
            <a href="https://wa.me/919999999999?text=I%20want%20to%20enquire%20about%20Vidya%20Boys%20Hostel" className="btn-outline">
              💬 Visit Book Karo
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsBar stats={HOSTEL_STATS} color="var(--hostel-color)" />

      {/* ── Room Types ── */}
      <section className="section" id="hostel-rooms">
        <div className="section-header">
          <span className="section-tag">Room Types &amp; Pricing</span>
          <h2>Apna Room Chuno</h2>
          <p>Dono room types fully furnished hain, sab basic amenities ke saath.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, maxWidth: 820, margin: '0 auto' }}>
          {/* Single */}
          <div style={{ background: 'var(--white)', border: '2px solid var(--hostel-color)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <div style={{ background: 'var(--hostel-color)', padding: '20px 24px', color: 'white' }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>🛏️</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700 }}>Single Room</h3>
              <p style={{ fontSize: 13, opacity: .85, marginTop: 4 }}>Full privacy · 1 student</p>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 700, color: 'var(--hostel-color)' }}>₹8,499</span>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/month</span>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>* Mess included; Bijli Bill excluded</p>
              </div>
              <ul style={{ listStyle: 'none', marginBottom: 20 }}>
                {SINGLE_FEATURES.map((f) => (
                  <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '6px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: 8 }}>✅ {f}</li>
                ))}
              </ul>
              <a href="https://wa.me/919999999999?text=I%20want%20to%20enquire%20about%20Single%20Room%20in%20Vidya%20Hostel" style={{ display: 'block', background: 'var(--hostel-color)', color: 'white', textAlign: 'center', padding: 12, borderRadius: 40, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>
                Enquire for Single Room
              </a>
            </div>
          </div>

          {/* Double */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <div style={{ background: 'var(--hostel-bg)', padding: '20px 24px', color: 'var(--hostel-dark)' }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>🛏️🛏️</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700 }}>Double Room</h3>
              <p style={{ fontSize: 13, opacity: .75, marginTop: 4 }}>Shared · 2 students · Budget-friendly</p>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 700, color: 'var(--hostel-color)' }}>₹7,999</span>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/month per person</span>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>* Mess included; Bijli Bill excluded</p>
              </div>
              <ul style={{ listStyle: 'none', marginBottom: 20 }}>
                {DOUBLE_FEATURES.map((f) => (
                  <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '6px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: 8 }}>✅ {f}</li>
                ))}
              </ul>
              <a href="https://wa.me/919999999999?text=I%20want%20to%20enquire%20about%20Double%20Room%20in%20Vidya%20Hostel" style={{ display: 'block', background: 'var(--hostel-bg)', color: 'var(--hostel-dark)', textAlign: 'center', padding: 12, borderRadius: 40, textDecoration: 'none', fontWeight: 600, fontSize: 14, border: '2px solid var(--hostel-color)' }}>
                Enquire for Double Room
              </a>
            </div>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginTop: 20 }}>
          Security deposit required at admission. Fees may vary — contact us for current rates.
        </p>
      </section>

      {/* ── Facilities ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Facilities</span>
          <h2>Jo Bhi Chahiye</h2>
          <p>Humne ensure kiya hai ki students ke paas sab kuch ho taki wo studies pe focus kar sakein.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {FACILITIES.map(([icon, h, p]) => (
            <div key={h} className="service-card">
              <span className="service-icon">{icon}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Location ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Location &amp; Nearby</span>
          <h2>Perfect Location pe</h2>
          <p>Ek student ko jo chahiye — sab kuch doorstep pe.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 860, margin: '0 auto', alignItems: 'start' }}>
          <div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
              <div style={{ height: 200, background: 'linear-gradient(135deg,var(--hostel-bg),var(--green-pale))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <span style={{ fontSize: 40 }}>📍</span>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center', padding: '0 20px' }}>
                  Vidya Boys Hostel<br />Ghaziabad, Uttar Pradesh
                  <br /><br /><span style={{ fontSize: 11 }}>← Paste Google Maps embed here</span>
                </p>
              </div>
              <div style={{ padding: 16 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-dark)' }}>📍 Vidya Boys Hostel</p>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>[Your full address here], Ghaziabad, UP</p>
              </div>
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, color: 'var(--text-dark)', marginBottom: 16 }}>Kya Hai Nearby</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NEARBY.map(([icon, h, p]) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-dark)' }}>{h}</p>
                    <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Rules ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Hostel Rules</span>
          <h2>Safe aur Disciplined Environment</h2>
          <p>Simple rules jo hostel ko sabke liye safe aur comfortable banate hain.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14, maxWidth: 800, margin: '0 auto' }}>
          {RULES.map(([icon, h, p]) => (
            <div key={h} style={{ display: 'flex', gap: 12, padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-dark)' }}>{h}</p>
                <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Student Reviews</span>
          <h2>Students Kya Kehte Hain</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </section>

      {/* ── Admission Enquiry ── */}
      <section className="section section-alt" id="hostel-contact">
        <div className="section-header">
          <span className="section-tag">Admission Enquiry</span>
          <h2>Aaj Hi Room Book Karo</h2>
          <p>Limited rooms available hain. Details do aur hum kuch ghanton mein contact karenge.</p>
        </div>
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Visit Karo ya Call Karo</h3>
            <p>Come visit the hostel in person — we'd love to show you around. Or simply WhatsApp us and we'll answer all your questions.</p>
            {CONTACT_ITEMS.map(([icon, main, sub]) => (
              <div key={main} className="contact-item">
                <div className="contact-item-icon">{icon}</div>
                <div className="contact-item-text">{main}<span>{sub}</span></div>
              </div>
            ))}
            <div style={{ background: 'var(--hostel-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '14px 16px', marginTop: 10 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--hostel-dark)' }}>📋 Documents Needed at Admission</p>
              <ul style={{ listStyle: 'none', marginTop: 8 }}>
                {DOCS.map((d) => <li key={d} style={{ fontSize: 12, color: 'var(--text-muted)', padding: '3px 0' }}>• {d}</li>)}
              </ul>
            </div>
          </div>
          <ContactForm
            fields={CONTACT_FIELDS}
            submitLabel="Admission Enquiry Bhejo →"
            onSubmit={() => alert('Shukriya! Hum jald contact karenge. 🏠\nWhatsApp: +91 99999 99999')}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <h2>Limited Rooms — Bhar Jaane Se Pehle Book Karo!</h2>
        <p style={{ color: 'var(--green-light)' }}>
          Har admission season mein rooms jaldi bhar jaate hain. Abhi WhatsApp karo.
        </p>
        <a href="https://wa.me/919999999999?text=I%20want%20to%20book%20a%20room%20at%20Vidya%20Boys%20Hostel" className="btn-primary">
          💬 Room Availability Check Karo
        </a>
      </section>
    </div>
  );
}
