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
          <img src="logo.png" alt="" className="header__logo" width="44" height="44" />
          <span className="header__name">Sunny's</span>
        </a>

        <nav className="header__nav">
          <a href="#menu" className="header__link">Menu</a>
          <a href="#shop" className="header__link">The Shop</a>
          <a href="#simon" className="header__link">Simon</a>
          <a href="#reviews" className="header__link">Reviews</a>
          <a href="#visit" className="header__link">Visit</a>
        </nav>

        <a href="tel:3607339040" className="header__cta">
          <span className="header__cta-label">Call</span> (360) 733-9040
        </a>
      </div>
    </header>
  );
};

export default Header;
