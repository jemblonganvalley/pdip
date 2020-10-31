import React, { useState } from "react";
import "./MainSlider.scss";
import arrowKanan from "../../img/arrowkanan.png";
import arrowKiri from "../../img/arrowkiri.png";
import arrowButton from "../../img/form.png";
import arrowsLeft from "../../img/arrowsLeft.png";
import arrows from "../../img/arrows.png";
import sliders from "../../img/slider.jpg";
import slider2 from "../../img/slider2.jpg";
import pattern from '../../img/pattern.jpeg'
import playstore from '../../img/playstore.svg'
import appstore from '../../img/appstore.svg'
import { Link } from "@material-ui/core";

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
    <>

    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade carousel-mainSlider"
      data-ride="carousel"
      style={{
        overflow: 'hidden',
      }}
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
              {/* <img
                src={`http://atur.biar.pw/public${e.image}`}
                alt={e.title}/> */}

                {/* Background Red Carousel (Desktop) */}
                {/* <div className="bgRed-carousel-desktop">
                  
                </div> */}
                {/* END Backround Red Carousel (Desktop) */}

              <div className="col text1">
                {/* Box Paragrap */}
                <div className="box-paragrap-mainSlider">
                  <h3>{e.title}</h3>

                  {/* For min width 500px and max width 750px */}
                  <h5 className="title-maxWidth750">{e.title}</h5>
                  {/* END For min width 500px and max width 750px */}

                  <p dangerouslySetInnerHTML={{ __html: e.paragraph }}></p>
                </div>
                {/* END Box Paragrap */}

                {/* Box Image */}
                <div className="box-img-mainSlider">
  
                <img
                src={`http://atur.biar.pw/public${e.image}`}
                alt={e.title} className="img-home-mainSlider"/>
                {/* END Box Image */}

                </div>
                
                {/* For Responsive Mobile */}
                <div className="box-paragrap-mobile-mainSlider">
                  {/* Title For Mobile */}
                  <div className="box-red-mobile-mainSlider">
                    <h1>{e.title}</h1>

                    {/* Box Iklan For Mobile */}
                      <p className="txt-info-iklan-mobile">
                      Segera hadir aplikasi MEDIA PINTAR PERJUANGAN untuk mendapatkan pengalaman
                      dan informasi program serta kerja nyata Partai PDI Perjuangan.
                      </p>

                      <Link href="http://play.google.com/store/apps/details?id=com.whatsapp">
                        <img src={playstore} alt="" className="logoAppStoreMobile logoStoreMobile1"/>
                      </Link>
                      
                      <Link href="https://apps.apple.com/id/app/whatsapp-messenger/id310633997?l=id">
                        <img src={appstore} alt="" className="logoAppStoreMobile logoStoreMobile2"/>
                      </Link>
                      {/* <div className="box-logo-apk-store-mobile">
                      
                      </div> */}
                    {/* END Box Iklan For Mobile */}
                  </div>
                  {/* END Title For Mobile */}

                  {/* Paragrap For Mobile */}
                  {/* <div className="box-white-mobile-mainSlider">
                    <p dangerouslySetInnerHTML={{ __html: e.paragraph }}></p>
                  </div> */}
                  {/* END Paragrap For Mobile */}

                  {/* Cukup Titlenya Saja */}

                  {/* <p dangerouslySetInnerHTML={{ __html: e.paragraph }}></p> */}
                </div>
                {/* END For Responsive Mobile */}
              </div>

              
            </div>
          </div>
        ))}

        {/* For Desktop */}
        {/* Info Iklan */}
        <div className="box-info-iklan">
            {/* Box Paragrap Iklan */}
            <div className="box-paragrap-info-iklan">
              <h6 className="txt-info-iklan">
                Segera hadir aplikasi MEDIA PINTAR PERJUANGAN untuk mendapatkan pengalaman
                <br/>
                dan informasi program serta kerja nyata Partai PDI Perjuangan.
              </h6>

              <div className="box-logo-info-iklan">
                <Link href="http://play.google.com/store/apps/details?id=com.whatsapp">
                  <img src={playstore} alt="" className="logo-play-store logoAppGroup"/>
                </Link>
                
                <Link href="https://apps.apple.com/id/app/whatsapp-messenger/id310633997?l=id">
                  <img src={appstore} alt="" className="logo-app-store logoAppGroup"/>
                </Link>
              </div>
            </div>
            {/* END Box Paragrap Iklan */}
        </div>
        {/* END Info Iklan */}
        {/* END For Desktop */}
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <div className="arrowsLeft">
          {/* <img src={arrowsLeft} alt="" /> */}
          <i className="fas fa-angle-left"></i>
        </div>
      </a>

      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <div className="arrowsRight">
          {/* <img src={arrows} alt="" /> */}
          <i className="fas fa-angle-right"></i>
        </div>
      </a>

      
    </div>
    {/* END Wrapper Carousel */}
    </>
  );
};

export default MainSlider;
