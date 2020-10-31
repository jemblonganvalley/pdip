import React, { useEffect, useState } from "react";

import "../page1/Page1.scss";
import BreadCrumbs from "../../../breadcrumbs/BreadCrumbs";
import CarouselBeritaPage1 from "../../../carouselberitapage1/CarouselBeritaPage1";
import MainDivider from "../../../divider/MainDivider";
import { useParams } from "react-router-dom";
import CardSocialMedia from "../../../cardsocialmedia/CardSocialMedia";

const Page1 = () => {
  let { id } = useParams();
  const [detailPage, setDetailPage] = useState();
  const [missing, setMissing] = useState(false);

  const getDetailPage = async () => {
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
      `https://atur.biar.pw/api/blog/find/?id=${id}`,
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
    setDetailPage(dataConfigHome.query);
  };

  useEffect(() => {
    getDetailPage();
    window.scrollTo(0, 0);
    setTimeout(() => {
      setMissing(true);
    }, 5000);
  }, []);

  return (
    <>
      {detailPage ? (
        <div className="wrapperBeritaPage1">
          {/* Untuk page detail berita tidak memakai Headers */}

          {/* <div className="headers-BeritaPage1">
            <div className="backgrounds">
              <div className="textBackgroundBerita">
                <h2 className="txt-backg-beritaPage1">
                  {detailPage.category_name}
                </h2>
              </div>
            </div>
          </div> */}
          <div className="linkedBeritaPage1">
            <BreadCrumbs
              link1="Home"
              to1="/"
              link2={detailPage.category_name}
              to2={`/${detailPage.category_name}`}
              page3={detailPage.category_name}
              link3={detailPage.category_child_name}
              to3={`/article/${detailPage.id_category_child}/${detailPage.category_name}`}

            />
          </div>

          {/* Container1 */}
          <div className="container-1-beritaPage1">
            {/* Column1 */}
            <div className="col1-container-1-beritaPage1">
              {/* Section1 */}
              <div className="section1-col1-beritaPage1">
                <h2 className="txt-title">{detailPage.title}</h2>
              </div>
              {/* END Section1 */}

              {/* Section2 */}
              <div className="section2-col1-beritaPage1">
                {/* Row1 */}
                {/* <div className="row1-beritaPage1">
                                <div className="box-btn">
                                    <button className="btn-love">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <p className="jm-fav">
                                        0
                                    </p>
                                </div>
                            </div> */}
                {/* END Row1 */}

                {/* Row2 */}
                <div className="row2-beritaPage1">
                  <small className="date">{detailPage.author}</small>
                  <div className="garis-panjang-tipis">
                    <div className="garis-merah-tebal"></div>
                  </div>
                </div>
                {/* END Row2 */}

                {/* Row3 */}
                {/* <div className="row3"> */}
                {/* <div className="box-btn"> */}
                {/* <p className="jm-share">
                                        96
                                    </p>
                                    <button className="btn-love">
                                        <i className="fas fa-share"></i>
                                    </button> */}
                {/* </div> */}
                {/* </div> */}
                {/* END Row3 */}
              </div>
              {/* END Section2 */}
            </div>
            {/* END Column1 */}

            {/* Column2 */}
            <div className="col2-container-1-beritaPage1">
              {/* Section1 */}
              {/* <div className="section1-beritaPage1">
                            <h5 className="txt-desk-section1-beritaPage1">
                                So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distincly to perceive that my own individuality was now merged in a joint stock company of two ; that my free will had received a mortal.
                            </h5>
                        </div> */}
              {/* END Section1 */}
              
              {/* Section2 */}
              {detailPage.path.includes('uploads') ? (
                    <img
                  className="img-beritaPage1"
                  src={`https://atur.biar.pw/public/${detailPage.path}` }
                  alt={`${detailPage.path}`}
                  style={{
                    // height: "40vh",
                    objectFit: "cover",
                  }}
                />
              ) : (
                 <iframe className='col-12' height='500px' src={`https://www.youtube.com/embed/${detailPage.path}`} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              )}
            

              {/* {detailPage.category_name == "Berita_video" && (
                <CarouselBeritaPage1 />
              )} */}
              {/* END Section2 */}

              {/* Section3 */}
              <div className="section3-beritaPage1">
                <p
                  className="txt-desk-section3-beritaPage1"
                  dangerouslySetInnerHTML={{ __html: detailPage.description }}
                ></p>
              </div>
              {/* END Section3 */}

              {/* Section4 */}
              {/* <div className="section4-beritaPage1">
                            <i className="fas fa-quote-right"></i>

                            <h5 className="txt-desk-section4-beritaPage1">
                                In the tumultuos business of cutting-in and attending to a whale, there is much
                            </h5>
                        </div> */}
              {/* END Section4 */}

              {/* Section5 */}
              <div className="section5-beritaPage1">
                <div className="garis-panjang"></div>

                <div className="box-medsos-beritaPage1">
                  <CardSocialMedia/>

                  {/* <div className="socialMedia">
                    <small>SHARE : </small>
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-twitter"></i>
                    <i class="fa fa-instagram"></i>
                    <i class="fa fa-whatsapp"></i>
                  </div> */}
                </div>
              </div>
              {/* END Section5 */}

              {/* Section6 */}
              <div className="section6-beritaPage1">
                {/* Column1 */}

                {/* END Column1 */}

                {/* Column2 */}

                {/* END Column2 */}
              </div>
              {/* END Section6 */}
            </div>

            {/* END Column2 */}
          </div>
          {/* END Container1 */}

          <div className="col1-section6-beritaPage1">
            <MainDivider
              text="Berita Terbaru"
              garisMerah="7rem"
              mrgn="0rem 0"
            />
          </div>

          {/* CARD BERITA LAINNYA */}
          {/* <div className="col2-section6-beritaPage1">
                    <Cards imageCard={pemilu18}
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019" title="Lorem ipsum dolor, sit amet consectetur adipisicing." paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                        borderRadius="10px" />
                    <Cards imageCard={pemilu19}
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019" title="Lorem ipsum dolor, sit amet consectetur adipisicing." paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                        borderRadius="10px" />
                    <Cards imageCard={pemilu20}
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019" title="Lorem ipsum dolor, sit amet consectetur adipisicing." paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                        borderRadius="10px" />
                </div> */}
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
            {missing ? "page tidak ditemukan" : "wait"}
          </div>
        </>
      )}
    </>
  );
};

export default Page1;
