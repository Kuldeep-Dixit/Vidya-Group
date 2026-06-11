/**
 * VidyaLogo — uses the ChatGPT-generated PNG logo
 *
 * The logo PNG has a dark green (#1a3c2e) background which
 * perfectly matches the website's --green-dark theme variable.
 *
 * Variants:
 *  "nav"   → compact rounded badge for the navbar (light bg)
 *            A subtle green border ties it into the nav's color system.
 *  "full"  → full square logo for footer (dark bg)
 *            Blends seamlessly since bg colors match.
 *  "hero"  → large display version, centered
 */
import logo from '../assets/logo.png';

export default function VidyaLogo({ size = 48, variant = 'nav' }) {
  const styles = {
    nav: {
      width:        size,
      height:       size,
      objectFit:    'cover',
      objectPosition: 'center 15%',  /* crop to emblem, skip bottom tagline */
      borderRadius: '12px',
      flexShrink:   0,
      display:      'block',
      border:       '1.5px solid rgba(64,145,108,0.5)',
      boxShadow:    '0 2px 10px rgba(26,60,46,0.3)',
    },
    full: {
      width:        size,
      height:       size,
      objectFit:    'contain',
      borderRadius: '16px',
      flexShrink:   0,
      display:      'block',
    },
    hero: {
      width:        size,
      height:       size,
      objectFit:    'contain',
      borderRadius: '20px',
      display:      'block',
      boxShadow:    '0 8px 32px rgba(26,60,46,0.4)',
    },
  };

  return (
    <img
      src={logo}
      alt="Vidya Groups Logo"
      style={styles[variant] ?? styles.nav}
    />
  );
}
