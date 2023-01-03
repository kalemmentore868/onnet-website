import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ServicesLeft from "./ServicesLeft";
import "../assets/css/servicesStyles.css";
import backgroundImage from "../assets/img/services-bg.svg";
import ServicesRight from "./ServicesRight";

const Services = () => {
  return (
    <section
      className="p-4 services-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Row>
        <Col lg={6}>
          <ServicesLeft />{" "}
        </Col>
        <Col lg={6}>
          <ServicesRight />
        </Col>
      </Row>
    </section>
  );
};

export default Services;
