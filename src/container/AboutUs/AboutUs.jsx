import React from "react";

import Images from "../../constants/images";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="aboutus"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={Images.G} alt="G_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={Images.spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam,{" "}
          </p>
          <button type="button" className="custom__button">
            Explore Menu
          </button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={Images.knife} alt="knife" />
        </div>
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={Images.spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam,{" "}
          </p>
          <button type="button" className="custom__button">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
