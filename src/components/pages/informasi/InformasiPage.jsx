import React, { useEffect, useState } from "react";
import "./InformasiPage.scss";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { CarouselDuelBerita } from "../../carouselDualBerita/CarouselDuelBerita";

import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import CardInformasi from "../../cardInformasi/CardInformasi";
import CarouselTataCara from "../../carouseltatacara/CarouselTataCara";
import CardHeader from "../../cardheader/CardHeader";
import Wait from "../../wait/Wait";
import { image_url } from "../../../config/config";

const anchorLink = (props) => {
  return (
    <Link
      to={props.linkTo}
      className="cardLaporan cardLaporanSatu"
      style={{
        padding: "0 20px",
        gap: "10px",
        color: "white",
        fontSize: "1rem",
      }}
    >
      {props.children}
    </Link>
  );
};

const InformasiPage = () => {
  const [gallery, setGallery] = useState([]);
  const [configHome, setConfigHome] = useState([]);

  const getGallery = async () => {
    const res = await fetch("https://data.pdiperjuangan.id/api/auth/app", {
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

    const resGallery = await fetch(
      "https://data.pdiperjuangan.id/api/gallery/data?page=2",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

    const dataGallery = await resGallery.json();
    // console.log(dataGallery)
    setGallery(dataGallery.query.data);
  };

  const getConfigHome = async () => {
    const res = await fetch("https://data.pdiperjuangan.id/api/auth/app", {
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
      "https://data.pdiperjuangan.id/api/web/pages/informasi",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          filter: [{ key: "blog.status", val: "publish" }],
        }),
      }
    );

    const dataConfigHome = await resConfigHome.json();
    setConfigHome(dataConfigHome.query);
  };

  useEffect(() => {
    getGallery();
    getConfigHome();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {configHome.length > 0 ? (
        // START INFORMASI
        <div className="wrapperInformasi">
          {/* Card Header */}
          <CardHeader
            image={configHome[0].value.image}
            title={configHome[0].value.title}
          />
          {/* END Card Header */}

          {/* START LINKED */}
          <div className="linkedInformasi">
            <BreadCrumbs link1="Home" to1="/" page2="Informasi Publik" />
          </div>
          {/* END */}

          {/* START PROFIL */}
          <div className="profilContainer">
            <div className="divider-profil">
              <MainDivider text="Profil" garisMerah="0rem" mrgn="0 0 40px 0" />
            </div>

            <div className="paragrapProfil">
              <div
                className="paragrapKiri"
                dangerouslySetInnerHTML={{ __html: configHome[1].value }}
              ></div>
              <div className="paragrapKanan">
                <div
                  className="backgroundPK"
                  style={{
                    backgroundImage: `url(${
                      image_url + configHome[2].value.image
                    })`,
                  }}
                >
                  <h4 className="maklumat">{configHome[2].value.title}</h4>
                  {parse(configHome[2].value.paragraph)}
                </div>
              </div>
            </div>

            {/* divider */}
            <div className="divider"></div>
            {/* divider */}
            <CardInformasi
              to1="detail-article/656/struktur"
              image={`${image_url + configHome[3].value[0].image}`}
              to2="/article/231/visi-dan-misi-ppid"
              image2={`${image_url + configHome[3].value[1].image}`}
              to3="/detail-article/624/prosedur-pelayanan-ppid"
              image3={`${image_url + configHome[3].value[2].image}`}
              to4="/detail-article/623/regulasi-ppd"
              image4={`${image_url + configHome[3].value[3].image}`}
              text={`${configHome[3].value[0].title}`}
              text2={`${configHome[3].value[1].title}`}
              text3={`${configHome[3].value[2].title}`}
              text4={`${configHome[3].value[3].title}`}
            />

            {/* CARD LAPORAN */}
            <div
              className="containerLaporan"
              style={{
                marginTop: "20px",
              }}
            >
              <Link component={anchorLink} linkTo="detail-article/658/lhkpn">
                <img
                  loading="lazy"
                  src={`${image_url + configHome[4].value[0].image}`}
                  alt=""
                  className="imageHarta"
                  style={{
                    height: "50%",
                  }}
                />
                <div className="textHarta">
                  <h6 className="hartaKekayaan h5Harta">
                    {configHome[4].value[0].title}
                  </h6>
                </div>
              </Link>

              <Link
                component={anchorLink}
                linkTo="article/227/laporan-keuangan"
              >
                <img
                  loading="lazy"
                  src={`${image_url + configHome[4].value[1].image}`}
                  alt=""
                  className="imageHarta"
                  style={{
                    height: "50%",
                  }}
                />
                <div className="textHarta">
                  <h6 className="keuangan h5Harta">
                    {configHome[4].value[1].title}
                  </h6>
                </div>
              </Link>
            </div>
            {/* END CARD LAPORAN */}
          </div>
          {/* END */}

          {/* YOUTUBE PPDI */}
          <div className="ytProfil">
            <div className="ytIframe">
              <iframe
                src={`https://www.youtube.com/embed/${configHome[5].value[0].path}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="iframeProfil"
              ></iframe>
            </div>
          </div>
          {/* END */}

          {/* START TATA CARA */}
          <div className="tataCaraContainer">
            <MainDivider text="tata Cara" garisMerah="4rem" mrgn="40px 0" />
          </div>
          {/* END */}

          {/* SLIDER TATA CARA */}
          <CarouselTataCara data={configHome[6].value} />
          {/* <CarouselKM data={configHome[6].value} /> */}
          {/* END */}

          {/* wrapper-cardLaporan2 */}
          <div className="wrapper-cardLaporan2">
            {/* CARD LAPORAN */}
            <div
              className="containerLaporan"
              style={{
                marginTop: "20px",
              }}
            >
              <Link component={anchorLink} linkTo="/formpdi">
                <div className="box-card-laporan">
                  <img
                    loading="lazy"
                    src={`${image_url + configHome[7].value[0].image}`}
                    alt=""
                    className="imageHarta"
                    style={{
                      height: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="textHarta">
                    <h6 className="hartaKekayaan h5Harta">
                      {configHome[7].value[0].title}
                    </h6>
                  </div>
                </div>
              </Link>

              <Link component={anchorLink} linkTo="/formkeluhan">
                <div className="box-card-laporan">
                  <img
                    loading="lazy"
                    src={`${image_url + configHome[7].value[1].image}`}
                    alt=""
                    className="imageHarta"
                    style={{
                      height: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="textHarta">
                    <h6 className="keuangan h5Harta">
                      {configHome[7].value[1].title}
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* END CARD LAPORAN */}
          </div>
          {/* wrapper-cardLaporan2 */}

          {/* <CardMaps/> */}

          <div className="carousel-informasiPage">
            <CarouselDuelBerita
              cat1={configHome[8].value}
              cat2={configHome[9].value}
            />
          </div>

          {/* <div className="widgetMobile">
                <WidgetBerita width="100%" />
                <WidgetBerita width="100%" margin=".5rem 0" />
            </div> */}
        </div>
      ) : (
        <>
          <Wait />
        </>
      )}
    </>
  );
};

export default InformasiPage;
