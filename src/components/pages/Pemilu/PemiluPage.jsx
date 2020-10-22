// Import to React
import React, { useEffect, useState } from "react";
// END Import to React
import Wait from "../../wait/Wait";
import "./PemiluPage.scss";
import CarouselPemilu1 from "../../carouselPemilu1/CarouselPemilu1";
import CarouselPemilu2 from "../../carouselPemilu2/CarouselPemilu2";
import Carousel3PemiluPage from "../../carousel3PemiluPage/Carousel3PemiluPage";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import MainButton from "../../buttons/MainButton";
import IconHartaSatu from "../../../img/lh.png";
import IconHartaDua from "../../../img/income.png";
import CarouselTataCara from "../../carouseltatacara/CarouselTataCara";
import illustrator from '../../../img/illustrator2.png'


// Create Component
const PemiluPage = () => {
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
      "https://atur.biar.pw/api/web/pages/pemilu",
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
        <div className="wrapperPemiluPage">
          <div
            className="headers-pemiluPage"
            style={{
              backgroundImage: `url(https://atur.biar.pw/public/${configHome[0].value.image})`,
            }}
          >
            <div className="backgrounds">
              <div className="textBackgroundBerita">
                <h2>{configHome[0].value.title}</h2>
              </div>
            </div>
          </div>
          <div className="linkedPemiluPage">
            <BreadCrumbs link1="Home" to1="/" page2="Pemilu" />
          </div>

          {/* Container1 */}
          <div className="container-1-pemiluPage">
            {/* Column1 */}
            <div className="col1-container-1-pemiluPage">
              {/* Row1 */}
              <div className="row1-col1-pemiluPage">
                {/* Bagian1 */}
                <div className="bagian1-pemiluPage">
                  {/* Image 1 */}
                  <CarouselPemilu1 data={configHome[1].value} />
                  {/* END Image 1 */}
                </div>
                {/* END Bagian1 */}

                {/* Bagian2 */}
                <div className="bagian2-pemiluPage">
                  {/* Image 2 */}
                  <CarouselPemilu2 data={configHome[2].value} />
                  {/* END Image 2 */}
                </div>
                {/* END Bagian2 */}
              </div>
              {/* END Row1 */}

              {/* Row2 */}
              <div className="row2-col1-pemiluPage">
                <Carousel3PemiluPage data={configHome[3].value} />
              </div>
              {/* END Row2 */}
            </div>
            {/* END Column1 */}

            {/* Column2 */}
            <a className="col2-container-1-pemiluPage" href='/' >
              {/* Row1 */}
              <div className="row1-col2-pemiluPage pemilihan">
                <img
                  src={`https://atur.biar.pw/public/${configHome[4].value[0].image}`}
                  width="75"
                  className="col1-row1-pemiluPage"
                />
                <div className="col2-row1-pemiluPage">
                  <p className="txt-title">{configHome[4].value[0].title}</p>
                </div>
              </div>
              {/* END Row1 */}

              {/* Row2 */}
                <a className="row2-col2-pemiluPage pemilihan" href='https://www.pdipkreatif.com/home' target='_blank'>
                  <img
                    src={`https://atur.biar.pw/public/${configHome[4].value[1].image}`}
                    width="75"
                    className="col1-row2-pemiluPage"
                  />
                  <div className="col2-row2-pemiluPage">
                    <p className="txt-title">{configHome[4].value[1].title}</p>
                  </div>
                </a>
              {/* END Row2 */}
            </a>
            {/* END Column2 */}
          </div>
          {/* END Container1 */}

          {/* Container2 */}
          <div className="container-2-pemiluPage">
            {/* Carousel Tata Cara */}
            <CarouselTataCara
            img1={illustrator}
            img2={illustrator}
            img3={illustrator}
            paragrapOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint neque, amet tempore sed atque maxime sapiente dolor similique rerum."
            paragrapTwo="Lorem ipsum dolor elit. Soluta sint neque, amet tempore sed atque maxime sapiente dolor similique rerum."
            paragrapThree="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint neque, amet tempore sed atque maxi."
          />
            {/* END Carousel Tata Cara */}
          </div>
          {/* END Container2 */}

          
          {/* YOUTUBE PPDI */}
          <div className="ytProfil">
            <div className="ytIframe">
              <iframe
                src={`https://www.youtube.com/embed/${configHome[6].value[0].path}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="iframeProfil"
              ></iframe>
            </div>
          </div>
          {/* END */}

        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};
// END Create Component

export default PemiluPage;
