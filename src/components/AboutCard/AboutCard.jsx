import React from "react";
import "./AboutCard.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "../../constants";

const AboutCard = () => {
  return (
    // <div className="about-section">
    //   <div className="about-card">
    //     <h1>Hi There!</h1>
    //     <p>  I'm Divya, a skilled Front-end Developer with expertise in React, Angular, and JavaScript.</p>
    //     <p></p>
    //   </div>
    //   <div className="profile-container">
    //     <img className="profile" src={Images.me} height={200} width={200} />
    //   </div>

    // </div>
    <>
      <Container fluid className="about-section">
        <Row>
          <Col
            sm={6}
            md={6}
            lg={{ span: 5, offset: 1 }}
            xl={6}
            className="about-card"
          >
            <h1 style={{ textAlign: "center" }} className="typing-greeting">
              Hi There!
            </h1>
            <p style={{ textAlign: "justify" }}>
              I'm Divya, a Front-end Developer with expertise in React, Angular,
              and JavaScript.
            </p>
            <p style={{ textAlign: "center" }}>
              I'm Divya, a Front-end Developer with expertise in React, Angular,
              and JavaScript.
            </p>
          </Col>
          <Col
            sm={6}
            md={6}
            lg={{ span: 4, offset: 2 }}
            xl={{ span: 4, offset: 2 }}
            className="profile-container"
          >
            <img className="profile" src={Images.me} height={200} width={200} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutCard;
