import React from "react";

import "../carousel3PemiluPage/Carousel3PemiluPage.scss";
import pemilu2 from "../../img/pemilu2.jpg";

const Carousel3PemiluPage = ({ data }) => {
  return (
    <>

        {console.log(data)}
      {/* Carousel */}
      <div
        id="pemilu3"
        className="carousel carousel3-pemiluPage slide"
        data-ride="carousel"
      >
        <div className="carousel-inner box-carousel3-pemiluPage">
          {data.map((e, i) => (
            <div className={i === 0 ? "carousel-item active" : "carousel-item"}>
              <img src={`https://atur.biar.pw/public/${e.image}`} className="img1" />
            </div>
          ))}
        </div>
        {/* Container Box Indicator Carousel */}
        <div className="container-box-indicator-pemilu3">
          {/* Box Indicator */}
          <div className="box-indicator-carousel-pemilu3">
            <a
              className="carousel-control-prev"
              href="#pemilu3"
              role="button"
              data-slide="prev"
              id="btn-left-carousel3"
            >
              <span className="carousel-control" aria-hidden="true" />
              <i className="fas fa-angle-left"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#pemilu3"
              role="button"
              data-slide="next"
              id="btn-right-carousel3"
            >
              <span className="carousel-control" aria-hidden="true" />
              <i className="fas fa-angle-right"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/* END Box Indicator */}
        </div>
        {/* END Container Box Indicator Carousel */}
      </div>

      {/* END Carousel */}
    </>
  );
};

export default Carousel3PemiluPage;
