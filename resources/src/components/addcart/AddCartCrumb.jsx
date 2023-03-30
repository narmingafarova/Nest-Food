import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../BreadCrumb";

const AddCartCrumb = () => {
  return (
    <Container>
      <div className="add-con">
        <div className="add-cart-crumb mt-4 mb-5">
          <Row>
            <Col sm={12} md={4}>
              <h2>Shop Cart</h2>
              <BreadCrumb title="Shop Cart" />
            </Col>
            <Col sm={12} md={8} className="d-flex align-items-center justify-content-end">
              <ul className="add-categories d-flex align-items-center ps-0">
                <li className="list-unstyled me-4">
                  <a href="/" className="text-decoration-none">Breakfast</a>
                </li>
                <li className="list-unstyled me-4">
                  <a href="/" className="text-decoration-none">Dairy Free</a>
                </li>
                <li className="list-unstyled me-4">
                  <a href="/" className="text-decoration-none">Dessert</a>
                </li>
                <li className="list-unstyled me-4">
                  <a href="/" className="text-decoration-none">Gluten Free</a>
                </li>
                <li className="list-unstyled me-4">
                  <a href="/" className="text-decoration-none">Salad</a>
                </li>
                <li className="list-unstyled">
                  <a href="/" className="text-decoration-none">Uncategorized</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default AddCartCrumb;
