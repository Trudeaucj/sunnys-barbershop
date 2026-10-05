import React from 'react';
import './Reviews.css';
import reviewsDataRaw from '../data/reviews.json';

// Handle both old array format and new object format
const reviews = Array.isArray(reviewsDataRaw) ? reviewsDataRaw : reviewsDataRaw.reviews;

// "Makenna Hickman" -> "Makenna H.", the way people sign a note
const signature = (name) => {
  const [first, ...rest] = name.trim().split(/\s+/);
  return rest.length ? `${first} ${rest[rest.length - 1][0]}.` : first;
};

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <div className="reviews__header">
        <span className="eyebrow">Reviews</span>
        <h2 className="reviews__title">Notes on the mirror</h2>
        <p className="reviews__rating">
          <span className="reviews__stars" aria-hidden="true">★★★★★</span>
          5.0 on Google
        </p>
      </div>

      {/* A barber's station mirror, with customers' kind words tucked into it */}
      <div className="mirror">
        <div className="mirror__glass">
          {reviews.map((review) => (
            <article key={review.id} className="note">
              <span className="note__tape" aria-hidden="true" />
              <div className="note__stars" aria-label={`${review.rating} out of 5 stars`}>
                {'★'.repeat(review.rating)}
              </div>
              <blockquote className="note__text">{review.text}</blockquote>
              <footer className="note__footer">
                <cite className="note__author">{signature(review.author)}</cite>
                <span className="note__date">{review.relative_time_description}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <div className="reviews__cta">
        <a
          href="https://www.google.com/maps?q=Sunny%27s+Barbershop+810+Virginia+St+Bellingham+WA"
          target="_blank"
          rel="noopener noreferrer"
          className="reviews__cta-link"
        >
          Read more reviews on Google
        </a>
      </div>
    </section>
  );
};

export default Reviews;
