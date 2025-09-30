import './EventCard.css';

interface EventCardProps {
  title: string;
  date: Date;
  type: string;
  location?: string;
  slug: string;
  featured?: boolean;
}

export default function EventCard({ title, date, type, location, slug, featured }: EventCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const typeIcons: Record<string, string> = {
    meeting: '🤝',
    workshop: '🔬',
    conference: '🎤',
    social: '🎉',
    other: '📅',
  };

  return (
    <a href={`/events/${slug}`} className={`event-card ${featured ? 'event-card-featured' : ''}`}>
      {featured && (
        <div className="event-card-featured-badge">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Featured
        </div>
      )}

      <div className="event-card-header">
        <div className="event-card-type-badge">
          <span className="event-card-type-icon">{typeIcons[type] || typeIcons.other}</span>
          <span className="event-card-type-text">{type}</span>
        </div>
      </div>

      <div className="event-card-content">
        <h3 className="event-card-title">{title}</h3>

        <div className="event-card-meta">
          <div className="event-card-meta-item">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            <span>{formattedDate}</span>
          </div>
          {location && (
            <div className="event-card-meta-item">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>

      <div className="event-card-footer">
        <span className="event-card-link">
          Learn more
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
        </span>
      </div>
    </a>
  );
}