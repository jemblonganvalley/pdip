import React, { useState } from "react";
import "./MainSlider.scss";
import arrowKanan from "../../img/arrowkanan.png";
import arrowKiri from "../../img/arrowkiri.png";
import arrowButton from "../../img/form.png";
import arrowsLeft from "../../img/arrowsLeft.png";
import arrows from "../../img/arrows.png";
import sliders from "../../img/slider.jpg";
import slider2 from "../../img/slider2.jpg";

const MainSlider = ({ value, cls }) => {
  // let [slider, setSlider] = useState([
  //     {
  //         id : 1,
  //         headline : "Solid bergerak untuk Indonesia raya",
  //         paragrap : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime soluta aut nobis tempore earum velit, fugit nostrum ratione modi praesentium.",
  //         images : sliders
  //     },
  //     {
  //         id : 2,
  //         headline : "Solid bergerak untuk Indonesia raya",
  //         paragrap : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime soluta aut nobis tempore earum velit, fugit nostrum ratione modi praesentium.",
  //         images : slider2
  //     },
  // ])

  let slider = value;

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-ride="carousel"
      data-interval="0"
    >
      <div className="carousel-indicators">
        {slider.map((e, i) => (
          <>
            <div
              data-target="#carouselExampleIndicators"
              data-slide-to={i}
              className={ i == 0 ? "active indikator" : "indikator" }
            >
              <small className="indicatorText">{i}</small>
            </div>
          </>
        ))}
      </div>

      <div className="carousel-inner">
        {slider.map((e, i) => (
          <div
            className={
              i == 1
                ? `carousel-item ${cls} active`
                : `carousel-item ${e.class}`
            }
          >
            <div className="rowMainSlider image1 images">
              <img
                src={`http://atur.biar.pw/public${e.image}`}
                alt={e.title}/>

              <div className="col col-lg-6 mr-auto text1">
                <h1>{e.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: e.paragraph }}></p>

                {/* For Responsive Mobile */}
                <div className="box-red-paragrap-mainSlider">
                  <h1>{e.title}</h1>
                  <p dangerouslySetInnerHTML={{ __html: e.paragraph }}></p>
                </div>
                {/* END For Responsive Mobile */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <div className="arrowsLeft">
          <img src={arrowsLeft} alt="" />
        </div>
      </a>

      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <div className="arrowsRight">
          <img src={arrows} alt="" />
        </div>
      </a>
    </div>
  );
};

export default MainSlider;
