import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const QualitiesSection = () => {
  return (
    <div className="p-2 m-5 qualities">
      <Row md={3} xs={1}>
        <Col>
          <h2>Quality</h2>
          <p>
            We take utmost care to ensure that your site is visually appealing,
            polished and professional.{" "}
          </p>
        </Col>
        <Col>
          <h2>Skills</h2>
          <p>
            Our professionals are highly skilled in all aspects of web
            development. From design to the implementation of of specific
            features; the only limit is your imagination.
          </p>
        </Col>
        <Col>
          <h2>Passion</h2>
          <p>
            Most importantly, our organization is fulled to the brim with
            individuals who are passionate about technology and solving business
            problems.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default QualitiesSection;
