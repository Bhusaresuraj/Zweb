import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-company">
        <h2>About Our Company</h2>
        <p>We are a software development company committed to delivering innovative digital solutions.</p>
      </div>
      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="/assets/team1.jpg" alt="Team Member" />
            <h3>John Doe</h3>
            <p>Lead Developer</p>
          </div>
          <div className="member">
            <img src="/assets/team2.jpg" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
