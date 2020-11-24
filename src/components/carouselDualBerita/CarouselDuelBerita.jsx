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
  const getALbumId = async (args) => {
    const resToken = await fetch("https://atur.biar.pw/api/auth/app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        app_id: "1555309664580",
        api_secret: "4d672ce3-e422-4d8a-86ff-fabb1808a689",
      }),
    });
    const token = await resToken.json();

    const resGallery = await fetch("https://atur.biar.pw/api/gallery/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify({
        order: { key: "id", value: "desc" },
        where: { key: "id", value: args },
        limit: 1,
      }),
    });

    const galData = await resGallery.json();
    // console.log(dataGallery);
    // console.log(dataGallery)
    // console.log(galData);
    window.location.href = `/gallery/detail-gallery/${
      galData.query.data[0].id_album
    }/${galData.query.data[0].title.replace(/\s/g, "-") || "detail-gallery"}`;
  };

  useEffect(() => {
    // getALbumId();
    console.log(cat2);
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
            <a
              className={`carousel-item ${i == 1 && "active"}`}
              style={{ position: "relative", cursor: "pointer" }}
              href={e.link}
              target="_blank"
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

                <h5>{e.title}</h5>
              </span>

              <span
                className="gradientOverlay"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  background: `linear-gradient(#21252900, #21252900, #212529)`,
                  backgroundBlendMode: "multiply",
                  bottom: "0",
                }}
              ></span>

              <img
                src={`https://atur.biar.pw/public/${e.image}`}
                className="d-block w-100 carouselDual1Image"
                alt={e.title}
                key={i}
                style={{
                  width: "100%",
                  height: "50vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </a>
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
            <Link
              className={`carousel-item ${i == 1 && "active"}`}
              to={"/gallery"}
              // onClick={() => {
              //   window.location.href = "/gallery";
              // }}
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
                <h5>{e.title}</h5>
              </span>

              <span
                className="gradientOverlay"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.500)",
                  position: "absolute",
                  background: `linear-gradient(rgba(33, 37, 41, 0), rgb(33 37 41 / 0.20), rgb(33, 37, 41))`,
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
                  height: "50vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Link>
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
