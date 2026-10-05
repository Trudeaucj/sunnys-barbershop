import React, { useRef, useEffect, useState } from 'react';
import './SimonsCorner.css';

const SimonsCorner = () => {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);

  // Only fetch the video once it's about to scroll into view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVideoSrc('simon-video.mp4');
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="simon" className="simon">
      <div className="simon__container">
        <figure className="simon__polaroid" ref={videoRef}>
          <span className="simon__tape" aria-hidden="true" />
          <video
            src={videoSrc || undefined}
            poster="simon-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Simon the shop dog sitting in a barber chair, getting his fur combed"
          />
          <figcaption>Simon, getting a trim</figcaption>
        </figure>

        <div className="simon__copy">
          <span className="eyebrow">Shop Dog</span>
          <h2 className="simon__title">Say hi to Simon</h2>
          <p>
            Simon is Sunny's rescue dog and the shop's official greeter. He's happy to see everybody
            who walks through the door, and he'll probably say hello before you do.
          </p>

          <blockquote className="simon__quote">
            <p>"To Sunny, there are no strays, just four legged and two legged friends."</p>
            <cite>Greg S., Google review</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default SimonsCorner;
