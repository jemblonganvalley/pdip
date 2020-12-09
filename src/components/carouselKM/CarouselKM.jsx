import React, { useEffect, useState } from "react";
import "./CarouselKM.scss";

const CarouselKM = ({ cat = 44, totalPage = 3, data = data }) => {
  const [berita, setBerita] = useState(data);

  return (
    <div
      className="wrapperKM"
      style={{
        cursor: "pointer",
      }}
    >
      <div className="KM">
        <div className="row rowCustom">
          <div className="carousels">
            <div
              id="carouselnih"
              className="carousel slide kmCarousel"
              data-ride="carousel"
              data-interval="2000"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselnih"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#carouselnih" data-slide-to={1} />
                <li data-target="#carouselnih" data-slide-to={2} />
              </ol>

              <div className="carousel-inner">
                {data.map((e, i) => (
                  <div
                    className={`carousel-item ${i == 1 && "active"} itemKM`}
                    onClick={() => {
                      window.location.href = `/detail-article/${
                        e.id
                      }/${e.title.replace(/\s/g, "-").toLowerCase()}`;
                    }}
                  >
                    <div className="col-lg-6 textKM">
                      <h5 className="textCarousel">
                        <b> {e.category_child_name}</b>
                      </h5>
                      <h5 className="textCarousel">{e.title}</h5>
                      {/* <p className="textCarousel" dangerouslySetInnerHTML={{ __html: e.description}}>
                                            
                                            </p> */}
                    </div>
                    <div
                      className="col-lg-6 banner"
                      style={{
                        backgroundImage: `url(https://data.pdiperjuangan.id/public/${e.path})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselKM;
