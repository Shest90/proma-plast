import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useFooterVisibility from "../../hooks/useFooterVisibility";
import s from "./Footer.module.scss";
import logo from "../../assets/images/Footer/logoFooter.png";

function Footer() {
  const footerTopRef = useRef(null);
  const footerBottomRef = useRef(null);

  const { isVisibleTop, isVisibleBottom } = useFooterVisibility(
    footerTopRef,
    footerBottomRef
  );

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div
          ref={footerTopRef}
          className={`${s.footerTop} ${isVisibleTop ? s.appear : ""}`}
        >
          <div className={s.footerLogo}>
            <Link to="/">
              <img className={s.logo} src={logo} alt="logo" />
            </Link>
          </div>
          <div className={s.footerCap}>
            <ul className={s.cap}>
              <li className={s.clock}>
                пн-пт: с 9:00 - 18:00 <br /> сб: c 9:00 - 14:00
              </li>
              <li className={s.phone}>
                <Link className={s.phone} to="tel:+77753468239">
                  +77753468239
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          ref={footerBottomRef}
          className={`${s.footerBottom} ${isVisibleBottom ? s.appear : ""}`}
        >
          <div className={s.products}>
            <h2 className={s.title}>Продукция</h2>
            <ul>
              <li>
                <Link to="/" className={s.link}>
                  Окна ПВХ
                </Link>
              </li>
              <li>
                <Link to="/" className={s.link}>
                  Двери ПВХ
                </Link>
              </li>
              <li>
                <Link to="/" className={s.link}>
                  Раздвижная система "Барселона"
                </Link>
              </li>
              <li>
                <Link to="/" className={s.link}>
                  Алюминевые конструкции
                </Link>
              </li>
            </ul>
          </div>
          <div className={s.services}>
            <h2 className={s.title}>Наши услуги</h2>
            <ul>
              <li>
                <Link to="/" className={s.link}>
                  Остекление квартир
                </Link>
              </li>
              <li>
                <Link to="/" className={s.link}>
                  Остекление загородного дома
                </Link>
              </li>
              <li>
                <Link to="/" className={s.link}>
                  Остекление балконов и лоджий
                </Link>
              </li>
              <li>
                <Link to="/" className={s.link}>
                  Двери, витражи, входные группы
                </Link>
              </li>
            </ul>
          </div>
          <div className={s.company}>
            <h2 className={s.title}>Компания PromaPlast</h2>
            <ul>
              <li>
                <Link to="/" className={s.link}>
                  Ггарантийные обязательства
                </Link>
              </li>
              <li>
                <Link to="/" className={s.link}>
                  Наши работы
                </Link>
              </li>
              <li>
                <Link to="/" className={s.link}>
                  Акции
                </Link>
              </li>
            </ul>
          </div>
          <div className={s.contacts}>
            <h2 className={s.title}>Контакты</h2>
            <p>
              г.Караганда,
              <br /> просп.Сакена Сейфулина, 105
              <br /> +77753468239(WhatsApp)
              <br />
              @proma-plast(instagram)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
