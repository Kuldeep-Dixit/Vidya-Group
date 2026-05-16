export default function StatsBar() {
  const stats = [
    {
      num: "500+",
      label: "Students Served",
    },
    {
      num: "200+",
      label: "Solar Installations",
    },
    {
      num: "6+",
      label: "Years of Service",
    },
    {
      num: "4",
      label: "Businesses, Ek Brand",
    },
  ];

  return (
    <div className="stats-bar">
      {stats.map((item, index) => (
        <div className="stat-item" key={index}>
          <span className="stat-num">
            {item.num}
          </span>

          <span className="stat-label">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}