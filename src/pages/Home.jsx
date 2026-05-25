import Hero            from '../components/Hero';
import StatsBar        from '../components/StatsBar';
import BusinessCard    from '../components/BusinessCard';
import TestimonialCard from '../components/TestimonialCard';

const HOME_STATS = [
  { num: '500+', label: 'Students ki Seva'      },
  { num: '200+', label: 'Solar Installations'   },
  { num: '6+',   label: 'Saal ki Seva'          },
  { num: '4',    label: 'Businesses, Ek Brand'  },
];

const BIZ_CARDS = [
  {
    id: 'solar', icon: '☀️', logoClass: 'logo-solar',
    name: 'Vidya Solar', sub: 'Services',
    accent: 'var(--solar-color)', linkColor: 'var(--solar-dark)',
    desc:  'Zero your electricity bill. Rooftop solar installation, AMC & PM Surya Ghar subsidy assistance across Ghaziabad.',
    linkLabel: 'Aur Jaanein',
  },
  {
    id: 'hostel', icon: '🏠', logoClass: 'logo-hostel',
    name: 'Vidya Hostel', sub: 'Boys and Girls',
    accent: 'var(--hostel-color)', linkColor: 'var(--hostel-color)',
    desc:  'Clean, safe & affordable hostel for students near colleges in Ghaziabad. Single & double rooms available.',
    linkLabel: 'Hostel Dekhein',
  },
  {
    id: 'mess', icon: '🍛', logoClass: 'logo-mess',
    name: 'Vidya Mess', sub: 'Homely Food',
    accent: 'var(--mess-color)', linkColor: 'var(--mess-color)',
    desc:  'Home-cooked meals at honest prices. Breakfast, Lunch & Dinner — open to all. Hostel students get it included in their fees.',
    linkLabel: 'Menu Dekhein',
  },
  {
    id: 'library', icon: '📚', logoClass: 'logo-library',
    name: 'Vidya Library', sub: 'Study Room',
    accent: 'var(--library-color)', linkColor: 'var(--library-color)',
    desc:  'Sabke liye perfect study environment — students, UPSC/SSC aspirants, professionals. Apni books laao, hum best atmosphere denge.',
    linkLabel: 'Membership Dekhein',
  },
];

const WHY_ITEMS = [
  { icon: '🤝', title: '500+ Families ka Bharosa',        text: 'Ghaziabad ke students aur families ne humpe bharosa kiya — aur hum ise seriously lete hain.' },
  { icon: '💰', title: 'Best Value, Zero Hidden Charges', text: 'Jo rate batate hain, wohi lagte hain. Koi chhupa charge nahi — kabhi nahi.' },
  { icon: '📞', title: '24×7 Support',                    text: 'Kabhi bhi call ya WhatsApp karo — hamari team hamesha available hai.' },
];

const TESTIMONIALS = [
  { av: 'RS', text: '"My electricity bill dropped from ₹2,200 to just ₹350 after Vidya Solar installed our system. Excellent work!"', name: 'Ramesh Sharma', role: 'Solar Customer, Indirapuram'   },
  { av: 'AK', text: '"Stayed at the hostel for 2 years. Clean rooms, great mess food, and the library made exam prep easy."',          name: 'Arjun Kumar',   role: 'Student, B.Tech 3rd Year'     },
  { av: 'MG', text: '"15kW system at my factory — they handled everything including subsidy paperwork. Very professional."',           name: 'Manoj Gupta',  role: 'Business Owner, Kaushambi'   },
];

export default function Home({ setActivePage }) {
  const go = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToServices = () =>
    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      {/* ── Hero ── */}
      <Hero
        badge="Ghaziabad ka Trusted Group · Since 2018"
        title={<><em>Vidya</em> Groups</>}
        tagline="Ek Roof, Char Services"
        description={
          <>
            Students ke liye — Hostel, Mess &amp; Library.<br />
            Sabke liye — Solar Energy Solutions.<br />
            Ghaziabad mein ek trusted naam.
          </>
        }
        primaryLabel="Hamare Services Dekho ↓"
        onPrimary={scrollToServices}
        outlineLabel="💬 WhatsApp Karo"
        outlineHref="https://wa.me/919999999999"
        showSun
      />

      {/* ── Stats ── */}
      <StatsBar stats={HOME_STATS} />

      {/* ── Business Cards ── */}
      <section className="section" id="services-section">
        <div className="section-header">
          <span className="section-tag">Hamare Businesses</span>
          <h2>Aapki Zaroorat, Hamari Zimmedaari</h2>
          <p>Students se ghar walon tak — Vidya Groups har kadam pe saath hai.</p>
        </div>
        <div className="biz-grid">
          {BIZ_CARDS.map((card) => (
            <BusinessCard key={card.id} {...card} onClick={() => go(card.id)} />
          ))}
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Kyun Vidya Groups?</span>
          <h2>Bharosa, Quality aur Care</h2>
        </div>
        <div className="why-grid">
          {WHY_ITEMS.map((w) => (
            <div key={w.title} className="why-item">
              <span className="why-icon">{w.icon}</span>
              <h4>{w.title}</h4>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2>Log Kya Kehte Hain</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <h2>Free Consultation — Koi Commitment Nahi</h2>
        <p>Solar ho ya student services — call karo ya WhatsApp karo, bilkul free.</p>
        <a href="https://wa.me/919999999999" className="btn-primary">
          💬 WhatsApp pe Baat Karo
        </a>
      </section>
    </div>
  );
}
