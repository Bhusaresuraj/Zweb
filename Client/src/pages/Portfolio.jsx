import React from 'react';

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    description: 'A fast and scalable platform for retail businesses.',
    img: '/assets/portfolio1.jpg',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly banking on the go.',
    img: '/assets/portfolio2.jpg',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Our Work</h2>
      <div className="portfolio-items">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
