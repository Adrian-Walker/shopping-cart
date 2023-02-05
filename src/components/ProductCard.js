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
        {itemQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {itemQuantity}
              </Form.Label>
              <Col>
                <Button sm="6" className="mx-2">
                  +
                </Button>
                <Button sm="6" className="mx-2">
                  -
                </Button>
              </Col>
            </Form>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
