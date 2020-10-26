import React, { useEffect, useState } from "react";
import "./PartaiPage.scss";
import { Link } from "react-router-dom";
import pdiLogo from "../../../img/pdibanteng.png";
import MusicPdi from "../../musicpdi/MusicPdi";
import MainButton from "../../buttons/MainButton";
import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import MusicMobile from "../../musicPdiMobile/MusicMobile";

const PartaiPage = () => {
  const [config, setConfig] = useState([]);
  const getConfigHome = async () => {
    const res = await fetch("https://atur.biar.pw/api/auth/app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        app_id: "1555309664580",
        api_secret: "4d672ce3-e422-4d8a-86ff-fabb1808a689",
      }),
    });
    const data = await res.json();

    const resConfigHome = await fetch(
      "https://atur.biar.pw/api/web/pages/partai",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

    const dataConfigHome = await resConfigHome.json();
    // console.log(dataConfigHome.query);
    setConfig(dataConfigHome.query);
  };

  useEffect(() => {
    getConfigHome();
    window.scrollTo(0, 0);
  }, []);

  return (
    // START PARTAI
    <>
      {config.length > 0 ? (
        <div className="wrapperPartai">
          {config.length > 0 && (
            <>
              {/* HEADERS */}
              <div
                className={`headers ${config[0].value.class}`}
                style={{
                  backgroundImage: `url(https://atur.biar.pw/public/${config[0].value.image})`,
                }}
              >
                <div className="backgrounds">
                  <div className="textBackgroundPartai">
                    <h2>{config[0].value.title}</h2>
                  </div>
                </div>
              </div>
              {/* END */}

              {/* LINK PARTAI */}
              <div className="linkedPartai">
                <BreadCrumbs link1="Home" to1="/" page2="Partai" />
              </div>
              {/* END */}

              {/* CONTAINER SATU */}
              <div className="containerSatu row ">
                <div className="contentSatu row">
                  <div className="col col-lg-4">
                    <div
                      className={`wrapperContentSatu`}
                      style={{
                        width: "100%",
                        height: "50vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      {config[1].value.map((e, i) => (
                        <div
                          className="mobileRow"
                        >
                          <img
                            src={`https://atur.biar.pw/public/${e.image}`}
                            alt=""
                            className="imgMobilePartai"
                          />
                          <div
                            className="textContent textContentSatu"
                            style={{}}
                          >
                            <h5>{e.title}</h5>
                            {/* <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias inventore nobis doloremque.
                        </p> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col col-lg-8 parentCarousel">
                    <div className="wrapperCarousel">
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <ol className="carousel-indicators carouselPartai">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={0}
                            className="active"
                          />
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={1}
                          />
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={2}
                          />
                        </ol>

                        <div className="carousel-inner">
                          {config[2].value.map((e, i) => (
                            <div
                              className={
                                i === 0
                                  ? `carousel-item active`
                                  : "carousel-item"
                              }
                              key={i}
                            >
                              <div
                                className="carouselImgSatu"
                                style={{
                                  backgroundImage: `url(https://atur.biar.pw/public/${e.image})`,
                                }}
                              ></div>

                              <div class="carousel-caption  d-md-block">
                                <h3>{e.title}</h3>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: e.paragraph,
                                  }}
                                ></p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END */}

              <MusicPdi />
              <MusicMobile />

              {/* CONTAINER TIGA */}
              <div className="containerTiga">
                <div className="col-lg-3">
                  <img src={pdiLogo} alt="" width="180" />
                </div>
                <div className="col-lg-9 textBanteng">
                  <h1>TATA KELOLA PDI PERJUANGAN</h1>
                  <ul>
                    <li>
                      Lambang PDI Perjuangan berupa gambar banteng hitam
                      bermoncong putih dengan latar merah di dalam lingkaran
                      bergaris hitam dan putih.
                    </li>
                    <li>
                      Warna dasar merah melambangkan berani mengambil resiko
                      dalam memperjuangkan keadilan dan kebenaran untuk rakyat.
                    </li>
                    <li>
                      Mata merah dengan pandangan tajam melambangkan selalu
                      waspada terhadap ancaman dalam berjuang.
                    </li>
                    <li>
                      Moncong putih melambangkan dapat dipercaya dan berkomitmen
                      dalam memperjuangkan keadilan dan kebenaran
                    </li>
                    <li>
                      Lingkaran melambangkan tekad yang bulat dan perjuangan
                      yang terus-menerus tanpa terputus
                    </li>
                  </ul>
                </div>
              </div>
              {/* END */}
              <div className="btnUnduh">
                <MainButton name="Unduh Lambang" />
              </div>

              {/* PENGURUS */}
              <div className="pengurusPage">
                <div className="divider-pengurusPage">
                  <MainDivider text="pengurus" mrgn="0px 0" />
                </div>

                <div className="paragrapPengurus">
                  <span
                    dangerouslySetInnerHTML={{ __html: config[5].value }}
                  ></span>
                </div>
              </div>
              {/* END */}

              {/* PHOTO PENGURUS */}
              <div
                className="photoPengurus"
                style={{
                  backgroundImage: `url(https://atur.biar.pw/public/${config[6].value.image})`,
                }}
              >
                <h2>{config[6].value.title}</h2>
                <Link className="btn lihat" to="/struktur">
                  <span>lihat</span>
                </Link>
              </div>
              {/* END */}

              {/* MAPS */}
              <div className="maps">
                <h5>dewan pimpinan daerah pdi perjuangan</h5>
                <Link as="div" className="imageMaps" to="" to="/dpd"></Link>
              </div>
              {/* END */}

              {/* ANGGOTA LEGISLATIF */}
              <div className="anggotaLegislatif">
                <span
                  dangerouslySetInnerHTML={{ __html: config[7].value }}
                ></span>
                <div className="btnGroup">
                  <div className="btn-dprRi" id="btnGroup">
                  <MainButton name="DPR RI" margin="0 10px" />
                  </div>
                  
                  <div className="btn-dprd-provinsi" id="btnGroup">
                  <MainButton name="DPRD Provinsi" margin="0 10px" />
                  </div>
                  
                  <div className="btn-dprd-kab" id="btnGroup">
                  <MainButton name="DPRD Kabupaten Kota" margin="0 10px" />
                  </div>
                  
                </div>
              </div>
              {/* END */}
            </>
          )}
        </div>
      ) : (
        <>
          <div
            className="page"
            id="wait"
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Wait ...
          </div>
        </>
      )}
    </>
  );
};

export default PartaiPage;
