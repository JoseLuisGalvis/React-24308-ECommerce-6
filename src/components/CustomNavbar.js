import React from "react";
import { Navbar, Nav, NavItem, Container } from "reactstrap";

const CustomNavbar = () => {
  return (
    <Container>
      <Navbar className="navbar d-flex justify-content-center" expand="md">
        <Nav>
          <NavItem>
            <a className="nav-link" href="#inicio">
              <p>Inicio</p>
            </a>
          </NavItem>
          <NavItem>
            <a className="nav-link" href="#comics">
              <p>Comics</p>
            </a>
          </NavItem>
          <NavItem>
            <a className="nav-link" href="#stories">
              <p>Movies</p>
            </a>
          </NavItem>
          <NavItem>
            <a className="nav-link" href="#characters">
              <p>Characters</p>
            </a>
          </NavItem>
          <NavItem>
            <a className="nav-link" href="#contact">
              <p>Contacto</p>
            </a>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default CustomNavbar;
