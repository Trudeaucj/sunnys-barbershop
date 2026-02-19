import React, { useRef, useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !videoSrc) {
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
  }, [videoSrc]);

  return (
    <section id="about" className="about">
      <div className="about__pattern" aria-hidden="true" />

      <div className="about__container">
        <div className="about__content">
          <span className="about__label">Welcome</span>
          <h2 className="about__title">
            More Than<br />
            <span>Just a Haircut</span>
          </h2>
          <div className="about__text">
            <p>
              Step into Sunny's and you'll find more than skilled barbers. You'll find a place
              where everyone's treated like family. Our classic red-and-white barbershop on Virginia Street
              has been a Bellingham fixture, serving generations of locals with quality haircuts and genuine warmth.
            </p>
            <p>
              Whether you need a fresh fade, a men's haircut, a kids haircut, or a clean beard trim,
              Sunny and the team have you covered. We're proud to be one of the best barbers in Bellingham, WA,
              and we welcome walk-ins every weekday. No appointment needed.
            </p>
            <p>
              And don't forget to say hello to <strong>Simon</strong>,
              our beloved shop dog who's always happy to see you.
            </p>
          </div>

          <div className="about__features">
            <div className="about__feature">
              <div className="about__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <div className="about__feature-text">
                <strong>No Appointments</strong>
                <span>Walk in anytime we're open</span>
              </div>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="about__feature-text">
                <strong>Family Friendly</strong>
                <span>All ages welcome</span>
              </div>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="about__feature-text">
                <strong>Community First</strong>
                <span>Serving Bellingham with heart</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__images">
          <div className="about__image-main">
            <picture>
              <source srcSet="IMG_0054-optimized.webp" type="image/webp" />
              <img src="IMG_0054-optimized.jpg" alt="Sunny's Barbershop" loading="lazy" />
            </picture>
          </div>
          <div className="about__video-accent" ref={videoRef}>
            {videoSrc && (
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                aria-label="Simon the shop dog"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
