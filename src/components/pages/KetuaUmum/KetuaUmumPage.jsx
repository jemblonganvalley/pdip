// Import to React
import React, { useEffect, useState } from "react";

// END Import to React

import "./KetuaUmumPage.scss";

// Import to CSS
import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import CarouselKetuaUmumPage from "../../carouselKetuaUmumPage/CarouselKetuaUmumPage";
import Cards from "../../cards/MainCards";
import CardInformasi from "../../cardInformasi/CardInformasi";
import CardHeader from "../../cardheader/CardHeader";
import CarouselDualKetuaumum from "../../carouselDualKetuaUmum/CarouselDualKetuaumum";
import Wait from "../../wait/Wait";
import MainButton from "../../buttons/MainButton";
// END Import to CSS

// Create Component
const KetuaUmumPage = () => {
  const [configHome, setConfigHome] = useState([]);
  const [gallery, setGallery] = useState([]);

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
      "https://data.pdiperjuangan.id/api/web/pages/ketua-umum",
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

  useEffect(() => {
    getConfigHome();
    getGallery();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {configHome.length > 0 ? (
        <div className="wrapperKetuaUmum">
          {/* <div
            className="headers-ketuaumum"
            style={{
              background: `url(https://data.pdiperjuangan.id/public/${configHome[0].value.image})`,
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <div className="backgrounds">
              <div className="textBackgroundBerita"></div>
            </div>
          </div> */}

          {/* Card Header */}
          <CardHeader
            // 0 r-banner-image
            image={configHome[0].value.image}
            title={configHome[0].value.title}
          />
          {/* END Card Header */}

          <div className="linkedKetuaumum">
            <BreadCrumbs link1="Home" to1="/" page2="Ketua Umum" />
          </div>
          {/* Container1 */}
          <div className="container-1-ketuaUmum">
            {/* Column1 */}
            {/* 1 r-carousel */}
            <CarouselKetuaUmumPage data={configHome[1].value} />
            {/* END Column1 */}
            <div className="container-cardInfo-ketuaUmum">
              {/* Column2 */}
              {/* 2 r-group-text-image" */}
              <CardInformasi
                to1="/article/233/pidato-kongres-pdi-perjuangan"
                image={`https://data.pdiperjuangan.id/public/${configHome[2].value[0].image}`}
                to2="/article/238/pidato-rakernas-pdi-perjuangan"
                image2={`https://data.pdiperjuangan.id/public/${configHome[2].value[1].image}`}
                to3="/article/239/pidato-rakornas-pdi-perjuangan"
                image3={`https://data.pdiperjuangan.id/public/${configHome[2].value[2].image}`}
                to4="/article/240/pidato-hut-pdi-perjuangan"
                image4={`https://data.pdiperjuangan.id/public/${configHome[2].value[3].image}`}
                text="pidato kongres"
                text2="pidato rakernas"
                text3="pidato rakornas"
                text4="pidato hut"
              />
              {/* END Column2 */}
            </div>
            {/* Column3 */}
            <div className="cardKetuaUmum">
              {/* 3 r-sync-blog */}
              {configHome[3].value.map((e, i) => (
                <Cards
                  imageCard={e.path}
                  title={e.title}
                  slug={e.title}
                  page="detail-article"
                  id={e.id}
                  borderRadius="10px"
                  cardType={e.filetype}
                  category="Pidato Ketua Umum"
                />
              ))}
              {/* Button View All */}
              {/* <div className="button1-cardBerita">
                <MainButton
                  name="lihat semua"
                  margin="0px 0 0 0"
                  pages="/ketua-umum/pidato/all"
                />
              </div> */}
              {/* END Button View All */}
            </div>
            {/* END Column3 */}
          </div>
          {/* END Container1 */}

          <div
            className="box-carousel-duel-berita"
            style={{
              marginTop: "20px",
            }}
          >
            {configHome.length > 0 && (
              <CarouselDualKetuaumum
                // 4 r-sync-video
                cat1={configHome[4].value[0]}
                // 5 r-banner-image
                cat2={configHome[5].value}
              />
            )}
          </div>

          {/* Container2 */}
          <div className="container-2-ketuaumum">
            <MainDivider text="Pidato KHUSUS" garisMerah="7rem" mrgn="0px 0" />
          </div>
          {/* END Container2 */}

          {/* Container3 */}
          <div className="container-3-ketuaumum">
            {/* Column4 */}
            <div className="col4-cardContent-container-3">
              {/* 6 r-sync-blog */}
              {configHome[6].value.map((e, i) => (
                <Cards
                  imageCard={e.path}
                  title={e.title}
                  slug={e.title}
                  page="detail-article"
                  id={e.id}
                  cardType={e.filetype}
                  category="Pidato Ketua Umum"
                />
              ))}
              {/* /* Button View All */}
              <div className="button2-cardBerita">
                <MainButton
                  name="lihat semua"
                  margin="0px 0 0 0"
                  pages="/article/259/pidato-khusus"
                />
              </div>
              {/* END Button View All */}
            </div>
            {/* END Column6 */}
          </div>
        </div>
      ) : (
        <>
          <Wait />
        </>
      )}
    </>
  );
};
// END Create Component

export default KetuaUmumPage;
