// Import to React
import React, { useEffect, useState } from "react";
// END Import to React
import pemilu18 from "../../../img/pemilu18.jpg";
import img5 from "../../../img/img5.jpg";
import pemilu20 from "../../../img/pemilu20.jpg";
import "./KetuaUmumPage.scss";

// Import to CSS
import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import CarouselKetuaUmumPage from "../../carouselKetuaUmumPage/CarouselKetuaUmumPage";
import Cards from "../../cards/MainCards";
import CardInformasi from "../../cardInformasi/CardInformasi";
import { CarouselDuelBerita } from "../../carouselDualBerita/CarouselDuelBerita";
import CardHeader from "../../cardheader/CardHeader";
// END Import to CSS

// Create Component
const KetuaUmumPage = () => {
  const [configHome, setConfigHome] = useState([]);
  const [gallery, setGallery] = useState([]);

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
              background: `url(https://atur.biar.pw/public/${configHome[0].value.image})`,
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
            backgroundHeader={`https://atur.biar.pw/public${configHome[0].value.image}`}
            // titleHeader={configHome[1].value[0].title}
          />
          {/* END Card Header */}

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
              width1="0"
              width2="0"
              width3="0"
              width4="0"
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
                  title={e.title}
                  page='detail-article'
                  id={e.id}
                  borderRadius="10px"
                />
              ))}
            </div>
            {/* END Column3 */}
          </div>
          {/* END Container1 */}

          <div
            style={{
              marginTop: "20px",
            }}
          >
            {gallery.length > 0 && (
              <CarouselDuelBerita current_page={2} data={gallery} />
            )}
          </div>

          {/* Container2 */}
          <div className="container-2-ketuaumum">
            <MainDivider text="Berita Terkait" garisMerah="7rem" mrgn="0px 0" />
          </div>
          {/* END Container2 */}

          {/* Container3 */}
          <div className="container-3-ketuaumum">
            {/* Column4 */}
            <div className="col4-cardContent-container-3">
              {configHome[6].value.map((e, i) => (
                <Cards
                  imageCard={e.path}
                  title={e.title}
                  page='detail-article'
                  id={e.id}
                />
              ))}
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
