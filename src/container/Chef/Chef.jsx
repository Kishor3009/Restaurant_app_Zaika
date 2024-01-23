import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="gericht__bg gericht__wrapper section__padding">
    <div className="gericht__wrapper_img gericht__wrapper_img-reverse">
      <img src={images.chef2} alt="chef_image" />
    </div>
    <div className="gericht__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="gericht__chef-content">
        <div className="gericht__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Meet our culinary maestro, whose skillful hands transform each ingredient into a masterpiece. </p>
        </div>
        <p className="p__opensans">With a passion for innovation and a dedication to perfection, our chef crafts an exceptional dining experience that tantalizes taste buds and elevates the art of gastronomy. </p>
      </div>

      <div className="gericht__chef-sign">
        <p>Kishor Shinde</p>
        <p className="p__opensans">Chef & Founder</p>
        {/* <img src={images.sign2} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;





