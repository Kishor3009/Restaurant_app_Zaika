import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="gericht__aboutus gericht__bg flex__center section__padding" id="about">
    <div className="gericht__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="gericht__aboutus-content flex__center">
      <div className="gericht__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to our gastronomic haven where every dish tells a story, and each moment is a chapter in our flavorful narrative.Explore a flavorful journey where each dish narrates a story. Join us in redefining dining through passion, innovation, and exceptional artistry.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="gericht__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="gericht__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Two decades of history, innovation, and passion define our restaurant. Explore our journey, marked by a commitment to redefine dining experiences and a relentless pursuit of culinary excellence.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;

