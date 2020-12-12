import React, { useEffect, useState } from "react";

import "./PidatoAll.scss";
import { NavLink, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { lazy } from "react";
import { Suspense } from "react";

const BreadCrumbs = lazy(() => import("../../../breadcrumbs/BreadCrumbs"));
const MainDivider = lazy(() => import("../../../divider/MainDivider"));
const Cards = lazy(() => import("../../../cards/MainCards"));
const Wait = lazy(() => import("../../../wait/Wait"));

const PidatoAll = () => {
  const [category_id, setCategory_id] = useState(44);
  const [numPage, setNumPage] = useState(1);
  const [configHome, setConfigHome] = useState([]);
  const [pag, setPag] = useState();
  const [defaultUrl, setDefaultUrl] = useState(
    `https://data.pdiperjuangan.id/api/blog/data?page=${numPage}`
  );

  const AngkaPaginationEvent = ({ itemEventPerPage, totalPosts, paginate }) => {
    let [active, setActive] = useState(false);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / itemEventPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <Suspense
        fallback={
          <div>
            <Wait />
          </div>
        }
      >
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
      </Suspense>
    );
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
      `https://data.pdiperjuangan.id/api/blog/data?page=${numPage}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          order: { key: "id", value: "desc" },
          where: { key: "blog.id_category", value: category_id },
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
      {/* <SideMenu /> */}

      {configHome.length > 0 ? (
        <div className="wrapper-berita-nasional">
          <div className="linked-berita-nasional">
            <BreadCrumbs
              link1="Home"
              to1="/"
              link2={`${configHome[0].category_name}`}
              to2={`/${configHome[0].category_name
                .replace(/\s/g, "-")
                .toLowerCase()}`}
              page3={configHome[0].category_child_name}
            />
          </div>

          {/* Container1 */}
          <span className="divider-page-berita-nasional">
            <MainDivider text={configHome[0].category_name} />
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
                        category={e.category_name}
                        imageCard={e.path}
                        title={e.title}
                        slug={e.title}
                        textSmall={e.author}
                        dateTime={e.created_at}
                        page={"/detail-article"}
                        id={e.id}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
            {/* END Column Card */}

            {/* Column Pagination */}
            {/* {pag && (
              <div className="column-pagination-berita-nasional">
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
                    previousClassName="prev"
                    nextLabel={">>"}
                    nextClassName="next"
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

            {/* END Column Pagination */}
          </div>
          {/* END Container2 */}
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default PidatoAll;
