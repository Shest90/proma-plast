import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PricePage from "./pages/PricePage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import OurWorksPage from "./pages/OurWorksPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/price" element={<PricePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/ourworks" element={<OurWorksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
