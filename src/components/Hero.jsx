export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-pattern"></div>

      <div className="hero-sun">
        <div className="hero-sun-core"></div>
        <div className="hero-rays"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          Ghaziabad ka Bharosa · Since 2018
        </div>

        <h1>
          Vidya <em>Groups</em>
        </h1>

        <p className="hero-tagline">
          Ek Chhat, Char Suvidhayen
        </p>

        <p className="hero-sub">
          Students ke liye — Hostel, Mess, Library.
          <br />
          Sabke liye — Solar Energy Solutions.
          <br />
          Ek hi naam pe bharosa karein.
        </p>

        <div className="hero-btns">
          <a href="#services" className="btn-primary">
            Hamare Services Dekhein ↓
          </a>

          <a
            href="https://wa.me/919999999999"
            className="btn-outline"
          >
            💬 WhatsApp Karen
          </a>
        </div>
      </div>
    </section>
  );
}