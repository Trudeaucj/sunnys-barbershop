import React from 'react';
import './MobileBar.css';

// Thumb-reach call and directions buttons, shown on phones only.
const MobileBar = () => (
  <div className="mobile-bar">
    <a href="tel:3607339040" className="mobile-bar__btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      Call
    </a>
    <a
      href="https://www.google.com/maps?q=Sunny%27s+Barbershop+810+Virginia+St+Bellingham+WA"
      target="_blank"
      rel="noopener noreferrer"
      className="mobile-bar__btn mobile-bar__btn--primary"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      Directions
    </a>
  </div>
);

export default MobileBar;
