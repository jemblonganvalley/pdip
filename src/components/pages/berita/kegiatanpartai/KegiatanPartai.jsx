import React, { useState } from "react";

import "./KegiatanPartai.scss";
import BreadCrumbs from "../../../breadcrumbs/BreadCrumbs";
import MainDivider from "../../../divider/MainDivider";
import CardMateriPokok from "../../../cardmateripokok/CardMateriPokok";
import AngkaPaginationEvent from "../../../paginationevent/AngkaPaginationEvent";
import pemilu13 from "../../../../img/pemilu13.jpg";
import pemilu14 from "../../../../img/pemilu14.jpg";
import pemilu15 from "../../../../img/pemilu15.jpg";

const KegiatanPartai = () => {
  // Create Database Card Item
  let [cardKegiatanPartai, setCardKegiatanPartai] = useState([
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "kegiatan partai",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "kegiatan partai",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "kegiatan partai",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "kegiatan partai",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "kegiatan partai",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "kegiatan partai",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "kegiatan partai",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "kegiatan partai",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "kegiatan partai",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "kegiatan partai",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "kegiatan partai",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "kegiatan partai",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
  ]);
  // END Create Database Card Item

  let [currentPage2, setCurrentPage2] = useState(1);
  let [itemEventPerPage] = useState(9);

  const indexOfLastPost = currentPage2 * itemEventPerPage;
  const indexOfFirstPost = indexOfLastPost - itemEventPerPage;
  const currentPosts = cardKegiatanPartai.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage2(pageNumber);

  return (
    <React.Fragment>
      <div className="wrapper-kegiatan-partai">
        <div className="linked-kegiatan-partai">
          <BreadCrumbs
            link1="Home"
            to1="/"
            link2="Berita"
            to2="/berita"
            page3="Kegiatan Partai"
          />
        </div>

        {/* Container1 */}
        <div className="container1-kegiatan-partai">
          <MainDivider text="Kegiatan Partai" mrgn="0 0 40px 0" />
        </div>
        {/* END Container1 */}

        {/* Container2 */}
        <div className="container2-kegiatan-partai">
          {/* Column Card */}
          <div className="column-card-kegiatan-partai">
            <CardMateriPokok cardMateriPokokItem={currentPosts} />
          </div>
          {/* END Column Card */}

          {/* Column Pagination */}
          <div className="column-pagination-kegiatan-partai">
            <AngkaPaginationEvent
              itemEventPerPage={itemEventPerPage}
              totalPosts={cardKegiatanPartai.length}
              paginate={paginate}
            />
          </div>
          {/* END Column Pagination */}
        </div>
        {/* END Container2 */}
      </div>
    </React.Fragment>
  );
};

export default KegiatanPartai;
