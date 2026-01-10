import React from 'react';
import './Info.css';

const Info = () => {
    return (
        <section id="info" className="info-section">
            <div className="info-container">
                <div className="info-block">
                    <h3>Visit Us</h3>
                    <p>810 Virginia St</p>
                    <p>Bellingham, WA 98225</p>
                    <p>United States</p>
                    <a href="https://maps.google.com/?q=Sunny's+Barbershop+Bellingham+WA" target="_blank" rel="noopener noreferrer" className="map-link">Get Directions →</a>
                </div>
                <div className="info-block">
                    <h3>Hours</h3>
                    <p><span>Mon - Fri:</span> 9:00 AM - 5:00 PM</p>
                    <p><span>Sat - Sun:</span> Closed</p>
                </div>
                <div className="info-block">
                    <h3>Contact</h3>
                    <p className="phone-number">(360) 733-9040</p>
                    <p>Call to book an appointment</p>
                </div>
            </div>
            <footer className="footer-bar">
                &copy; {new Date().getFullYear()} Sunny's Barbershop. All rights reserved.
            </footer>
        </section>
    );
};

export default Info;
