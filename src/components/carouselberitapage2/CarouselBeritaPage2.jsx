import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import "./CarouselBeritaPage2.scss";

const CarouselBeritaPage2 = ({ id, data }) => {
  const [slideIndex, setSlideIndex] = useState(1);

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
            <>
              <img
                loading="lazy"
                src={`https://data.pdiperjuangan.id/public/${e.path}`}
                alt={e.title}
                key={i}
                className={i === 1 ? "carousel-item active" : "carousel-item"}
              />
            </>
          ))}
          <div className="container-box-indicator-page2">
            {/* Box Indicator */}
            <div className="box-tombol-carousel-page2">
              <a
                className="carousel-control-prev"
                href="#page2"
                role="button"
                data-slide="next"
                id="btn-left-page2"
              >
                <span className="carousel-control" aria-hidden="true" />
                <div
                  className="btn-arrow-left-page2"
                  onClick={() => {
                    if (slideIndex === data.length) {
                      setSlideIndex(1);
                    } else {
                      setSlideIndex(slideIndex + 1);
                    }
                  }}
                >
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#page2"
                role="button"
                data-slide="prev"
                id="btn-right-page2"
              >
                <span className="carousel-control" aria-hidden="true" />
                <div
                  className="btn-arrow-right-page2"
                  onClick={() => {
                    if (slideIndex === 1) {
                      setSlideIndex(data.length);
                    } else {
                      setSlideIndex(slideIndex - 1);
                    }
                  }}
                >
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </div>
                <span className="sr-only">Next</span>
              </a>
              {/* Box Indicator Number */}
              <div className="box-indicator-number-page2">
                <p className="txt-nomer-utama" style={{ color: "#fff" }}>
                  {slideIndex}
                </p>

                <p className="txt-nomer-target-total">/ {data.length}</p>
              </div>
              {/* END Box Indicator Number */}
            </div>
            {/* END Box Indicator */}
          </div>
        </div>

        {/* Container Box Indicator Carousel */}

        {/* END Container Box Indicator Carousel */}
      </div>
      {/* END Carousel Page2 */}
    </>
  );
};

export default CarouselBeritaPage2;
