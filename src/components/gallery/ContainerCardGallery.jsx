import React, { useEffect, useState } from "react";

import "./containerCardGallery.scss";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import MainDivider from "../divider/MainDivider";
import { NavLink, useParams } from "react-router-dom";
import Cards from "../cards/MainCards";
import Wait from "../wait/Wait";
import ReactPaginate from "react-paginate";

const ContainerCard = () => {
  const { category_id } = useParams();
  const [configHome, setConfigHome] = useState([]);
  const [numPage, setNumPage] = useState(1);
  const [pag, setPag] = useState();
  const AngkaPaginationEvent = ({ itemEventPerPage, totalPosts, paginate }) => {
    let [active, setActive] = useState(false);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / itemEventPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <>
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
      </>
    );
  };

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
      `https://atur.biar.pw/api/gallery/album?page=${numPage}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          order: { key: "id", value: "desc" },
          where: { key: "type", value: "image" },
          limit: 9,
        }),
      }
    );

    const dataConfigHome = await resConfigHome.json();
    // console.log(dataConfigHome.query);
    setConfigHome(dataConfigHome.query.data);
    setPag(dataConfigHome.query);
  };

  useEffect(() => {
    getConfigHome();
    window.scrollTo(0, 0);
  }, [category_id, numPage]);

  return (
    <>
      {configHome.length > 0 ? (
        <div className="wrapper-berita-nasional">
          <div className="linked-berita-nasional">
            <BreadCrumbs
              link1="Home"
              to1="/"
              link2={`/berita`}
              to2={`/berita`}
              page3={"gallery"}
            />
          </div>

          {/* Container1 */}
          <span className="divider-page-berita-nasional">
            <MainDivider text={`Gallery`} />
          </span>
          {/* END Container1 */}
          {/* Container2 */}
          <div className="container2-berita-nasional">
            {/* Column Card */}
            <div className="column-card-berita-nasional">
              <div className="containerCard-berita-nasional">
                {configHome.length > 0 && (
                  <>
                    {configHome.map((e, i) => (
                      <Cards
                        category={e.category}
                        imageCard={e.cover}
                        title={e.album_name}
                        slug={e.album_name}
                        textSmall={e.album_description}
                        // dateTime={e.created_at}
                        page={`/gallery/detail-gallery`}
                        id={e.id_album}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
            {/* END Column Card */}

            {/* Column Pagination */}
            {/* <div className="column-pagination-berita-nasional">
                        <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={cardBeritaNasional.length} paginate={paginate} />
                    </div> */}
            {/* END Column Pagination */}
          </div>
          {/* END Container2 */}
          {/* Column Pagination */}
          {pag && (
            <div className="container-angka-pagination">
              <div className="col-angka-pagination">
                <ReactPaginate
                  initialPage={0}
                  pageCount={pag.total / pag.per_page}
                  pageRangeDisplayed={9}
                  marginPagesDisplayed={0}
                  previousLabel={"<<"}
                  previousClassName="prev"
                  nextLabel={">>"}
                  nextClassName="next"
                  containerClassName="angka-pagination"
                  pageClassName="paginationLink"
                  activeClassName="activePagination"
                  eventListener="onClick"
                  onPageChange={(e) => {
                    // console.log(e);
                    setNumPage(e.selected + 1);
                  }}
                />
              </div>
            </div>
          )}
          {/* END Column Pagination */}
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default ContainerCard;
