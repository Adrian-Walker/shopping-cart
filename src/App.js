import NavComponent from "./components/NavComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cancel from "./components/pages/Cancel";
import Store from "./components/pages/Store";
import Success from "./components/pages/Success";
import CartProvider from "./CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Container>
          <NavComponent />
          <BrowserRouter>
            <Routes>
              <Route index element={<Store />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
    </div>
  );
}

export default App;
