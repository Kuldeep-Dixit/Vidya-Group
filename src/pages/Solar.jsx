import SolarCalculator from "../components/SolarCalculator";
import ContactForm from "../components/ContactForm";
import CTASection from "../components/CTASection";

export default function Solar() {
  return (
    <>
      <section className="solar-hero">
        <div className="solar-hero-bg"></div>

        <div className="solar-hero-inner">
          <div>
            <div className="hero-badge">
              ☀️ PM Surya Ghar Yojana Available
            </div>

            <h1>
              Bijli Ka Bill
              <br />
              <em>Zero Karen</em>
            </h1>

            <p className="solar-hero-sub">
              Vidya Solar Services —
              Ghaziabad ka trusted solar
              partner.
            </p>

            <div className="hero-btns">
              <a
                href="#solar-calc"
                className="btn-primary"
              >
                Calculate Savings ↓
              </a>

              <a
                href="https://wa.me/919999999999"
                className="btn-outline"
              >
                💬 Free Quote
              </a>
            </div>
          </div>

          <div className="solar-visual">
            <div className="panel-grid">
              <div className="panel-cell active"></div>
              <div className="panel-cell active active-2"></div>
              <div className="panel-cell active active-3"></div>

              <div className="panel-cell active active-2"></div>
              <div className="panel-cell active active-3"></div>
              <div className="panel-cell active"></div>
            </div>

            <div className="solar-stats-mini">
              <div className="solar-stat-mini">
                <strong>200+</strong>
                <span>
                  Installations Done
                </span>
              </div>

              <div className="solar-stat-mini">
                <strong>1MW+</strong>
                <span>
                  Total Capacity
                </span>
              </div>

              <div className="solar-stat-mini">
                <strong>₹2Cr+</strong>
                <span>
                  Customer Savings
                </span>
              </div>

              <div className="solar-stat-mini">
                <strong>6 Yr</strong>
                <span>Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SolarCalculator />

      <ContactForm />

      <CTASection />
    </>
  );
}