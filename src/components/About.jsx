import React from 'react';
import './About.css';
import heroImage from '../assets/hero-optimized.jpg';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="section-title">Classic Service, Modern Style.</h2>
                    <p>
                        Welcome to Sunny's Barbershop, a staple of the Bellingham community.
                        Situated in our classic red-and-white shop on Virginia St, we pride ourselves on providing
                        excellent haircuts in a warm, unpretentious atmosphere.
                    </p>
                    <p>
                        Whether you're looking for a fresh fade, a classic trim, or just good conversation,
                        Sunny and the team have you covered. And don't forget to say hi to our resident shop dog,
                        <strong> Guinness</strong>!
                    </p>
                </div>
                <div className="about-image-wrapper">
                    <img src={heroImage} alt="Sunny styling hair" className="about-image" />
                    <div className="image-decoration"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
