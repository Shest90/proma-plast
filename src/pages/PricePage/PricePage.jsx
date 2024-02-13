import React from "react";
import s from "./PricePage.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Price from "../../components/Price";

function PricePage() {
  return (
    <div className={s.pricePage}>
      <div className={s.container}>
        <Header />
        <Price />
        <Footer />
      </div>
    </div>
  );
}

export default PricePage;
