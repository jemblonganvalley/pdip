import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./carouselDual.scss";

const CarouselDualKetuaumum = ({
  cat1 = 45,
  cat2 = 46,
  totalPage = 3,
  data = null,
  current_page = null,
}) => {
  return (
    <div
      className="mainCarouselDual row"
      style={{
        height: "40vh",
        // border : '1px solid blue',
      }}
    >
      {/* Carousel 1 */}
      <Link
        as="div"
        id="carouselone"
        className="col"
        to={"/detail-article/622/satyam-eva-jayate"}
        style={{
          height: "40vh",
          padding: "30px",
          // border : '1px solid red',
          backgroundImage: `url(https://data.pdiperjuangan.id/public/${cat2.image})`,
          position: "relative",
          backgroundSize: "cover",
        }}
      >
        <h4
          style={{
            color: "white",
            position: "absolute",
            bottom: "30px",
            left: "30px",
          }}
        >
          {cat2.title}
        </h4>
      </Link>

      {/* CAROUSEL 2 */}
      <iframe
        className="col-8"
        height="100%"
        src={`https://www.youtube.com/embed/${cat1.path}?rel=0`}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default CarouselDualKetuaumum;
