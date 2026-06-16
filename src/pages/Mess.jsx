import StatsBar        from '../components/StatsBar';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm     from '../components/ContactForm';

const MESS_STATS = [
  { num: '3',    label: 'Meals Roz'                  },
  { num: '100+', label: 'Students Roz Khate Hain'    },
  { num: '6+',   label: 'Saal Se Chal Raha Hai'      },
  { num: '100%', label: 'Fresh & Hygienic'           },
];

const MENU = [
  { day: 'Monday',      bf: 'Poha + Tea',                  lunch: 'Dal + Rice + Roti + Sabzi',        dinner: 'Sabzi + Roti + Dal + Rice',    alt: false },
  { day: 'Tuesday',     bf: 'Paratha + Curd + Tea',         lunch: 'Rajma + Rice + Roti + Salad',      dinner: 'Paneer Sabzi + Roti + Dal',    alt: true  },
  { day: 'Wednesday',   bf: 'Idli / Upma + Tea',            lunch: 'Chhole + Rice + Roti + Raita',     dinner: 'Mix Veg + Roti + Dal + Rice',  alt: false },
  { day: 'Thursday',    bf: 'Puri + Sabzi + Tea',           lunch: 'Dal Makhani + Rice + Roti',        dinner: 'Aloo Sabzi + Roti + Dal',      alt: true  },
  { day: 'Friday',      bf: 'Bread + Butter + Tea',         lunch: 'Kadhi + Rice + Roti + Sabzi',      dinner: 'Sabzi + Roti + Dal + Kheer',   alt: false },
  { day: 'Saturday',    bf: 'Aloo Paratha + Curd + Tea',    lunch: 'Biryani / Pulao + Raita',          dinner: 'Paneer + Roti + Dal + Rice',   alt: true  },
  { day: 'Sunday 🎉',   bf: 'Chole Bhature + Tea',          lunch: 'Special Thali + Sweet',            dinner: 'Pav Bhaji / Pasta + Roti',     special: true },
];

const WHY_MESS = [
  ['👨‍🍳', 'Fresh Daily Cooking',   'Every meal cooked fresh that day — no leftover food, ever. Quality you can taste.'                    ],
  ['🧼',  'Hygienic Kitchen',      'Our kitchen follows strict hygiene standards — cleaned daily, proper food storage & handling.'         ],
  ['🥗',  'Balanced & Nutritious', 'Dal, sabzi, roti, rice — a complete balanced meal every time. Students stay healthy & energetic.'     ],
  ['💰',  'Affordable Rates',      'Prices designed for students — best quality at the most reasonable rates in Ghaziabad.'               ],
  ['📅',  'Flexible Plans',        'Monthly subscription or daily pass — eat on your schedule, not ours.'                                 ],
  ['🏠',  'Connected to Hostel',   'Right next to Vidya Hostel — no travel needed. Hostel students get it included in fees.'             ],
];

const MEAL_TIMES = [
  { icon: '🌅', label: 'Breakfast', time: '8:00 – 9:30 AM',   sub: 'Start your day right',          highlight: false },
  { icon: '☀️', label: 'Lunch',     time: '12:00 – 2:00 PM', sub: 'Full thali — most popular time', highlight: true  },
  { icon: '🌙', label: 'Dinner',    time: '7:30 – 9:30 PM',   sub: 'Wind down with a warm meal',    highlight: false },
];

const TESTIMONIALS = [
  { av: 'NK', text: '"Sunday special thali is the highlight of my week! The paneer & kheer are absolutely homely."',                                         name: 'Nikhil Kar',    role: 'B.Sc Student, 2nd Year'     },
  { av: 'VS', text: '"I take monthly subscription even though I am not a hostel student. Better and cheaper than any tiffin nearby."',                        name: 'Vikram Sharma', role: 'Day Scholar, Nearby College' },
  { av: 'SG', text: '"My son has been eating here for 3 years — stays healthy, never falls sick. Fresh and clean always."',                                    name: 'Sunita Gupta',  role: 'Parent of Student'           },
];

const CONTACT_ITEMS = [
  ['📞', '+91 99999 93069',                    'Call to enquire any time'        ],
  ['💬', 'WhatsApp: +91 99999 93069',          'Fastest way to subscribe'        ],
  ['📍', '[Your mess address], Ghaziabad, UP', 'Same campus as Vidya Hostel'    ],
];

const CONTACT_FIELDS = [
  { name: 'name',   label: 'Your Name *',         type: 'text',    placeholder: 'Full name'              },
  { name: 'mobile', label: 'Mobile Number *',      type: 'tel',     placeholder: '10-digit mobile number' },
  { name: 'plan',   label: 'Plan Interested In',   type: 'select',  options: ['Monthly Subscription','Daily / Per Meal','I am a Hostel Student','Not sure yet'] },
  { name: 'meals',  label: 'Which Meals?',          type: 'select',  options: ['All 3 — Breakfast + Lunch + Dinner','Lunch + Dinner only','Lunch only','Dinner only'] },
  { name: 'query',  label: 'Any Questions? (optional)', type: 'textarea', placeholder: 'Ask anything about the mess...' },
];

export default function Mess() {
  const scrollToPlans = () =>
    document.getElementById('mess-plans')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: 'var(--green-dark)', padding: '80px 5% 60px', position: 'relative', overflow: 'hidden', minHeight: '68vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .06, background: 'radial-gradient(ellipse at 25% 60%,#74c69d 0%,transparent 55%),radial-gradient(ellipse at 80% 20%,#40916c 0%,transparent 45%)' }} />
        <div style={{ position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)', fontSize: 'min(180px,22vw)', opacity: .04, lineHeight: 1, pointerEvents: 'none' }}>🍛</div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 620, animation: 'fadeUp .75s ease both' }}>
          <div className="hero-badge" style={{ marginBottom: 16 }}>🍛 Breakfast · Lunch · Dinner · Roz</div>
          <div className="biz-logo logo-mess" style={{ marginBottom: 18 }}>
            <div className="biz-logo-mark" style={{ width: 42, height: 42, fontSize: 22, background: 'var(--mess-bg)' }}>🍛</div>
            <div className="biz-logo-name" style={{ color: '#a7f3d0', fontSize: 19 }}>
              Vidya Mess<small style={{ color: 'rgba(255,255,255,0.4)' }}>Ghaziabad, UP</small>
            </div>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4.5vw,3.2rem)', fontWeight: 900, color: 'white', lineHeight: 1.12, marginBottom: 12 }}>
            Ghar Jaisa Khana, <em style={{ fontStyle: 'normal', color: '#fb923c' }}>Everyday</em>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, marginBottom: 28, maxWidth: 500 }}>
            Roz fresh, hygienic aur ghar jaisa khana. Monthly subscription, daily pass — hostel students aur outsiders dono ke liye.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {['✓ Roz Fresh Khana','✓ Hygienic Kitchen','✓ Monthly aur Daily Plans','✓ Sabke liye Open'].map((b) => (
              <span key={b} className="solar-badge" style={{ background: 'rgba(116,198,157,.15)', borderColor: 'rgba(116,198,157,.3)', color: 'var(--green-light)' }}>{b}</span>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn-primary" onClick={scrollToPlans}>Plans aur Pricing Dekho ↓</button>
            <a href="https://wa.me/919999993069?text=I%20want%20to%20know%20about%20Vidya%20Mess%20subscription" className="btn-outline">
              💬 Abhi Subscribe Karo
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsBar stats={MESS_STATS} color="var(--green-main)" />

      {/* ── Weekly Menu ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Weekly Menu</span>
          <h2>Thali Mein Kya Hai?</h2>
          <p>Ek wholesome rotating menu taaki students ko roz variety mile.</p>
        </div>
        <div style={{ maxWidth: 900, margin: '0 auto', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--white)', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <thead>
              <tr style={{ background: 'var(--mess-color)', color: 'white' }}>
                {['Day','🌅 Breakfast','☀️ Lunch','🌙 Dinner'].map((h) => (
                  <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 13, fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MENU.map((row) => (
                <tr key={row.day} style={{ borderBottom: '1px solid var(--border)', background: row.special ? '#fff8f4' : row.alt ? 'var(--off-white)' : 'white' }}>
                  <td style={{ padding: '12px 16px', fontSize: 13, fontWeight: 600, color: 'var(--mess-dark)' }}>{row.day}</td>
                  <td style={{ padding: '12px 16px', fontSize: 13, color: 'var(--text-mid)' }}>{row.bf}</td>
                  <td style={{ padding: '12px 16px', fontSize: 13, color: 'var(--text-mid)' }}>{row.lunch}</td>
                  <td style={{ padding: '12px 16px', fontSize: 13, color: 'var(--text-mid)' }}>{row.dinner}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', marginTop: 12 }}>
            * Menu may vary slightly based on seasonal availability. Sunday special is always a treat!
          </p>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="section" id="mess-plans">
        <div className="section-header">
          <span className="section-tag">Subscription Plans</span>
          <h2>Simple, Honest Pricing</h2>
          <p>Koi hidden charges nahi. Jo khao uska pay karo.</p>
        </div>
        <div className="grid-3" style={{ maxWidth: 900 }}>

          {/* Hostel included */}
          <div style={{ background: 'var(--hostel-bg)', border: '2px solid var(--hostel-color)', borderRadius: 'var(--radius)', padding: 28, position: 'relative', textAlign: 'center' }}>
            <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--hostel-color)', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, whiteSpace: 'nowrap' }}>🏠 HOSTEL STUDENTS</div>
            <div style={{ fontSize: 36, marginBottom: 12, marginTop: 8 }}>🎓</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: 'var(--hostel-dark)', marginBottom: 8 }}>Hostel Included</h3>
            <div style={{ margin: '16px 0' }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: 'var(--hostel-color)' }}>Free</span>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Included in hostel fees</p>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 20 }}>
              {['Breakfast + Lunch + Dinner','All 7 days','Sunday special included','Priority seating'].map((f) => (
                <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '5px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>✅ {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999993069" style={{ display: 'block', background: 'var(--hostel-color)', color: 'white', textAlign: 'center', padding: 11, borderRadius: 40, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Already Included ✓</a>
          </div>

          {/* Monthly — popular */}
          <div style={{ background: 'var(--white)', border: '2px solid var(--mess-color)', borderRadius: 'var(--radius)', padding: 28, position: 'relative', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--mess-color)', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, whiteSpace: 'nowrap' }}>⭐ MOST POPULAR</div>
            <div style={{ fontSize: 36, marginBottom: 12, marginTop: 8 }}>📅</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: 'var(--mess-dark)', marginBottom: 8 }}>Monthly Plan</h3>
            <div style={{ margin: '16px 0' }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: 'var(--mess-color)' }}>₹3,999</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/month</span>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 20 }}>
              {['Breakfast + Lunch + Dinner','All 7 days of the week','Sunday special meal','Best value for regulars'].map((f) => (
                <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '5px 0', borderBottom: '1px solid var(--border)' }}>✅ {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999993069?text=I%20want%20to%20subscribe%20to%20monthly%20mess%20plan" style={{ display: 'block', background: 'var(--mess-color)', color: 'white', textAlign: 'center', padding: 11, borderRadius: 40, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Subscribe Monthly</a>
          </div>

          {/* Daily */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 28, textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🍽️</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: 'var(--mess-dark)', marginBottom: 8 }}>Daily / Per Meal</h3>
            <div style={{ margin: '16px 0' }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: 'var(--mess-color)' }}>₹79</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/meal</span>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 20 }}>
              {['Pay per meal — no commitment','Choose any meal of the day','Walk-in welcome','Great for occasional visitors'].map((f) => (
                <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '5px 0', borderBottom: '1px solid var(--border)' }}>✅ {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999993069?text=I%20want%20to%20know%20daily%20meal%20rates%20at%20Vidya%20Mess" style={{ display: 'block', background: 'var(--mess-bg)', color: 'var(--mess-dark)', textAlign: 'center', padding: 11, borderRadius: 40, textDecoration: 'none', fontWeight: 600, fontSize: 13, border: '2px solid var(--mess-color)' }}>Ask Daily Rates</a>
          </div>
        </div>
      </section>

      {/* ── Why Mess ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Kyun Vidya Mess?</span>
          <h2>Khana Jo Ghar Jaisa Lage</h2>
        </div>
        <div className="services-grid">
          {WHY_MESS.map(([icon, h, p]) => (
            <div key={h} className="service-card"><span className="service-icon">{icon}</span><h3>{h}</h3><p>{p}</p></div>
          ))}
        </div>
      </section>

      {/* ── Meal Timings ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Meal Timings</span>
          <h2>Hum Kab Khilate Hain?</h2>
        </div>
        <div className="grid-3" style={{ maxWidth: 800 }}>
          {MEAL_TIMES.map((m) => (
            <div key={m.label} style={{ background: 'var(--white)', border: m.highlight ? '2px solid var(--mess-color)' : '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 28, textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{m.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: 'var(--mess-dark)', marginBottom: 8 }}>{m.label}</h3>
              <p style={{ fontSize: 22, fontWeight: 700, color: 'var(--mess-color)', marginBottom: 6 }}>{m.time}</p>
              <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{m.sub}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginTop: 20 }}>
          Open all 7 days including Sundays &amp; holidays. Timings may vary slightly on special days.
        </p>
      </section>

      {/* ── Testimonials ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Student Reviews</span>
          <h2>What Students Say About the Food</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </section>

      {/* ── Subscribe Form ── */}
      <section className="section" id="mess-contact">
        <div className="section-header">
          <span className="section-tag">Contact Karo</span>
          <h2>Aaj Hi Subscription Shuru Karo</h2>
          <p>Apni details do aur hum latest rates aur availability ke saath wapas aayenge.</p>
        </div>
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Aao ya Call Karo</h3>
            <p>Meal time pe seedha aao aur pehle khana chakho — humein yakeen hai aapko pasand aayega!</p>
            {CONTACT_ITEMS.map(([icon, main, sub]) => (
              <div key={main} className="contact-item">
                <div className="contact-item-icon">{icon}</div>
                <div className="contact-item-text">{main}<span>{sub}</span></div>
              </div>
            ))}
            <div style={{ background: 'var(--mess-bg)', border: '1px solid #f0c09a', borderRadius: 'var(--radius-sm)', padding: '14px 16px', marginTop: 10 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--mess-dark)' }}>🍽️ Meal Timings (Quick Ref)</p>
              <ul style={{ listStyle: 'none', marginTop: 8 }}>
                {[['🌅','Breakfast: 8:00 – 9:30 AM'],['☀️','Lunch: 12:00 – 2:00 PM'],['🌙','Dinner: 7:30 – 9:30 PM']].map(([em, t]) => (
                  <li key={t} style={{ fontSize: 12, color: 'var(--text-muted)', padding: '3px 0' }}>{em} {t}</li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm
            fields={CONTACT_FIELDS}
            submitLabel="Subscription Enquiry Bhejo →"
            onSubmit={() => alert('Shukriya! Hum jald contact karenge. 🍛\nWhatsApp: +91 99999 99999')}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <h2>Aao aur Khana Chakho — Koi Commitment Nahi!</h2>
        <p style={{ color: 'var(--green-light)' }}>
          Kisi bhi meal time pe aao aur khud chakho. Hume yakeen hai aap subscribe karoge!
        </p>
        <a href="https://wa.me/919999993069?text=I%20want%20to%20subscribe%20to%20Vidya%20Mess" className="btn-primary">
          💬 WhatsApp pe Subscribe Karo
        </a>
      </section>
    </div>
  );
}
