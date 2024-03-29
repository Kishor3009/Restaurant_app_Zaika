import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="gericht__navbar">
      <div className="gericht__navbar-logo">
        <img src={images.Zaika} alt="gericht__logo" />
      </div>
      <ul className="gericht__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="gericht__navbar-actions">
        <a href="#login" className="p__opensans login-btn">Registration</a>
        <a href="/" className="p__opensans book-table-btn"> Book Table</a>
      </div>
      <div className="gericht__navbar-smallscreen">
        <GiHamburgerMenu className="hamburger-icon" onClick={() => setToggleMenu(!toggleMenu)} />
        {toggleMenu && (
          <div className="gericht__navbar-smallscreen-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="gericht__navbar-smallscreen-links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
