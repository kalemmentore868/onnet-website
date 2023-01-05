import React from "react";
import Hero from "../components/servicePageComponents/Hero";
import "../assets/css/servicesPageStyles.css";
import Services from "../components/servicePageComponents/Services";
import PricingPlans from "../components/PricingPlans";

const ServicesPage = () => {
  return (
    <>
      <Hero />
      <Services />
      <PricingPlans />
    </>
  );
};

export default ServicesPage;
