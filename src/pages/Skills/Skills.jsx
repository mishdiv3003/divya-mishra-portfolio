import React from "react";
import { SkillCard } from "../../components";
import { Images } from "../../constants";
import "./Skills.scss";

const Skills = () => {
  const skillsArray = [
    {
      skillLogo: Images.html,
      skillname: "HTML5",
    },
    {
      skillLogo: Images.css,
      skillname: "CSS",
    },
    {
      skillLogo: Images.javascript,
      skillname: "Javascript",
    },
    {
      skillLogo: Images.react,
      skillname: "React",
    },
    {
      skillLogo: Images.redux,
      skillname: "Redux",
    },
    {
      skillLogo: Images.typescript,
      skillname: "TypeScript",
    },
    {
      skillLogo: Images.angular,
      skillname: "Angular",
    },
    {
      skillLogo: Images.git,
      skillname: "Git",
    },
    {
      skillLogo: Images.github,
      skillname: "Github",
    },
    {
      skillLogo: Images.vsCode,
      skillname: "VScode",
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
