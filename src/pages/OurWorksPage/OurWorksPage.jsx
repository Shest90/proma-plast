import React from "react";
import s from "./OurWorksPage.module.scss";

import Header from "../../components/Header";
import OurWorks from "../../components/OurWorks";
import Footer from "../../components/Footer";

function OurWorksPage() {
  return (
    <div className={s.ourWorksPage}>
      <div className={s.container}>
        <Header />

        <OurWorks />
        <Footer />
      </div>
    </div>
  );
}

export default OurWorksPage;
