import React from 'react';
import './MenuBoard.css';

const SERVICES = [
  "Men's Haircuts",
  'Fades & Tapers',
  "Kids' Cuts",
  'First Haircuts',
  'Beard Trims',
  'Hot Lather Shaves',
];

const MenuBoard = () => {
  return (
    <section id="menu" className="menu">
      <div className="menu__container">
        <div className="menu__intro">
          <span className="eyebrow">The Menu</span>
          <h2 className="menu__title">Walk in. Sit down. Look sharp.</h2>
          <p>
            No apps, no booking, no fuss. Sunny's is first come, first served, Monday through Friday.
            Grab a seat, catch up on the neighborhood, and you're next before you know it.
          </p>
          <p className="menu__aside">
            First haircut? Bring the little one in. Our barbers handle toddler wiggles like pros.
          </p>
        </div>

        {/* Felt letterboard, the kind that hangs behind the register */}
        <div className="letterboard" role="img" aria-label={`Sunny's menu: ${SERVICES.join(', ')}. Walk-ins only, no appointments, Monday to Friday 9 to 5.`}>
          <div className="letterboard__felt" aria-hidden="true">
            <p className="letterboard__line letterboard__line--title">Sunny's</p>
            <p className="letterboard__line letterboard__line--rule">• • • • •</p>
            {SERVICES.map((service) => (
              <p key={service} className="letterboard__line">{service}</p>
            ))}
            <p className="letterboard__line letterboard__line--rule">• • • • •</p>
            <p className="letterboard__line letterboard__line--red">Walk-ins only</p>
            <p className="letterboard__line letterboard__line--small">Mon–Fri 9–5</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuBoard;
