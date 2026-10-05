import type { FC } from 'react';
import { compereProfile } from '../../data/compereData';
import { Icon } from '../common/Icons';
import '../../styles/Hero.css';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-backdrop" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* Left Column: Headlines & Call-to-actions */}
          <div className="hero-content">
            <h1 className="hero-title">
              Calm authority. Sharp timing.
              <span className="hero-title-highlight"> A room that feels instantly at ease.</span>
            </h1>

            <p className="hero-lead">
              {compereProfile.bio.lead} Trusted by global summits, gala teams, and landmark celebrations across Nigeria and beyond.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onBookClick}
              >
                <span>Check Availability & Book</span>
                <Icon name="arrowRight" size={16} />
              </button>
            </div>

            <div className="hero-location-row">
              <Icon name="mapPin" size={16} color="#e5a93c" />
              <span>{compereProfile.location}</span>
            </div>
          </div>

          {/* Right Column: Stage Visual & Interactive Play trigger */}
          <div className="hero-media-wrapper">
            <div className="hero-portrait-card">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85"
                alt="Sammy K commanding a live summit stage"
                className="hero-portrait-image"
              />

            </div>

            {/* Floating Glass Credential Card */}
            <div className="hero-floating-badge">
              <div className="hero-floating-icon">
                <Icon name="award" size={20} />
              </div>
              <div className="hero-floating-text">
                <strong>50+ Global Stages</strong>
                <span>99.2% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics Ribbon */}
        <div className="hero-stats-ribbon">
          {compereProfile.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

