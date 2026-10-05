import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="brand-name footer-brand">Sammy K</div>
          <p className="footer-text">Master of Ceremonies for premium live experiences.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <a href="mailto:oduntandaniel6@gmail.com" className="footer-email">
          oduntandaniel6@gmail.com
        </a>
      </div>
    </footer>
  );
};
