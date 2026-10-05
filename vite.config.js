import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { googleRating, formatRating } from './src/data/googleRating.js'

// Fill the Google rating placeholders in index.html (meta tags, structured data,
// noscript content) from the same review data the page renders.
const googleRatingHtml = () => ({
  name: 'google-rating-html',
  transformIndexHtml(html) {
    const { rating, ratingCount } = googleRating
    if (rating == null || ratingCount == null) {
      throw new Error('src/data/reviews.json is missing "rating" or "ratingCount"; run `npm run fetch-reviews`.')
    }
    return html
      .replaceAll('%GOOGLE_RATING%', formatRating(rating))
      .replaceAll('%GOOGLE_RATING_COUNT%', String(ratingCount))
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), googleRatingHtml()],
  base: './', // Relative base for GitHub Pages compatibility
})
