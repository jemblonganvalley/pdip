import React from "react";

import "./CarouselBeritaPage1.scss";

const CarouselBeritaPage1 = () => {
  return (
    <React.Fragment>
      {/* Carousel Page1 */}
      <div
        id="page1"
        className="carousel carousel-berita-page1 slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active img1"></div>
          <div className="carousel-item img2"></div>
          <div className="carousel-item img3"></div>
        </div>
        {/* Container Box Indicator Carousel */}
        <div className="container-box-indicator-page1">
          {/* Box Indicator */}
          <div className="box-tombol-carousel-page1">
            <a
              className="carousel-control-prev"
              href="#page1"
              role="button"
              data-slide="prev"
              id="btn-left-page1"
            >
              <span className="carousel-control" aria-hidden="true" />
              <div className="btn-arrow-left-page1"></div>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#page1"
              role="button"
              data-slide="next"
              id="btn-right-page1"
            >
              <span className="carousel-control" aria-hidden="true" />
              <div className="btn-arrow-right-page1"></div>
              <span className="sr-only">Next</span>
            </a>
            {/* Box Indicator Number */}
            <div className="box-indicator-number-page1">
              <p className="txt-nomer-utama">2</p>

              <p className="txt-nomer-target-total">/ 34</p>
            </div>
            {/* END Box Indicator Number */}
          </div>
          {/* END Box Indicator */}
        </div>
        {/* END Container Box Indicator Carousel */}
      </div>
      {/* END Carousel Page1*/}
    </React.Fragment>
  );
};

export default CarouselBeritaPage1;
