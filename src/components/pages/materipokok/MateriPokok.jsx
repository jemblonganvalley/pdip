import React, { useState } from "react";

import bkbb5 from "../../../img/bkbb5.jpg";
import bkbb6 from "../../../img/bkbb6.jpg";
import bkbb7 from "../../../img/bkbb7.jpg";

import "./MateriPokok.scss";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import MainDivider from "../../divider/MainDivider";
import CardMateriPokok from "../../cardmateripokok/CardMateriPokok";
import AngkaPaginationEvent from "../../paginationevent/AngkaPaginationEvent";

const MateriPokok = () => {
  // Create Database Card Item
  let [cardMateriPk, setCardMateriPk] = useState([
    {
      pageMateriPk: "",
      imgMateriPk: bkbb5,
      txtJdlMateriPk: "Indonesia Menggugat Tahun 1930",
      txtParagrapMateriPk: "Pidato Pembelaan Bung Karno di Muka Hakim.",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: bkbb6,
      txtJdlMateriPk: "Kapitalisme Bangsa Sendiri 1932",
      txtParagrapMateriPk:
        "Lorem ipsum dolor sit amet, consectetur adipicising elit",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: bkbb7,
      txtJdlMateriPk: "MENCAPAI INDONESIA MERDEKA TAHUN 1933",
      txtParagrapMateriPk:
        "Lorem ipsum dolor sit amet, consectetur adipicising elit",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: bkbb5,
      txtJdlMateriPk: "Indonesia Menggugat Tahun 1930",
      txtParagrapMateriPk: "Pidato Pembelaan Bung Karno di Muka Hakim.",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: bkbb6,
      txtJdlMateriPk: "Kapitalisme Bangsa Sendiri 1932",
      txtParagrapMateriPk:
        "Lorem ipsum dolor sit amet, consectetur adipicising elit",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: bkbb7,
      txtJdlMateriPk: "MENCAPAI INDONESIA MERDEKA TAHUN 1933",
      txtParagrapMateriPk:
        "Lorem ipsum dolor sit amet, consectetur adipicising elit",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: bkbb5,
      txtJdlMateriPk: "Indonesia Menggugat Tahun 1930",
      txtParagrapMateriPk: "Pidato Pembelaan Bung Karno di Muka Hakim.",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: bkbb6,
      txtJdlMateriPk: "Kapitalisme Bangsa Sendiri 1932",
      txtParagrapMateriPk:
        "Lorem ipsum dolor sit amet, consectetur adipicising elit",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: bkbb7,
      txtJdlMateriPk: "MENCAPAI INDONESIA MERDEKA TAHUN 1933",
      txtParagrapMateriPk:
        "Lorem ipsum dolor sit amet, consectetur adipicising elit",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: bkbb5,
      txtJdlMateriPk: "Indonesia Menggugat Tahun 1930",
      txtParagrapMateriPk: "Pidato Pembelaan Bung Karno di Muka Hakim.",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: bkbb6,
      txtJdlMateriPk: "Kapitalisme Bangsa Sendiri 1932",
      txtParagrapMateriPk:
        "Lorem ipsum dolor sit amet, consectetur adipicising elit",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: bkbb7,
      txtJdlMateriPk: "MENCAPAI INDONESIA MERDEKA TAHUN 1933",
      txtParagrapMateriPk:
        "Lorem ipsum dolor sit amet, consectetur adipicising elit",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
  ]);
  // END Create Database Card Item

  let [currentPage2, setCurrentPage2] = useState(1);
  let [itemEventPerPage] = useState(9);

  const indexOfLastPost = currentPage2 * itemEventPerPage;
  const indexOfFirstPost = indexOfLastPost - itemEventPerPage;
  const currentPosts = cardMateriPk.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage2(pageNumber);

  return (
    <React.Fragment>
      <div className="wrapperMateriThumbnail">
        <div className="linkedMateriThumbnail">
          <BreadCrumbs
            link1="Home"
            to1="/"
            link2="Bung Karno Bapak Bangsa"
            to2="/bungkarno"
            page3="Materi Pokok Pendukung"
          />
        </div>
      </div>

      {/* Container1 */}
      <div className="container1-materiThumbnail">
        <MainDivider text="MATERI POKOK PENDUKUNG" mrgn="0 0 40px 0" />
      </div>
      {/* END Container1 */}

      {/* Container2 */}
      <div className="container2-materiThumbnail">
        {/* Column Card Materi Pokok */}
        <div className="col-card-materiThumbnail">
          <CardMateriPokok cardMateriPokokItem={currentPosts} />
        </div>
        {/* END Column Card Materi Pokok */}

        {/* Column Pagination */}
        <div className="col-pagination-materi-pokok">
          <AngkaPaginationEvent
            itemEventPerPage={itemEventPerPage}
            totalPosts={cardMateriPk.length}
            paginate={paginate}
          />
        </div>
        {/* END Column Pagination */}
      </div>
      {/* END Container2 */}
    </React.Fragment>
  );
};

export default MateriPokok;
