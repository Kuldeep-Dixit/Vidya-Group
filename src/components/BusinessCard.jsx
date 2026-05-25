/**
 * BusinessCard — clickable card on the Home page grid.
 *
 * Props:
 *  icon      {string} – emoji icon
 *  logoClass {string} – biz-logo variant class (e.g. "logo-solar")
 *  name      {string} – business name
 *  sub       {string} – sub-label below name
 *  accent    {string} – CSS color variable for left border
 *  desc      {string} – body text
 *  linkLabel {string} – CTA text
 *  linkColor {string} – CSS color for CTA text
 *  onClick   {fn}     – navigation handler
 */
export default function BusinessCard({
  icon,
  logoClass,
  name,
  sub,
  accent,
  desc,
  linkLabel,
  linkColor,
  onClick,
}) {
  return (
    <div
      className="biz-card"
      style={{ '--card-accent': accent }}
      onClick={onClick}
    >
      <div className="biz-card-header">
        <div className={`biz-logo ${logoClass}`}>
          <div className="biz-logo-mark">{icon}</div>
          <div className="biz-logo-name">
            {name}
            <small>{sub}</small>
          </div>
        </div>
      </div>
      <p>{desc}</p>
      <span className="biz-card-link" style={{ color: linkColor }}>
        {linkLabel}
      </span>
    </div>
  );
}
