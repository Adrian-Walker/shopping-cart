import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext.js";
import { useContext } from "react";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const itemQuantity = cart.getItemQuantity(product.id);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
      <Button variant="primary" onClick={() => cart.addOneToCart()}>
        Add To Cart
      </Button>
    </Card>
  );
}

export default ProductCard;
