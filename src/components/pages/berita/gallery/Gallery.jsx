import React, { useEffect, useState } from "react";
import "../page2/Page2.scss";
import { Link, NavLink, useParams } from "react-router-dom";
import parse from "html-react-parser";
import ReactPaginate from "react-paginate";

import BreadCrumbs from "../../../breadcrumbs/BreadCrumbs";
import Cards from "../../../cards/MainCards";
import CarouselBeritaPage2 from "../../../carouselberitapage2/CarouselBeritaPage2";
import Wait from "../../../wait/Wait";
import CardSocialMedia from "../../../cardsocialmedia/CardSocialMedia";

// READ BEFORE USE

const Gallery = () => {
  const [reload, setReload] = useState(false);
  const [configHome, setConfigHome] = useState([]);
  const [manyCard, setManyCard] = useState([]);
  const [numPage, setNumPage] = useState(1);
  const [pag, setPag] = useState();
  const [album, setAlbum] = useState([]);

  const AngkaPaginationEvent = ({ itemEventPerPage, totalPosts, paginate }) => {
    let [active, setActive] = useState(false);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / itemEventPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="container-angka-pagination">
        <div className="col-angka-pagination">
          {pageNumbers.map((number) => (
            <div
              key={number}
              className="angka-pagination"
              onClick={() => {
                setNumPage(number);
              }}
            >
              <NavLink
                className="paginationLink"
                to="#"
                activeClassName="active"
                style={
                  number === numPage
                    ? {
                        backgroundColor: "#d80010",
                        borderRadius: "100px",
                        padding: ".2px",
                        color: "#fff",
                      }
                    : null
                }
              >
                {number}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const { id } = useParams();

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
      `https://data.pdiperjuangan.id/api/gallery/data?page=${numPage}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          order: { key: "id", value: "desc" },
          where: { key: "id_album", value: id },
          // limit: 9,
        }),
      }
    );

    const dataConfigHome = await resConfigHome.json();
    setConfigHome(dataConfigHome.query.data);

    const resManyCard = await fetch(
      `https://data.pdiperjuangan.id/api/gallery/album?page=${numPage}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          where: { key: "type", value: "image" },
          order: { key: "id", value: "desc" },
          limit: 3,
        }),
      }
    );

    const dataManyCard = await resManyCard.json();
    setManyCard(dataManyCard.query.data);
    setPag(manyCard.query);
    // console.log(manyCard);

    const getAlbum = await fetch(
      `https://data.pdiperjuangan.id/api/gallery/album?page=${numPage}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          order: { key: "id", value: "desc" },
          where: { key: "id_album", value: id },
          limit: 9,
        }),
      }
    );

    const dataAlbum = await getAlbum.json();
    setAlbum(dataAlbum.query.data);
  };

  useEffect(() => {
    getConfigHome();
    window.scrollTo(0, 0);
  }, [reload, numPage]);

  return (
    <>
      {console.log(album)}
      {manyCard.length > 0 ? (
        <div className="wrapperBeritaPage2">
          <div className="linkedBeritaPage2">
            <BreadCrumbs
              link1="Home"
              to1="/"
              link2="Gallery"
              to2="/gallery"
              page3="Berita Foto"
            />
          </div>

          {/* Container1 */}
          <div className="container-1-beritaPage2">
            {/* Column1 */}
            <div className="col1-container-1-beritaPage2">
              <>
                {configHome.length > 0 && (
                  <CarouselBeritaPage2 data={configHome} />
                )}

                {/* Row2 */}
                <div className="row2-beritaPage2">
                  <div className="jdl-row2-beritaPage2">
                    {/* Column Txt Admin */}
                    <div className="column-txt-admin">
                      <small className="txt-admin" style={{ fontSize: "14px" }}>
                        {"PDI Perjuangan | "}
                        {album.length > 0 && album[0].created_at.split(" ")[0]}
                        {/* {configHome[0].created_at} */}
                      </small>
                    </div>
                    {/* END Column Txt Admin */}

                    {/* Column Button Love */}
                    {/* <div className="column-txt-btn-heart">
                      <a className="btn-fav">
                        <i className="fas fa-heart"></i>
                      </a>
                      <p className="txt-jm-fav">0</p>
                    </div> */}
                    {/* END Column Button Love */}
                  </div>

                  <h4 className="title-2-beritaPage2">{configHome[0].title}</h4>

                  <div className="txt-desk1-beritaPage2">
                    {parse(configHome[0].description)}
                  </div>

                  <div className="box-medsos-beritaPage2">
                    <CardSocialMedia
                      title={configHome.title}
                      imageUrl={configHome.path}
                    />
                  </div>
                </div>
                {/* END Row2 */}
              </>
            </div>
            {/* END Column1 */}

            <div className="container-garis-vertical">
              <div className="garis-vertical-tipis">
                <div className="garis-merah-tebal"></div>
              </div>
            </div>

            {/* Column2 */}
            <div
              className="cardContainer"
              onClick={() => {
                setReload(!reload);
              }}
            >
              {manyCard.length > 0 && (
                <>
                  {manyCard.map((e, i) => (
                    <Cards
                      category={"Gallery"}
                      imageCard={e.cover}
                      title={e.album_name}
                      slug={e.album_name}
                      textSmall={e.album_description}
                      dateTime={e.created_at}
                      page={`/gallery/detail-gallery`}
                      id={e.id_album}
                    />
                  ))}
                </>
              )}
            </div>
            {/* END Column2 */}
          </div>
          {/* END Container */}
          {/* {pag && (
            <div className="column-pagination-berita-nasional my-5">
              <AngkaPaginationEvent
                itemEventPerPage={pag.per_page}
                totalPosts={pag.total}
              />
            </div>
          )} */}
          {pag && (
            <div className="container-angka-pagination">
              <div className="col-angka-pagination">
                <ReactPaginate
                  initialPage={0}
                  pageCount={pag.total / pag.per_page}
                  pageRangeDisplayed={4}
                  marginPagesDisplayed={0}
                  previousLabel={"<<"}
                  previousLinkClassName="prev"
                  nextLabel={">>"}
                  nextLinkClassName="next"
                  containerClassName="angka-pagination"
                  pageClassName="paginationLink"
                  activeClassName="activePagination"
                  eventListener="onClick"
                  onPageChange={(e) => {
                    setNumPage(e.selected + 1);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default Gallery;
