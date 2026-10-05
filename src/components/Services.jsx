import React from 'react';
import './Services.css';

const SERVICES = [
  {
    name: "Men's Haircuts",
    text: 'Classic scissor and clipper cuts, done the way you like them. Tell us what you want and we will get it right.',
  },
  {
    name: 'Fades & Tapers',
    text: 'Skin fades, low tapers and everything in between, blended clean and sharp.',
  },
  {
    name: "Kids' Cuts",
    text: 'First haircuts are our specialty. Patient, gentle barbers who handle the toddler wiggles like pros.',
  },
  {
    name: 'Beard Trims',
    text: 'Shape up, line up or tidy up. Keep your beard looking intentional between cuts.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__floor" aria-hidden="true" />
      <div className="services__container">
        <div className="services__header">
          <span className="services__label">In the Chair</span>
          <h2 className="services__title">What We Do</h2>
          <p className="services__intro">
            No apps, no booking, no fuss. Walk in, grab a seat, and you're next before you know it.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <article key={service.name} className="service-card">
              <span className="service-card__number">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="service-card__name">{service.name}</h3>
              <p className="service-card__text">{service.text}</p>
            </article>
          ))}
        </div>

        <div className="services__how">
          <div className="services__step">
            <strong>1. Walk in</strong>
            <span>Mon–Fri, 9am to 5pm</span>
          </div>
          <div className="services__step">
            <strong>2. Take a seat</strong>
            <span>First come, first served</span>
          </div>
          <div className="services__step">
            <strong>3. Say hi to Simon</strong>
            <span>He'll probably say hi first</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
