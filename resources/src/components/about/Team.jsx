import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Skype, Twitter } from "react-bootstrap-icons";

const Team = () => {
  return (
    <Container className="team">
      <Row>
        <Col
          sm={12}
          md={4}
          className="about-data pe-5 d-flex flex-column justify-content-center"
        >
          <h4 className="mb-3">Our Team</h4>
          <div className="title pb-4">Meet Our Expert Team</div>
          <p>
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>
          <p>
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>
          <a href="/" className="text-decoration-none view-btn">
            View All Members
          </a>
        </Col>
        <Col sm={12} md={4} className="team-card text-center position-relative">
          <img
            src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-6.png"
            alt="about"
            width="80%"
          />
          <div className="team-info position-absolute">
            <h3 className="name mb-1">H. Merinda</h3>
            <p className="mb-0">CEO & Co-Founder</p>
            <ul className="d-flex align-items-center justify-content-center ps-0 mb-0">
              <li className="list-unstyled me-2">
                <a href="/">
                  <Facebook fontSize={14}/>
                </a>
              </li>
              <li className="list-unstyled me-2">
                <a href="/">
                  <Twitter fontSize={14}/>
                </a>
              </li>
              <li className="list-unstyled me-2">
                <a href="/">
                  <Skype fontSize={14}/>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="/">
                  <Instagram fontSize={14}/>
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={12} md={4} className="team-card text-center position-relative">
          <img
            src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-8.png"
            alt="about"
            width="80%"
          />
          <div className="team-info position-absolute">
            <h3 className="name mb-1">Dilan Specter</h3>
            <p className="mb-0">Head Engineer</p>
            <ul className="d-flex align-items-center justify-content-center ps-0 mb-0">
              <li className="list-unstyled me-2">
                <a href="/">
                  <Facebook fontSize={14}/>
                </a>
              </li>
              <li className="list-unstyled me-2">
                <a href="/">
                  <Twitter fontSize={14}/>
                </a>
              </li>
              <li className="list-unstyled me-2">
                <a href="/">
                  <Skype fontSize={14}/>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="/">
                  <Instagram fontSize={14}/>
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
