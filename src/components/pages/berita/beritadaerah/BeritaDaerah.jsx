import React, { useState } from "react";

import "./BeritaDaerah.scss";
import BreadCrumbs from "../../../breadcrumbs/BreadCrumbs";
import MainDivider from "../../../divider/MainDivider";
import CardMateriPokok from "../../../cardmateripokok/CardMateriPokok";
import AngkaPaginationEvent from "../../../paginationevent/AngkaPaginationEvent";
import pemilu13 from "../../../../img/pemilu13.jpg";
import pemilu14 from "../../../../img/pemilu14.jpg";
import pemilu15 from "../../../../img/pemilu15.jpg";

const BeritaDaerah = () => {
  // Create Database Card Item
  let [cardBeritaDaerah, setCardBeritaDaerah] = useState([
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "berita daerah",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "berita daerah",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "berita daerah",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "berita daerah",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "berita daerah",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "berita daerah",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "berita daerah",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "berita daerah",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "berita daerah",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "berita daerah",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "berita daerah",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "berita daerah",
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
  const currentPosts = cardBeritaDaerah.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage2(pageNumber);

  return (
    <React.Fragment>
      <div className="wrapper-berita-daerah">
        <div className="linked-berita-daerah">
          <BreadCrumbs
            link1="Home"
            to1="/"
            link2="Berita"
            to2="/berita"
            page3="Berita Daerah"
          />
        </div>

        {/* Container1 */}
        <div className="container1-berita-daerah-con1">
          <MainDivider text="Berita Daerah" mrgn="0 0 40px 0" />
        </div>
        {/* END Container1 */}

        {/* Container2 */}
        <div className="container2-berita-daerah-con2">
          {/* Column Card */}
          <div className="column-card-berita-daerah">
            <CardMateriPokok cardMateriPokokItem={currentPosts} />
          </div>
          {/* END Column Card */}

          {/* Column Pagination */}
          <div className="column-pagination-berita-daerah">
            <AngkaPaginationEvent
              itemEventPerPage={itemEventPerPage}
              totalPosts={cardBeritaDaerah.length}
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

export default BeritaDaerah;
