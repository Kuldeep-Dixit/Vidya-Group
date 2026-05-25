/**
 * Hero — reused across Home, Hostel, Mess, Library pages.
 *
 * Props:
 *  badge        {string}   – top badge text
 *  logo         {JSX}      – optional biz-logo element
 *  title        {JSX}      – h1 content (may include <em>)
 *  tagline      {string}   – italic subtitle (Home only)
 *  description  {JSX}      – paragraph below title
 *  badges       {string[]} – small pill badges
 *  primaryLabel {string}   – primary button text
 *  primaryHref  {string}   – href OR undefined (uses onClick)
 *  onPrimary    {fn}       – onClick for primary button
 *  outlineLabel {string}   – outline button text
 *  outlineHref  {string}   – href for outline button
 *  bgStyle      {object}   – override section style (e.g. hostel dark)
 *  showSun      {bool}     – show animated gold sun (home / solar)
 *  bgDecor      {JSX}      – decorative element (emoji watermark etc.)
 */
export default function Hero({
  badge,
  logo,
  title,
  tagline,
  description,
  badges = [],
  primaryLabel,
  primaryHref,
  onPrimary,
  outlineLabel,
  outlineHref,
  bgStyle = {},
  showSun = false,
  bgDecor,
}) {
  const defaultStyle = {
    background: 'var(--green-dark)',
    padding: '80px 5% 60px',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '72vh',
    display: 'flex',
    alignItems: 'center',
  };

  const sectionStyle = { ...defaultStyle, ...bgStyle };

  return (
    <section style={sectionStyle}>
      {/* Radial background glow */}
      <div
        style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          background:
            'radial-gradient(ellipse at 25% 60%,#74c69d 0%,transparent 55%),' +
            'radial-gradient(ellipse at 75% 20%,#40916c 0%,transparent 45%)',
        }}
      />

      {/* Optional animated sun (Home / Solar) */}
      {showSun && (
        <div className="hero-sun">
          <div className="hero-sun-core" />
          <div className="hero-rays" />
        </div>
      )}

      {/* Optional emoji / decorative watermark */}
      {bgDecor}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 620, animation: 'fadeUp .75s ease both' }}>
        {badge && <div className="hero-badge" style={{ marginBottom: 16 }}>{badge}</div>}
        {logo}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem,4.5vw,3.2rem)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.12,
            marginBottom: 12,
          }}
        >
          {title}
        </h1>
        {tagline && <p className="hero-tagline">{tagline}</p>}
        {description && (
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, marginBottom: 28, maxWidth: 500 }}>
            {description}
          </p>
        )}

        {/* Pill badges */}
        {badges.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {badges.map((b) => (
              <span key={b} className="solar-badge">{b}</span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="hero-btns">
          {primaryHref ? (
            <a href={primaryHref} className="btn-primary">{primaryLabel}</a>
          ) : (
            <button className="btn-primary" onClick={onPrimary}>{primaryLabel}</button>
          )}
          {outlineLabel && (
            <a href={outlineHref} className="btn-outline">{outlineLabel}</a>
          )}
        </div>
      </div>
    </section>
  );
}
