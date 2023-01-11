import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import contactImg from "../assets/img/contact-img.jpg";
import ContactForm from "../components/contactPageComponents/ContactForm";
import { GiTeamUpgrade } from "react-icons/gi";
import CareerForm from "../components/contactPageComponents/CareerForm";

const ContactPage = () => {
  return (
    <div className="p-5 text-center">
      <h2>Let's Talk</h2>
      <h1>Send Us Your Feedback</h1>
      <p className="mb-5">Let's discuss your great project!</p>
      <Row>
        <Col md={6}>
          <img
            src={contactImg}
            className="img-fluid"
            alt="a phone"
            style={{ height: "600px" }}
          />
        </Col>
        <Col md={6} className="mb-5">
          <ContactForm />
        </Col>
      </Row>
      <div className="my-5">
        <h2>Join Our Team !</h2>
        <Row>
          <Col md={6}>
            <CareerForm />
          </Col>
          <Col md={6}>
            <GiTeamUpgrade size={400} className="career-icon" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactPage;
