import React, { useEffect, useState } from "react";
import "./InformasiPage.scss";

import ConsentWhite from "../../../img/consentwhite.png";
import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import CardInformasi from "../../cardInformasi/CardInformasi";
import { CarouselDuelBerita } from "../../carouselDualBerita/CarouselDuelBerita";
import CarouselKM from "../../carouselKM/CarouselKM";
import CarouselTataCara from "../../carouseltatacara/CarouselTataCara";
import illustrator from '../../../img/illustrator2.png'
import CardHeader from "../../cardheader/CardHeader";
import { Link } from "react-router-dom";

const InformasiPage = () => {
  const [gallery, setGallery] = useState([]);
  const [configHome, setConfigHome] = useState([]);

  const getGallery = async () => {
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

    const resGallery = await fetch(
      "https://atur.biar.pw/api/gallery/data?page=2",
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
      "https://atur.biar.pw/api/web/pages/informasi",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
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
          {/* START HEADERS */}
          {/* <div
            className="headInformasi"
            style={{
              backgroundImage: `url(https://atur.biar.pw/public/${configHome[0].value.image})`,
            }}
          >
            <div className="textHeadInformasi">
              <h2>{configHome[0].value.title}</h2>
            </div>
          </div> */}
          {/* END */}

          {/* Card Header */}
          <CardHeader image={configHome[0].value.image} title={configHome[0].value.title}/>
          {/* END Card Header */}

          {/* START LINKED */}
          <div className="linkedInformasi">
            <BreadCrumbs link1="Home" to1="/" page2="Informasi" />
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
                    backgroundImage: `url(https://atur.biar.pw/public/${configHome[2].value.image})`,
                  }}
                >
                  <h4 className="maklumat">{configHome[2].value.title}</h4>
                  <p className="textParagrapKanan">
                    {configHome[2].value.paragraph}
                  </p>
                </div>
              </div>
            </div>

            {/* divider */}
            <div className="divider"></div>
            {/* divider */}
            <CardInformasi
              to1="detail-article/656/struktur"
              image={`https://atur.biar.pw/public/${configHome[3].value[0].image}`}
              to2="/pidatorakernas"
              image2={`https://atur.biar.pw/public/${configHome[3].value[1].image}`}
              to3="/pidatorakornas"
              image3={`https://atur.biar.pw/public/${configHome[3].value[2].image}`}
              to4="/pidatohut"
              image4={`https://atur.biar.pw/public/${configHome[3].value[3].image}`}
              width1="0"
              width2="0"
              width3="0"
              width4="0"
              text={`${configHome[3].value[0].title}`}
              text2={`${configHome[3].value[1].title}`}
              text3={`${configHome[3].value[2].title}`}
              text4={`${configHome[3].value[3].title}`}
            />

            {/* CARD LAPORAN */}
            <div className="containerLaporan" style={{
                marginTop : '20px'
            }}>
              <Link className="cardLaporan cardLaporanSatu" as='div' to='detail-article/658/lhkpn'>
                <img
                  src={`https://atur.biar.pw/public/${configHome[4].value[0].image}`}
                  alt=""
                  width="45"
                  className="imageHarta"
                />
                <div className="textHarta" >
                  <h6 className="hartaKekayaan h5Harta">
                    {configHome[4].value[0].title}
                  </h6>
         
                </div>
              </Link>

              <Link className="cardLaporan cardLaporanDua" as='div' to='article/227/laporan-keuangan'>
                <img
                  src={`https://atur.biar.pw/public/${configHome[4].value[1].image}`}
                  alt=""
                  width="45"
                  className="imageHarta"
                />
                <div className="textHarta">
                  <h6 className="keuangan h5Harta">
                    {configHome[4].value[1].title}

                  </h6>
             
                </div>
              </Link>

            </div>
            {/* END */}
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
          <CarouselTataCara data={configHome[6].value}/>
          {/* <CarouselKM data={configHome[6].value} /> */}
          {/* END */}

          {/* Container dua */}
          <div className="infoDua">
            {/* kolom formulir */}
            <div className="kolomFormulir kolomFormulirSatu">
              <img src={ConsentWhite} alt="" width="50" />
              <h4 className="textFormulir">
                Formulir Permohonan
                <br />
                Informasi Publik
              </h4>
            </div>
            <div className="kolomFormulir kolomFormulirDua">
              <img src={ConsentWhite} alt="" width="50" />
              <h4 className="textFormulir">
                Formulir Keberatan
                <br />
                atas Pelayanan Informasi
              </h4>
            </div>
            {/* END */}
          </div>
          {/* END */}

          {/* <CardMaps/> */}

          <div className="carousel-informasiPage">
            <CarouselDuelBerita cat1={configHome[8].value} cat2={configHome[9].value}/>
          </div>

          {/* <div className="widgetMobile">
                <WidgetBerita width="100%" />
                <WidgetBerita width="100%" margin=".5rem 0" />
            </div> */}
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
            wait ..
          </div>
        </>
      )}
    </>
  );
};

export default InformasiPage;
