import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons';
import '../../styles/Navbar.css';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="brand-link" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-logo-icon">
            <Icon name="mic" size={20} color="#0a0b0e" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Sammy K</span>
            <span className="brand-subtitle">Master of Ceremonies</span>
          </div>
        </Link>

        <nav id="primary-navigation" className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
          <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/events" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Events
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="btn btn-primary btn-sm nav-book-btn"
            onClick={onBookClick}
          >
            <span>Book Sammy</span>
            <Icon name="arrowRight" size={14} />
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
          >
            <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

