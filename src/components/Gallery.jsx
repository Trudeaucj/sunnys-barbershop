import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <section className="gallery-section">
            <div className="gallery-container">
                <h2 className="section-title center-text">Our Shop</h2>
                <div className="gallery-grid">
                    <img src="/gallery/photo-1.jpg" alt="Sunny's Barbershop Interior" loading="lazy" />
                    <img src="/gallery/photo-2.jpg" alt="Barbershop Chairs" loading="lazy" />
                    <img src="/gallery/photo-3.jpg" alt="Waiting Area" loading="lazy" />
                    <img src="/gallery/photo-4.jpg" alt="Barber Station" loading="lazy" />
                    <img src="/gallery/photo-5.png" alt="Shop Detail" loading="lazy" />
                    <img src="/gallery/photo-6.png" alt="Decor" loading="lazy" />
                    <img src="/gallery/photo-7.png" alt="Shop Exterior" loading="lazy" />
                    <img src="/barber-pole.png" alt="Classic Barber Pole" loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
