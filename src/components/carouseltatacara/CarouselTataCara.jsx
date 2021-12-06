import React from "react";
import { Link } from "react-router-dom";
import "./CarouselTataCara.scss";
import parse from "html-react-parser";
import { image_url, image_url_2 } from "../../config/config";
import { splitColor } from "gsap/all";

const CarouselTataCara = ({ data, slash = false }) => {
  return (
    <>
      {/* SLIDER TATA CARA */}
      <div className="sliderTataCara">
        <div
          id="carouselTataCara"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {data.map((e, i) => (
              <Link
                className={
                  i == 1
                    ? "carousel-item active carousel-item-tatacara"
                    : "carousel-item carousel-item-tatacara"
                }
                as="div"
                to={e.link}
              >
                <div
                  className="imageTC"
                  style={{
                    backgroundImage: `url(${
                      image_url + e?.image.replace("uploads", "")
                    })`,
                  }}
                ></div>

                {/* For Mobile */}
                {/* <div className="box-red-mobile-sliderTataCara">
                  <h4 >{e.title}</h4>
                  <p className="pCarousel-for-mobile">{parse(e.paragraph)}</p>
                </div> */}
                {/* END For Mobile */}
              </Link>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselTataCara"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon btn-left-tata-cara"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselTataCara"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon btn-right-tata-cara"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* END SLIDER TATA CARA */}
    </>
  );
};

export default CarouselTataCara;
