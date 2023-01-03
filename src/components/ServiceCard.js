import React from "react";
import Card from "react-bootstrap/Card";

const ServiceCard = ({ cardTitle, cardText, cardIcon }) => {
  return (
    <Card className="service-card" style={{ height: "350px" }}>
      {cardIcon}
      <Card.Body className="mt-2">
        <Card.Title className="mb-2">{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
