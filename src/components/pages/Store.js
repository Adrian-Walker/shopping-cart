import React from "react";
import { Col, Row } from "react-bootstrap";
import myProducts from "../../myProducts";

function Store() {
  return (
    <div>
      <h1>Welcome To My Store</h1>
      <Row xs={1} md={3} className="g-4">
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
      </Row>
    </div>
  );
}

export default Store;
