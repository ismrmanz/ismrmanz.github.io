import './MemberCard.css';

interface MemberCardProps {
  name: string;
  role: string;
  title?: string;
  image: string;
  slug: string;
}

export default function MemberCard({ name, role, title, image, slug }: MemberCardProps) {
  return (
    <a href={`/members/${slug}`} className="member-card">
      <div className="member-card-image-wrapper">
        <img src={image} alt={name} className="member-card-image" />
        <div className="member-card-overlay">
          <span className="member-card-view">View Profile</span>
        </div>
      </div>
      <div className="member-card-content">
        <div className="member-card-role-badge">{role}</div>
        <h3 className="member-card-name">
          {name}
          {title && <span className="member-card-title">, {title}</span>}
        </h3>
      </div>
    </a>
  );
}