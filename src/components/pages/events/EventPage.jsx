import React, { useState, useEffect } from "react";
import "./EventPage.scss";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import Timeline from "../../timeline/Timeline";
import megawatisatu from "../../../img/megawati1.jpg";
import megawatidua from "../../../img/megawati2.jpg";

import AngkaPaginationEvent from "../../paginationevent/AngkaPaginationEvent";
import NotFound from "../../notFound/NotFound";
import ReactPaginate from "react-paginate";

const EventPage = () => {
  let [itemEvent, setItemEvent] = useState([
    {
      id: 1,
      images: megawatisatu,
      headIsi: "Ketua Umum",
      judul: "HUT 48 dan Rakernas || PDI Perjuangan",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium et voluptatum deleniti quidem odio quasi. At voluptatum dicta quia, voluptas voluptatibus eaque, ullam in vitae dolore, numquam similique nostrum perferendis?",
    },
    {
      id: 2,
      images: megawatidua,
      headIsi: "Kegiatan Partai",
      judul:
        "75 Tahun Merdeka, Masih ada yang Pertentangkan Agama dan Pancasila",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium et voluptatum deleniti quidem odio quasi. At voluptatum dicta quia, voluptas voluptatibus eaque, ullam in vitae dolore, numquam similique nostrum perferendis?",
    },
    {
      id: 3,
      images: megawatidua,
      headIsi: "Kegiatan Partai",
      judul:
        "75 Tahun Merdeka, Masih ada yang Pertentangkan Agama dan Pancasila",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium et voluptatum deleniti quidem odio quasi. At voluptatum dicta quia, voluptas voluptatibus eaque, ullam in vitae dolore, numquam similique nostrum perferendis?",
    },
    {
      id: 4,
      images: megawatidua,
      headIsi: "Kegiatan Partai",
      judul:
        "75 Tahun Merdeka, Masih ada yang Pertentangkan Agama dan Pancasila",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium et voluptatum deleniti quidem odio quasi. At voluptatum dicta quia, voluptas voluptatibus eaque, ullam in vitae dolore, numquam similique nostrum perferendis?",
    },
    {
      id: 5,
      images: megawatidua,
      headIsi: "Kegiatan Partai",
      judul:
        "75 Tahun Merdeka, Masih ada yang Pertentangkan Agama dan Pancasila",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium et voluptatum deleniti quidem odio quasi. At voluptatum dicta quia, voluptas voluptatibus eaque, ullam in vitae dolore, numquam similique nostrum perferendis?",
    },
    {
      id: 6,
      images: megawatidua,
      headIsi: "Kegiatan Partai",
      judul:
        "75 Tahun Merdeka, Masih ada yang Pertentangkan Agama dan Pancasila",
      paragrap:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium et voluptatum deleniti quidem odio quasi. At voluptatum dicta quia, voluptas voluptatibus eaque, ullam in vitae dolore, numquam similique nostrum perferendis?",
    },
  ]);

  let [currentPage, setCurrentPage] = useState(1);
  let [timelinePage, setTimelinePage] = useState(4);

  let [loading, setLoading] = useState(false);
  let [currentPage2, setCurrentPage2] = useState(1);
  let [itemEventPerPage] = useState(4);
  const [pag, setPag] = useState();
  const [numPage, setNumPage] = useState(1);

  const [dataTimeline, setDataTimeline] = useState([]);
  const [dataAgenda, setDataAgenda] = useState([]);

  const indexOfLastPost = currentPage2 * itemEventPerPage;
  const indexOfFirstPost = indexOfLastPost - itemEventPerPage;
  const currentPosts = itemEvent.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage2(pageNumber);

  async function getApiData() {
    const res = await fetch("http://192.168.8.18/api/auth/app", {
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

    const resConfigAgenda = await fetch("http://192.168.8.18/api/event/data", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    });
    const dataAgenda = await resConfigAgenda.json();
    setDataAgenda(dataAgenda.query.data);
    // console.log(dataAgenda)
    setPag(dataAgenda.query);

    const resConfigEvent = await fetch("http://192.168.8.18/api/event/find", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify({
        id: 13,
      }),
    });
    const dataConfigTimeline = await resConfigEvent.json();
    setDataTimeline(dataConfigTimeline.query);
  }

  useEffect(() => {
    getApiData();
  }, [numPage]);

  return (
    <div className="wrapperEvent">
      {/* <NotFound pengembanganDisplay={'none'} /> */}
      <div className="headEvent">
        <div className="textHeadEvent">
          <h2>Timeline Event </h2>
        </div>
      </div>

      <div className="linkedEvent">
        <BreadCrumbs link1="Home" to1="/" page2="Events" />
      </div>
      <div className="wrapperPaginations">
        <div className="paginationBulan">
          <div className="wrapperBulanItem">
            <div className="bulan-item">
              <a href="#" className="customBulan">
                <i className="fa fa-arrow-left"></i>
              </a>
            </div>

            <div className="bulan-item">
              <a href="#" className="customBulan">
                Januari 2020
              </a>
            </div>

            <div className="bulan-item">
              <a href="#" className="customBulan">
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="paginationTimeline">
                    <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={itemEvent.length} paginate={paginate} />
                </div> */}
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
                  // console.log(e);
                  setNumPage(e.selected + 1);
                }}
              />
            </div>
          </div>
        )}

        <div className="timeline">
          <Timeline timeline={dataAgenda} />
        </div>
      </div>
    </div>
  );
};

export default EventPage;
