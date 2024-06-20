import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/link.css";
export const Menu = () => {
  const [tab, setTab] = useState("-1");
  const handleSelect = (key: string | null) => {
    if (key === null) setTab("-1");
    else setTab(key);
  };
  return (
    <div>
      <Container>
        <Nav
          className="justify-content-center py-3"
          style={{ backgroundColor: "lightblue", fontSize: 30 }}
          activeKey={tab}
          onSelect={handleSelect}
        >
          <Nav.Item className="mx-7">
            <Nav.Link
              as={Link}
              eventKey="0"
              to="/"
              className={tab === "0" ? "javi-link-clicked" : "javi-link"}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-20">
            <Nav.Link as={Link} eventKey="1" to="/about" className="javi-link">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-20">
            <Nav.Link
              as={Link}
              eventKey="2"
              to="/contact"
              className="javi-link"
            >
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link
              as={Link}
              eventKey="3"
              to="/contact"
              className="javi-link"
            >
              square
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
};
export default Menu;
