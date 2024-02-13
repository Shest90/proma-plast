import React from "react";

import Header from "../../components/Header";
import Servic from "../../components/Servic";
import Footer from "../../components/Footer";

import s from "./ServicesPage.module.scss";
function ServicesPage() {
  return (
    <div className={s.servicesPage}>
      <div className={s.container}>
        <Header />
        <Servic />
        <Footer />
      </div>
    </div>
  );
}

export default ServicesPage;
