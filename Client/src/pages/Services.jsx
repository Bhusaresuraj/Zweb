import React from 'react';

const servicesData = [
  { title: 'Web Development', description: 'We build responsive and fast websites.' },
  { title: 'Mobile App Development', description: 'Cross-platform mobile apps tailored to your needs.' },
  { title: 'AI Solutions', description: 'Leverage AI to boost business processes.' },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
