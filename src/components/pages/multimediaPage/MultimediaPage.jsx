import React, { useEffect, useState } from "react";
import "./MultimediaPage.scss";
import Wait from "../../wait/Wait";

import Cards from "../../cards/MainCards";
import perempuan from "../../../img/ig-perempuan.png";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import MainButton from "../../buttons/MainButton";
import MainDivider from "../../divider/MainDivider";
import CardInformasi from "../../cardInformasi/CardInformasi";
import VMedia from "../../VMedia/VMedia";

const MultimediaPage = () => {
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
      "https://atur.biar.pw/api/web/pages/multimedia",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

    const dataConfigHome = await resConfigHome.json();
    console.log(dataConfigHome.query);
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
          <div
            className="headerMedia"
            style={{
              background: `url(https://atur.biar.pw/public/${configHome[0].value.image})`,
            }}
          >
            <div className="textBannerMedia">
              <h2>{configHome[0].value.title}</h2>
            </div>
          </div>

          <div className="linkedMedia">
            <BreadCrumbs link1="Home" to1="/" page2="Multimedia" />
          </div>
          <div className="pidatoKU">
            <VMedia
              headline={configHome[1].value[0].title}
              source={`https://www.youtube.com/embed/${configHome[1].value[0].path}`}
              desc={configHome[1].value[0].description}
            />
          </div>

          <div className="wrapperCardInfo">
            <CardInformasi
              image={`https://atur.biar.pw/public/${configHome[2].value[0].image}`}
              image2={`https://atur.biar.pw/public/${configHome[2].value[1].image}`}
              image3={`https://atur.biar.pw/public/${configHome[2].value[2].image}`}
              image4={`https://atur.biar.pw/public/${configHome[2].value[3].image}`}
              width1="35"
              width2="35"
              width3="35"
              width4="35"
              text={`${configHome[2].value[0].title}`}
              text2={`${configHome[2].value[1].title}`}
              text3={`${configHome[2].value[2].title}`}
              text4={`${configHome[2].value[3].title}`}
              to1="/siaranlangsung"
              to2="/videodokumen"
              to3="/videoteaser"
              to4="/wawancara"
              paddingBottom="20px"
            />
          </div>

          <div
            className="panggung"
            style={{
              backgroundImage: `url(https://atur.biar.pw/public/${configHome[3].value.image})`,
            }}
          >
            <div className="textPanggung">
              <h1 className="panggungH1">{configHome[3].value.title}</h1>
              <MainButton name="kunjungi" />
            </div>
          </div>

            <MainDivider text="Video Terbaru" mrgn="40px 0 40px 0" />

           <div className="cardContent">

            {configHome[4].value.map((e, i) => (
              <Cards
                category = {configHome[4].slug} 
                page="page"
                id={e.id}
                imageCard={e.path}
                textCategoryChild={e.category_child_name}
                author={e.author}
                title={e.title}
                dateTime={e.created_at}
                borderRadius="10px"
              />
            ))}
            </div>

        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default MultimediaPage;
