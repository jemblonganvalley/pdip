import React, { useEffect } from "react";
import "./BkbbPage.scss";

import bkbb2 from "../../../img/bkbb2.jpg";
import bkbb3 from "../../../img/bkbb3.jpg";
import bkbb4 from "../../../img/bkbb4.jpg";
import bgWait from "../../../img/pattern-01.svg";
import { Link } from "react-router-dom";
import backgroundHead from "../../../img/kampanye.jpg";
import pdiBook1 from "../../../img/pdibook1.png";
import pdiBook2 from "../../../img/pdibook2.png";
import pdiBook3 from "../../../img/pdibook3.png";
import laguPerjuangan from "../../../img/lagu.png";
import Partitur from "../../../img/partitur.png";
import MinusOn from "../../../img/minusone.png";
import BkbbCard from "./BkbbCard";
import { useState } from "react";
import Cards from "../../cards/MainCards";
import bkbbCard1 from "../../../img/bkbbcard.png";
import bkbbCard2 from "../../../img/bkbbcard2.png";
import bkbbCard3 from "../../../img/bkbbcard3.png";
import MainButton from "../../buttons/MainButton";
import Double from "../../../img/double.png";
import quotes1 from "../../../img/quotes3.png";
import quotes2 from "../../../img/quotes.png";
import quotes3 from "../../../img/quotes2.png";
import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import CardQuotes from "../../cardquotes/CardQuotes";
import CardBkbbQuotes2 from "../../cardbkbbquotes2/CardBkbbQuotes2";
import CardWejangan from "../../cardwejangan/CardWejangan";
import bkbbHeader from "../../../img/BKBB_Header.jpg";
import CardVideo from "../../cardVideo/CardVideo";

const BkbbPage = () => {
  const [configHome, setConfigHome] = useState([]);

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
                  <h2>{configHome[1].value.title}</h2>
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
              >
                <div className="textYoutube">
                  <div className="wrapperText">
                    <ul className="circleYoutube">
                      <li>
                        <a href="youtube">
                          <i className="fa fa-play"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="textInfoYT">
                      <h3 className="videoTerbaru">{e.title}</h3>
                      <br />
                      {/* <p className="siaranHut">{e.description}</p> */}
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
            <MainDivider text="Materi Pokok Pendukung" garisMerah="8rem" />
          </section>

          <div className="wrapperCard">
            <div className="cardKolum">
              {configHome.length > 0 &&
                configHome[3].value.map((e, i) => {
                  return (
                    <CardVideo
                      type={e.type}
                      imageCard={e.path}
                      TextH5={e.title}
                      borderRadius="10px"
                      key={i}
                    />
                  );
                })}
            </div>
          </div>

          <div className="btnLihatSemua">
            <MainButton
              name="lihat semua"
              margin="1rem 0"
              pages="/materipokok"
            />
          </div>
          <div
            className="bannerBkbb"
            style={{
              background: `url(https://atur.biar.pw/public/${configHome[4].value.image})`,
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
              margin="1rem 0"
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
