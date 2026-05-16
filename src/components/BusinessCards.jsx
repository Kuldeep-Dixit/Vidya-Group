import { Link } from "react-router-dom";

export default function BusinessCards() {
  const cards = [
    {
      icon: "☀️",
      title: "Vidya Solar Services",
      desc:
        "Bijli ka bill zero karen. Rooftop solar installation aur subsidy assistance.",
      color: "#f4a716",
      bg: "#fef9e7",
      link: "/solar",
    },
    {
      icon: "🏠",
      title: "Vidya Boys Hostel",
      desc:
        "Saaf, surakshit aur sasta hostel.",
      color: "#2d6a4f",
      bg: "#d8f3dc",
    },
    {
      icon: "🍛",
      title: "Vidya Mess",
      desc:
        "Ghar jaisa khana, healthy meals.",
      color: "#40916c",
      bg: "#d8f3dc",
    },
    {
      icon: "📚",
      title: "Vidya Library",
      desc:
        "Competition exams aur graduation ke liye books.",
      color: "#534AB7",
      bg: "#eeedfe",
    },
  ];

  return (
    <section className="section" id="services">
      <div className="section-header">
        <span className="section-tag">
          Hamare Businesses
        </span>

        <h2>
          Aapki Zaroorat, Hamari Zimmedaari
        </h2>

        <p>
          Students se lekar ghar walon tak —
          Vidya Groups har kadam pe saath hai
        </p>
      </div>

      <div className="biz-grid">
  {cards.map((card, index) => {
    const isComingSoon =
      !card.link;

    const content = (
      <>
        <div className="biz-card-icon">
          {card.icon}
        </div>

        <h3>{card.title}</h3>

        <p>{card.desc}</p>

        <span className="biz-card-link">
          {isComingSoon
            ? "Coming Soon"
            : "Aur Jaanein"}
        </span>
      </>
    );

    return isComingSoon ? (
      <button
        key={index}
        className="biz-card"
        style={{
          "--accent-color": card.color,
          "--icon-bg": card.bg,
        }}
        onClick={() =>
          alert(
            `${card.title} Coming Soon 🚀`
          )
        }
      >
        {content}
      </button>
    ) : (
      <Link
        to={card.link}
        key={index}
        className="biz-card"
        style={{
          "--accent-color": card.color,
          "--icon-bg": card.bg,
        }}
      >
        {content}
      </Link>
    );
  })}
</div>
    </section>
  );
}