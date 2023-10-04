import React from "react";
import "./AboutCard.scss";
import { Images } from "../../constants";

const AboutCard = () => {
  return (
    <div className="about-section">
      <div className="about-card"></div>
      <div className="profile-container">
        <img className="profile" src={Images.me} height={200} width={200} />
      </div>
    </div>
  );
};

export default AboutCard;
