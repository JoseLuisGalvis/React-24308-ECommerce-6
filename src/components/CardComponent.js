import React from "react";
import {
  Card as RCard,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const CardComponent = ({ image, title, text }) => {
  return (
    <RCard>
      <CardImg top src={image} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardBody>
    </RCard>
  );
};

export default CardComponent;
