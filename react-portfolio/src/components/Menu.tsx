import { useState } from "react";
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
      <Container color="blue">
        <Nav className="javi-nav" activeKey={tab} onSelect={handleSelect}>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="0"
              to="/"
              className={tab === "0" ? "javi-link-clicked active" : "javi-link"}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="1"
              to="/about"
              className={tab === "1" ? "javi-link-clicked" : "javi-link"}
            >
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="2"
              to="/contact"
              className={tab === "2" ? "javi-link-clicked" : "javi-link"}
            >
<<<<<<< HEAD
              another world
=======
              Contact to another world
>>>>>>> 6248db39ccdad5e3e135aecc72f37a2f07dbbc47
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="3"
              to="/contact"
              className={tab === "3" ? "javi-link-clicked active" : "javi-link"}
            >
              square
            </Nav.Link>
          </Nav.Item>
<<<<<<< HEAD
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="4"
              to="/below"
              className={tab === "4" ? "javi-link-clicked" : "javi-link"}
            >
              About
            </Nav.Link>
          </Nav.Item>
=======
>>>>>>> 6248db39ccdad5e3e135aecc72f37a2f07dbbc47
        </Nav>
      </Container>
    </div>
  );
};
export default Menu;
