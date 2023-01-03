import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import CareerPage from "../pages/CareerPage";
import ServicesPage from "../pages/ServicesPage";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareerPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="*" element={<NotFoundPage />} /> {/* None of the above*/}
    </Routes>
  );
};

export default RoutesList;
