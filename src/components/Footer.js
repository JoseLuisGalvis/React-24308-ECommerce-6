import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="dark arrow">
      <Container>
        <Row id="row-footer">
          <Col xs="4" className="wrap">
            <div className="title-box">
              <h5>Curso de Especialización: React</h5>
              <h5>Comisión N° 24308 - Equipo N° 5 </h5>
            </div>
          </Col>

          <Col xs="4" className="contact">
            <h5>Codo a Codo 4.0 | CABA | Argentina</h5>
          </Col>

          <Col xs="4" className="redes-sociales">
            <div>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
