import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const Menu = () => {
  return (
    <div>
      <Container>
        <Nav
          className="justify-content-center py-3"
          style={{ backgroundColor: "lightblue", fontSize: 30 }}
          activeKey="/"
        >
          <Nav.Item className="mx-7">
            <Nav.Link
              as={Link}
              to="/"
              className="mx-7 hover-text-danger"
              style={{
                transition: "color 0.3s",
                backgroundColor: "purple",
                color: "black",
              }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-20 text-dark">
            <Nav.Link as={Link} style={{ color: "black" }} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link as={Link} style={{ color: "black" }} to="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link as={Link} style={{ color: "black" }} to="/contact">
              square
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
};
export default Menu;
