import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { RiTeamFill } from "react-icons/ri";

const JoinTeam = () => {
  return (
    <div className="p-5">
      <Row className="bg-orange p-5 team align-items-center">
        <Col className="mb-5" lg={8}>
          <h2>Join Our Awesome Team</h2>
          <p>
            Do you have skills, passion and a good work ethic towards design or
            development?
          </p>
          <Button href="/contact" className="white-btn p-2">
            Send us your CV
          </Button>
        </Col>
        <Col className="text-center">
          <RiTeamFill size={130} color="white" />
        </Col>
      </Row>
    </div>
  );
};

export default JoinTeam;
