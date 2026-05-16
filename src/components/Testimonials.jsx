export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Sharma",
      role: "Solar Customer",
      avatar: "RS",
      text:
        "Solar install karvaya — pehle 2200 ka bill aata tha, ab sirf 300-400 ka.",
    },
    {
      name: "Arjun Kumar",
      role: "Student",
      avatar: "AK",
      text:
        "Hostel mein 2 saal raha. Clean rooms aur achha khana.",
    },
    {
      name: "Manoj Gupta",
      role: "Business Owner",
      avatar: "MG",
      text:
        "Commercial building mein 15kW ka solar system lagwaya.",
    },
  ];

  return (
    <section className="section">
      <div className="section-header">
        <span className="section-tag">
          Customers Ki Baatein
        </span>

        <h2>Log Kya Kehte Hain</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div
            className="testimonial-card"
            key={index}
          >
            <div className="stars">
              ★★★★★
            </div>

            <p className="testimonial-text">
              "{item.text}"
            </p>

            <div className="testimonial-author">
              <div className="author-avatar">
                {item.avatar}
              </div>

              <div>
                <div className="author-name">
                  {item.name}
                </div>

                <div className="author-role">
                  {item.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}