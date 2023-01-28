import NavComponent from "./components/NavComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <NavComponent />
      </Container>
    </div>
  );
}

export default App;
