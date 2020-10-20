import React from "react";

import "../carouselPemilu2/CarouselPemilu2.scss";
import pemilu2 from "../../img/pemilu2.jpg";

const CarouselPemilu2 = ({ data }) => {
  return (
    <>
      {/* Carousel */}
      <div
        id="pemilu2"
        className="carousel carousel2-pemiluPage slide"
        data-ride="carousel"
      >
        <div className="carousel-inner box-carousel2-pemiluPage">
          {data.map((e, i) => (
            <div className={i === 0 ? "carousel-item active" : "carousel-item"}>
              {/* Image2 */}
              <img src={`https://atur.biar.pw/public/${e.image}`} className="img-2" />
              {/* END Image2 */}
            </div>
          ))}
        </div>
        {/* Container Box Indicator Carousel */}
        <div className="container-box-indicator-pemilu2">
          {/* Box Indicator */}
          <div className="box-indicator-carousel-pemilu2">
            <a
              className="carousel-control-prev"
              href="#pemilu2"
              role="button"
              data-slide="prev"
              id="btn-left-carousel2"
            >
              <span className="carousel-control" aria-hidden="true" />
              <i className="fas fa-angle-left"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#pemilu2"
              role="button"
              data-slide="next"
              id="btn-right-carousel2"
            >
              <span className="carousel-control" aria-hidden="true" />
              <i className="fas fa-angle-right"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        {/* END Box Indicator */}
      </div>
      {/* END Container Box Indicator Carousel */}

      {/* END Carousel */}
    </>
  );
};

export default CarouselPemilu2;
