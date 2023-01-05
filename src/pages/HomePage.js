import React from "react";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import PricingPlans from "../components/PricingPlans";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <PricingPlans />
      <GetInTouch />
    </>
  );
};

export default HomePage;
