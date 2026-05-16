export default function WhyUs() {
  const items = [
    {
      icon: "🤝",
      title: "Trusted by 500+ Families",
      desc:
        "Ghaziabad ke students aur ghar walon ne humpe bharosa kiya.",
    },
    {
      icon: "💰",
      title: "Best Value",
      desc:
        "No hidden charges aur best pricing.",
    },
    {
      icon: "📞",
      title: "24x7 Support",
      desc:
        "Call karo ya WhatsApp karo.",
    },
  ];

  return (
    <section className="section section-alt">
      <div className="section-header">
        <span className="section-tag">
          Kyun Vidya Groups?
        </span>

        <h2>
          Bharosa, Quality, aur Care
        </h2>
      </div>

      <div className="why-grid">
        {items.map((item, index) => (
          <div
            className="why-item"
            key={index}
          >
            <span className="why-icon">
              {item.icon}
            </span>

            <h4>{item.title}</h4>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}