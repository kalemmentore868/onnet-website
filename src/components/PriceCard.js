import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const PriceCard = ({ title, price, ticks }) => {
  const services = [
    "SEO Audits",
    "Website Creation",
    "Unlimited Changes",
    "Google Analytics",
    "Website Marketing",
    "Content Creation",
  ];
  return (
    <Card className="text-center price-card">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title className="price">${price}US</Card.Title>
        <ul>
          {services.map((service, index) => {
            return (
              <li key={index} className="text-start mb-2">
                {ticks - 1 >= index ? (
                  <>
                    <BsCheckLg className="check me-1" /> <span>{service}</span>
                  </>
                ) : (
                  <>
                    {" "}
                    <RxCross2 className="cross me-1" /> <span>{service}</span>{" "}
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <Button className="yellow-btn mb-3">GET STARTED</Button>
      </Card.Body>
    </Card>
  );
};

export default PriceCard;
