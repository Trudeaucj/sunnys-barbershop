import React from 'react';
import './Visit.css';
import useShopStatus from '../hooks/useShopStatus';
import { HOURS, formatHours } from '../utils/hours';

const MAPS_URL = 'https://www.google.com/maps?q=Sunny%27s+Barbershop+810+Virginia+St+Bellingham+WA';

// Monday first, the way people read a week of shop hours.
const WEEK = [1, 2, 3, 4, 5, 6, 0];

const Visit = () => {
  const status = useShopStatus();

  return (
    <section id="visit" className="visit">
      <div className="visit__container">
        <div className="visit__card">
          <span className="visit__label">Visit</span>
          <h2 className="visit__title">Pull Up a Chair</h2>

          {status && (
            <p className={`visit__status ${status.isOpen ? 'visit__status--open' : ''}`}>
              <span className="visit__status-dot" aria-hidden="true" />
              <strong>{status.label}</strong> {status.detail}
            </p>
          )}

          <ul className="visit__hours">
            {WEEK.map((d) => (
              <li key={d} className={status && status.day === d ? 'visit__hours--today' : ''}>
                <span>{HOURS[d].day}</span>
                <span>{formatHours(HOURS[d])}</span>
              </li>
            ))}
          </ul>

          <div className="visit__details">
            <address>
              810 Virginia St<br />
              Bellingham, WA 98225
            </address>
            <a href="tel:3607339040" className="visit__phone">(360) 733-9040</a>
          </div>

          <div className="visit__actions">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="visit__btn visit__btn--primary">
              Get Directions
            </a>
            <a href="tel:3607339040" className="visit__btn">Call the Shop</a>
          </div>
        </div>

        <div className="visit__map">
          <iframe
            title="Map to Sunny's Barbershop, 810 Virginia St, Bellingham WA"
            src="https://www.google.com/maps?q=Sunny%27s+Barbershop+810+Virginia+St+Bellingham+WA&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Visit;
