import React from "react";
import backgroundImage from "../../assets/img/service-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="hero-section p-2">
      <div
        className="hero-content p-3 hero-services"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-white">
          Our Mission? <br /> To Turn Dreams Into Reality
        </h1>
      </div>
    </section>
  );
};

export default Hero;
