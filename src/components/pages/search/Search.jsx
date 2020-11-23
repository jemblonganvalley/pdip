import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import "../search/Search.scss";
import img from "../../../img/profil.png";
import img5 from "../../../img/img5.jpg";
import kampanye from "../../../img/kampanye.jpg";
import CardSearch from "../../cardsearch/CardSearch";
import { action, useStoreActions, useStoreState } from "easy-peasy";
import "../../../database/globalState";
import { useEffect } from "react";
import Wait from "../../wait/Wait";
import ReactPaginate from "react-paginate";


const Search = () => {
  // Onchange text from input search
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((action) => action.setSearch);
  // const querySearch = useQuery("search");
  let [show, setShow] = useState(false);

  const [configHome, setConfigHome] = useState([]);
  const [pag, setPag] = useState();
  const [numPage, setNumPage] = useState(1);

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
            {pageNumbers.slice(0, 10).map((number) => (
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
      `https://atur.biar.pw/api/blog/search?page=${numPage}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          limit: 10,
          keyword: search,
        }),
      }
    );

    const dataConfigHome = await resConfigHome.json();
    setConfigHome(dataConfigHome.query.data);
    setPag(dataConfigHome.query);
  };

  useEffect(() => {
    getConfigHome();
  }, [search, numPage]);

  return (
    <>
      {/* Modal Display Search */}
      {configHome.length > 0 ? (
        <>
          <div className="modal-display-search">
            {/* Bg Black Search */}
            <form action="" className="background-black-search">
              <h6 className="txt-kata-yang-diCari" id="txtGroup">
                Kata yang dicari :
              </h6>

              <div className="kolom-search-modal">
                {/* For Save Change Text */}
                <div
                  className="box-change-text"
                  style={{
                    display: show ? "none" : "flex",
                  }}
                ></div>
                {/* END For Save Change Text */}
                <input
                  type="text"
                  className="input-search"
                  id="txtGroup"
                  autoFocus
                  value={search ? search : ""}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />

                <button className="btn-icon-pageSearch">
                  <span className="material-icons" id="txtGroup">
                    search
                  </span>
                </button>
              </div>
            </form>
            {/* END Bg Black Search */}

            {/* Container Hasil Pencarian */}
            <div className="container-hasil-pencarian">
              {/* Column1 */}
              <div className="column1-hasil-pencarian">
                <h6 className="txt-hasil-pencarian">Hasil Pencarian</h6>

                <div className="garis-abu-abu"></div>
              </div>
              {/* END Column1 */}

              {/* Column2 */}
              <div className="column2-hasil-pencarian">
                <div className="column-info-kiri">
                  <CardSearch cardSearchItem={configHome} />
                </div>

                {/* <div className="column-info-kanan">
                  <Link className="btn-info-kanan">
                    <i className="fas fa-plus" id="fontGroup-info"></i>

                    <p className="title-info" id="fontGroup-info">
                      partai
                    </p>
                  </Link>

                  <Link className="btn-info-kanan">
                    <i className="fas fa-plus" id="fontGroup-info"></i>

                    <p className="title-info" id="fontGroup-info">
                      bungkarno bapak bangsa
                    </p>
                  </Link>
                </div> */}
              </div>
              {/* END Column2 */}

              {/* Column3 Paginate */}
              <div className="column3-pagination-pencarian">
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
                        pageRangeDisplayed={9}
                        marginPagesDisplayed={0}
                        previousLabel={'<<'}
                        previousClassName='prev'
                        nextLabel={'>>'}
                        nextLinkClassName='next'
                        containerClassName='angka-pagination'
                        pageClassName='paginationLink'
                        activeClassName='activePagination'
                        eventListener='onClick'
                        onPageChange={(e) => {
                          setNumPage(e.selected + 1)
                        }} />
                    </div>
                  </div>
                )}
              </div>
              {/* END Column3 Paginate */}
              {/* END Container Hasil Pencarian */}
            </div>
            {/* END Container Hasil Pencarian */}
          </div>
          {/* END Modal Display Search */}
        </>
      ) : (
        <>
          <Wait />
        </>
      )}
    </>
  );
};

export default Search;
