import React from "react";
import Hero from "../components/aboutPageComponents/Hero";
import QualitiesSection from "../components/aboutPageComponents/QualitiesSection";
import "../assets/css/aboutPageStyles.css";
import JoinTeam from "../components/aboutPageComponents/JoinTeam";
import AboutUs from "../components/aboutPageComponents/AboutUs";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <QualitiesSection />
      <JoinTeam />
    </>
  );
};

export default AboutPage;
