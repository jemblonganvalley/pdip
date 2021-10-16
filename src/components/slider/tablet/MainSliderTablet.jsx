import React, { useState, useEffect } from "react";
import "./MainSliderTablet.scss";

import playstore from "../../../img/playstore.svg";
import appstore from "../../../img/appstore.svg";
import { Link } from "@material-ui/core";
import parse from "html-react-parser";
import { image_url } from "../../../config/config";

const MainSliderTablet = ({ value, cls }) => {
  let slider = value;

  const [direct, setDirect] = useState(false);

  const redir = (args) => {
    return (window.location.href = `${args}`);
  };

  useEffect(() => {}, [direct]);

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade carousel-mainSlider-tablet"
        data-ride="carousel"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="carousel-inner">
          {slider.map((e, i) => (
            <div
              className={
                i === 1
                  ? `carousel-item ${cls} active`
                  : `carousel-item ${e.class}`
              }
              onClick={() => {
                redir(`${e.link}`);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <div className="rowMainSlider image1 images">
                <div className="col wrapperBoxTablet">
                  {/* Box Paragrap */}
                  {/* <div className="box-paragrap-mainSlider">
                    <h3>{e.title}</h3>
                    <h5 className="title-maxWidth750">{e.title}</h5>
                    <p>{parse(`${e.paragraph}`)}</p>
                  </div> */}
                  {/* END Box Paragrap */}

                  {/* Box Image */}
                  <div className="box-img-mainSlider-tablet">
                    <img
                      loading="lazy"
                      src={`${image_url + e.image}`}
                      alt={e.title}
                      className="img-home-mainSlider"
                    />
                    {/* END Box Image */}
                  </div>

                  {/* For Responsive Mobile */}
                  <div className="box-paragrap-tablet-mainSlider">
                    {/* Title For Mobile */}
                    <div className="box-red-tablet-mainSlider">
                      <h2
                        style={{
                          textTransform: "uppercase",
                        }}
                      >
                        {e.title}
                      </h2>
                      <p
                        style={{
                          color: "#fff",
                        }}
                      >
                        {parse(`${e.paragraph}`)}
                      </p>
                      {/* Box Iklan For Mobile */}
                    </div>
                  </div>
                  {/* END For Responsive Mobile */}
                </div>
              </div>
            </div>
          ))}

          {/* For Desktop */}
          {/* Info Iklan */}
        </div>

        <div className="tabletStore">
          <p
            className="txt-info-iklan-tablet"
            style={{
              textAlign: "center",
            }}
          >
            Segera hadir aplikasi MEDIA PINTAR PERJUANGAN untuk mendapatkan
            pengetahuan, pengalaman dan informasi program serta kerja nyata PDI
            Perjuangan.
          </p>
          <div className="storeTablet">
            <Link href="">
              <img
                loading="lazy"
                src={playstore}
                alt=""
                className="logoStoreTablet logoStoreTablet1"
              />
            </Link>

            <Link href="">
              <img
                loading="lazy"
                src={appstore}
                alt=""
                className="logoStoreTablet logoStoreTablet2"
              />
            </Link>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <div className="arrowsLeft">
            {/* <img loading="lazy" src={arrowsLeft} alt="" /> */}
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
            {/* <img loading="lazy" src={arrows} alt="" /> */}
            <i className="fas fa-angle-right"></i>
          </div>
        </a>
      </div>
      {/* END Wrapper Carousel */}
    </>
  );
};

export default MainSliderTablet;
