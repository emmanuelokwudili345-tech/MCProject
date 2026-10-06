import type { FC } from 'react';
import { Hero } from '../components/portfolio/Hero';
import { Icon } from '../components/common/Icons';
import { compereProfile } from '../data/compereData';
import '../styles/Pages.css';

interface HomePageProps {
  onBookClick: () => void;
}

export const HomePage: FC<HomePageProps> = ({ onBookClick }) => {
  return (
    <div className="page-shell">
      <Hero onBookClick={onBookClick} />

      <section className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">Signature Expertise</span>
            <h2 className="section-title">Built for high-pressure moments.</h2>
            <p className="section-subtitle">
              From executive launches to black-tie galas and intimate luxury celebrations, each environment demands a different rhythm.
            </p>
          </div>

          <div className="feature-grid">
            {compereProfile.specialties.map((specialty) => (
              <article key={specialty.id} className="feature-card">
                <div className="feature-icon-wrap">
                  <Icon name={specialty.icon} size={22} color="#e5a93c" />
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
      </section>

      <section className="section-wrapper muted-panel">
        <div className="container split-layout">
          <div className="copy-panel">
            <span className="section-kicker">Why clients rebook</span>
            <h2 className="section-title">A calm presence that keeps the room aligned.</h2>
            <p>
              The job is not just to announce speakers or move the agenda forward. It is to make the audience feel looked after, the host feel supported, and the event feel effortless from the first welcome to the final applause.
            </p>
            <div className="mini-stats">
              <div>
                <strong>{compereProfile.yearsExperience}</strong>
                <span>Years live experience</span>
              </div>
              <div>
                <strong>{compereProfile.eventsHosted}</strong>
                <span>Stages hosted</span>
              </div>
              <div>
                <strong>{compereProfile.languages.length}</strong>
                <span>Languages spoken</span>
              </div>
            </div>
          </div>

          <div className="info-stack">
            <div className="info-card">
              <Icon name="clock" size={18} color="#e5a93c" />
              <div>
                <strong>Fast, polished transitions</strong>
                <span>Momentum without awkward pauses.</span>
              </div>
            </div>
            <div className="info-card">
              <Icon name="users" size={18} color="#e5a93c" />
              <div>
                <strong>Audience-first energy</strong>
                <span>Warmth, wit, and connection that keeps every room engaged.</span>
              </div>
            </div>
            <div className="info-card">
              <Icon name="shield" size={18} color="#e5a93c" />
              <div>
                <strong>Rehearsed control</strong>
                <span>Quiet confidence even when the schedule shifts unexpectedly.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">The Hosting Approach</span>
            <h2 className="section-title">A host should make every guest feel considered.</h2>
            <p className="section-subtitle">
              Every room has its own people, traditions, and pace. Hosting starts with understanding what matters to the people bringing everyone together.
            </p>
          </div>

          <div className="testimonial-grid">
            <article className="testimonial-card">
              <h3>Respect the occasion</h3>
              <p>
                For Nigerian celebrations, family preferences, titles, introductions, and traditions are discussed with the hosts ahead of time. Every family sets its own tone.
              </p>
            </article>
            <article className="testimonial-card">
              <h3>Keep the programme flowing</h3>
              <p>
                Clear introductions and considered transitions help guests follow the programme, from formal moments through to the celebration.
              </p>
            </article>
            <article className="testimonial-card">
              <h3>Stay present when plans change</h3>
              <p>
                When timing shifts, calm communication with the event team helps keep the audience engaged and the occasion on track.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-wrapper muted-panel">
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">Selected Stage Moments</span>
            <h2 className="section-title">A presence that feels premium without ever feeling forced.</h2>
          </div>

          <div className="gallery-grid">
            {compereProfile.gallery.slice(0, 3).map((item) => (
              <article key={item.id} className="gallery-card">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-copy">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="section-kicker">Let’s build your event energy.</span>
              <h2>Need a host who can lead with polish and presence?</h2>
            </div>
            <button type="button" className="btn btn-primary" onClick={onBookClick}>
              Enquire for your event
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
