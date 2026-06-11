/**
 * VidyaLogo — circular logo component
 *
 * Uses the pre-cropped circular PNG (transparent corners).
 *
 * Variants:
 *  "nav"   → small circle for navbar
 *  "full"  → larger circle for footer
 *  "hero"  → big display circle
 */
import logo from '../assets/logo.png';

export default function VidyaLogo({ size = 44, variant = 'nav' }) {
  const base = {
    width:        size,
    height:       size,
    objectFit:    'cover',
    borderRadius: '50%',
    display:      'block',
    flexShrink:   0,
  };

  const variants = {
    nav: {
      ...base,
      border:     '2px solid rgba(116,198,157,0.5)',  /* --green-light ring */
      boxShadow:  '0 2px 10px rgba(26,60,46,0.3)',
    },
    full: {
      ...base,
      border:     '3px solid rgba(116,198,157,0.4)',
      boxShadow:  '0 4px 20px rgba(26,60,46,0.4)',
    },
    hero: {
      ...base,
      border:     '3px solid rgba(244,167,22,0.5)',   /* gold ring on hero */
      boxShadow:  '0 8px 32px rgba(26,60,46,0.5)',
    },
  };

  return (
    <img
      src={logo}
      alt="Vidya Groups Logo"
      style={variants[variant] ?? variants.nav}
    />
  );
}
