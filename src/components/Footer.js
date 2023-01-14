import React from "react";
import Container from "react-bootstrap/Container";
import { BsInstagram, BsEnvelopeFill } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-light text-lg-start">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.instagram.com/onnet.services/"
            className="me-4 text-reset"
          >
            <BsInstagram size={25} />
          </a>
        </div>
      </section>

      <section className="footer-sect">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Onnet Web Services
              </h6>
              <p>
                A website is your most important marketing & advertising asset
                for today's market. Our talented team offers unique and exciting
                website designs. SEO. Social Media Management. Live Chat
                Services. All highly customizeable to suit your needs.
              </p>
            </Col>

            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Site Menu</h6>
              <p>
                <Link to="/services" className="text-reset">
                  Services
                </Link>
              </p>
              <p>
                <Link to="/about" className="text-reset">
                  About
                </Link>
              </p>
              <p>
                <Link to="/contact" className="text-reset">
                  Contact us
                </Link>
              </p>
            </Col>

            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/services" className="text-reset">
                  Pricing Plans
                </Link>
              </p>
              <p>
                <Link to="/about" className="text-reset">
                  Why Onnet?
                </Link>
              </p>
            </Col>

            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <BsEnvelopeFill size={20} className="me-3" />
                kalemmentore868@gmail.com
              </p>
              <p>
                <AiOutlinePhone size={20} className="me-3" /> +1-868-278-0498
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:{" "}
        <Link className="text-reset fw-bold" to="/">
          Onnet
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
