import React, { useState } from "react";
import "./Experience.scss";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceContent } from "../../components";


function Experience() {
  let workIconStyles = { background: "#3aafa9" };
  let schoolIconStyles = { background: "orange" };
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="work-section" className="work-timeline">
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
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <ExperienceContent
                expObj={element}
                showMore={showMore}
                setShowMore={setShowMore}
                isWorkIcon={isWorkIcon}
                showButton={showButton}
              />
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
