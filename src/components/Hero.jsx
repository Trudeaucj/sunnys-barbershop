import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">Sunny's Barbershop</h1>
                <p className="hero-subtitle">Quality Cuts & Good Vibes</p>
                <p className="hero-notice">No Appointments &bull; First Come, First Served</p>

                <div className="hero-actions">
                    {/* Mobile-focused buttons */}
                    <a href="https://maps.google.com/?q=Sunny's+Barbershop+810+Virginia+St+Bellingham+WA" target="_blank" rel="noopener noreferrer" className="cta-button primary">Directions</a>
                    <a href="tel:3607339040" className="cta-button secondary">Call Now</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
