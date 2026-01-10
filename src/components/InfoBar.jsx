import React from 'react';
import './InfoBar.css';

const InfoBar = () => {
    return (
        <div className="info-bar">
            <div className="info-bar-container">
                <a href="tel:3607339040" className="info-link phone">
                    📞 (360) 733-9040
                </a>
                <a href="https://maps.google.com/?q=Sunny's+Barbershop+810+Virginia+St+Bellingham+WA" target="_blank" rel="noopener noreferrer" className="info-link address">
                    📍 810 Virginia St
                </a>
                <span className="info-text hours">
                    🕒 Mon-Fri: 9-5
                </span>
            </div>
        </div>
    );
};

export default InfoBar;
