/**
 * TestimonialCard
 *
 * Props:
 *  stars  {string} – star characters e.g. "★★★★★"
 *  text   {string} – review text (quoted)
 *  avatar {string} – 2-letter initials
 *  name   {string} – reviewer name
 *  role   {string} – reviewer role / description
 */
export default function TestimonialCard({ stars = '★★★★★', text, avatar, name, role }) {
  return (
    <div className="testimonial-card">
      <div className="stars">{stars}</div>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <div className="author-avatar">{avatar}</div>
        <div>
          <div className="author-name">{name}</div>
          <div className="author-role">{role}</div>
        </div>
      </div>
    </div>
  );
}
