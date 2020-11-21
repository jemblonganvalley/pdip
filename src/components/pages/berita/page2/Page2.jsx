import React, { useEffect, useState } from "react";
import "../page2/Page2.scss";
import BreadCrumbs from "../../../breadcrumbs/BreadCrumbs";
import Cards from "../../../cards/MainCards";
import CarouselBeritaPage2 from "../../../carouselberitapage2/CarouselBeritaPage2";
import VMedia from "../../../VMedia/VMedia";
import { Link, useParams } from "react-router-dom";
import Wait from "../../../wait/Wait";
import { colors } from "@material-ui/core";
import MainDivider from "../../../divider/MainDivider";
import NotFound from "../../../notFound/NotFound";

// READ BEFORE USE

const Page2 = () => {
  const [reload, setReload] = useState(false);
  const [configHome, setConfigHome] = useState();
  const [manyCard, setManyCard] = useState([]);

  const id = useParams("id");

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
      "https://atur.biar.pw/api/multimedia/youtube-find",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );

    const dataConfigHome = await resConfigHome.json();
    setConfigHome(dataConfigHome);

    const resManyCard = await fetch(
      "https://atur.biar.pw/api/multimedia/youtube-data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          order: { key: "id", value: "desc" },
          limit: 9,
          where: { key: "category", value: `${dataConfigHome.category}` },
        }),
      }
    );

    const dataManyCard = await resManyCard.json();
    setManyCard(dataManyCard.query.data);
  };

  useEffect(() => {
    getConfigHome();
    window.scrollTo(0, 0);
  }, [reload]);

  return (
    <>
      {manyCard.length > 0 ? (
        <div className="wrapperBeritaPage2">
          <div className="linkedBeritaPage2">
            <BreadCrumbs
              link1="Home"
              to1="/"
              link2="Berita"
              to2="/berita"
              page3="Berita Foto"
            />
          </div>

          {/* Container1 */}
          <div className="container-1-beritaPage2">
            {/* Column1 */}
            <div className="col1-container-1-beritaPage2">
              {/* JIKA VIDEO */}
              {!configHome.path.includes("uploads") ? (
                <VMedia
                  headline={configHome.title}
                  source={`https://www.youtube.com/embed/${configHome.path}`}
                  desc={configHome.description}
                />
              ) : (
                <>
                  <CarouselBeritaPage2 />
                  {/* Row2 */}
                  <div className="row2-beritaPage2">
                    <div className="jdl-row2-beritaPage2">
                      {/* Column Txt Admin */}
                      <div className="column-txt-admin">
                        <p className="txt-admin">
                          Admin PDI Perjuangan | 1 Januari 2019
                        </p>
                      </div>
                      {/* END Column Txt Admin */}

                      {/* Column Button Love */}
                      <div className="column-txt-btn-heart">
                        <a className="btn-fav">
                          <i className="fas fa-heart"></i>
                        </a>
                        <p className="txt-jm-fav">0</p>
                      </div>
                      {/* END Column Button Love */}
                    </div>

                    <h3 className="title-2-beritaPage2">
                      Ketua Umum PDI Perjuangan, Hj. Megawati Soekarnoputri
                      Meresmikan 20 Kantor Partai
                    </h3>

                    <p className="txt-desk1-beritaPage2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aliquam ad, ut corporis veniam consectetur officiis fuga
                      voluptas porro veritatis aliquid?
                      <br />
                      <br />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aliquam ad, ut corporis veniam consectetur officiis fuga
                      voluptas porro veritatis aliquid?
                    </p>

                    <div className="box-medsos-beritaPage2">
                      <div className="socialMedia">
                        <small>SHARE : </small>
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-whatsapp"></i>
                      </div>
                    </div>
                  </div>
                  {/* END Row2 */}
                </>
              )}
            </div>
            {/* END Column1 */}
            <div className="container-garis-vertical">
              <MainDivider text={manyCard[0].category} mrgn="40px 0" />
            </div>

            {/* Column2 */}
            <div
              className="cardContainer"
              onClick={() => {
                setReload(!reload);
              }}
            >
              {manyCard.map((e, i) => (
                <Cards
                  imageCard={e.path}
                  cardType="youtube"
                  // textSmall={e.title}
                  title={e.title}
                  borderRadius="10px"
                  key={i}
                  page={`/detail-multimedia`}
                  id={e.id}
                  slug={e.title}
                  category={e.category}
                />
              ))}
            </div>
            {/* END Column2 */}
          </div>
          {/* END Container */}
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default Page2;
