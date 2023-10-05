import React from "react";
import { SkillCard } from "../../components";
import { Images } from "../../constants";
import "./Skills.scss"

const Skills = () => {
  const skillsArray = [
    {
      skillLogo: Images.html,
      skillname: "",
    },
    {
      skillLogo: Images.css,
      skillname: "",
    },
    {
      skillLogo: Images.javascript,
      skillname: "",
    },
    {
      skillLogo: Images.react,
      skillname: "",
    },
    {
      skillLogo: Images.redux,
      skillname: "",
    },
    {
      skillLogo: Images.typescript,
      skillname: "",
    },
  ];
  return (
    <div className="wrapper">
      {skillsArray.map((skill) => {
        return <SkillCard key={Math.random()} logo={skill.skillLogo} />;
      })}
    </div>
  );
};

export default Skills;
