import 'dotenv/config';
import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const OUTPUT_FILE = path.join(__dirname, '../src/data/reviews.json');

async function fetchReviews() {
    if (!GOOGLE_MAPS_API_KEY || !PLACE_ID) {
        console.warn('⚠️  GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID not found in environment.');
        console.warn('⚠️  Skipping review fetch and keeping existing data.');
        return;
    }

    try {
        console.log(`Fetching reviews for Place ID: ${PLACE_ID}...`);
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_MAPS_API_KEY}`
        );

        if (response.data.status !== 'OK') {
            throw new Error(`API Error: ${response.data.status} - ${response.data.error_message || 'No details'}`);
        }

        const reviews = response.data.result.reviews || [];

        if (reviews.length === 0) {
            console.log('No reviews found.');
            return;
        }

        // Format reviews to match our component's expected structure
        const formattedReviews = reviews.map((review, index) => ({
            id: index + 1, // or use review.time
            text: review.text,
            author: review.author_name,
            rating: review.rating,
            profile_photo_url: review.profile_photo_url, // Optional: if we want to add photos later
            relative_time_description: review.relative_time_description
        }));

        // Limit to top 5 or just save recent ones? 
        // The API returns up to 5 reviews by default.

        await fs.writeFile(OUTPUT_FILE, JSON.stringify(formattedReviews, null, 2));
        console.log(`✅  Successfully fetched and saved ${formattedReviews.length} reviews to ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('❌  Error fetching reviews:', error.message);
        // We don't exit(1) because we don't want to break the build, just log the error.
    }
}

fetchReviews();
