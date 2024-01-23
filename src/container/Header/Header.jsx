import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="gericht__header gericht__wrapper section__padding" id="home">
    <div className="gericht__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="gericht__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>"Indulge your senses in a symphony of flavors at our restaurant, where each dish tells a story and every bite is a culinary adventure. Elevate your dining experience with us, where passion meets palate in a celebration of exquisite taste and unforgettable moments."</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="gericht__wrapper_img">
      <img src={images.Welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
