import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../assets/css/portfolioStyles.css";
import backgroundImage from "../assets/img/porty-bg.svg";
import { work } from "../helpers/portfolio";

const Portfolio = () => {
  return (
    <section
      className="portfolio-section text-center p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container>
        <h2>FEATURED PROJECTS</h2>
        <h3>Our Case Studies</h3>
        <p className="mb-5">
          Here are some of the businesses that have benefitted from our services
        </p>
        <Row lg={3} md={2} xs={1}>
          {work.map((site, index) => {
            return (
              <Col>
                <div
                  className="site-container"
                  style={{ backgroundImage: `url(${site.img})` }}
                >
                  <div className="text-white overlay">
                    <h4>{site.title}</h4>
                    <a target="_blank" href={site.link}>
                      See Live
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
