import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backgroundImage from "../assets/img/services-bg.svg";
import "../assets/css/pricesStyles.css";
import { pricesInfo } from "../helpers/prices";
import PriceCard from "./PriceCard";

const PricingPlans = () => {
  console.log(pricesInfo[0]);

  return (
    <section
      className="pricing-section text-center p-3"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2>PRICING PLANS</h2>
      <h3>The Best Solutions for Our Clients</h3>
      <p className="mb-5">
        We at Onnet provide the most affordable solutions for all your digital
        needs
      </p>
      <Row lg={3} xs={1}>
        {pricesInfo.map((plan, index) => {
          return (
            <Col className="mb-5" key={index}>
              <PriceCard
                title={plan.title}
                price={plan.price}
                ticks={plan.ticks}
              />
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default PricingPlans;
