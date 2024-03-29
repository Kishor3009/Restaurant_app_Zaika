import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="gericht__bg gericht__wrapper section__padding" id="contact">
    <div className="gericht__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="gericht__wrapper-content">
        <p className="p__opensans">Bandalwadi, Baramati, Pune 413102</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 09:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 10:00 pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="gericht__wrapper_img">
      <img src={images.findus2} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;