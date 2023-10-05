import React from "react";
import "./SkillCard.scss";
import { Images } from "../../constants";

const SkillCard = (props) => {
  return (
    <div className="skill-card">
      <div className="skill-card-innercontainer">
        <img src={props.logo} width={60} height={60} />
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
