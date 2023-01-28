import { Button, Navbar, Container, Modal, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";


function NavComponent() {
  return (
    <Container>
      <Navbar expand="sm">
        <Navbar.Brand href="/">My Store</Navbar.Brand>
        <NavbarToggle />
        <NavbarCollapse className="justify-content-end">
          <Button>Cart 0 Items</Button>
        </NavbarCollapse>
      </Navbar>
    </Container>
  );
}

export default NavComponent;
