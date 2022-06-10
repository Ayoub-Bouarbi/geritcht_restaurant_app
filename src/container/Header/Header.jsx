import React from "react";

import Images from "../../constants/images";
import { SubHeading } from "../../components";

import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title='chase the new flavour' />
        <h1 className='app__header-h1'>the key to find Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
        <button type='button' className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={Images.welcome} alt='welcome' />
      </div>
    </div>
  );
};

export default Header;
