import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Help = () => {
  return (
    <Container className="help my-5">
      <Row className="px-5">
        <Col
          sm={12}
          md={4}
          className="help-data pe-5 d-flex flex-column justify-content-center"
        >
          <h4 className="mb-3">How can help you?</h4>
          <div className="title pb-4">Let us know how we can help you</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </Col>
        <Col sm={12} md={8} className="help-cards d-flex align-items-center">
          <Row className="flex-column">
            <Col sm={12} md={12} className="d-flex flex-row">
              <div className="help-card pe-4">
                <div className="title pb-3">01. Visit Feedback</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="help-card">
                <div className="title pb-3">02. Employer Services</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </Col>
            <Col sm={12} md={12} className="d-flex flex-row">
              <div className="help-card pe-4">
                <div className="title pb-3">03. Billing Inquiries</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="help-card">
                <div className="title pb-3">04.General Inquiries</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Help;
