import StatsBar        from '../components/StatsBar';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm     from '../components/ContactForm';

const LIB_STATS = [
  { num: '50+',  label: 'Seats Available'    },
  { num: '24×7', label: 'Open Always'        },
  { num: '6+',   label: 'Years Running'      },
  { num: '100%', label: 'Quiet Environment'  },
];

const FACILITIES = [
  ['🔇', 'Noise-Free Environment', 'Strict silence zone. Mobile phones silent mode pe. Full focus ke liye perfect quiet atmosphere.'],
  ['❄️', 'AC Study Hall',          'Fully air-conditioned hall — garmi ya sardi mein koi dikkat nahi. Comfortable temperature hamesha.'],
  ['📶', 'High-Speed WiFi',        'Fast internet for online resources, e-books, YouTube lectures — jo bhi study ke liye chahiye.'],
  ['💡', '24×7 Power Backup',      'Light nahi jayegi kabhi. Generator backup ke saath uninterrupted study sessions.'],
  ['🪑', 'Dedicated Seat',         'Membership mein apni fixed seat — roz aao, apni jagah ready milegi. No searching for seats.'],
  ['🔒', 'Locker Facility',        'Apna books aur samaan safely rakh sako — personal locker membership ke saath milega.'],
  ['🚰', 'RO Water + Tea',         'Drinking water available hamesha. Optional chai/coffee facility bhi nearby available hai.'],
  ['📷', 'CCTV Security',          'Library ka poora area CCTV se covered hai. Aapka samaan aur safety — dono secure.'],
  ['🚻', 'Clean Washrooms',        'Separate male/female washrooms — regularly cleaned aur well-maintained.'],
];

const WHO_STUDIES = [
  ['🎓', 'College Students',      'B.Tech, B.Sc, B.Com, graduation ke liye daily padhai'],
  ['🏛️', 'UPSC Aspirants',        'IAS, IPS ki taiyari ke liye long study hours'],
  ['📝', 'SSC / Banking',         'SSC CGL, IBPS, SBI PO — competitive exams ki prep'],
  ['💼', 'Working Professionals', 'Ghar pe distraction zyada hai? Yahan aao — shanti milegi'],
];

const RULES = [
  ['🔇', 'Strict Silence Zone',       'Bolna bilkul nahi — whispering bhi allowed nahi'           ],
  ['📵', 'Mobile Silent Mode',         'Phone ring nahi karni chahiye — calls bahar jaake karo'    ],
  ['🪑', 'Apni Seat Maintain Karo',    'Doosron ki seat pe mat baithna — respect each other'       ],
  ['🧹', 'Saafai Rakho',               'Khana-peena allowed nahi hall ke andar'                    ],
  ['🪪', 'ID Card Zaroori',            'Har baar entry pe membership card dikhana hoga'            ],
  ['⏰', '24×7 Access',                'Apni membership ID se kabhi bhi aao, kabhi bhi jao'        ],
];

const TESTIMONIALS = [
  { av: 'PK', text: '"UPSC ki taiyari ghar pe possible nahi thi — bahut distraction tha. Vidya Library mein aane ke baad meri daily study 4 ghante se 10 ghante ho gayi. AC, silence, WiFi — sab perfect hai."', name: 'Priya Kumari',  role: 'UPSC Aspirant, 2nd Attempt'    },
  { av: 'RV', text: '"SSC CGL clear kiya — aur mujhe pura yakeen hai Vidya Library ka bada role tha. 6 mahine ka membership liya, roz aaya, aur result mila. Staff bhi bahut helpful hai."',                    name: 'Rahul Verma',   role: 'SSC CGL Selected, 2023'        },
  { av: 'AS', text: '"College hostel mein padhai nahi ho rahi thi. Yahan aane ke baad meri attendance aur grades dono improve hue. Monthly plan liya — bilkul worth it hai price ke hisaab se."',                name: 'Ananya Singh',  role: 'B.Tech Student, 3rd Year'      },
];

const CONTACT_ITEMS = [
  ['📞', '+91 99998 93075',                     'Available 24×7'                          ],
  ['💬', 'WhatsApp: +91 99998 93075',           'Membership ke liye fastest way'           ],
  ['📍', 'Behind Vidya Boys Hotel, Ghaziabad, UP', 'Vidya Groups campus ke paas'             ],
  ['✉️', 'vidyalibrary2026@gmail.com',          '24 Ghante mein Reply'      ],
];

const CONTACT_FIELDS = [
  { name: 'name',   label: 'Aapka Naam *',          type: 'text',     placeholder: 'Full name likhein'         },
  { name: 'mobile', label: 'Mobile Number *',         type: 'tel',      placeholder: '10-digit mobile number'   },
  { name: 'plan',   label: 'Plan Chahiye',            type: 'select',   options: ['Monthly (1 Mahina)','3 Months — Most Popular','6 Months — Best Value','Pehle dekhna chahta hoon'] },
  { name: 'study',  label: 'Aap Kya Padhte Hain?',   type: 'select',   options: ['College Student (B.Tech / B.Sc / B.Com etc.)','UPSC Aspirant','SSC / Banking Exam','School Student','Working Professional','Other'] },
  { name: 'query',  label: 'Koi Sawaal? (Optional)',  type: 'textarea', placeholder: 'Koi bhi sawaal poochhein...' },
];

export default function Library() {
  const scrollToPlans = () =>
    document.getElementById('library-plans')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      {/* ── Hero ── */}
      <section className="lib-hero">
        <div style={{ position: 'absolute', inset: 0, opacity: .06, background: 'radial-gradient(ellipse at 25% 60%,#74c69d 0%,transparent 55%),radial-gradient(ellipse at 75% 20%,#40916c 0%,transparent 45%)' }} />
        <div className="lib-hero-decor">📚</div>
        <div className="lib-hero-content">
          <div className="hero-badge" style={{ marginBottom: 16 }}>📚 24×7 Open · Study Room</div>
          <div className="biz-logo logo-library" style={{ marginBottom: 18 }}>
            <div className="biz-logo-mark" style={{ width: 42, height: 42, fontSize: 22, background: 'var(--library-bg)' }}>📚</div>
            <div className="biz-logo-name" style={{ color: '#c4b5fd', fontSize: 19 }}>
              Vidya Library<small style={{ color: 'rgba(255,255,255,0.4)' }}>Ghaziabad, UP</small>
            </div>
          </div>
          <h1 className="lib-hero-title">
            Padhai Ka <em style={{ fontStyle: 'normal', color: '#a78bfa' }}>Perfect Maahol</em>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, marginBottom: 28, maxWidth: 500 }}>
            Apni books laao, hamari library mein best environment mein padho. Students, UPSC/SSC aspirants,
            professionals — sabka swagat hai. Distraction-free, quiet, aur 24×7 open study space.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {['✓ 24×7 Open','✓ High-Speed WiFi','✓ 24×7 Power Backup','✓ AC Study Hall','✓ Sabke Liye Open'].map((b) => (
              <span key={b} className="solar-badge">{b}</span>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn-primary" onClick={scrollToPlans}>Plans &amp; Fees Dekhein ↓</button>
            <a href="https://wa.me/919999893075?text=Vidya%20Library%20membership%20ke%20baare%20mein%20jaanna%20hai" className="btn-outline">
              💬 Membership Lo
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsBar stats={LIB_STATS} color="var(--library-color)" />

      {/* ── Membership Plans ── */}
      <section className="section" id="library-plans">
        <div className="section-header">
          <span className="section-tag">Membership Plans</span>
          <h2>Apna Plan Chunein</h2>
          <p>Jitne time ke liye chahiye — ek, teen, ya chhe mahine. Jyada time, utna better deal.</p>
        </div>
        <div className="lib-plans-grid">

          {/* Monthly */}
          <div className="lib-plan-card">
            <div style={{ fontSize: 36, marginBottom: 12 }}>📅</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 6 }}>Monthly</h3>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>1 Mahina · Flexible</p>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 700, color: 'var(--library-color)' }}>₹1,199</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/month</span>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 20 }}>
              {['24×7 access','Dedicated seat','WiFi included','Locker facility'].map((f) => (
                <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '5px 0', borderBottom: '1px solid var(--border)' }}>✅ {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999893075?text=Monthly%20library%20membership%20chahiye" className="lib-plan-btn lib-plan-btn--outline">
              Monthly Membership Lo
            </a>
          </div>

          {/* 3 Months — popular */}
          <div className="lib-plan-card lib-plan-card--popular">
            <div className="lib-plan-badge">⭐ MOST POPULAR</div>
            <div style={{ fontSize: 36, marginBottom: 12, marginTop: 8 }}>🎯</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 6 }}>3 Months</h3>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Exam ke liye Best Choice</p>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 700, color: 'var(--library-color)' }}>₹2,699</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/3 months</span>
              <div style={{ background: 'var(--green-pale)', borderRadius: 20, padding: '3px 10px', display: 'inline-block', marginTop: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--green-mid)' }}>Save ₹300 vs monthly</span>
              </div>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 20 }}>
              {['24×7 access','Dedicated seat','WiFi included','Locker facility','Better savings'].map((f) => (
                <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '5px 0', borderBottom: '1px solid var(--border)' }}>✅ {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999893075?text=3%20month%20library%20membership%20chahiye" className="lib-plan-btn lib-plan-btn--solid">
              3 Month Membership Lo
            </a>
          </div>

          {/* 6 Months */}
          <div className="lib-plan-card">
            <div style={{ fontSize: 36, marginBottom: 12 }}>🏆</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 6 }}>6 Months</h3>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Long-term · Maximum Savings</p>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 700, color: 'var(--library-color)' }}>₹4,999</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/6 months</span>
              <div style={{ background: 'var(--green-pale)', borderRadius: 20, padding: '3px 10px', display: 'inline-block', marginTop: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--green-mid)' }}>Best deal — save maximum</span>
              </div>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 20 }}>
              {['24×7 access','Dedicated seat','WiFi included','Locker facility','Maximum savings'].map((f) => (
                <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '5px 0', borderBottom: '1px solid var(--border)' }}>✅ {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999893075?text=6%20month%20library%20membership%20chahiye" className="lib-plan-btn lib-plan-btn--outline">
              6 Month Membership Lo
            </a>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginTop: 20 }}>
          *Exact fees ke liye WhatsApp karo ya direct aao. Prices update ho sakte hain.
        </p>
      </section>

      {/* ── Facilities ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Facilities</span>
          <h2>Sab Kuch Jo Padhai Ke Liye Chahiye</h2>
          <p>Hum environment perfect rakhte hain taaki aap sirf padhai pe focus karo.</p>
        </div>
        <div className="services-grid">
          {FACILITIES.map(([icon, h, p]) => (
            <div key={h} className="service-card"><span className="service-icon">{icon}</span><h3>{h}</h3><p>{p}</p></div>
          ))}
        </div>
      </section>

      {/* ── Timings — 24×7 ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Library Timings</span>
          <h2>Hum 24×7 Open Hain</h2>
          <p>Kabhi bhi aao — subah, dopahar, raat ya midnight. Library hamesha khuli hai.</p>
        </div>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div className="lib-timing-card">
            <div style={{ fontSize: 44, marginBottom: 12 }}>🌙☀️</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: 'var(--library-dark)', marginBottom: 10 }}>
              Open All Days · All Hours
            </h3>
            <p style={{ fontSize: 30, fontWeight: 700, color: 'var(--library-color)', marginBottom: 8 }}>
              24 Hours × 7 Days
            </p>
            <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
              Monday se Sunday — kabhi bhi aao, kabhi bhi jao. Apni membership ID se entry, koi fixed timing nahi.
            </p>
          </div>
        </div>
        <div className="lib-tip-banner">
          <span style={{ fontSize: 20, flexShrink: 0 }}>💡</span>
          <p style={{ fontSize: 13, color: 'var(--library-dark)' }}>
            Raat ko padhna pasand hai? Subah jaldi shuru karna hai? Vidya Library 24×7 khuli hai — apne hisaab se schedule banao!
          </p>
        </div>
      </section>

      {/* ── Who Studies Here ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Yahan Kaun Padhta Hai</span>
          <h2>Sabke Liye Suitable</h2>
          <p>Chahe koi bhi ho — Vidya Library mein sabka swagat hai.</p>
        </div>
        <div className="lib-who-grid">
          {WHO_STUDIES.map(([icon, h, p]) => (
            <div key={h} className="lib-who-card">
              <div style={{ fontSize: 36, marginBottom: 10 }}>{icon}</div>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-dark)', marginBottom: 6 }}>{h}</h4>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Rules ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Library Rules</span>
          <h2>Discipline Hi Safalta Ki Kunji Hai</h2>
          <p>Simple rules jo library ka environment sabke liye pleasant rakhte hain.</p>
        </div>
        <div className="lib-rules-grid">
          {RULES.map(([icon, h, p]) => (
            <div key={h} className="lib-rule-card">
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
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Members Ki Baatein</span>
          <h2>Woh Kehte Hain</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </section>

      {/* ── Membership Form ── */}
      <section className="section" id="library-contact">
        <div className="section-header">
          <span className="section-tag">Membership Lein</span>
          <h2>Aaj Hi Join Karo</h2>
          <p>Form bharo ya seedha WhatsApp karo — membership usi din shuru ho sakti hai.</p>
        </div>
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Seedha Aao ya Call Karo</h3>
            <p>
              Pehle ek baar library visit karo — free mein dekhne aao. Maahol dekh ke khud decide karo.
              Hume yakeen hai aap pehli visit ke baad hi membership loge!
            </p>
            {CONTACT_ITEMS.map(([icon, main, sub]) => (
              <div key={main} className="contact-item">
                <div className="contact-item-icon">{icon}</div>
                <div className="contact-item-text">{main}<span>{sub}</span></div>
              </div>
            ))}
            <div style={{ background: 'var(--library-bg)', border: '1px solid #c4b5fd', borderRadius: 'var(--radius-sm)', padding: '14px 16px', marginTop: 10 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--library-dark)' }}>📋 Admission Pe Kya Chahiye</p>
              <ul style={{ listStyle: 'none', marginTop: 8 }}>
                {['Aadhaar Card copy','1 passport size photo','Membership fees (cash/UPI)'].map((d) => (
                  <li key={d} style={{ fontSize: 12, color: 'var(--text-muted)', padding: '3px 0' }}>• {d}</li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm
            fields={CONTACT_FIELDS}
            submitLabel="Membership Enquiry Bhejo →"
            submitStyle={{ background: 'var(--library-color)' }}
            onSubmit={() => alert('Shukriya! Hum jald aapse contact karenge. 📚\nYa seedha WhatsApp karo: +91 99998 93075')}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <h2>24×7 Open — Jab Chaho Aao!</h2>
        <p style={{ color: 'var(--green-light)' }}>
          Ek free visit karo, library dekho, aur decide karo. Koi pressure nahi!
        </p>
        <a
          href="https://wa.me/919999893075?text=Vidya%20Library%20dekhne%20aana%20chahta%20hoon"
          className="btn-primary"
        >
          💬 Free Visit Book Karo
        </a>
      </section>
    </div>
  );
}
