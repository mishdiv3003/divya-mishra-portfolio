import React from "react";
import "./AboutCard.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "../../constants";

const AboutCard = () => {
  return (
    <>
      <Container fluid className="about-section">
        <Row>
          <Col sm={1} md={1}  lg={3} xl={3}></Col>
          <Col sm={5} md={5} lg={3} xl={3} className="about-card">
            <h1 style={{ alignSelf: "center" }} className="typing-greeting">
              Hi There!
            </h1>
            <p style={{ textAlign: "justify" }}>
              I'm Divya, a Front-end Developer with expertise in React, Angular,
              and JavaScript.
            </p>
            <p style={{ textAlign: "justify" }}>
              I'm Divya, a Front-end Developer with expertise in React, Angular,
              and JavaScript.
            </p>
          </Col>
      
          <Col
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className="profile-container"
          >
            <img className="profile" src={Images.me} height={200} width={200} />
          </Col>
          <Col
            sm={1}
            md={1}
            lg={1}
            xl={1}
          ></Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutCard;
