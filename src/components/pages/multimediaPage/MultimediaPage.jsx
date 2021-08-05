import React, { useEffect, useState } from "react";
import "./MultimediaPage.scss";
import Subscribe from "../../../img/subscribe.png";

import Wait from "../../wait/Wait";
import Cards from "../../cards/MainCards";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import MainButton from "../../buttons/MainButton";
import MainDivider from "../../divider/MainDivider";
import CardInformasi from "../../cardInformasi/CardInformasi";
import VMedia from "../../VMedia/VMedia";
import CardHeader from "../../cardheader/CardHeader";

const MultimediaPage = () => {
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
      "https://data.pdiperjuangan.id/api/web/pages/multimedia",
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
        <div className="wrapperMultimedia">
          {/* <div
            className="headerMedia"
            style={{
              background: `url(https://data.pdiperjuangan.id/public/${configHome[0].value.image})`,
            }}
          >
            <div className="textBannerMedia">
              <h2>{configHome[0].value.title}</h2>
            </div>
          </div> */}

          {/* Card Header */}
          <CardHeader
            image={configHome[0].value.image}
            title={configHome[0].value.title}
          />
          {/* END Card Header */}

          <div className="linkedMedia">
            <BreadCrumbs link1="Home" to1="/" page2="Multimedia" />
          </div>
          <div className="pidatoKU">
            <VMedia
              headline={configHome[1].value[0].title}
              source={`https://www.youtube.com/embed/${configHome[1].value[0].path}`}
              desc={configHome[1].value[0].description}
              youtubePath={configHome[1].value[0].path}
            />
          </div>

          <div className="wrapperCardInfo">
            <CardInformasi
              image={`https://data.pdiperjuangan.id/public/${configHome[2].value[0].image}`}
              image2={`https://data.pdiperjuangan.id/public/${configHome[2].value[1].image}`}
              image3={`https://data.pdiperjuangan.id/public/${configHome[2].value[2].image}`}
              image4={`https://data.pdiperjuangan.id/public/${configHome[2].value[3].image}`}
              text={`${configHome[2].value[0].title}`}
              text2={`${configHome[2].value[1].title}`}
              text3={`${configHome[2].value[2].title}`}
              text4={`${configHome[2].value[3].title}`}
              to1="/multimedia/siaran_langsung"
              to2="/multimedia/dokumentasi"
              to3="/multimedia/teaser"
              to4="/multimedia/wawancara"
              paddingBottom="20px"
            />
          </div>

          <div
            className="panggung"
            style={{
              backgroundImage: `url(https://data.pdiperjuangan.id/public/${configHome[3].value.image})`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="textPanggung">
              <h3 className="panggungH1">{configHome[3].value.title}</h3>
              <a
                className="buttonSubscribe"
                href="https://www.youtube.com/user/DPPPDIPerjuangan?sub_confirmation=1"
              >
                <img loading="lazy" src={Subscribe} alt="" width="150" />
              </a>
            </div>
          </div>

          <div className="divider-video-terbaru">
            <MainDivider text="Video Terbaru" />
          </div>

          <div className="cardContent">
            {configHome[4].value.map((e, i) => (
              <Cards
                key={i}
                category={"Multimedia"}
                page="detail-multimedia"
                id={e.id}
                imageCard={e.path}
                textCategoryChild={e.category_child_name}
                author={e.author}
                title={e.title}
                slug={e.title}
                dateTime={e.created_at}
                borderRadius="10px"
                cardType={e.filetype}
              />
            ))}

            <div className="button-cardBerita">
              <MainButton
                name="lihat semua"
                margin="0px 0 0 0"
                pages="/multimedia/all"
              />
            </div>
          </div>
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default MultimediaPage;
