import React from "react";
import { Col, Row } from "react-bootstrap";
import { items } from "../../myProducts";
import ProductCard from "../ProductCard";

function Store() {
  return (
    <div>
      <h1 align="center">Welcome To My Store</h1>
      <Row xs={1} md={3} className="g-4">
        {items.map((product, index) => (
          <Col align="center" key={index}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Store;
