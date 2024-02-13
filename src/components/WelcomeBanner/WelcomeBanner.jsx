import React, { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import s from "./WelcomeBanner.module.scss";
import banner from "../../assets/images/WelcomeBanner/Banner.png";
import window from "../../assets/images/WelcomeBanner/window.svg";
import factory from "../../assets/images/WelcomeBanner/factory.svg";

function WelcomeBanner() {
  const cardRefs = useRef([]);
  const isVisible = useIntersectionObserver(cardRefs);

  const animationType = window.innerWidth <= 768 ? "fadeInUp" : "fadeInRight";
  const animationDelay = 300;
  const animationDuration = 500;

  return (
    <section className={s.welcomeSection}>
      <div className={s.container}>
        <div className={s.sectionLeft}>
          <img src={banner} className={s.banner} alt="banner" />
        </div>
        <div className={s.sectionRight}>
          <h1>
            Добро пожаловать в мир качественных пластиковых окон от PromaPlast!
          </h1>
          <p>
            Мы - производитель инновационных и надежных оконных конструкций,
            которые сочетают в себе элегантный дизайн, высокое качество и
            теплоизоляцию. Наша миссия - создавать комфорт и безопасность для
            вашего дома. Узнайте больше о наших уникальных продуктах уже
            сегодня!
          </p>
        </div>
      </div>
      <div className={s.containerCard}>
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`${s.card} ${isVisible[index] ? s.appear : ""}`}
            style={{
              transitionDelay: `${
                isVisible[index] ? index * animationDelay : 0
              }ms`,
              transitionDuration: `${
                isVisible[index] ? animationDuration : 0
              }ms`,
              animation: isVisible[index]
                ? `${animationType} 0.8s ease forwards`
                : "none",
            }}
          >
            {index === 0 && (
              <>
                <p className={s.cardTitle}>2006</p>
                <p className={s.cardInfo}>Год начала существования компании</p>
              </>
            )}
            {index === 1 && (
              <>
                <div className={s.cardTitle}>
                  <img className={s.window} src={window} alt="window" />
                </div>
                <p className={s.cardInfo}>
                  Безупречное качество ПВХ-профиля ведущего немецкого
                  производителя Funke
                </p>
              </>
            )}
            {index === 2 && (
              <>
                <p className={s.cardTitle}>50000</p>
                <p className={s.cardInfo}>
                  Металлопластиковых конструкций произведено в период с 2006 по
                  2020 г.
                </p>
              </>
            )}
            {index === 3 && (
              <>
                <div className={s.cardTitle}>
                  <img className={s.factory} src={factory} alt="factory" />
                </div>
                <p className={s.cardInfo}>Собственная производственная база</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WelcomeBanner;
