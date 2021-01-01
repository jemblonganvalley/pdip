import React, { useState } from "react";

import "./BeritaFoto.scss";
import BreadCrumbs from "../../../breadcrumbs/BreadCrumbs";
import MainDivider from "../../../divider/MainDivider";
import CardMateriPokok from "../../../cardmateripokok/CardMateriPokok";
import AngkaPaginationEvent from "../../../paginationevent/AngkaPaginationEvent";
import pemilu13 from "../../../../img/pemilu13.jpg";
import pemilu14 from "../../../../img/pemilu14.jpg";
import pemilu15 from "../../../../img/pemilu15.jpg";

const BeritaFoto = () => {
  // Create Database Card Item
  let [cardBeritaFoto, setCardBeritaFoto] = useState([
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "berita foto",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "berita foto",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "berita foto",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "berita foto",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "berita foto",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "berita foto",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "berita foto",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "berita foto",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "berita foto",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "berita foto",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "berita foto",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "berita foto",
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
  const currentPosts = cardBeritaFoto.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage2(pageNumber);

  return (
    <React.Fragment>
      <div className="wrapper-berita-foto">
        <div className="linked-berita-foto">
          <BreadCrumbs
            link1="Home"
            to1="/"
            link2="Berita"
            to2="/berita"
            page3="Berita Foto"
          />
        </div>

        {/* Container1 */}
        <div className="container1-berita-foto">
          <MainDivider text="Berita Foto" mrgn="0 0 40px 0" />
        </div>
        {/* END Container1 */}

        {/* Container2 */}
        <div className="container2-berita-foto">
          {/* Column Card */}
          <div className="column-card-berita-foto">
            <CardMateriPokok cardMateriPokokItem={currentPosts} />
          </div>
          {/* END Column Card */}

          {/* Column Pagination */}
          <div className="column-pagination-berita-foto">
            <AngkaPaginationEvent
              itemEventPerPage={itemEventPerPage}
              totalPosts={cardBeritaFoto.length}
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

export default BeritaFoto;
