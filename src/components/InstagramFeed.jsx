import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import './InstagramFeed.css';

// Add Art's Instagram post URLs here - get them by clicking share → "Copy link" on each post
const INSTAGRAM_POSTS = [
    'https://www.instagram.com/thebarber_art/p/DIaXKHVx1Nf/',
    'https://www.instagram.com/thebarber_art/p/DA12xJ2SGkN/',
    'https://www.instagram.com/thebarber_art/p/C925ekAyOZ1/',
    'https://www.instagram.com/thebarber_art/p/C8V_Mc6tsO0/',
    'https://www.instagram.com/thebarber_art/p/C8OPzK2t4FN/',
    'https://www.instagram.com/thebarber_art/p/CsJv1NKJXqM/',
    'https://www.instagram.com/thebarber_art/p/CoolovWOzdt/',
    'https://www.instagram.com/thebarber_art/p/Cojg6DHOSBa/',
    'https://www.instagram.com/thebarber_art/p/Ccn3yXLJj6N/',
    'https://www.instagram.com/thebarber_art/p/COge91DlMQu/',
    'https://www.instagram.com/thebarber_art/p/CJz-jSHlbg1/',
    'https://www.instagram.com/thebarber_art/p/CIYUDX2FFy1/',
    'https://www.instagram.com/thebarber_art/p/CGppf-Wl8hP/',
    'https://www.instagram.com/thebarber_art/p/CFFwTjGFZMN/',
    'https://www.instagram.com/thebarber_art/p/B8UsZ6ql9n2/',
    'https://www.instagram.com/thebarber_art/p/B8R78nqlA6K/',
    'https://www.instagram.com/thebarber_art/p/B8R7TfiFDkO/',
    'https://www.instagram.com/thebarber_art/p/B13EXs-lwBx/',
    'https://www.instagram.com/thebarber_art/p/B0DGF91FdZT/',
    'https://www.instagram.com/thebarber_art/p/BygqDpBFoFQ/',
    'https://www.instagram.com/thebarber_art/p/Bwp0744hfvM/',
    'https://www.instagram.com/thebarber_art/p/BwZ6rnDgks_/',
    'https://www.instagram.com/thebarber_art/p/BvCSx0ggOgB/',
    'https://www.instagram.com/thebarber_art/p/Bu4SvTyAaye/',
    'https://www.instagram.com/thebarber_art/p/BuiQrDzAsUr/',
    'https://www.instagram.com/thebarber_art/p/BskRauWAjvF/'
];

const InstagramFeed = () => {
    const scrollContainerRef = React.useRef(null);
    const [isPaused, setIsPaused] = React.useState(false);

    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const interval = setInterval(() => {
            if (isPaused) return;

            const cardWidth = container.firstChild.offsetWidth + 24; // Width + gap (assuming 24px/1.5rem gap)
            // Scroll by one card
            const nextScrollLeft = container.scrollLeft + cardWidth;

            // Check if we've reached the end
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="instagram-section">
            <div className="instagram-container">
                <h2 className="section-title center-text">Art's Latest Work</h2>
                <p className="instagram-subtitle">
                    Follow <a href="https://www.instagram.com/thebarber_art/" target="_blank" rel="noopener noreferrer">@thebarber_art</a> on Instagram
                </p>
                <div
                    className="instagram-grid"
                    ref={scrollContainerRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                >
                    {INSTAGRAM_POSTS.map((url) => (
                        <div key={url} className="instagram-post">
                            <InstagramEmbed url={url} width="100%" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
