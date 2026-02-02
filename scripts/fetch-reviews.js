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
const PHOTOS_OUTPUT_DIR = path.join(__dirname, '../public/review-photos');

async function fetchReviews() {
    if (!GOOGLE_MAPS_API_KEY || !PLACE_ID) {
        console.warn('⚠️  GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID not found in environment.');
        console.warn('⚠️  Skipping review fetch and keeping existing data.');
        return;
    }

    try {
        console.log(`Fetching reviews and photos for Place ID: ${PLACE_ID}...`);
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,photos&key=${GOOGLE_MAPS_API_KEY}`
        );

        if (response.data.status !== 'OK') {
            throw new Error(`API Error: ${response.data.status} - ${response.data.error_message || 'No details'}`);
        }

        const reviews = response.data.result.reviews || [];
        const photos = response.data.result.photos || [];

        if (reviews.length === 0) {
            console.log('No reviews found.');
            return;
        }

        // Ensure photos output directory exists
        await fs.mkdir(PHOTOS_OUTPUT_DIR, { recursive: true });

        // Download photos from Google Places
        const downloadedPhotos = [];
        console.log(`Found ${photos.length} photos. Downloading...`);

        for (let i = 0; i < Math.min(photos.length, 10); i++) {
            const photo = photos[i];
            const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo.photo_reference}&key=${GOOGLE_MAPS_API_KEY}`;
            const filename = `review-photo-${i + 1}.jpg`;
            const filepath = path.join(PHOTOS_OUTPUT_DIR, filename);

            try {
                const photoResponse = await axios.get(photoUrl, { responseType: 'arraybuffer' });
                await fs.writeFile(filepath, photoResponse.data);
                downloadedPhotos.push({
                    filename,
                    path: `review-photos/${filename}`,
                    attribution: photo.html_attributions?.[0] || null
                });
                console.log(`  ✓ Downloaded ${filename}`);
            } catch (photoError) {
                console.warn(`  ✗ Failed to download photo ${i + 1}: ${photoError.message}`);
            }
        }

        // Format reviews to match our component's expected structure
        const formattedReviews = reviews.map((review, index) => ({
            id: index + 1,
            text: review.text,
            author: review.author_name,
            rating: review.rating,
            profile_photo_url: review.profile_photo_url,
            relative_time_description: review.relative_time_description
        }));

        // Save reviews with photos metadata
        const outputData = {
            reviews: formattedReviews,
            photos: downloadedPhotos,
            fetchedAt: new Date().toISOString()
        };

        await fs.writeFile(OUTPUT_FILE, JSON.stringify(outputData, null, 2));
        console.log(`✅  Successfully fetched ${formattedReviews.length} reviews and ${downloadedPhotos.length} photos to ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('❌  Error fetching reviews:', error.message);
        // We don't exit(1) because we don't want to break the build, just log the error.
    }
}

fetchReviews();
