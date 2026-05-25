/**
 * StatsBar
 *
 * Props:
 *  stats  – array of { num, label }
 *  color  – optional CSS color for the number (default: var(--green-main))
 */
export default function StatsBar({ stats = [], color = 'var(--green-main)' }) {
  return (
    <div className="stats-bar">
      {stats.map(({ num, label }) => (
        <div key={label} className="stat-item">
          <span className="stat-num" style={{ color }}>{num}</span>
          <span className="stat-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
