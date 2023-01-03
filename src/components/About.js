import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import aboutImg from "../assets/img/about-img.jpg";

const About = () => {
  return (
    <section className="my-5" id="about">
      <Container fluid className="px-lg-5">
        <Row>
          <Col className="mb-5" md={6}>
            <div className="text-center">
              <h2>About Me</h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Image src={aboutImg} alt="nurse at work" fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
