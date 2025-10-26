import { useState, useEffect, useRef } from 'react';
import './MemberCard.css';

interface MemberCardProps {
  name: string;
  role: string;
  title?: string;
  image: string;
  slug: string;
}

const PlaceholderIcon = () => (
  <div className="member-card-placeholder">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </div>
);

export default function MemberCard({ name, role, title, image, slug }: MemberCardProps) {
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if image has already failed to load (happens when React hydrates after image load attempt)
    if (imgRef.current) {
      const img = imgRef.current;
      if (img.complete && (img.naturalWidth === 0 || img.naturalHeight === 0)) {
        setImageError(true);
      }
    }
  }, []);

  return (
    <a href={`/members/${slug}`} className="member-card">
      <div className="member-card-image-wrapper">
        {imageError ? (
          <PlaceholderIcon />
        ) : (
          <img
            ref={imgRef}
            src={image}
            alt={name}
            className="member-card-image"
            onError={() => setImageError(true)}
          />
        )}
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