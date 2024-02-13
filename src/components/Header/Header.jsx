import React from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Header/logo-back.png";
import useScroll from "../../hooks/useScroll";
import useBurgerMenu from "../../hooks/useBurgerMenu";

function Header() {
  const scrolled = useScroll();
  const { burgerMenuOpen, toggleBurgerMenu } = useBurgerMenu();

  return (
    <header className={`${s.navigation} ${scrolled ? s["scrolled"] : ""}`}>
      {scrolled && (
        <button className={s.burgerButton} onClick={toggleBurgerMenu}>
          ☰
        </button>
      )}

      <div className={s.container}>
        <div className={s.header_flex}>
          <div className={s.header_flex_logo}>
            <Link to="/">
              <img className={s.logo} src={logo} alt="logo" />
            </Link>
          </div>
          <div className={s.header_flex_cap}>
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
      </div>
      <nav className={s.navbar}>
        <div className={s.container}>
          <div
            className={`${s.navbarHeader} ${
              burgerMenuOpen ? s["burgerMenu"] : ""
            }`}
          >
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/price">Цены</Link>
              </li>
              <li>
                <Link to="/services">Услуги</Link>
              </li>
              <li>
                <Link to="/ourworks">Наши работы</Link>
              </li>
              <li>
                <Link to="/contact">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
