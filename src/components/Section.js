import React from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "./CardComponent";

const Section = ({ title, cards }) => {
  return (
    <Container>
      <Row>
        <Col md="12">
          <h2>{title}</h2>
        </Col>
      </Row>
      <Row>
        {cards.map((card, index) => (
          <Col md="3" key={index}>
            <Card {...card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Section;
