import React from "react";

import s from "./ContactPage.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
function ContactPage() {
  return (
    <div className={s.contactPage}>
      <div className={s.container}>
        <Header />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage;
