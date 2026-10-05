import React from 'react';
import './FindUs.css';
import useShopStatus from '../hooks/useShopStatus';
import { HOURS, formatHours } from '../utils/hours';

const MAPS_URL = 'https://www.google.com/maps?q=Sunny%27s+Barbershop+810+Virginia+St+Bellingham+WA';

// Monday first, the way the hours are lettered on the door.
const WEEK = [1, 2, 3, 4, 5, 6, 0];

const FindUs = () => {
  const status = useShopStatus();

  return (
    <section id="visit" className="find-us">
      <div className="find-us__container">
        {/* The front door's glass, with the hours in white vinyl lettering */}
        <div className="door">
          <div className="door__glass">
            <p className="door__name">Sunny's</p>
            <p className="door__trade">Barbershop</p>
            <p className="door__heading">Hours</p>
            <ul className="door__hours">
              {WEEK.map((d) => (
                <li key={d} className={status && status.day === d ? 'door__today' : ''}>
                  <span>{HOURS[d].day.slice(0, 3)}</span>
                  <span>{formatHours(HOURS[d])}</span>
                </li>
              ))}
            </ul>
            <p className="door__footer">Walk-ins welcome</p>
          </div>
          <div className="door__handle" aria-hidden="true" />
        </div>

        <div className="find-us__info">
          <span className="eyebrow">Visit</span>
          <h2 className="find-us__title">Look for the red-and-white building</h2>

          {status && (
            <p className={`find-us__status ${status.isOpen ? 'find-us__status--open' : ''}`}>
              <span className="find-us__dot" aria-hidden="true" />
              <strong>{status.label}.</strong> {status.detail}
            </p>
          )}

          <div className="find-us__details">
            <div>
              <h3>Address</h3>
              <address>810 Virginia St<br />Bellingham, WA 98225</address>
            </div>
            <div>
              <h3>Phone</h3>
              <a href="tel:3607339040" className="find-us__phone">(360) 733-9040</a>
            </div>
          </div>

          <div className="find-us__actions">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="find-us__btn find-us__btn--primary">
              Get Directions
            </a>
            <a href="tel:3607339040" className="find-us__btn">Call the Shop</a>
          </div>

          <div className="find-us__map">
            <iframe
              title="Map to Sunny's Barbershop, 810 Virginia St, Bellingham WA"
              src="https://www.google.com/maps?q=Sunny%27s+Barbershop+810+Virginia+St+Bellingham+WA&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
