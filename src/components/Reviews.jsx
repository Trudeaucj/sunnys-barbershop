import React from 'react';
import './Reviews.css';
import reviewsDataRaw from '../data/reviews.json';

// Handle both old array format and new object format
const reviews = Array.isArray(reviewsDataRaw) ? reviewsDataRaw : reviewsDataRaw.reviews;
const photos = Array.isArray(reviewsDataRaw) ? [] : (reviewsDataRaw.photos || []);

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <div className="reviews__container">
        <div className="reviews__header">
          <span className="reviews__label">Testimonials</span>
          <h2 className="reviews__title">What People Say</h2>
          <div className="reviews__rating">
            <div className="reviews__stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="reviews__rating-text">5.0 on Google</span>
          </div>
        </div>

        {photos.length > 0 && (
          <div className="reviews__photos">
            {photos.map((photo, index) => (
              <div key={index} className="reviews__photo">
                <picture>
                  <source srcSet={photo.path.replace('.jpg', '.webp')} type="image/webp" />
                  <img src={photo.path} alt={`Customer photo ${index + 1}`} loading="lazy" />
                </picture>
              </div>
            ))}
          </div>
        )}

        <div className="reviews__grid">
          {reviews.map((review, index) => (
            <article
              key={review.id}
              className={`review-card ${index === 0 ? 'review-card--featured' : ''}`}
            >
              <div className="review-card__quote">"</div>
              <blockquote className="review-card__text">
                {review.text}
              </blockquote>
              <footer className="review-card__footer">
                <div className="review-card__stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <cite className="review-card__author">{review.author}</cite>
                <span className="review-card__date">{review.relative_time_description}</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="reviews__cta">
          <a
            href="https://www.google.com/maps?q=Sunny%27s+Barbershop+810+Virginia+St+Bellingham+WA"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews__cta-link"
          >
            Read more reviews on Google
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
