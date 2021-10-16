// Import to React
import React, { useEffect, useState } from "react";
// END Import to React

import { Link } from "react-router-dom";
import "./BeritaPage.scss";
import { CarouselDuelBerita } from "../../carouselDualBerita/CarouselDuelBerita";

import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import Cards from "../../cards/MainCards";
import Wait from "../../wait/Wait";
import CardInformasi from "../../cardInformasi/CardInformasi";
import MainButton from "../../buttons/MainButton";
import MainDivider from "../../divider/MainDivider";
import CardHeader from "../../cardheader/CardHeader";
import CarouselKetuaUmumPage from "../../carouselKetuaUmumPage/CarouselKetuaUmumPage";
import { Helmet } from "react-helmet";
import { image_url } from "../../../config/config";

// Create Component
const BeritaPage = () => {
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
      "https://data.pdiperjuangan.id/api/web/pages/berita",
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
    getConfigHome();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {configHome.length > 0 ? (
        <>
          <Helmet>
            <link rel="icon" href="/pdip.jpg" />
            <link rel="shortcut icon" href="/pdip.ico" />
            <meta name="description" content={configHome[6].value.title} />
            <meta
              property="og:url"
              content={`https://pdiperjuangan.id/berita`}
            />
            <meta property="og:title" content={configHome[6].value.title} />
            <meta
              property="og:description"
              content={configHome[6].value.title}
            />
            <meta
              property="og:image"
              itemProp="image"
              content={`https://data.pdiperjuangan.id/public${configHome[6].value.image}`}
            />
            {/* <meta
              property="og:image:url"
              content={`https://data.pdiperjuangan.id/public${data.path}`}
            /> */}
            <meta
              property="og:image:secure_url"
              content={`${image_url + configHome[6].value.image}`}
            />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />
            <meta
              property="og:image:alt"
              content={`${image_url + configHome[6].value.image}`}
            />
            <meta property="og:type" content="website" />
            <meta content="og:image:type" property="image/*" />
            <meta content="og:image:alt" property={configHome[6].value.title} />
            <meta property="og:locale" content="id_ID" />
          </Helmet>
          <div className="wrapperBerita">
            {/* INDEX 0 */}
            <CardHeader
              image={configHome[0].value.image}
              title={configHome[0].value.title}
            />

            <div className="linkedBerita">
              <BreadCrumbs link1="Home" to1="/" page2="Berita" />
            </div>

            {/* Container1 */}
            <div className="container-1-beritaPage">
              {/* INDEX 1 */}
              <CarouselKetuaUmumPage data={configHome[1].value} />
              {/* END Column1 */}

              <div className="container-card-informasi">
                {/* INDEX 2 */}
                <CardInformasi
                  to1="/article/190/nasional"
                  image={
                    `https://data.pdiperjuangan.id/public` +
                    configHome[2].value[0].image
                  }
                  to2="/article/191/daerah"
                  image2={
                    `https://data.pdiperjuangan.id/public` +
                    configHome[2].value[1].image
                  }
                  to3="/gallery"
                  image3={
                    `https://data.pdiperjuangan.id/public` +
                    configHome[2].value[2].image
                  }
                  to4="/article/192/nuansa"
                  image4={
                    `https://data.pdiperjuangan.id/public` +
                    configHome[2].value[3].image
                  }
                  text={configHome[2].value[0].title}
                  text2={configHome[2].value[1].title}
                  text3={configHome[2].value[2].title}
                  text4={configHome[2].value[3].title}
                />
                {/* END Column2 */}
              </div>

              <div className="cardContainer" id="card-berita">
                {configHome[3].value.map((e, i) => {
                  return (
                    <Cards
                      id={e.id}
                      imageCard={e.path}
                      textSmall={e.author}
                      title={e.title}
                      dateTime={e.created_at}
                      borderRadius="10px"
                      page="detail-article"
                      slug={e.title}
                      category="Berita"
                    />
                  );
                })}
              </div>

              {/* END Column3 */}

              {/* Column4 */}
              <div className="col4-container-1-beritaPage">
                <MainDivider text="Berita Foto" garisMerah="7rem" />
              </div>
              {/* END Column4 */}

              {/* END Column5 */}
            </div>
            {/* Column5 */}

            {/* CAROUSEL DUAL BERITA */}

            <CarouselDuelBerita
              cat1={configHome[4].value}
              cat2={configHome[5].value}
            />

            {/* END Container1 */}

            {/* Container2 */}
            <div
              className="container-2-beritaPage"
              style={{
                backgroundImage: `url(${
                  image_url + configHome[6]?.value?.image
                })`,
                backgroundAttachment: "fixed",
              }}
            >
              {/* Column1 */}
              <div className="col1-container-2-beritaPage banner-berita">
                <p className="txt-title-col1">
                  {configHome[6].value.description}
                </p>
                <h3 className="txt-title-col1">{configHome[6].value.title}</h3>
              </div>
              {/* END Column1 */}

              {/* Column2 */}
              <div className="col2-container-2-beritaPage">
                <Link to={configHome[6].value.link}>
                  <MainButton name="LIHAT" />
                </Link>
              </div>
              {/* END Column2 */}
            </div>
            {/* END Container2 */}

            {/* Container3 */}
            <div className="container-3-beritaPage">
              {/* Column1 */}
              <div className="divider-beritaDaerah">
                <MainDivider
                  text="Berita Daerah"
                  garisMerah="7rem"
                  mrgn="40px 0 0px 0"
                />
              </div>

              {/* END Column1 */}

              {/* Column2 CARD BERITA DAERAH*/}
              <div className="cardContainer" id="card-berita">
                {console.log(configHome[7].value)}
                {configHome[7].value.map((e, i) => {
                  return (
                    <Cards
                      id={e.id}
                      imageCard={e.path}
                      textSmall={e.author}
                      title={e.title}
                      dateTime={e.created_at}
                      borderRadius="10px"
                      page="detail-article"
                      slug={e.title}
                      category="Berita"
                    />
                  );
                })}
              </div>
              {/* END Column2 */}

              {/* Column3 */}
              <div className="divider-kegiatanPartai">
                <MainDivider
                  text="Nuansa"
                  garisMerah="7rem"
                  mrgn="40px 0 0px 0"
                />
              </div>

              {/* END Column3 */}

              {/* Column4 BERITA PARTAI */}

              <div className="cardContainer" id="card-berita">
                {configHome[8].value.map((e, i) => {
                  return (
                    <Cards
                      id={e.id}
                      imageCard={e.path}
                      textSmall={e.author}
                      title={e.title}
                      dateTime={e.created_at}
                      borderRadius="10px"
                      page="detail-article"
                      slug={e.title}
                      category="Berita"
                    />
                  );
                })}
              </div>

              {/* END Column4 */}
            </div>
            {/* END Container3 */}
          </div>
        </>
      ) : (
        <Wait />
      )}
    </>
  );
};
// END Create Component

export default BeritaPage;
