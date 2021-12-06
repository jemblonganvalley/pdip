import React from "react";

import "../carouselPemilu1/CarouselPemilu1.scss";
import pemilu from "../../img/pemilu.jpeg";
import { Link, NavLink } from "react-router-dom";
import Wait from "../wait/Wait";
import { image_url, image_url_2 } from "../../config/config";

const CarouselPemilu1 = ({ data }) => {
  const WrapperImage = ({ img, link }) => {
    return (
      <NavLink to={link}>
        <img loading="lazy" src={`${image_url + img}`} className="img-1" />
      </NavLink>
    );
  };

  const redir = (args) => {
    window.location.href = `${args}`;
  };

  return (
    <>
      {data.length > 0 ? (
        <>
          <div
            id="pemilu1"
            className="carousel carousel1-pemiluPage slide"
            data-ride="carousel"
            style={{
              cursor: "pointer",
            }}
          >
            <div
              className="carousel-inner box-carousel1-pemiluPage"
              style={{
                cursor: "pointer",
              }}
            >
              {data.map((e, i) => (
                <div
                  className={i === 0 ? "carousel-item active" : "carousel-item"}
                  key={i}
                >
                  {/* Image1 */}
                  {/* <WrapperImage img={e.image} link={"/"} /> */}
                  <img
                    loading="lazy"
                    src={`${image_url + e.image}`}
                    className="img-1"
                    href={e.link}
                    onClick={() => {
                      redir(`${e.link}`);
                    }}
                  />
                  {/* END Image1 */}
                </div>
              ))}
            </div>
            {/* Container Box Indicator Carousel */}
            <div
              className="container-box-indicator-pemilu1"
              style={{
                // border: "1px solid blue",
                height: "20%",
                bottom: "0",
              }}
            >
              {/* Box Indicator */}
              <div className="box-indicator-carousel-pemilu1">
                <a
                  className="carousel-control-prev"
                  href="#pemilu1"
                  role="button"
                  data-slide="prev"
                  id="btn-left-carousel1"
                >
                  <span className="carousel-control" aria-hidden="true" />
                  <i className="fas fa-angle-left"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#pemilu1"
                  role="button"
                  data-slide="next"
                  id="btn-right-carousel1"
                >
                  <span className="carousel-control" aria-hidden="true" />
                  <i className="fas fa-angle-right"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              {/* END Box Indicator */}
            </div>
            {/* Container Box Indicator Carousel */}
          </div>
        </>
      ) : (
        <Wait />
      )}
      {/* Carousel */}

      {/* END Carousel */}
    </>
  );
};

export default CarouselPemilu1;
