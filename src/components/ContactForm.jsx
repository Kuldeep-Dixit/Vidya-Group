export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Shukriya! Hamari team 24 ghante ke andar contact karegi."
    );
  };

  return (
    <section className="section">
      <div className="section-header">
        <span className="section-tag">
          Free Consultation
        </span>

        <h2>Aaj Hi Contact Karen</h2>
      </div>

      <div className="contact-wrap">
        <div className="contact-info">
          <h3>
            Hum Aapke Paas Aayenge
          </h3>

          <p>
            Apna naam aur number daalo —
            hum aapse contact karenge.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-field">
            <label>Naam</label>

            <input type="text" required />
          </div>

          <div className="form-field">
            <label>Mobile Number</label>

            <input type="tel" required />
          </div>

          <div className="form-field">
            <label>Monthly Bill</label>

            <input type="text" />
          </div>

          <button className="btn-green">
            Free Consultation Book Karen →
          </button>
        </form>
      </div>
    </section>
  );
}