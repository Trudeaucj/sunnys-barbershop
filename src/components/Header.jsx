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
          <img src="logo.png" alt="" className="header__logo" width="40" height="40" />
          <span className="header__name">Sunny's</span>
        </a>

        <nav className="header__nav">
          <a href="#about" className="header__link">About</a>
          <a href="#services" className="header__link">Services</a>
          <a href="#gallery" className="header__link">The Shop</a>
          <a href="#reviews" className="header__link">Reviews</a>
          <a href="#visit" className="header__link">Visit</a>
        </nav>

        <div className="header__contact">
          <a href="tel:3607339040" className="header__phone">(360) 733-9040</a>
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
