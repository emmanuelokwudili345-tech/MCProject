import type { FC } from 'react';
import { compereProfile } from '../data/compereData';
import { Icon } from '../components/common/Icons';
import '../styles/Pages.css';

export const EventsPage: FC = () => {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <span className="section-kicker">Events</span>
          <h1>Event experiences tailored to the room.</h1>
          <p className="page-subtitle">
            The same core discipline applies across every event type: precise timing, emotional intelligence, and an audience-first approach.
          </p>
        </header>

        <div className="feature-grid feature-grid-compact">
          {compereProfile.specialties.map((specialty) => (
            <article key={specialty.id} className="feature-card event-card">
              <div className="feature-icon-wrap">
                <Icon name={specialty.icon as "check"} size={22} color="#e5a93c" />
              </div>
              <h3>{specialty.title}</h3>
              <p>{specialty.description}</p>
              <ul>
                {specialty.highlights.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={14} color="#d4a95b" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
