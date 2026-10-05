import React from 'react';
import './Hero.css';
import useShopStatus from '../hooks/useShopStatus';

const MAPS_URL = 'https://www.google.com/maps?q=Sunny%27s+Barbershop+810+Virginia+St+Bellingham+WA';

// The hanging sign on the shop door, flipped by the real shop hours.
const DoorSign = () => {
  const status = useShopStatus();
  const state = status ? (status.isOpen ? 'open' : 'closed') : 'default';
  const word = status ? (status.isOpen ? 'Open' : 'Closed') : 'Walk-ins';
  const note = status ? (status.isOpen ? 'Come on in!' : status.detail) : 'Mon–Fri 9am–5pm';

  return (
    <div className={`door-sign door-sign--${state}`} role="status">
      <div className="door-sign__string" aria-hidden="true" />
      <div className="door-sign__card">
        <span className="door-sign__word">{word}</span>
        <span className="door-sign__note">{note}</span>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg">
        <picture>
          <source srcSet="gallery/photo-2.webp" type="image/webp" />
          <img src="gallery/photo-2.jpg" alt="The red-and-white front of Sunny's Barbershop on Virginia Street in Bellingham, WA" className="hero__image" />
        </picture>
        <div className="hero__overlay" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__plate">810 Virginia St · Bellingham, WA</span>
          <h1 className="hero__title">
            <span className="hero__title-name">Sunny's</span>
            <span className="hero__title-trade">Barbershop</span>
          </h1>
          <p className="hero__tagline">
            Classic cuts. Good company. A neighborhood tradition.
          </p>

          <div className="hero__actions">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--primary">
              Get Directions
            </a>
            <a href="#menu" className="hero__btn hero__btn--ghost">See the Menu</a>
          </div>

          <p className="hero__award">
            <span aria-hidden="true">★</span> Best of 2025 Barber Shop · BusinessRate
          </p>
        </div>

        <DoorSign />
      </div>

      <div className="hero__awning awning" aria-hidden="true" />
    </section>
  );
};

export default Hero;
