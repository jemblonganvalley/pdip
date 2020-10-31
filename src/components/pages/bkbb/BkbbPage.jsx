import React, { useEffect } from "react";
import "./BkbbPage.scss";

import { useState } from "react";
import Cards from "../../cards/MainCards";
import MainButton from "../../buttons/MainButton";
import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import CardQuotes from "../../cardquotes/CardQuotes";
import CardHeader from "../../cardheader/CardHeader";
import VMedia from "../../VMedia/VMedia";
import Wait from '../../wait/Wait'
import { Link } from "react-router-dom";

export const LighBox = ({ source }) => {
  return (
    <>
      <main
        className="container_lightbox-bkbbPage">
        <iframe className="overlay-youtube-bkbbPage"
          src={`https://www.youtube.com/embed/${source}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {console.log(source)}
      </main>
    </>
  );
};

const BkbbPage = () => {
  const [configHome, setConfigHome] = useState([]);
  const [showVid, setShowVid] = useState(false);

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
      "https://atur.biar.pw/api/web/pages/bkbb",
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
      {showVid && (
        <>
          <span
            onClick={() => {
              setShowVid(false);
            }}
            class="fa fa-close" id="btn-overlay-video-yt-bkbb"
          ></span>
          <LighBox source={configHome[2].value[0].path} />
        </>
      )}

      {configHome.length > 0 ? (
        <div className="wrapperBkbbPage">
          {/* Card Header */}
          <CardHeader image={configHome[0].value.image} title={configHome[0].value.title}/>
          {/* END Card Header */}

          <div className="linkedBkbbPage">
            <BreadCrumbs link1="Home" to1="/" page2="Bung Karno Bapak Bangsa" />
          </div>

          <section className="lahirnyaPancasila col mx-auto" >
            <Link to='/detail-article/109/Lahirnya-Pancasila-1-Juni-1945' component='a'>
            <div
              className="box-lahirnyaPancasila "
              style={{
                backgroundImage: `url(https://atur.biar.pw/public/${configHome[1].value.image})`,
              }}
            >
              <div className="redBox mt-auto">
                <div className="col col-lg-4 red-box-title ">
                  <h3>{configHome[1].value.title}</h3>
                </div>
                <div
                  className="txt2-redBox"
                  dangerouslySetInnerHTML={{
                    __html: configHome[1].value.paragraph,
                  }}
                ></div>
              </div>
            </div>
            </Link>
          </section>

          {configHome[2].value.map((e, i) => (

          <section className="videoBungKarno">
                  <VMedia
                  headline={e.title}
                  source={`https://www.youtube.com/embed/${e.path}`}
                  desc={e.description}
                />
          </section>

          ))}   
                {/* // className="bannerYoutube"
                // style={{
                //   backgroundImage: `url(https://i.ytimg.com/vi/${e.path}/hqdefault.jpg)`,
                // }}
                // key={i}
                // onClick={() => {
                //   setShowVid(true);
                // }}
              >
                
                {/* <div className="textYoutube">
                  <div className="wrapperText">
                    <ul className="circleYoutube">
                      <li>
                        <i
                          className="fa fa-play"
                          style={{ color: "white" }}
                        ></i>
                      </li>
                    </ul>
                    <div className="textInfoYT">
                      <h3 className="videoTerbaru">{e.title}</h3>
                      <br />
                      <h6 className="siaranHut">{e.description}</h6>
                    </div>
                  </div>
                </div> */}
              {/* </div> */} 
            
             {/* <iframe
        //   width="80%"
        //   height="90%"
        //   src={`https://www.youtube.com/embed/jY8tAjHtO44`}
        //   frameBorder={0}
        //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        //   allowFullScreen
        // /> */}
          

          <div className="divider-materi-pokok-bkbbPage">
          <MainDivider
            text="Materi Pokok Pendukung"
            garisMerah="8rem"
          />
          </div>

          <div className="wrapperCard">
            <div className="cardKolum">
              {configHome.length > 0 &&
                configHome[3].value.map((e, i) => {
                  return (
                    <Cards
                      type={e.type}
                      imageCard={e.path}
                      title={e.title}
                      slug={e.title}
                      borderRadius="10px"
                      key={i}
                      page='detail-article'
                      id={e.id}
                    />
                  );
                })}
            </div>
          </div>

          <div className="btnLihatSemua">
            <MainButton name="lihat semua" margin="0" pages="/materipokok" />
          </div>
          <div
            className="bannerBkbb"
            style={{
              background: `url(https://atur.biar.pw/public/${configHome[4].value.image})`,
              backgroundAttachment: "fixed",
              backgroundSize: "auto",
              backgroundPosition: "center",
            }}
          >
            <i className="fas fa-quote-right"></i>
            <h4 className="custom">{configHome[4].value.title}</h4>
            <h5
              className="custom"
              dangerouslySetInnerHTML={{
                __html: configHome[4].value.paragraph,
              }}
            ></h5>
            <i className="fas fa-quote-right"></i>
            <small>Bung Karno, 17 Agustus 1946</small>

            {/* Background Black transparent */}
            <div className="bg-black-transparent">
              
            </div>
            {/* END Background black transparent */}
          </div>

          {/* Column Card Wejangan Bungkarno */}
          <div className="col-card-wejangan-bungkarno">
            {/* Box1 Image */}
            <div className="box1-image">
              {configHome[5].value.map((e, i) => (
                <CardQuotes
                  page="/quotes"
                  img={`https://atur.biar.pw/public/${e.path}`}
                  icon1="fas fa-quote-right"
                  txt1={e.title}
                  icon2="fas fa-quote-right"
                  txt2={`Soekarno, ${e.quotes_date}`}
                />
              ))}
            </div>
            {/* END Box1 Image */}
          </div>

          <div className="btnLihatSemua">
            <MainButton
              name="lihat semua"
              margin="0rem 0 0 0"
              pages="/wejanganbungkarno"
            />
          </div>

          <div className="backGroundGray"></div>
        </div>
      ) : (
        <>
          <Wait />
        </>
      )}
    </>
  );
};

export default BkbbPage;
