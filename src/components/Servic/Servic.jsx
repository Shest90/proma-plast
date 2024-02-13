import React, { useRef } from "react";

import serv1 from "../../assets/images/Servic/serv1.png";
import serv2 from "../../assets/images/Servic/servTitle2.jpeg";
import serv3 from "../../assets/images/Servic/serv3.jpg";
import serv4 from "../../assets/images/Servic/serv4.jpg";
import serv5 from "../../assets/images/Servic/servTitle5.jpg";

import s from "./Servic.module.scss";

function Servic() {
  const service1Ref = useRef(null);
  const service2Ref = useRef(null);
  const service3Ref = useRef(null);
  const service4Ref = useRef(null);
  const service5Ref = useRef(null);

  const scrollToService = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={s.servic}>
      <nav className={` ${s.navigation}`}>
        <button
          className={s.navigationItem}
          onClick={() => scrollToService(service1Ref)}
        >
          Изготовление и установка окон
        </button>
        <button
          className={s.navigationItem}
          onClick={() => scrollToService(service2Ref)}
        >
          Регулировка окон
        </button>
        <button
          className={s.navigationItem}
          onClick={() => scrollToService(service3Ref)}
        >
          Установка пластиковых балконов и лоджий
        </button>
        <button
          className={s.navigationItem}
          onClick={() => scrollToService(service4Ref)}
        >
          Перестроение балконов и лоджий
        </button>
        <button
          className={s.navigationItem}
          onClick={() => scrollToService(service5Ref)}
        >
          Защита от выпадения детей
        </button>
      </nav>
      <div className={s.serviceTitleWrap} ref={service1Ref}>
        <div class={s.backgroundImage}></div>
        <div class={s.overlay}></div>
        <h1 className={s.serviceTitle}>Изготовление и установка окон</h1>
      </div>
      <div className={s.container}>
        <div className={s.serviceWrap}>
          <div className={s.serviceInfo}>
            <p>
              <span className={s.bold}>
                Изготовление пластиковых окон на заказ в Казахстане
              </span>
              – это многоступенчатый процесс, состоящий из нескольких этапов, в
              результате выполнения которых получается изделие, обладающее
              отличными техническими и потребительскими качествами. Соблюдение
              правил монтажа гарантирует соответствие заявленных характеристик
              ожидаемым, поэтому заказ на изготовление окон доверяйте только
              профессионалам.
            </p>
            <p>
              <span className={s.bold}>Наша компания</span> занимается полным
              спектром услуг касательно пластиковых окон! Многолетний опыт и
              тысячи отзывов говорят о том, что мы профессионалы в этом деле!
            </p>
          </div>
          <div className={s.serviceImg}>
            <img src={serv1} alt="serv" />
          </div>
        </div>
      </div>
      <div className={s.serviceTitleWrap} ref={service2Ref}>
        <div class={s.backgroundImage2}></div>
        <div class={s.overlay}></div>
        <h1 className={s.serviceTitle}>Регулировка окон</h1>
      </div>
      <div className={s.container}>
        <div className={s.serviceWrap}>
          <div className={s.serviceImg}>
            <img src={serv2} alt="serv2" />
          </div>
          <div className={s.serviceInfo}>
            <p>
              <span className={s.bold}> Регулировка окон в Казахстане</span>{" "}
              рекомендуют осуществлять зимой и летом. Зимой прижим окон должен
              быть сильнее, а летом его делают слабее, чтобы в помещении была
              вентиляция. Переключение режимов могут продлить срок службы ваших
              окон. Уплотнитель при теплой температуре расширяется, а при холоде
              наоборот, сжимается.
            </p>
            <p>
              Регулировка окон снижает износ и понижает нагрузку на крепежи.
              <span className={s.bold}>Мастера нашего сервиса</span> проведет
              диагностику и выполнит регулировку.
            </p>
            <p>
              О том, что окна необходимо отрегулировать, свидетельствуют
              следующие признаки:
            </p>
            <ul>
              <li>
                Створка не закрывается, т.к. соприкасается при закрытии с рамой.
              </li>
              <li>Из окна дует.</li>
              <li>
                Ручка с трудом поворачивается в разных положениях или болтается.
              </li>
              <li>Окна заклинивает</li>
              <li>Провисла створка.</li>
            </ul>
            <p>
              Также регулировать окна в целях профилактики рекомендуется в
              завершении сезона – зимой и летом.
            </p>
          </div>
        </div>
      </div>
      <div className={s.serviceTitleWrap} ref={service3Ref}>
        <div class={s.backgroundImage3}></div>
        <div class={s.overlay}></div>
        <h1 className={s.serviceTitle}>
          Установка пластиковых балконов и лоджий
        </h1>
      </div>
      <div className={s.container}>
        <div className={s.serviceWrap}>
          <div className={s.serviceInfo}>
            <p>
              <span className={s.bold}>Застекленный балкон</span>— это
              дополнительная площадь для вашего дома. Застекление балкона
              предохраняет его внутреннее пространство от различных атмосферных
              воздействий – дождя, снега, ветра и т.п.
            </p>
            <p>У нас можно заказать холодное и теплое остекление балкона.</p>
            <p>
              За счет балкона/лоджии площадь квартиры увеличивается. Остеклив
              это пространство, его можно использовать более эффективно. При
              установке на балкон пластиковых окон и дверей вы получите
              дополнительную зону для различных нужд. Здесь можно устроить:
            </p>
            <ul>
              <li>кладовку;</li>
              <li>мастерскую;</li>
              <li>личный рабочий кабинет;</li>
              <li>домашнюю оранжерею;</li>
              <li>уютное место для домашнего животного.</li>
            </ul>
          </div>
          <div className={s.serviceImg}>
            <img src={serv3} alt="serv3" />
          </div>
        </div>
      </div>
      <div className={s.serviceTitleWrap} ref={service4Ref}>
        <div class={s.backgroundImage4}></div>
        <div class={s.overlay}></div>
        <h1 className={s.serviceTitle}>Перестроение балконов и лоджий</h1>
      </div>
      <div className={s.container}>
        <div className={s.serviceWrap}>
          <div className={s.serviceImg}>
            <img src={serv4} alt="serv4" />
          </div>
          <div className={s.serviceInfo}>
            <p>
              Мы предлагаем пакетные решения по отделке балкона и лоджии в
              Казахстане. Вы можете выбрать любой готовый вариант, адаптировать
              его под свои запросы или заказать полностью индивидуальное
              решение.
            </p>
            <p>
              У нас вы можете заказать
              <span className={s.bold}>отделку балкона или лоджии</span>
              отделку балкона или лоджии вместе с остеклением. При этом мы
              выполняем ряд сложных работ, требующих высокого профессионализма
              монтажных бригад, за которые не берутся как отдельные ремонтники,
              так и фирмы по ремонту квартир.
            </p>
            <p>
              Мы проводим полный спектр работ по разработке и изготовлению
              светопрозрачных конструкций. Закажите выезд специалиста на объект
              и изложите свои ожидания и требования. Получите исчерпывающую
              консультацию по интересующему продукту.
            </p>
          </div>
        </div>
      </div>

      <div className={s.serviceTitleWrap} ref={service5Ref}>
        <div class={s.backgroundImage5}></div>
        <div class={s.overlay}></div>
        <h1 className={s.serviceTitle}>Защита от выпадения детей</h1>
      </div>
      <div className={s.container}>
        <div className={s.serviceWrap}>
          <div className={s.serviceInfo}>
            <p>
              Инновационная безопасная москитная сетка имеет ряд неоспоримых
              преимуществ, выгодно отличающих ее от противомоскиток, ранее
              существовавших на рынке пластиковых окон.
            </p>
            <ul className={s.bold}>
              <li>безопасность при полном открытии оконных створок;</li>
              <li>
                обеспечение возможности полноценного проветривания помещения;
              </li>
              <li>легкость ревизии крепежных элементов;</li>
              <li>
                технологичность и простота снятия и установки сетки для
                обслуживания и мытья окон;
              </li>
              <li>
                возможность экстренного демонтажа не затрудняющая работы
                пожарной службы.
              </li>
            </ul>
            <p>
              Новая противомоскитная сетка, при всей простоте конструкции
              обеспечивает максимально возможную безопасность ваших детей от
              выпадения.
            </p>
          </div>
          <div className={s.serviceImg}>
            <img src={serv5} alt="serv5" />
          </div>
        </div>
        <h2 className={s.endTitle}>Почему люди выбирают нас?</h2>
        <p className={s.endInfo}>
          Не удивительно, что ежегодно наша компания получает сотни заказов:
          качество работ по изготовлению и монтажу окон ПВХ говорит само за
          себя:
        </p>
        <div className={s.advantages}>
          <ul>
            <li>гарантия от производителя профиля;</li>
            <li>гарантия от установщика;</li>
            <li>точные сроки исполнения заказа на производство;</li>
            <li>оперативный монтаж и финишная отделка;</li>
            <li>приятные цены</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Servic;
