import React from "react";

const MoreExperienceComponent = ({ experiencesArray }) => {
  return (
    <dl>
      {experiencesArray.map((subrole) => {
        return (
          <>
            <dt>
              <h5>{subrole.title}</h5>
            </dt>
            <i>{subrole.date}</i>
            <dd style={{ marginLeft: "0.5em", fontWeight: "500" }}>
              {subrole.description}
            </dd>
          </>
        );
      })}
    </dl>
  );
};

const ExperienceContent = (props) => {
  const { expObj, showMore, setShowMore, isWorkIcon, showButton } = props;
  return (
    <>
      <h4 className="vertical-timeline-expObj-title">{expObj.title}</h4>
      <h5 className="vertical-timeline-expObj-subtitle ">
        <a href={expObj.url} target="_blank" rel="noreferrer">
          {isWorkIcon ? expObj.company : expObj.location}
        </a>
      </h5>
      <p id="description">{expObj.description}</p>
      {expObj.multi && !showMore && (
        <span
          className="more-experience"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {expObj.subRoles.length} more experiences..
        </span>
      )}

      {expObj.multi && showMore && (
        <MoreExperienceComponent experiencesArray={expObj.subRoles} />
      )}
      {expObj.multi && showMore && (
        <span
          className="more-experience"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          Hide..
        </span>
      )}
      {showButton && (
        <div style={{ marginTop: "1em" }}>
          <a
            className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
            href={expObj.url}
            target="_blank"
            rel="noreferrer"
          >
            {expObj.buttonText}
          </a>
        </div>
      )}
    </>
  );
};

export default ExperienceContent;
