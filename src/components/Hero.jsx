import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg">
        <picture>
          <source srcSet="gallery/photo-2.webp" type="image/webp" />
          <img src="gallery/photo-2.jpg" alt="Inside Sunny's Barbershop in Bellingham, WA" className="hero__image" />
        </picture>
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">Sunny's Barbershop</h1>

        <p className="hero__tagline">
          Classic cuts. Good company.<br />
          A neighborhood tradition.
        </p>

        <div className="hero__info">
          <div className="hero__info-item">
            <span className="hero__info-label">Walk-ins Welcome</span>
            <span className="hero__info-value">First Come, First Served</span>
          </div>
          <div className="hero__info-divider" />
          <div className="hero__info-item">
            <span className="hero__info-label">Hours</span>
            <span className="hero__info-value">Mon-Fri 9am-5pm</span>
          </div>
        </div>

        <div className="hero__actions">
          <a
            href="https://www.google.com/maps?q=Sunny%27s+Barbershop+810+Virginia+St+Bellingham+WA"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--primary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Get Directions
          </a>
          <a href="tel:3607339040" className="hero__btn hero__btn--secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      <div className="hero__address">
        <span>810 Virginia St</span>
      </div>
    </section>
  );
};

export default Hero;
