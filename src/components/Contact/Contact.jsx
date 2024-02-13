import React from "react";
import s from "./Contact.module.scss";
import thebest1 from "../../assets/images/OurServices/wethebest1.png";
import thebest2 from "../../assets/images/OurServices/wethebest2.png";
import thebest3 from "../../assets/images/OurServices/wethebest3.png";
import thebest4 from "../../assets/images/OurServices/wethebest4.png";

function Contact() {
  return (
    <div className={s.contact}>
      <h1 className={s.contactTitle}>Контакты</h1>
      <div className={s.container}>
        <div className={s.contactLeft}>
          <p className={s.contactInfo}>
            г.Караганда,
            <br /> просп.Сакена Сейфулина, 105
            <br /> <span className={s.infoTitle}>Teл.:</span>
            +77753468239(WhatsApp)
            <br />
            <span className={s.infoTitle}>Instagram:</span> @proma-plast <br />
            <span className={s.infoTitle}>Режим работы:</span> <br />
            пн-пт: 09:00-18:00
            <br />
            сб: 09:00-14:00
          </p>
        </div>
        <div className={s.contactRight}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <a
              href="https://yandex.kz/maps/ru/164/karaganda/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Караганда
            </a>
            <a
              href="https://yandex.kz/maps/ru/164/karaganda/house/Y0oYdgRmQEEOQFpjfXRwcXlnYQ==/?ll=73.037946%2C49.810595&utm_medium=mapframe&utm_source=maps&z=17.36"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Проспект Сакена Сейфуллина, 105А — Яндекс Карты
            </a>
            <iframe
              className={s.map}
              title="Map"
              src="https://yandex.kz/map-widget/v1/?ll=73.037946%2C49.810595&mode=whatshere&whatshere%5Bpoint%5D=73.036685%2C49.810597&whatshere%5Bzoom%5D=17&z=17.36"
              width="800"
              height="500"
              frameBorder="1"
              allowFullScreen="true"
              style={{ position: "relative" }}
            ></iframe>
          </div>
        </div>
      </div>
      <div className={s.servicesBottom}>
        <h2 className={s.advantagesTitle}>Преимущества:</h2>
        <div className={s.advantagesCards}>
          {[thebest1, thebest2, thebest3, thebest4].map((imagePath, index) => (
            <div key={index} className={s.advantagesCard}>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
