import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";

const CustomNavbarSuperior = () => {
  return (
    <Container>
      <Nav className="navbar-superior d-flex justify-content-center ml-auto">
        <NavItem>
          <NavLink href="#inicio">Log In | Join</NavLink>
        </NavItem>
        <NavItem className="logo">
          <NavLink href="#inicio">
            <img
              src={`${process.env.PUBLIC_URL}/images/marvel.jpeg`}
              alt="Marvel Logo"
              height="55"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#inicio">Marvel Unlimited</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#inicio">
            <i className="fas fa-search search-icon" />
          </NavLink>
        </NavItem>
      </Nav>
    </Container>
  );
};

export default CustomNavbarSuperior;
