import { compereProfile } from '../data/compereData';
import '../styles/Pages.css';

export function AboutPage() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <span className="section-kicker">About</span>
          <h1>More than a host. A calm, trusted presence on stage.</h1>
          <p className="page-subtitle">
            Sammy K brings structure, warmth, and momentum to live events across technology, charity, luxury hospitality, and private celebration spaces.
          </p>
        </header>

        <div className="split-layout split-layout-wide">
          <div className="copy-panel">
            <p>{compereProfile.bio.paragraphs[0]}</p>
            <p>{compereProfile.bio.paragraphs[1]}</p>
          </div>

          <div className="stats-panel">
            <div className="stats-row">
              <div>
                <strong>{compereProfile.yearsExperience}</strong>
                <span>Years experience</span>
              </div>
              <div>
                <strong>{compereProfile.eventsHosted}</strong>
                <span>Stages hosted</span>
              </div>
            </div>
            <div className="stats-row">
              <div>
                <strong>{compereProfile.languages.length}</strong>
                <span>Languages spoken</span>
              </div>
            </div>
            <div className="mini-list">
              <p>Languages</p>
              <ul>
                {compereProfile.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
