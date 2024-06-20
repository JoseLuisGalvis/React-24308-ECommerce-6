import React from "react";
import { Container, Navbar, Nav, NavItem } from "reactstrap";

const CustomNavbar = () => {
  return (
    <Container>
      <Navbar className="navbar w-100" expand="lg">
        <Nav className="d-flex justify-content-center w-100">
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
