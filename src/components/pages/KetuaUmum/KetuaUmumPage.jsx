// Import to React
import React, { useEffect, useState } from "react";
// END Import to React
import pemilu13 from "../../../img/pemilu13.jpg";
import pemilu14 from "../../../img/pemilu14.jpg";
import pemilu15 from "../../../img/pemilu15.jpg";
import pemilu18 from "../../../img/pemilu18.jpg";
import img5 from "../../../img/img5.jpg";
import pemilu20 from "../../../img/pemilu20.jpg";
import bgWait from "../../../img/pattern-01.svg";

import "./KetuaUmumPage.scss";

import ketuaUmumSatu from "../../../img/ketuaumum1.png";
import ketuaUmumDua from "../../../img/ketuaumum2.png";
import ketuaUmumTiga from "../../../img/ketuaumum3.png";
import ketuaUmumEmpat from "../../../img/ketuaumum4.png";

// Import to CSS
import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import CarouselKetuaUmumPage from "../../carouselKetuaUmumPage/CarouselKetuaUmumPage";
import Cards from "../../cards/MainCards";
import CardInformasi from "../../cardInformasi/CardInformasi";
// END Import to CSS

// Create Component
const KetuaUmumPage = () => {
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
      "https://atur.biar.pw/api/web/pages/ketua-umum",
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
    setConfigHome(dataConfigHome.query);
  };

  useEffect(() => {
    getConfigHome();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {configHome.length > 0 ? (
        <div className="wrapperKetuaUmum">
          <div
            className="headers-ketuaumum"
            style={{
              background: `url(https://atur.biar.pw/public/${configHome[0].value.image})`,
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          >
            <div className="backgrounds">
              <div className="textBackgroundBerita"></div>
            </div>
          </div>

          <div className="linkedKetuaumum">
            <BreadCrumbs link1="Home" to1="/" page2="Ketua Umum" />
          </div>
          {/* Container1 */}
          <div className="container-1-ketuaUmum">
            {/* Column1 */}
            <CarouselKetuaUmumPage data={configHome[1].value} />
            {/* END Column1 */}

            {/* Column2 */}
            <CardInformasi
              to1="/pidatokongres"
              image={`https://atur.biar.pw/public/${configHome[2].value[0].image}`}
              to2="/pidatorakernas"
              image2={`https://atur.biar.pw/public/${configHome[2].value[1].image}`}
              to3="/pidatorakornas"
              image3={`https://atur.biar.pw/public/${configHome[2].value[2].image}`}
              to4="/pidatohut"
              image4={`https://atur.biar.pw/public/${configHome[2].value[3].image}`}
              width1="35"
              width2="35"
              width3="35"
              width4="35"
              text="pidato kongres"
              text2="pidato rakernas"
              text3="pidato rakornas"
              text4="pidato hut"
            />
            {/* END Column2 */}

            {/* Column3 */}
            <div className="cardKetuaUmum">
              {configHome[3].value.map((e, i) => (
                <Cards
                  imageCard={e.path}
                  textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                  TextH5={e.title}
                  // paragrap={e.description}
                  borderRadius="10px"
                />
              ))}
            </div>
            {/* END Column3 */}

            {/* Column5 */}
            <div className="col5-container-1-ketuaumum">
              {/* Row1 */}
              <div className="row1-video-youtube">
                <iframe
                  width="1349"
                  height="488"
                  src="https://www.youtube.com/embed/l2doUcFirGE"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* END Row1 */}

              {/* Row2 */}
              <div className="row2-img">
                <div className="col-txt">
                  <p className="jdl">
                    SERUAN
                    <br />
                    KETUA UMUM
                  </p>
                </div>
              </div>
              {/* END Row2 */}
            </div>
            {/* END Column5 */}
          </div>
          {/* END Container1 */}

          {/* Container2 */}
          <div className="container-2-ketuaumum">
            <MainDivider text="Berita Terkait" garisMerah="7rem" mrgn="0px 0" />
          </div>
          {/* END Container2 */}

          {/* Container3 */}
          <div className="container-3-ketuaumum">
            {/* Column4 */}
            <div className="col4-cardContent-container-3">
              <Cards
                imageCard={pemilu18}
                textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                borderRadius="10px"
              />
              <Cards
                imageCard={img5}
                textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                borderRadius="10px"
              />
              <Cards
                imageCard={pemilu20}
                textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                borderRadius="10px"
              />
            </div>
            {/* END Column6 */}
          </div>
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
// END Create Component

export default KetuaUmumPage;
