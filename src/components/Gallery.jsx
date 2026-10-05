import React from 'react';
import './Gallery.css';

const PHOTOS = [
  { src: 'gallery/photo-1', alt: "Barbers standing outside Sunny's red-and-white shop on Virginia Street", caption: 'Out front on Virginia St', className: 'gallery__item--wide' },
  { src: 'gallery/photo-7', alt: 'Classic barber chairs on a black-and-white checkered floor', caption: 'The chairs & the checkered floor', className: 'gallery__item--tall' },
  { src: 'gallery/photo-3', alt: 'Two small fluffy dogs sitting in a barber chair', caption: 'Four-legged regulars' },
  { src: 'gallery/photo-4', alt: 'A small goat standing on a barber chair', caption: "Yes, that's a goat" },
  { src: 'marty-cutting', alt: 'Marty giving a young boy a haircut', caption: 'Marty at work', webp: false },
  { src: 'gallery/photo-6', alt: "Sunny's Barbershop covered in snow next to a frosted evergreen", caption: 'Snow day in Bellingham', className: 'gallery__item--wide' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__container">
        <div className="gallery__header">
          <span className="gallery__label">The Shop</span>
          <h2 className="gallery__title">Come On In</h2>
          <p className="gallery__intro">
            Red-and-white on the outside, checkered floors on the inside, and always a few friendly faces.
          </p>
        </div>

        <div className="gallery__grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src} className={`gallery__item ${photo.className || ''}`}>
              <picture>
                {photo.webp !== false && <source srcSet={`${photo.src}.webp`} type="image/webp" />}
                <img src={`${photo.src}.jpg`} alt={photo.alt} loading="lazy" />
              </picture>
              <figcaption className="gallery__caption">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
