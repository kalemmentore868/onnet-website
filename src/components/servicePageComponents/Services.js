import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import backgroundImage from "../../assets/img/porty-bg.svg";
import { services } from "../../helpers/services";
import ServiceCard from "../ServiceCard";

const Services = () => {
  return (
    <section
      className=" services-p p-4 mb-5 text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="mt-5 mb-3">Our Services</h2>
      <h3 className="mb-3">We Create The Best Digital Products</h3>
      <p className="mb-3">
        Our team of experts are guaranteed to deliver digital products that will
        help your business cement its place in the online world.
      </p>

      <Row lg={2} xs={1} className="mt-5">
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
    </section>
  );
};

export default Services;
