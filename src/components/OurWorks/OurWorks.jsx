import React from "react";
import s from "./OurWorks.module.scss";
import useSlider from "../../hooks/useSlider";

import OurWorks1 from "../../assets/images/OurWorks/OurWorks1.jpeg";
import OurWorks2 from "../../assets/images/OurWorks/OurWorks2.jpeg";
import OurWorks3 from "../../assets/images/OurWorks/OurWorks3.jpeg";
import OurWorks4 from "../../assets/images/OurWorks/OurWorks4.jpeg";
import OurWorks5 from "../../assets/images/OurWorks/OurWorks5.jpeg";
import OurWorks6 from "../../assets/images/OurWorks/OurWorks6.jpeg";
import OurWorks7 from "../../assets/images/OurWorks/OurWorks7.jpeg";
import OurWorks8 from "../../assets/images/OurWorks/OurWorks8.jpeg";
import OurWorks9 from "../../assets/images/OurWorks/OurWorks9.jpeg";
import OurWorks10 from "../../assets/images/OurWorks/OurWorks10.jpeg";
import OurWorks11 from "../../assets/images/OurWorks/OurWorks11.jpeg";
import OurWorks12 from "../../assets/images/OurWorks/OurWorks12.jpeg";
import OurWorks13 from "../../assets/images/OurWorks/OurWorks13.jpeg";
import OurWorks14 from "../../assets/images/OurWorks/OurWorks14.jpeg";
import OurWorks15 from "../../assets/images/OurWorks/OurWorks15.jpeg";
import OurWorks16 from "../../assets/images/OurWorks/OurWorks16.jpeg";

const images = [
  OurWorks1,
  OurWorks2,
  OurWorks3,
  OurWorks4,
  OurWorks5,
  OurWorks6,
  OurWorks7,
  OurWorks8,
  OurWorks9,
  OurWorks10,
  OurWorks11,
  OurWorks12,
  OurWorks13,
  OurWorks14,
  OurWorks15,
  OurWorks16,
];

function OurWorks() {
  const { showSlider, selectedImageIndex, openSlider, closeSlider, navigate } =
    useSlider(images);

  return (
    <div className={s.ourWorks}>
      <div className={s.container}>
        <div className={s.gallery}>
          {images.map((image, index) => (
            <img
              key={index}
              className={s.ourWorksImg}
              src={image}
              alt={`Our Works ${index + 1}`}
              onClick={() => openSlider(index)}
            />
          ))}
        </div>
      </div>
      {showSlider && (
        <div className={s.modal}>
          <img
            className={s.ourWorksImgFullScreen}
            src={images[selectedImageIndex]}
            alt={`Our Works ${selectedImageIndex + 1}`}
          />
          <button
            className={`${s.navButton} ${s.prevButton}`}
            onClick={() => navigate("prev")}
          >
            {"<"}
          </button>
          <button
            className={`${s.navButton} ${s.nextButton}`}
            onClick={() => navigate("next")}
          >
            {">"}
          </button>
          <button className={s.closeButton} onClick={closeSlider}>
            Close
          </button>
          <div className={s.counter}>
            {selectedImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default OurWorks;
