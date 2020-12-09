import React, { useEffect, useState } from "react";
import "./PartaiPage.scss";
import { Link } from "react-router-dom";
import pdiLogo from "../../../img/logo-tatakelola.png";
import MusicPdi from "../../musicpdi/MusicPdi";
import MainButton from "../../buttons/MainButton";
import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import MusicMobile from "../../musicPdiMobile/MusicMobile";
import CardHeader from "../../cardheader/CardHeader";
import CarouselKetuaUmumPage from "../../carouselKetuaUmumPage/CarouselKetuaUmumPage";
import Maps from "../../maps/Maps";
import Wait from "../../wait/Wait";
import parse from "html-react-parser";

const PartaiPage = ({ redirect }) => {
  const [config, setConfig] = useState([]);
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
      "https://data.pdiperjuangan.id/api/web/pages/partai",
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
    if (redirect) {
      window.open(redirect);
    }
  }, []);

  return (
    // START PARTAI
    <>
      {config.length > 0 ? (
        <div className="wrapperPartai">
          {config.length > 0 && (
            <>
              {/* 0 r-banner-image */}
              <CardHeader
                image={config[0].value.image}
                title={config[0].value.title}
              />
              {/* END Card Header */}
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
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* 1 r-group-text-image */}
                      {config[1].value.map((e, i) => (
                        <Link
                          className="mobileRow "
                          as="div"
                          to={
                            i == 0
                              ? `/detail-article/1015/${e.title.replace(
                                  " ",
                                  "-"
                                )}`
                              : i == 1
                              ? `/detail-article/838/${e.title.replace(
                                  " ",
                                  "-"
                                )}`
                              : i == 2
                              ? `/detail-article/844/${e.title.replace(
                                  " ",
                                  "-"
                                )}`
                              : i == 3
                              ? `/detail-article/847/${e.title.replace(
                                  " ",
                                  "-"
                                )}`
                              : "/"
                          }
                        >
                          <div className="box-mobileRow2">
                            <img
                              src={`https://data.pdiperjuangan.id/public/${e.image}`}
                              alt=""
                              className="imgMobilePartai"
                            />
                            <div
                              className="textContent textContentSatu"
                              style={{}}
                            >
                              <h5>{e.title}</h5>
                              <small>{parse(e.paragraph)}</small>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* 2 r-carousel */}
                  {/* Card Carousel */}
                  <div className="container-carousel-partaiPage">
                    <CarouselKetuaUmumPage data={config[2].value} />
                  </div>
                  {/* END Card Carousel */}
                </div>
              </div>
              {/* END */}
              {/* 3 r-sync-song */}
              <MusicPdi />
              <MusicMobile />
              {/* divider tata kelola */}
              <div className="divider-tata-kelolaPdi">
                <MainDivider text="TATA KELOLA PDI PERJUANGAN" mrgn="40px 0" />
              </div>
              {/* end divider tata kelola */}
              {/* CONTAINER TIGA */}
              <div className="containerTiga">
                <div className="col-lg-3">
                  <img
                    className="img-logo-bantengPdi"
                    src={pdiLogo}
                    alt=""
                    width="180"
                  />
                </div>
                {/* TATA CARA */}
                {/* 4r-text-html */}
                <div className="col-lg-9 textBanteng">
                  <p>{parse(config[4].value)}</p>
                </div>
              </div>
              {/* END */}
              <span className="btnUnduh">
                <MainButton
                  name="Lihat"
                  pages="/detail-article/841/tata-kelola-partai"
                />
              </span>
              {/* PENGURUS */}
              <div className="pengurusPage">
                <div className="divider-pengurusPage">
                  <MainDivider text="pengurus" mrgn="0px 0" />
                </div>

                <div className="paragrapPengurus">{parse(config[5].value)}</div>
              </div>
              {/* END */}
              {/* PHOTO PENGURUS */}
              <div
                className="photoPengurus"
                style={{
                  backgroundImage: `url(https://data.pdiperjuangan.id/public/${config[6].value.image})`,
                  backgroundAttachment: "fixed",
                }}
              >
                <h3>{config[6].value.title}</h3>
                <Link className="btn lihat" to={"/struktur-dpp"}>
                  <span>lihat</span>
                </Link>
              </div>
              {/* END */}
              {/* MAPS */}
              <div className="maps">
                {/* <h5>dewan pimpinan daerah pdi perjuangan</h5> */}
                {/* Component Maps */}
                <Maps />
                {/* END Component Maps */}
              </div>
              {/* END */}
              {/* ANGGOTA LEGISLATIF */}
              {/* <div className="anggotaLegislatif">
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
              </div> */}
              {/* END */}
            </>
          )}
        </div>
      ) : (
        <>
          <Wait />
        </>
      )}
    </>
  );
};

export default PartaiPage;
