import React from "react";
import { useEffect } from "react";

import "./CarouselBeritaPage2.scss";

const CarouselBeritaPage2 = ({ id, data }) => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <>
      {/* Carousel Page2 */}
      <div
        id="page2"
        className="carousel carousel-berita-page2 slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {data.map((e, i) => (
            <div
              className={i === 1 ? "carousel-item active" : "carousel-item"}
              style={{
                backgroundImage: `url(https://atur.biar.pw/public/${e.path})`,
              }}
            ></div>
          ))}
        </div>

        {/* Container Box Indicator Carousel */}
        <div className="container-box-indicator-page2">
          {/* Box Indicator */}
          <div className="box-tombol-carousel-page2">
            <a
              className="carousel-control-prev"
              href="#page2"
              role="button"
              data-slide="prev"
              id="btn-left-page2"
            >
              <span className="carousel-control" aria-hidden="true" />
              <div className="btn-arrow-left-page2"></div>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#page2"
              role="button"
              data-slide="next"
              id="btn-right-page2"
            >
              <span className="carousel-control" aria-hidden="true" />
              <div className="btn-arrow-right-page2"></div>
              <span className="sr-only">Next</span>
            </a>
            {/* Box Indicator Number */}
            <div className="box-indicator-number-page2">
              <p className="txt-nomer-utama">2</p>

              <p className="txt-nomer-target-total">/ 34</p>
            </div>
            {/* END Box Indicator Number */}
          </div>
          {/* END Box Indicator */}
        </div>
        {/* END Container Box Indicator Carousel */}
      </div>
      {/* END Carousel Page2 */}
    </>
  );
};

export default CarouselBeritaPage2;
