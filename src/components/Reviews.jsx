import React from 'react';
import './Reviews.css';

const reviewsData = [
    {
        id: 1,
        text: "Best barbershop in Bellingham! The atmosphere is incredibly friendly and the barbers are top-notch skills.",
        author: "Local Customer",
        rating: 5
    },
    {
        id: 2,
        text: "Kristi and Jason are amazing. They really take care of you and make sure you walk out looking sharp.",
        author: "Happy Client",
        rating: 5
    },
    {
        id: 3,
        text: "Love the vibe here. Guinness the dog makes it feel like home every time I walk in.",
        author: "Dog Lover",
        rating: 5
    }
];

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
