import React from "react";

import Header from "../../components/Header";
import WelcomeBanner from "../../components/WelcomeBanner";
import OurServices from "../../components/OurServices/OurServices";
import Footer from "../../components/Footer";

import s from "./HomePage.module.scss";

function HomePage() {
  return (
    <div className={s.homePage}>
      <div className={s.container}>
        <Header />
        <WelcomeBanner />
        <OurServices />
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
