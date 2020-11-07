import { useStoreState } from "easy-peasy";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./carouselDual.scss";

export const CarouselDuelBerita = ({
  cat1 = 45,
  cat2 = 46,
  totalPage = 3,
  data = null,
  current_page = null,
}) => {
  const token = useStoreState((state) => state.token);
  const getALbumId = async (e) => {
    const res = await fetch("https://atur.biar.pw/api/gallery/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        order: { key: "id", value: "desc" },
        where: { key: "id", value: e },
      }),
    });
    const data = await res.json();
    window.location.href = `/gallery/detail-gallery/${
      data.query.data[0].id_album
    }/${data.query.data[0].title.replace(/\s/g, "-") || "detail-gallery"}`;
  };

  useEffect(() => {
    // getALbumId();
  }, []);

  return (
    <div className="mainCarouselDual">
      {/* Carousel 1 */}
      <div
        id="carouselone"
        className="carousel slide mainCarouselDual_car1"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {cat1.map((e, i) => (
            <div
              className={`carousel-item ${i == 1 && "active"}`}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <span
                className="carouselDual_title"
                style={{
                  position: "absolute",
                  width: "100%",
                  padding: "30px",
                  bottom: "0",
                  zIndex: "100",
                  color: "white",
                  wordWrap: "break-word",
                }}
              >
                {/* <p
                  style={{
                    padding: "0",
                    margin: "0",
                    fontWeight: "600",
                  }}
                >
                  {e.title}
                </p> */}

                {/* <small style={{padding : '0'}}>{e.author}</small> | &nbsp;
                            <small style={{padding : '0'}}>{e.created_at}</small> */}

                <h4>{e.title}</h4>
              </span>

              <span
                className="gradientOverlay"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.500)",
                  position: "absolute",
                  background: `linear-gradient(176deg, rgba(0,0,0,0.7147233893557423) 0%, rgba(255,0,0,1) 100%)`,
                  backgroundBlendMode: "multiply",
                }}
              ></span>

              <img
                src={`https://atur.biar.pw/public/${e.image}`}
                className="d-block w-100 carouselDual1Image"
                alt="..."
                key={i}
                style={{
                  width: "100%",
                  height: "40vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselone"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselone"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* CAROUSEL 2 */}
      <div
        id="carouseltwo"
        className="carousel slide mainCarouselDual_car2"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {cat2.map((e, i) => (
            <div
              className={`carousel-item ${i == 1 && "active"}`}
              // to={`/gallery/detail-gallery/${e.id}/${e.title}`}
              onClick={() => {
                getALbumId(e.id);
              }}
              style={{ cursor: "pointer" }}
            >
              <span
                className="carouselDual_title"
                style={{
                  position: "absolute",
                  width: "90%",
                  padding: "30px",
                  bottom: "0",
                  zIndex: "100",
                  color: "white",
                  wordWrap: "break-word",
                }}
              >
                {/* <p style={{
                                padding : '0',
                                margin : '0',
                                fontWeight : '600',
                                }}>{e.title}</p> */}

                {/* <small style={{padding : '0'}}>{e.author}</small> | &nbsp; */}

                {/* DESCRIPTION */}
                {/* <small
                  style={{ padding: "0" }}
                  dangerouslySetInnerHTML={{ __html: e.description }}
                ></small> */}

                {/* TITLE */}
                <h4>{e.title}</h4>
              </span>

              <span
                className="gradientOverlay"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.500)",
                  position: "absolute",
                  background: `linear-gradient(176deg, rgba(0,0,0,0.28335084033613445) 0%, rgba(0,0,0,1) 100%)`,
                }}
              ></span>

              <img
                src={
                  e.type === "youtube"
                    ? `https://i.ytimg.com/vi/${e.path}/hqdefault.jpg`
                    : `https://atur.biar.pw/public/${e.path}`
                }
                className="d-block w-100 carouselDual1Image"
                alt="..."
                key={i}
                style={{
                  width: "100%",
                  height: "40vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouseltwo"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouseltwo"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
