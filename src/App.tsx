import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/dashboard">Dashboard</Link>{" "}
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/bazar">autobazar (hw4)</Link>{" "}
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/colorchange">Color changer (hw5)</Link>{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;
