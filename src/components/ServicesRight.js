import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ServiceCard from "./ServiceCard";
import { services } from "../helpers/services";

const ServicesRight = () => {
  return (
    <div className="p-4">
      <Row lg={2} xs={1}>
        {services.map((service, index) => {
          return (
            <Col key={index}>
              <ServiceCard
                cardTitle={service.title}
                cardText={service.desc}
                cardIcon={<service.icon size={60} className="service-icon" />}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ServicesRight;
