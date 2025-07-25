import React from 'react';
import megeb from './megeb.jpeg'

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="horizontal-text">
  {'MESOB'.split('').map((char, index) => (
    <span key={index} className="sparkle-text">{char}</span>
  ))}
</div>
        <p>
          At Mesob Restaurant, we bring the authentic taste of Ethiopia to your plate.
          Our dishes are prepared with love, using traditional recipes and fresh ingredients passed down through generations.
        </p>
        <p>
          Whether you're here for a quick bite or a cultural feast, you'll experience warm hospitality and bold flavors that feel just like home.
        </p>
        <p>
          Join us to discover the richness of Ethiopian cuisine — every meal is a celebration!
        </p>
      </div>
      <div>
        <img src={megeb} alt="food" className="about-imge"></img>
      </div>
        
      
    </div>
  );
};

export default About;
