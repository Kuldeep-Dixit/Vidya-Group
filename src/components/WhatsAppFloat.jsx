/**
 * WhatsAppFloat — fixed floating WhatsApp button.
 *
 * Props:
 *  phone   {string} – WhatsApp number without "+" (default: 919999999999)
 *  message {string} – optional pre-filled message
 */
export default function WhatsAppFloat({
  phone   = '919999993069',
  message = '',
}) {
  const href = message
    ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${phone}`;

  return (
    <a
      href={href}
      className="whatsapp-float"
      title="WhatsApp Us"
      target="_blank"
      rel="noreferrer"
    >
      💬
    </a>
  );
}
