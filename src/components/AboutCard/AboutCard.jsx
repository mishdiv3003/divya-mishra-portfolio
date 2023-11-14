import React, { useState } from "react";
import "./AboutCard.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "../../constants";

const AboutCard = () => {
  // const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Container fluid className="about-section">
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} className="profile-container">
            <img alt="user profile" className="profile" src={Images.me} height={240} width={240} />
          </Col>
        </Row>
        <Row>
          <Col sm={2} md={2} lg={2} xl={2}></Col>
          <Col sm={8} md={8} lg={8} xl={8} className="about-card">
            <h1 style={{ alignSelf: "center" }} className="typing-greeting">
              Hi There!
            </h1>
            <p style={{ textAlign: "justify" }}>
              I'm Divya, a Front-end Developer with expertise in React, Angular,
              and JavaScript.
            </p>
            <p style={{ textAlign: "justify" }}>
              I hold a degree in Electronics & Communications Engineering, and
              I'm passionate about technology and creativity. <br />
              Outside of work, I enjoy exploring new technologies and staying
              up-to-date with industry trends. I'm an avid reader, a novice
              photographer and a dedicated Star Wars enthusiast!
            </p>
            {/* <span className="read-more" onClick={() => setShowMore(!showMore)}>
              Read more..
            </span>
            {showMore && (
              <p style={{ textAlign: "justify" }}>
                I hold a degree in Electronics & Communications Engineering, and
                I'm passionate about technology and creativity. <br />
                Outside of work, I enjoy exploring new technologies and staying
                up-to-date with industry trends. I'm an avid reader, a novice
                photographer and a dedicated Star Wars enthusiast!
              </p>
            )} */}
          </Col>
          <Col sm={2} md={2} lg={2} xl={2}></Col>
          {/* <Col sm={4} md={4} lg={4} xl={4} className="profile-container">
            <img className="profile" src={Images.me} height={240} width={240} />
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default AboutCard;
