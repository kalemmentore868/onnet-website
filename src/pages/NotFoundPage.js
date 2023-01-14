import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/notFoundStyles.css";

const NotFoundPage = () => {
  return (
    <Container className="notfound-container">
      <Row>
        <Col>
          <div className="notfound-jumbotron">
            <h1 className="notfound-heading">404 Not Found</h1>
            <p className="notfound-message">
              The page you are looking for could not be found. Please check the
              URL and try again.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
