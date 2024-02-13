import React from "react";
import s from "./Price.module.scss";

import window1 from "../../assets/images/Price/window1.png";
import window2 from "../../assets/images/Price/window2.png";
import window3 from "../../assets/images/Price/window3.png";
import window4 from "../../assets/images/Price/window4.png";
import window5 from "../../assets/images/Price/window5.png";
import window6 from "../../assets/images/Price/window6.png";
import door1 from "../../assets/images/Price/door1.jpg";
import door2 from "../../assets/images/Price/door2.jpg";
import door3 from "../../assets/images/Price/door3.jpg";

function Price() {
  return (
    <div className={s.price}>
      <div className={s.container}>
        <h1 className={s.priceTitle}>Наши цены</h1>
        <div className={`${s.priceImgWrap} ${s.responsiveImgWrap}`}>
          <img src={window1} className={s.priceImg} alt="" />
        </div>
        <div className={`${s.ikswebTableContainer} ${s.tableContainer1}`}>
          <table className={s.iksweb}>
            <tbody>
              <tr>
                <td>Профиль</td>
                <td>Цена</td>
                <td>ДОПЫ</td>
                <td> Кирпич</td>
                <td>Панель</td>
                <td> Сталинка</td>
              </tr>
              <tr>
                <td>Standart однокамерный</td>
                <td>96 700</td>
                <td>Откос</td>
                <td>19 100</td>
                <td>14 200</td>
                <td>23 800</td>
              </tr>
              <tr>
                <td>Standart двухкамерный</td>
                <td>107 000</td>
                <td>Уголок</td>
                <td>4 300</td>
                <td>4 300</td>
                <td>4 700</td>
              </tr>
              <tr>
                <td>Universal однокамерный</td>
                <td>94 000</td>
                <td>Отлив</td>
                <td>4 200</td>
                <td>4 200</td>
                <td>4 200</td>
              </tr>
              <tr>
                <td>Universal двухкамерный</td>
                <td>104 400</td>
                <td>Сетка</td>
                <td>7 600</td>
                <td>7 600</td>
                <td>8 600</td>
              </tr>
              <tr>
                <td>Helios</td>
                <td>118 200</td>
                <td>Подоконник</td>
                <td>13 800</td>
                <td>8 000</td>
                <td>15 300</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`${s.priceImgWrap} ${s.responsiveImgWrap}`}>
          <img src={window2} className={s.priceImg2} alt="" />
        </div>
        <div className={`${s.ikswebTableContainer} ${s.tableContainer2}`}>
          <table className={s.iksweb}>
            <tbody>
              <tr>
                <td>Профиль</td>
                <td>Цена</td>
                <td>ДОПЫ</td>
                <td> Кирпич</td>
                <td>Панель</td>
                <td> Сталинка</td>
              </tr>
              <tr>
                <td>Standart однокамерный</td>
                <td>131 700</td>
                <td>Откос</td>
                <td>23 800</td>
                <td>16 500</td>
                <td>26 100</td>
              </tr>
              <tr>
                <td>Standart двухкамерный</td>
                <td>149 800</td>
                <td>Уголок</td>
                <td>5 100</td>
                <td>5 100</td>
                <td>5 800</td>
              </tr>
              <tr>
                <td>Universal однокамерный</td>
                <td>128 700</td>
                <td>Отлив</td>
                <td>6 400</td>
                <td>6 400</td>
                <td>6 400</td>
              </tr>
              <tr>
                <td>Universal двухкамерный</td>
                <td>146 800</td>
                <td>Сетка</td>
                <td>7 900</td>
                <td>7 900</td>
                <td>7 900</td>
              </tr>
              <tr>
                <td>Helios</td>
                <td>166 800</td>
                <td>Подоконник</td>
                <td>21 200</td>
                <td>12 200</td>
                <td>23 000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`${s.priceImgWrap} ${s.responsiveImgWrap}`}>
          <img src={window3} className={s.priceImg2} alt="" />
        </div>
        <div className={`${s.ikswebTableContainer} ${s.tableContainer3}`}>
          <table className={s.iksweb}>
            <tbody>
              <tr>
                <td>Профиль</td>
                <td>Цена</td>
                <td>ДОПЫ</td>
                <td> Кирпич</td>
                <td>Панель</td>
                <td> Сталинка</td>
              </tr>
              <tr>
                <td>Standart однокамерный</td>
                <td>159 200</td>
                <td>Откос</td>
                <td>26 100</td>
                <td>19 000</td>
                <td>28 400</td>
              </tr>
              <tr>
                <td>Standart двухкамерный</td>
                <td>179 400</td>
                <td>Уголок</td>
                <td>6 600</td>
                <td>6 600</td>
                <td>6 900</td>
              </tr>
              <tr>
                <td>Universal однокамерный</td>
                <td>154 900</td>
                <td>Отлив</td>
                <td>4 200</td>
                <td>4 200</td>
                <td>4 200</td>
              </tr>
              <tr>
                <td>Universal двухкамерный</td>
                <td>175 200</td>
                <td>Сетка</td>
                <td>19 200</td>
                <td>19 200</td>
                <td>19 200</td>
              </tr>
              <tr>
                <td>Helios</td>
                <td>199 800</td>
                <td>Подоконник</td>
                <td>13 800</td>
                <td>8 200</td>
                <td>13 800</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={s.priseTableWrap}>
          <div className={`${s.priceTable} ${s.responsivePriceTable}`}>
            <div className={`${s.priceImgWrap} ${s.responsiveImgWrap}`}>
              <img src={window4} className={s.priceImg3} alt="" />
            </div>
            <div className={`${s.ikswebTableContainer} ${s.tableContainer4}`}>
              <table className={s.iksweb}>
                <tbody>
                  <tr>
                    <td>Профиль</td>
                    <td>Цена</td>
                    <td>ДОПЫ</td>
                  </tr>
                  <tr>
                    <td>Standart однокамерный</td>
                    <td>227 800</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Standart двухкамерный</td>
                    <td>259 400</td>
                    <td>Уголок</td>
                    <td>10 600</td>
                  </tr>
                  <tr>
                    <td>Universal однокамерный</td>
                    <td>221 900</td>
                    <td>Отлив</td>
                    <td>16 200</td>
                  </tr>
                  <tr>
                    <td>Universal двухкамерный</td>
                    <td>235 200</td>
                    <td>Сетка</td>
                    <td>9 200</td>
                  </tr>
                  <tr>
                    <td>Helios</td>
                    <td>288 800</td>
                    <td>Подоконник</td>
                    <td>14 800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={s.priceTable}>
            <div className={s.priceImgWrap}>
              <img src={window5} className={s.priceImg4} alt="" />
            </div>
            <table className={s.iksweb}>
              <tbody>
                <tr>
                  <td>Профиль</td>
                  <td>Цена</td>
                  <td>ДОПЫ</td>
                </tr>
                <tr>
                  <td>Standart однокамерный</td>
                  <td>413 800</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Standart двухкамерный</td>
                  <td>478 400</td>
                  <td>Уголок</td>
                  <td>13 600</td>
                </tr>
                <tr>
                  <td>Universal однокамерный</td>
                  <td>403 900</td>
                  <td>Отлив</td>
                  <td>34 200</td>
                </tr>
                <tr>
                  <td>Universal двухкамерный</td>
                  <td>468 200</td>
                  <td>Сетка</td>
                  <td>9 200</td>
                </tr>
                <tr>
                  <td>Helios</td>
                  <td>537 800</td>
                  <td>Подоконник</td>
                  <td>29 800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={s.priceTable}>
          <div className={s.priceImgWrap}>
            <img src={window6} className={s.priceImg5} alt="" />
          </div>
          <table className={s.iksweb}>
            <tbody>
              <tr>
                <td>Профиль</td>
                <td>Цена</td>
                <td>ДОПЫ</td>
              </tr>
              <tr>
                <td>Standart однокамерный</td>
                <td>475 800</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Standart двухкамерный</td>
                <td>522 400</td>
                <td>Уголок</td>
                <td>15 600</td>
              </tr>
              <tr>
                <td>Universal однокамерный</td>
                <td>467 900</td>
                <td>Отлив</td>
                <td>30 200</td>
              </tr>
              <tr>
                <td>Universal двухкамерный</td>
                <td>535 200</td>
                <td>Сетка</td>
                <td>9 200</td>
              </tr>
              <tr>
                <td>Helios</td>
                <td>614 800</td>
                <td>Подоконник</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className={s.titleDoor}>Двери алюминиевые</h2>

        <div className={s.doorImgWrap}>
          <img className={s.doorImg} src={door1} alt="" />
          <img className={s.doorImg} src={door1} alt="" />
          <img className={s.doorImg} src={door2} alt="" />
          <img className={s.doorImg} src={door3} alt="" />
        </div>
        <div className={`${s.ikswebTableContainer} ${s.tableContainerDoors}`}>
          <table className={s.iksweb}>
            <tbody>
              <tr>
                <td></td>
                <td>Дверь одинарная Холодная серия 45 мм</td>
                <td>Дверь одинарная Теплая серия 74 мм</td>
                <td>Дверь штульп раб Холодная серия 45 мм</td>
                <td>Дверь штульп раб Холодная серия 74 мм</td>
              </tr>
              <tr>
                <td>Размер</td>
                <td>800*2100</td>
                <td>800*2100</td>
                <td>1200 * 2100</td>
                <td>1200 * 2100</td>
              </tr>
              <tr>
                <td>Стоимость</td>
                <td>218 512 тг</td>
                <td>333 854 тг</td>
                <td>372 554 тг</td>
                <td>563 235 тг</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Price;
