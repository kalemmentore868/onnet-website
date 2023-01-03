import React from "react";
import "../assets/css/heroStyles.css";
import backgroundImage from "../assets/img/hero-bg.jpg";
import Button from "react-bootstrap/Button";
import { BsMouse } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="hero-section">
      <div
        className="hero-content"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-white text-center">
          <h1 className=" hero-header">
            Digital Products <br /> For Business
          </h1>
          <p>
            We provide a wide array of digital solutions to fit your every need
          </p>
          <Button className="yellow-btn mb-3">More Details</Button> <br />
          <BsMouse size={40} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
