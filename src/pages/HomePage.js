import React from "react";
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
    </>
  );
};

export default HomePage;
