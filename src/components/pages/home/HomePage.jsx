import React, { useEffect, useState } from "react";
// import './HomePage.css'
import "./HomePage.scss";
import MainSlider from "../../slider/MainSlider";
import MusicPdi from "../../musicpdi/MusicPdi";
import Cards from "../../cards/MainCards";
import MainButton from "../../buttons/MainButton";
import MainDivider from "../../divider/MainDivider";
import CarouselKM from "../../carouselKM/CarouselKM";
import MusicMobile from "../../musicPdiMobile/MusicMobile";
import KMobile from "../../carouselKMobile/KMobile";
import { CarouselDuelBerita } from "../../carouselDualBerita/CarouselDuelBerita";
import { Link, Redirect } from "react-router-dom";
import VMedia from "../../VMedia/VMedia";


export const LighBox = ({source})=>{


  return(
    <>
      <main className="container_lightbox">
        <iframe className="overlay-youtube-home" src={`https://www.youtube.com/embed/${source}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {console.log(source)}
      </main>
    </>
  )
}

const HomePage = () => {
  const [configHome, setConfigHome] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [showVid, setShowVid] = useState(false)


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
      "https://atur.biar.pw/api/web/pages/home",
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
    window.scrollTo(0, 0);
    getConfigHome();
    getGallery();
  }, []);

  return (
    <>
      <div
        className="homepage"
        style={{
          overflowX: "hidden",
          paddingBottom: '40px'
        }}
      >
        {configHome.length > 0 && (
          <>
          <MainSlider value={configHome[0].value} cls={configHome[0].class} />

          {/* LIGHTBOX */}
          {showVid && (
            <>
            <span onClick={()=>{
              setShowVid(false)
            }} class='fa fa-close' id="btn-overlay-video-yt"></span>
            <LighBox source={configHome[3].value[0].path}/>
            </>
          )}
          </>
        )}

        {/* STATISTIK INFO COVID */}
        <div className="statistik-covid" style={{
          backgroundColor: '#000'
        }}>
          <script src="https://apps.elfsight.com/p/platform.js" defer style={{
            backgroundColor: '#000'
          }}></script>
          <div className="elfsight-app-b27c8ef3-b23c-490b-b273-df4e80eb8980" style={{
            backgroundColor: '#000'
          }}>

          </div>
        </div>
        
        {/* LOGO ICON COVID DAN LAIN LAIN */}
        <div className="homePageTwo">
          <div className="customRow">
            {configHome.length > 0 &&
              configHome[1].value.map((e, i) => (
                <div className="col-lg-4 custom" key={i}>
                  {/* URUTAN LINK */}
                  <a href={i === 0 ? '/' : i === 1 ? 'https://www.pdipkreatif.id' : '/event'} target={i == 1 ? '_blank' : ''} className="btn-customBorder">
                    <div className="customBorder">
                      <img
                        src={`https://atur.biar.pw/public/${e.image}`}
                        alt=""
                      />
                      <h5>{e.title}</h5>
                    </div>
                  </a>
                </div>
              ))}
          </div>

          {/* SECTION VIDEO  */}
          <div className="videoPage">
            <div className="divider-video-home">
            <MainDivider text="Video"/>
            </div>

            {configHome.length > 0 && (
              <div
                className="paragrapVideo"
                dangerouslySetInnerHTML={{ __html: configHome[2].value }}
              ></div>
            )}

            {configHome.length > 0 &&
              configHome[3].value.map((e, i,) => (
                <div
                  // style={{
                  //   backgroundImage: `url(https://i.ytimg.com/vi/${e.path}/hqdefault.jpg)`,
                  // }}
                  // key={i}
                  // onClick={()=>{
                  //             setShowVid(true)
                  //           }}
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

            {/* ONTAINER CARD GALLERY */}
            <div className="cardContainer">
              {configHome.length > 0 &&
                configHome[4].value.map((e, i) => {
                  return (
                    <Cards
                      type={e.type}
                      imageCard={e.path}
                      // textSmall={e.title}
                      title={e.title}
                      borderRadius="10px"
                      key={i}
                      page='/article'
                    />
                  );
                })}
            </div>

            <div className="btn-lihatSemua-card">
            <MainButton
              name="lihat semua"
              margin="0px 0 0 0"
              pages="videomedia"
            />
            </div>
          </div>

          <div className="beritaPage">
            <div className="divider-berita">
              <MainDivider text="berita" mrgn="40px 0"/>
            </div>

            {configHome.length > 0 && (
              <div
                className="paragrapBerita"
                dangerouslySetInnerHTML={{ __html: configHome[5].value }}
              ></div>
            )}
          </div>
        </div>

        {configHome.length > 0 && <CarouselKM data={configHome[6].value} />}

        {/* <KMobile /> */}
        {configHome.length > 0 && <KMobile data={configHome[6].value} />}

        <div className="cardContent">
          {configHome.length > 0 && (
            <>
              {configHome[7].value.map((e, i) => {
                return (
                  <Cards
                    page='detail-article'
                    id={e.id}
                    imageCard={e.path}
                    textCategoryChild={e.category_child_name}
                    author={e.author}
                    title={e.title}
                    dateTime={e.created_at}
                    borderRadius="10px"
                  />
                );
              })}
            </>
          )}
        </div>

        <span className="btnSize">
          <MainButton name="lihat semua" margin="1rem 0 0 0" pages="/berita" />
        </span>
            
        <div className="divider-laguPerjuangan">
          <MainDivider text="Lagu Perjuangan" mrgn="0 0 40px 0"/>
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
          <MainDivider text="Foto Gallery" mrgn="40px 0"/>
        </div>
        {gallery.length > 0 && (
          <CarouselDuelBerita current_page={2} data={gallery} />
        )}
      </div>
    </>
  );
};

export default HomePage;
