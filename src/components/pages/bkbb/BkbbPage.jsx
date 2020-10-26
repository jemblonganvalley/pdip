import React, { useEffect } from "react";
import "./BkbbPage.scss";

import { useState } from "react";
import Cards from "../../cards/MainCards";
import MainButton from "../../buttons/MainButton";
import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import CardQuotes from "../../cardquotes/CardQuotes";

export const LighBox = ({ source }) => {
  return (
    <>
      <main
        className="container_lightbox"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          backgroundColor: "rgba(0,0,0,0.800)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "2000",
        }}
      >
        <iframe
          width="800"
          height="500"
          src={`https://www.youtube.com/embed/${source}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {console.log(source)}
      </main>
    </>
  );
};

const BkbbPage = () => {
  const [configHome, setConfigHome] = useState([]);
  const [showVid, setShowVid] = useState(false);

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
      "https://atur.biar.pw/api/web/pages/bkbb",
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
    getConfigHome();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {showVid && (
        <>
          <span
            style={{
              position: "fixed",
              top: "20vh",
              right: "20vh",
              color: "white",
              zIndex: "6000",
              fontSize: "2rem",
            }}
            onClick={() => {
              setShowVid(false);
            }}
            class="fa fa-close"
          ></span>
          <LighBox source={configHome[2].value[0].path} />
        </>
      )}

      {configHome.length > 0 ? (
        <div className="wrapperBkbbPage">
          <div className="headers-bkbbPage">
            <img
              src={`https://atur.biar.pw/public/${configHome[0].value.image}`}
              className="backgrounds-bkbb"
            >
              {/* <div className="textBackgroundPartai">
                                <h2>Solid Bergerak Untuk<br/>Indonesia Raya </h2>
                            </div> */}
            </img>
          </div>

          <div className="linkedBkbbPage">
            <BreadCrumbs link1="Home" to1="/" page2="Bung Karno Bapak Bangsa" />
          </div>

          <section className="lahirnyaPancasila col mx-auto">
            <div
              className="box-lahirnyaPancasila "
              style={{
                backgroundImage: `url(https://atur.biar.pw/public/${configHome[1].value.image})`,
              }}
            >
              <div className="redBox mt-auto">
                <div className="col col-lg-4 red-box-title ">
                  <h3>{configHome[1].value.title}</h3>
                </div>
                <div
                  className="txt2-redBox"
                  dangerouslySetInnerHTML={{
                    __html: configHome[1].value.paragraph,
                  }}
                ></div>
              </div>
            </div>
          </section>

          <section className="videoBungKarno col">
            {configHome[2].value.map((e, i) => (
              <div
                className="bannerYoutube"
                style={{
                  backgroundImage: `url(https://i.ytimg.com/vi/${e.path}/hqdefault.jpg)`,
                }}
                key={i}
                onClick={() => {
                  setShowVid(true);
                }}
              >
                <div className="textYoutube">
                  <div className="wrapperText">
                    <ul className="circleYoutube">
                      <li>
                        <i
                          className="fa fa-play"
                          style={{ color: "white" }}
                        ></i>
                      </li>
                    </ul>
                    <div className="textInfoYT">
                      <h3 className="videoTerbaru">{e.title}</h3>
                      <br />
                      <h6 className="siaranHut">{e.description}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <iframe
          width="80%"
          height="90%"
          src={`https://www.youtube.com/embed/jY8tAjHtO44`}
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
          </section>

          <section className="wrapper3">
            <MainDivider
              text="Materi Pokok Pendukung"
              garisMerah="8rem"
              mrgn="40px 0"
            />
          </section>

          <div className="wrapperCard">
            <div className="cardKolum">
              {configHome.length > 0 &&
                configHome[3].value.map((e, i) => {
                  return (
                    <Cards
                      type={e.type}
                      imageCard={e.path}
                      title={e.title}
                      borderRadius="10px"
                      key={i}
                      page='detail-article'
                      id={e.id}
                    />
                  );
                })}
            </div>
          </div>

          <div className="btnLihatSemua">
            <MainButton name="lihat semua" margin="0" pages="/materipokok" />
          </div>
          <div
            className="bannerBkbb"
            style={{
              background: `url(https://atur.biar.pw/public/${configHome[4].value.image})`,
              backgroundAttachment: "fixed",
              backgroundSize: "auto",
              backgroundPosition: "center",
            }}
          >
            <i className="fas fa-quote-right"></i>
            <h4 className="custom">{configHome[4].value.title}</h4>
            <h5
              className="custom"
              dangerouslySetInnerHTML={{
                __html: configHome[4].value.paragraph,
              }}
            ></h5>
            <i className="fas fa-quote-right"></i>
            <small>Bung Karno, 17 Agustus 1946</small>

            {/* Background Black transparent */}
            <div className="bg-black-transparent">
              
            </div>
            {/* END Background black transparent */}
          </div>

          {/* Column Card Wejangan Bungkarno */}
          <div className="col-card-wejangan-bungkarno">
            {/* Box1 Image */}
            <div className="box1-image">
              {configHome[5].value.map((e, i) => (
                <CardQuotes
                  page="/quotes"
                  img={`https://atur.biar.pw/public/${e.path}`}
                  icon1="fas fa-quote-right"
                  txt1={e.title}
                  icon2="fas fa-quote-right"
                  txt2={`Soekarno, ${e.quotes_date}`}
                />
              ))}
            </div>
            {/* END Box1 Image */}
          </div>

          <div className="btnLihatSemua">
            <MainButton
              name="lihat semua"
              margin="0rem 0 0 0"
              pages="/wejanganbungkarno"
            />
          </div>

          <div className="backGroundGray"></div>
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

export default BkbbPage;
