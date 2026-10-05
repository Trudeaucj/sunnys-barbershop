import React from 'react';
import './Chairs.css';

const SNAPSHOTS = [
  { src: 'gallery/photo-1', caption: 'Out front on Virginia St', alt: "Two barbers standing outside Sunny's red-and-white shop" },
  { src: 'gallery/photo-7', caption: 'The chairs', alt: 'Classic barber chairs on the black-and-white checkered floor' },
  { src: 'marty-cutting', caption: 'Marty at work', alt: 'Marty giving a young boy a haircut', webp: false },
  { src: 'gallery/photo-6', caption: 'Snow day', alt: "Sunny's covered in snow next to a frosted evergreen" },
  { src: 'gallery/photo-3', caption: 'Regulars', alt: 'Two small fluffy dogs sitting in a barber chair' },
  { src: 'gallery/photo-4', caption: 'Yes, a goat', alt: 'A small goat standing on a barber chair' },
];

const Chairs = () => {
  return (
    <section id="shop" className="chairs">
      <div className="chairs__floor" aria-hidden="true" />

      <div className="chairs__container">
        <div className="chairs__story">
          <span className="eyebrow">The Shop</span>
          <h2 className="chairs__title">More than just a haircut</h2>
          <p>
            Step into Sunny's and you'll find more than skilled barbers. You'll find a place
            where everyone's treated like family. Our classic red-and-white barbershop on Virginia Street
            has been a Bellingham fixture, serving generations of locals with quality haircuts and genuine warmth.
          </p>
          <p>
            Whether you need a fresh fade, a men's haircut, a kids haircut, or a clean beard trim,
            Sunny and the team have you covered. We're proud to be one of the best barbers in Bellingham, WA,
            and we welcome walk-ins every weekday. No appointment needed.
          </p>
          <ul className="chairs__facts">
            <li><strong>Walk-ins</strong><span>Every weekday</span></li>
            <li><strong>All ages</strong><span>First cuts to regulars</span></li>
            <li><strong>Bellingham</strong><span>Community first</span></li>
          </ul>
        </div>

        <figure className="chairs__portrait">
          <picture>
            <source srcSet="IMG_0054-optimized.webp" type="image/webp" />
            <img src="IMG_0054-optimized.jpg" alt="The Sunny's Barbershop crew with Simon the shop dog" loading="lazy" />
          </picture>
          <figcaption>The crew (and Simon)</figcaption>
        </figure>
      </div>

      <div className="chairs__snapshots">
        {SNAPSHOTS.map((shot) => (
          <figure key={shot.src} className="snapshot">
            <picture>
              {shot.webp !== false && <source srcSet={`${shot.src}.webp`} type="image/webp" />}
              <img src={`${shot.src}.jpg`} alt={shot.alt} loading="lazy" />
            </picture>
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Chairs;
