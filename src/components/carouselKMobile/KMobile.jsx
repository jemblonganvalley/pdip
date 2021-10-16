import React, { useState } from "react";
import "./KMobile.scss";
import megawati4 from "../../img/megawati4.jpg";
import { image_url } from "../../config/config";

const KMobile = ({ cat = 44, totalPage = 3, data = data }) => {
  const [berita, setBerita] = useState(data);

  return (
    <div className="wrapperKMobile">
      <div className="KMobile">
        <div className="row rowCustomMobile">
          <div className="carousels">
            <div
              id="carouselnih"
              className="carousel slide kmCarousel"
              data-ride="carousel"
              data-interval="3000"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselnih"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#carouselnih" data-slide-to={1} />
                <li data-target="#carouselnih" data-slide-to={2} />
                <li data-target="#carouselnih" data-slide-to={3} />
                <li data-target="#carouselnih" data-slide-to={4} />
              </ol>
              <div className="carousel-inner">
                {data.map((e, i) => (
                  <div
                    className={`carousel-item ${
                      i == 1 && "active"
                    } itemKMobile`}
                    onClick={() => {
                      window.location.href = `/detail-article/${e.id}/${e.title
                        .replace(/\s/g, "-")
                        .toLowerCase()}`;
                    }}
                  >
                    <div
                      className="col-lg-6 bannerMobile"
                      style={{
                        backgroundImage: e.path.includes("blog")
                          ? `url(${image_url + e.path})`
                          : `url(https://i.ytimg.com/vi/${e.path}/hqdefault.jpg)`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="col-lg-6 textKM">
                      <h6 className="textCarousel">{e.category_child_name}</h6>
                      <h3 className="textCarousel">{e.title}</h3>
                    </div>
                  </div>
                ))}

                <a
                  className="carousel-kontrol-prev-mobile kontrol-desktop-prev-mobile"
                  href="#carouselnih"
                  role="button"
                  data-slide="prev"
                >
                  <div className="arrowsLeftKMobile">
                    {/* <img loading="lazy" src={arrowsLeft} alt="" /> */}
                    <i className="fas fa-angle-left"></i>
                  </div>
                </a>

                <a
                  className="carousel-kontrol-next-mobile kontrol-desktop-next-mobile"
                  href="#carouselnih"
                  role="button"
                  data-slide="next"
                >
                  <div className="arrowsRightKMobile">
                    {/* <img loading="lazy" src={arrows} alt="" /> */}
                    <i className="fas fa-angle-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KMobile;
