import reviewsData from './reviews.json' with { type: 'json' };

// Overall Google rating, written to reviews.json by scripts/fetch-reviews.js
export const googleRating = Array.isArray(reviewsData) ? {} : {
  rating: reviewsData.rating,
  ratingCount: reviewsData.ratingCount,
};

export const formatRating = (rating) => Number(rating).toFixed(1);
