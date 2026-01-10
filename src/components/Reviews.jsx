
import React from 'react';
import './Reviews.css';

import reviewsData from '../data/reviews.json';

const Reviews = () => {
    return (
        <section className="reviews-section">
            <h2 className="section-title center-text">What People Say</h2>
            <div className="reviews-grid">
                {reviewsData.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="stars">{"★".repeat(review.rating)}</div>
                        <p className="review-text">"{review.text}"</p>
                        <p className="review-author">- {review.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
