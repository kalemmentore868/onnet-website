import React from "react";
import Container from "react-bootstrap/Container";
import { BsFacebook, BsInstagram, BsEnvelopeFill } from "react-icons/bs";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-black text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="www.facebook.com" className="me-4 text-reset">
            <BsFacebook size={25} />
          </a>

          <a href="www.instagram.com" className="me-4 text-reset">
            <BsInstagram size={25} />
          </a>
        </div>
      </section>

      <section className="footer-sect">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">BraidedByLaura</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </Col>

            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <Link href="/services/companion-care" className="text-reset">
                  Service 1
                </Link>
              </p>
              <p>
                <Link href="/services/personal-care" className="text-reset">
                  Service 2
                </Link>
              </p>
              <p>
                <Link href="/services/nursing-services" className="text-reset">
                  Service 3
                </Link>
              </p>
              <p>
                <Link href="/services/child-services" className="text-reset">
                  Service 4
                </Link>
              </p>
            </Col>

            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link href="/careers" className="text-reset">
                  Make Appointment
                </Link>
              </p>
              <p>
                <Link href="/about-us" className="text-reset">
                  About Us
                </Link>
              </p>
              <p>
                <Link href="/contact-us" className="text-reset">
                  Contact Us
                </Link>
              </p>
            </Col>

            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <AiOutlineHome size={20} className="me-3" /> Oropune Gardens,
                Piarco, Trinidad and Tobago
              </p>
              <p>
                <BsEnvelopeFill size={20} className="me-3" />
                info@example.com
              </p>
              <p>
                <AiOutlinePhone size={20} className="me-3" /> +1-868-313-8183
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
        <Link className="text-reset fw-bold" href="/">
          Benign
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
