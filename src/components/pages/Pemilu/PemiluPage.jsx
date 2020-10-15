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
import IconHartaSatu from '../../../img/lh.png'
import IconHartaDua from '../../../img/income.png'

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

          <div className="headers-pemiluPage" style={{
              backgroundImage : `url(https://atur.biar.pw/public/${configHome[0].value.image})`
          }}>
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
                  <CarouselPemilu1 data={configHome[1].value}/>
                  {/* END Image 1 */}
                </div>
                {/* END Bagian1 */}

                {/* Bagian2 */}
                <div className="bagian2-pemiluPage">
                  {/* Image 2 */}
                  <CarouselPemilu2 />
                  {/* END Image 2 */}
                </div>
                {/* END Bagian2 */}
              </div>
              {/* END Row1 */}

              {/* Row2 */}
              <div className="row2-col1-pemiluPage">
                <Carousel3PemiluPage />
              </div>
              {/* END Row2 */}
            </div>
            {/* END Column1 */}

            {/* Column2 */}
            <div className="col2-container-1-pemiluPage">
              {/* Row1 */}
              <div className="row1-col2-pemiluPage pemilihan">
                <img src={IconHartaSatu} width="45" className="col1-row1-pemiluPage"/>
                <div className="col2-row1-pemiluPage">
                  <p className="txt-title">PEMILIHAN KEPALA DAERAH SERRENTAK</p>
                  <p className="txt-desk">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
              {/* END Row1 */}

              {/* Row2 */}
              <div className="row2-col2-pemiluPage pemilihan">
                <img src={IconHartaDua} width="45" className="col1-row2-pemiluPage"/>
                <div className="col2-row2-pemiluPage">
                  <p className="txt-title">
                    PEMILIHAN CALON LEGISLATIF PDI PERJUANGAN
                  </p>
                  <p className="txt-desk">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
              {/* END Row2 */}
            </div>
            {/* END Column2 */}
          </div>
          {/* END Container1 */}

          {/* Container2 */}
          <div className="container-2-pemiluPage">
            {/* <img src={pemilu5} alt="" /> */}
            {/* <div className="jdl-col1-pemiluPage">
                        <div className="box-txt-jdl-pemiluPage">
                            <p className="txt-jdl-pemiluPage">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque mollitia assumenda architecto facilis et deleniti iste alias autem quo exercitationem!
                            </p>
                        </div>
                    </div> */}
            <div className="btn-col2-pemiluPage">
              <MainButton name="LIHAT" />
            </div>
          </div>
          {/* END Container2 */}

          {/* Container3 */}
          <div className="container-3-pemiluPage">
            <iframe
              width="80%"
              height="100%"
              src="https://www.youtube.com/embed/FquQvej9l8I"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          {/* END Container3 */}
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};
// END Create Component

export default PemiluPage;
