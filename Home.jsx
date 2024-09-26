import React from 'react';

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <h1>Innovative Solutions for Digital Success</h1>
        <p>Your partner in software development and digital transformation.</p>
        <a href="/portfolio" className="cta-btn">See Our Work</a>
      </div>
      <div className="clients">
        <h2>Our Clients</h2>
        <div className="client-logos">
          {/* Add client logos */}
          <img src="/assets/client1.png" alt="Client 1" />
          <img src="/assets/client2.png" alt="Client 2" />
          <img src="/assets/client3.png" alt="Client 3" />
        </div>
      </div>
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <p>“They transformed our business by developing an efficient, user-friendly platform.”</p>
      </div>
    </section>
  );
};

export default Home;
