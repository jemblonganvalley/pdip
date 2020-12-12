import "./HomePage.scss";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { CarouselDuelBerita } from "../../carouselDualBerita/CarouselDuelBerita";
import BMKG from "../../../img/replace_bmkg.png";

const MainSlider = lazy(() => import("../../slider/MainSlider"));
const MusicPdi = lazy(() => import("../../musicpdi/MusicPdi"));
const Cards = lazy(() => import("../../cards/MainCards"));
const MainButton = lazy(() => import("../../buttons/MainButton"));
const MainDivider = lazy(() => import("../../divider/MainDivider"));
const CarouselKM = lazy(() => import("../../carouselKM/CarouselKM"));
const MusicMobile = lazy(() => import("../../musicPdiMobile/MusicMobile"));
const KMobile = lazy(() => import("../../carouselKMobile/KMobile"));
const VMedia = lazy(() => import("../../VMedia/VMedia"));
const Wait = lazy(() => import("../../wait/Wait"));
const MainSliderTablet = lazy(() =>
  import("../../slider/tablet/MainSliderTablet")
);
const MainSliderMobile = lazy(() =>
  import("../../slider/mobile/MainSliderMobile")
);
const Slidercom = lazy(() => import("../../slidercom/Slidercom"));

export const LighBox = ({ source }) => {
  return (
    <>
      <main className="container_lightbox">
        <iframe
          className="overlay-youtube-home"
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

const HomePage = () => {
  const [configHome, setConfigHome] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [showVid, setShowVid] = useState(false);

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 991 });
    return isTablet ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

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
      "https://data.pdiperjuangan.id/api/web/pages/home",
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
    window.scrollTo(0, 0);
    getConfigHome();
    getGallery();
  }, []);

  return (
    <Suspense
      fallback={
        <div>
          <Wait />
        </div>
      }
    >
      {configHome.length > 0 ? (
        <div
          className="homepage"
          style={{
            overflowX: "hidden",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {configHome.length > 0 && (
            <>
              {/* 0 r-carousel */}
              <Desktop>
                <MainSlider
                  value={configHome[0].value}
                  cls={configHome[0].class}
                />
              </Desktop>
              <Tablet>
                <MainSliderTablet
                  value={configHome[0].value}
                  cls={configHome[0].class}
                />
              </Tablet>
              <Mobile>
                <MainSliderMobile
                  value={configHome[0].value}
                  cls={configHome[0].class}
                />
              </Mobile>
              {/* LIGHTBOX */}
              {showVid && (
                <>
                  <span
                    onClick={() => {
                      setShowVid(false);
                    }}
                    className="fa fa-close"
                    id="btn-overlay-video-yt"
                  ></span>
                  <LighBox source={configHome[3].value[0].path} />
                </>
              )}
            </>
          )}
          {/* STATISTIK INFO COVID */}
          <div
            className="statistik-covid"
            style={{
              backgroundColor: "#000",
            }}
          >
            <script
              src="https://apps.elfsight.com/p/platform.js"
              defer
              style={{
                backgroundColor: "#000",
              }}
            ></script>
            <div
              className="elfsight-app-b27c8ef3-b23c-490b-b273-df4e80eb8980"
              style={{
                backgroundColor: "#000",
              }}
            ></div>
          </div>
          {/* LOGO ICON COVID DAN LAIN LAIN */}
          <div className="homePageTwo">
            <div className="customRow">
              {configHome.length > 0 &&
                configHome[1].value.map((e, i) => (
                  <div className="groupArticleUtama" key={i}>
                    <a
                      href={
                        i === 0
                          ? "/article/247/covid-19"
                          : i === 1
                          ? "https://pdipkreatif.id/home"
                          : "/event"
                      }
                      target={i == 1 ? "_blank" : ""}
                    >
                      <div className="customBorder">
                        <div className="itemImageCovid">
                          <img
                            src={`https://data.pdiperjuangan.id/public/${e.image}`}
                            alt=""
                            className="imageCovid"
                          />
                        </div>
                        <div className="itemTextCovid">
                          <h4 style={{ color: "#fff" }}>{e.title}</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              <div className="groupArticleUtama">
                <a href="https://www.bmkg.go.id/" target="#blank">
                  <div className="customBorder">
                    <div className="itemImageCovid">
                      <img src={BMKG} alt="" className="imageCovid" />
                    </div>
                    <div className="itemTextCovid">
                      <h4 style={{ color: "#fff" }}>INFO BMKG</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* SECTION VIDEO  */}
            <div className="videoPage">
              <div className="divider-video-home">
                <MainDivider text="Video" />
              </div>
              {/* 2 r-text-html */}
              {configHome.length > 0 && (
                <div
                  className="paragrapVideo r-text-html"
                  dangerouslySetInnerHTML={{ __html: configHome[2].value }}
                ></div>
              )}

              {/* 3 r-sync-video */}
              {configHome.length > 0 &&
                configHome[3].value.map((e, i) => (
                  <div
                    // style={{
                    //   backgroundImage: `url(https://i.ytimg.com/vi/${e.path}/hqdefault.jpg)`,
                    // }}
                    // key={i}
                    // onClick={()=>{
                    //             setShowVid(true)
                    //           }}
                    className="r-sync-video"
                    key={i}
                  >
                    {/* Card VMEDIA */}
                    <VMedia
                      headline={e.title}
                      source={`https://www.youtube.com/embed/${e.path}`}
                      desc={e.description}
                    />
                    {/* end Card VMEDIA */}

                    {/* <div className="textYoutube">
                    <div className="wrapperText">
                      <ul className="circleYoutube">
                        <li>
                            <i className="fa fa-play" style={{color : 'white'}}></i>
                        </li>
                      </ul>
                      <div className="textInfoYT">
                        <h3 className="videoTerbaru">{e.title}</h3>
                        <br />
                        <h6 className="siaranHut">{e.description}</h6>
                      </div>
                    </div>
                  </div> */}
                  </div>
                ))}
              {/* ONTAINER CARD VIDEO */}
              <div className="cardContainer">
                {/* 4 r-sync-video */}
                {configHome.length > 0 &&
                  configHome[4].value.map((e, i) => {
                    return (
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
                        category="Multimedia"
                      />
                    );
                  })}
              </div>
              <div className="btn-lihatSemua-card">
                <MainButton
                  name="lihat semua"
                  margin="0px 0 0 0"
                  pages="multimedia"
                />
              </div>
            </div>

            <div className="beritaPage">
              <div className="divider-berita">
                <MainDivider text="berita" mrgn="40px 0" />
              </div>

              {/* 5 r-text-html */}
              {configHome.length > 0 && (
                <div
                  className="paragrapBerita r-text-html"
                  dangerouslySetInnerHTML={{ __html: configHome[5].value }}
                ></div>
              )}
            </div>
          </div>
          {/* 6 r-sync-blog */}
          {configHome.length > 0 && <CarouselKM data={configHome[6].value} />}
          {/* <KMobile /> */}
          {configHome.length > 0 && <KMobile data={configHome[6].value} />}
          <div className="cardContent">
            {/* 7 r-sync-blog */}
            {configHome.length > 0 && (
              <>
                {configHome[7].value.map((e, i) => {
                  return (
                    <Cards
                      page="detail-article"
                      id={e.id}
                      imageCard={e.path}
                      category="Berita"
                      author={e.author}
                      title={e.title}
                      slug={e.title}
                      dateTime={e.created_at}
                      borderRadius="10px"
                      cardType={e.filetype}
                    />
                  );
                })}
              </>
            )}
          </div>
          <span className="btnSize">
            <MainButton
              name="lihat semua"
              margin="1rem 0 0 0"
              pages="/berita"
            />
          </span>

          {/* 8 r-sync-song */}
          <div className="divider-laguPerjuangan r-sync-song">
            <MainDivider text="Lagu Perjuangan" mrgn="0 0 40px 0" />
          </div>
          <MusicPdi />
          <MusicMobile />
          <div
            className="beritaTerbaru"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MainDivider text="Foto Gallery" mrgn="40px 0" />
          </div>

          {/* 9 and 10 */}
          {configHome.length > 0 && (
            <CarouselDuelBerita
              cat1={configHome[9].value}
              cat2={configHome[10].value}
            />
          )}
          <div className="slidercom">
            <Slidercom />
          </div>
        </div>
      ) : (
        <Wait />
      )}
    </Suspense>
  );
};

export default HomePage;
