import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/img/logo.png";
import "../assets/css/headerStyles.css";

const Header = () => {
  const location = useLocation();

  return (
    <Navbar sticky="top" expand="lg" bg="white" className="p-3">
      <Container>
        <Navbar.Brand className="me-5" href="/">
          <img
            src={logo}
            width="150"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav>
            <Nav.Link
              className={
                location.pathname === "/" ? "n-link active me-4" : "n-link me-4"
              }
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={
                location.pathname === "/services"
                  ? "n-link active me-4"
                  : "n-link me-4"
              }
              href="/services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className={
                location.pathname === "/about"
                  ? "n-link active me-4"
                  : "n-link me-4"
              }
              href="/about"
            >
              About
            </Nav.Link>

            <Nav.Link
              className={
                location.pathname === "/contact" ? "n-link active" : "n-link"
              }
              href="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>

          {/* <div className="login-box">
            <MdOutlineAccountCircle className="acc-icon" />{" "}
            <button className="login-btn">Login</button>
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
