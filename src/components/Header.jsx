import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <a href="#" className="header__brand">
          <span className="header__name">Sunny's</span>
        </a>

        <nav className="header__nav">
          <a href="#about" className="header__link">About</a>
          <a href="#reviews" className="header__link">Reviews</a>
        </nav>

        <div className="header__contact">
          <a
            href="https://www.google.com/maps?q=Sunny%27s+Barbershop+810+Virginia+St+Bellingham+WA"
            target="_blank"
            rel="noopener noreferrer"
            className="header__cta"
          >
            Directions
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
