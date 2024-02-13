import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import s from "./OurServices.module.scss";
import uslugi1 from "../../assets/images/OurServices/uslugi-001.jpg";
import uslugi2 from "../../assets/images/OurServices/uslugi-002.jpg";
import uslugi3 from "../../assets/images/OurServices/uslugi-003.jpg";
import uslugi4 from "../../assets/images/OurServices/uslugi-004.jpg";
import thebest1 from "../../assets/images/OurServices/wethebest1.png";
import thebest2 from "../../assets/images/OurServices/wethebest2.png";
import thebest3 from "../../assets/images/OurServices/wethebest3.png";
import thebest4 from "../../assets/images/OurServices/wethebest4.png";

function OurServices() {
  const cardRefs = useRef([]);

  const handleVisibility = (entry) => {
    return entry.isIntersecting && entry.intersectionRatio > 0;
  };

  const isVisible = useIntersectionObserver(cardRefs, handleVisibility, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const animationDelay = 300;
  const animationDuration = 500;

  return (
    <section className={s.ourServices}>
      <div className={s.container}>
        <h1 className={s.servicesTitle}>Наши услуги:</h1>
        <div className={s.servicesTop}>
          {[uslugi1, uslugi2, uslugi3, uslugi4].map((imgPath, index) => (
            <Link key={index} to="/" className={s.servicesLink}>
              <div
                className={`${s.servicesCard} ${
                  isVisible[index] ? s.appear : ""
                }`}
              >
                <img
                  className={s.servicesImg}
                  src={imgPath}
                  alt={`uslugi${index + 1}`}
                />
                <p className={s.servicesInfo}>
                  {index === 0 && "Остекление квартир"}
                  {index === 1 && "Остекление загородного дома"}
                  {index === 2 && "Остекление балконов и лоджий"}
                  {index === 3 && "Двери, витражи, входные группы"}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className={s.servicesBottom}>
          <h2 className={s.advantagesTitle}>Преимущества:</h2>
          <div className={s.advantagesCards}>
            {[thebest1, thebest2, thebest3, thebest4].map(
              (imagePath, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`${s.advantagesCard} ${
                    isVisible[index] ? s.appear : ""
                  }`}
                  style={{
                    transitionDelay: `${
                      isVisible[index] ? index * animationDelay : 0
                    }ms`,
                    transitionDuration: `${
                      isVisible[index] ? animationDuration : 0
                    }ms`,
                  }}
                >
                  <img
                    className={s.advantagesImg}
                    src={imagePath}
                    alt={`thebest${index + 1}`}
                  />
                  <p className={s.advantagesInfo}>
                    {index === 0 && "Бесплатный замер"}
                    {index === 1 && "Минимальные сроки изготовления"}
                    {index === 2 && "Профессиональные монтажники"}
                    {index === 3 && "Окна в рассрочку без процентов"}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
