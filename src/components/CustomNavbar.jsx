import React, { useState} from "react";
import { Container, Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";

const CustomNavbar = ({ comicsRef, moviesRef, charactersRef }) => {
  const [activeSection] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleNavigation(sectionId) {
    if (sectionId === 'comics') {
      comicsRef.current && window.scrollTo({
        top: comicsRef.current.offsetTop,
        behavior: "smooth"
      });
    } else if (sectionId === 'movies') {
      moviesRef.current && window.scrollTo({
        top: moviesRef.current.offsetTop,
        behavior: "smooth"
      });
    } else if (sectionId === 'characters') {
      charactersRef.current && window.scrollTo({
        top: charactersRef.current.offsetTop,
        behavior: "smooth"
      });
    } else {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop,
          behavior: "smooth"
        });
      }
    }
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Navbar className="navbar w-100 custom-navbar" expand="lg">
        <NavbarToggler onClick={toggle} className="custom-toggler" />
        <Collapse isOpen={isOpen} navbar className="text-white">
          <Nav className="d-flex justify-content-center w-100">
            <NavItem className={activeSection === "inicio"? "active" : ""}>
              <span className="nav-link" onClick={() => handleNavigation("inicio")}>
                <p>Inicio</p>
              </span>
            </NavItem>
            <NavItem>
              <span className="nav-link text-white" onClick={() => handleNavigation('comics')}>
                <p>Comics</p>
              </span>
            </NavItem>
            <NavItem>
              <span className="nav-link text-white" onClick={() => handleNavigation('movies')}>
                <p>Movies</p>
              </span>
            </NavItem>
            <NavItem>
              <span className="nav-link text-white" onClick={() => handleNavigation('characters')}>
                <p>Characters</p>
              </span>
            </NavItem>
            <NavItem>
              <span className="nav-link text-white" onClick={() => handleNavigation("footer")}>
                <p>Contacto</p>
              </span>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default CustomNavbar;
