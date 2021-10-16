// Import to React
import React, { useEffect, useState } from "react";
import "./PemiluPage.scss";
import { Link } from "react-router-dom";

// END Import to React

import Wait from "../../wait/Wait";
import CarouselPemilu1 from "../../carouselPemilu1/CarouselPemilu1";
import CarouselPemilu2 from "../../carouselPemilu2/CarouselPemilu2";
import Carousel3PemiluPage from "../../carousel3PemiluPage/Carousel3PemiluPage";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import CardHeader from "../../cardheader/CardHeader";
import ParalaxBox from "../../paralaxBox/ParalaxBox";
import { image_url } from "../../../config/config";

// Create Component
const PemiluPage = () => {
  const [configHome, setConfigHome] = useState([]);

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
      "https://data.pdiperjuangan.id/api/web/pages/pemilu",
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
    window.scrollTo(0, 0);
    getConfigHome();
  }, []);

  return (
    <>
      {configHome.length > 0 ? (
        <div className="wrapperPemiluPage">
          {/* Card Header */}
          <CardHeader
            image={configHome[0].value.image}
            title={configHome[0].value.title}
          />
          {/* END Card Header */}

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

            {/* CARD LAPORAN */}
            <div
              className="containerLaporan"
              style={{
                marginTop: "10px",
              }}
            >
              <Link
                className="cardLaporan cardLaporanSatu"
                to="article/241/pemilian-kepala-daerah"
              >
                <div className="box-card-laporan">
                  <img
                    loading="lazy"
                    src={`${image_url + configHome[4].value[0].image}`}
                    alt=""
                    className="imageHarta"
                  />
                  <div className="textHarta">
                    <h6 className="hartaKekayaan h5Harta">
                      {configHome[4].value[0].title}
                    </h6>
                  </div>
                </div>
              </Link>

              <Link
                className="cardLaporan cardLaporanDua"
                to="detail-article/871/pemilihan--legislatif-2024"
              >
                <div className="box-card-laporan">
                  <img
                    loading="lazy"
                    src={`${image_url + configHome[4].value[1].image}`}
                    alt=""
                    className="imageHarta"
                  />
                  <div className="textHarta">
                    <h6 className="keuangan h5Harta">
                      {configHome[4].value[1].title}
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* END CARD LAPORAN */}
            {/* END Column2 */}
          </div>
          {/* END Container1 */}

          {/* Container2 */}
          <div className="container-2-pemiluPage">
            {/* Carousel Tata Cara */}
            <ParalaxBox
              image={configHome[5].value.image}
              title={configHome[5].value.title}
              link={"/article/274/pemilu"}
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
