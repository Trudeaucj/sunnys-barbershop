import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <section className="gallery-section">
            <div className="gallery-container">
                <h2 className="section-title center-text">Our Shop</h2>
                <div className="gallery-grid">
                    <img src="gallery/photo-1.jpg" alt="Sunny's Barbershop Interior" width="833" height="625" loading="lazy" />
                    <img src="gallery/photo-2.jpg" alt="Barbershop Chairs" width="1092" height="552" loading="lazy" />
                    <img src="gallery/photo-3.jpg" alt="Waiting Area" width="833" height="625" loading="lazy" />
                    <img src="gallery/photo-4.jpg" alt="Barber Station" width="778" height="960" loading="lazy" />
                    <img src="gallery/photo-5.jpg" alt="Shop Detail" width="360" height="800" loading="lazy" />
                    <img src="gallery/photo-6.jpg" alt="Decor" width="800" height="586" loading="lazy" />
                    <img src="gallery/photo-7.jpg" alt="Shop Exterior" width="800" height="577" loading="lazy" />
                    <img src="barber-pole.png" alt="Classic Barber Pole" width="574" height="1020" loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
