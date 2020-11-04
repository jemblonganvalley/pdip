import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../search/Search.scss";
import img from "../../../img/profil.png";
import img5 from "../../../img/img5.jpg";
import kampanye from "../../../img/kampanye.jpg";
import AngkaPaginationEvent from "../../paginationevent/AngkaPaginationEvent";
import CardSearch from "../../cardsearch/CardSearch";
import { action, useStoreActions, useStoreState } from "easy-peasy";
import "../../../database/globalState";
import { useEffect } from "react";
import Wait from "../../wait/Wait";

const Search = () => {
  let [cardSearch, setCardSearch] = useState([
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
    {
      page: "/",
      img: img5,
      title1: "Berita |",
      title2: "Nasional",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!",
    },
  ]);

  let [currentPage2, setCurrentPage2] = useState(1);
  let [itemEventPerPage] = useState(9);

  const indexOfLastPost = currentPage2 * itemEventPerPage;
  const indexOfFirstPost = indexOfLastPost - itemEventPerPage;
  const currentPosts = cardSearch.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage2(pageNumber);

  // Onchange text from input search
  const todos = useStoreState((state) => state.todos);
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((action) => action.setSearch);

  let [show, setShow] = useState(false);

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

    const resConfigHome = await fetch("https://atur.biar.pw/api/blog/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify({
        limit: 10,
        keyword: search,
      }),
    });

    const dataConfigHome = await resConfigHome.json();
    setConfigHome(dataConfigHome.query.data);
  };

  useEffect(() => {
    getConfigHome();
  }, [search]);

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
                  value={search}
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
                  {/* Card Search */}
                  <CardSearch cardSearchItem={configHome} />
                  {/* END Card Search */}
                </div>

                <div className="column-info-kanan">
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
                </div>
              </div>
              {/* END Column2 */}

              {/* Column3 Paginate */}
              <div className="column3-pagination-pencarian">
                <AngkaPaginationEvent
                  itemEventPerPage={itemEventPerPage}
                  totalPosts={cardSearch.length}
                  paginate={paginate}
                />
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
