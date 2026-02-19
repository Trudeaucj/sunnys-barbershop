import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__container">
          <div className="footer__brand">
            <p className="footer__title">Sunny's Barbershop</p>
            <p className="footer__tagline">
              A Bellingham tradition.<br />
              Quality cuts since day one.
            </p>
          </div>

          <div className="footer__info">
            <div className="footer__col">
              <h3 className="footer__heading">Visit Us</h3>
              <address className="footer__address">
                810 Virginia St<br />
                Bellingham, WA 98225
              </address>
              <a
                href="https://www.google.com/maps?q=Sunny%27s+Barbershop+810+Virginia+St+Bellingham+WA"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Get Directions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>

            <div className="footer__col">
              <h3 className="footer__heading">Hours</h3>
              <ul className="footer__hours">
                <li><span>Monday - Friday</span><span>9am - 5pm</span></li>
                <li><span>Saturday - Sunday</span><span>Closed</span></li>
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__heading">Contact</h3>
              <a href="tel:3607339040" className="footer__phone">
                (360) 733-9040
              </a>
              <p className="footer__note">Walk-ins welcome.<br />No appointment needed.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Sunny's Barbershop. All rights reserved.
          </p>
          <p className="footer__made">
            Made with care in Bellingham, WA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
