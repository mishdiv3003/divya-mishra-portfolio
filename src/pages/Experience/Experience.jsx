import React from "react";
import "./Experience.scss";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
function Experience() {
  let workIconStyles = { background: "#3aafa9" };
  let schoolIconStyles = { background: "orange" };

  return (
    <div className="work-timeline">
      <VerticalTimeline lineColor="orange">
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              className="timeline-box"
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h4 className="vertical-timeline-element-title">
                {element.title}
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                <a href="https://www.accenture.com/in-en">{element.company}</a>
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
              {/* <div className="techStack">
                {element.techStack.map((tech) => {
                  return <img src={tech.techIcon} width={40} height={40} />;
                })}
              </div> */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
