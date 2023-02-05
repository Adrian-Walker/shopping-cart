import { Button, Navbar, Container, Modal, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";

function NavComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">My Store</Navbar.Brand>
        <NavbarToggle />
        <NavbarCollapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productCount} Items)</Button>
        </NavbarCollapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Modal Body</h1>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavComponent;
