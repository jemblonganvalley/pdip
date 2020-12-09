import React from "react";

import "../carouselKetuaUmumPage/CarouselKetuaUmumPage.scss";

const CarouselKetuaUmumPage = ({ data }) => {
  return (
    <>
      <div
        id="carouselKetuaUmum"
        className="carousel container-carousel-ketuaUmumPage slide"
        data-ride="carousel"
      >
        <div className="carousel-inner carousel-ketuaUmumPage">
          {data.length > 0 ? (
            <>
              {data.map((e, i) => (
                <div
                  className={i == 0 ? `carousel-item active` : `carousel-item`}
                  onClick={() => {
                    window.location.href = e.link;
                  }}
                >
                  <div
                    className="col1-container-1-carousel-ketuaUmumPage"
                    style={{
                      backgroundImage: `url(https://data.pdiperjuangan.id/public/${e.image})`,
                    }}
                  >
                    <div className="cont-img-col1">
                      <div className="col1-img">
                        <div className="box-txt-title"></div>
                      </div>
                      <div className="col2-img">
                        <div className="garis-strip-col2"></div>
                        <div className="box-txt-desk-col2">
                          <h4>{e.title}</h4>

                          {/* <small className="txt-admin">
                      Admin PDI Perjuangan | 1 Januari
                    </small> */}

                          <p
                            className="txt-desk-col2"
                            dangerouslySetInnerHTML={{ __html: e.paragraph }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="wait">Wait</div>
          )}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselKetuaUmum"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselKetuaUmum"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default CarouselKetuaUmumPage;
