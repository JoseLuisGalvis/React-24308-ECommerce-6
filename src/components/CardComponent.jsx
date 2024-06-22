import React, { useEffect } from "react";
import {
  Card as RCard,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const CardComponent = ({ image, title, text }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <RCard data-aos="fade-right">
      <CardImg top src={image} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardBody>
    </RCard>
  );
};

export default CardComponent;
