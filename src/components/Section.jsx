import React from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "./CardComponent";

const Section = React.forwardRef((props, ref) => {

  function handleNavigation(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: "smooth"
      });
    }
  }

  return (
    <div ref={ref} id={props.id}>
      <Container>
        <Row>
          <Col md="12" >
            <h2>{props.title}</h2>
          </Col>
        </Row>
        <Row>
          {props.cards.map((card, index) => (
            <Col md="3" key={index}>
              <Card {...card} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col md="12" className="text-right">
            <div>
                <button className="btn btn-ligth mt-4 stylebutton" onClick={() => handleNavigation("inicio")}>
                  Ir al Inicio
                </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Section;


