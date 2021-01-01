import React, { useState } from "react";

import "./PidatoKongres.scss";
import BreadCrumbs from "../../../breadcrumbs/BreadCrumbs";
import CardMateriPokok from "../../../cardmateripokok/CardMateriPokok";
import AngkaPaginationEvent from "../../../paginationevent/AngkaPaginationEvent";
import MainDivider from "../../../divider/MainDivider";
import pemilu13 from "../../../../img/pemilu13.jpg";
import pemilu14 from "../../../../img/pemilu14.jpg";
import pemilu15 from "../../../../img/pemilu15.jpg";

const PidatoKongres = () => {
  // Create Database Card Item
  let [cardPidatoKongres, setCardPidatoKongres] = useState([
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "pidato kongres",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "pidato kongres",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "pidato kongres",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "pidato kongres",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "pidato kongres",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "pidato kongres",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "pidato kongres",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "pidato kongres",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "pidato kongres",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu13,
      txtJdlMateriPk: "pidato kongres",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu14,
      txtJdlMateriPk: "pidato kongres",
      txtParagrapMateriPk: "",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    {
      pageMateriPk: "",
      imgMateriPk: pemilu15,
      txtJdlMateriPk: "pidato kongres",
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
  const currentPosts = cardPidatoKongres.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage2(pageNumber);

  return (
    <React.Fragment>
      <div className="wrapper-pidato-kongres">
        <div className="linked-pk">
          <BreadCrumbs
            link1="Home"
            to1="/"
            link2="Ketua Umum"
            to2="/ketuaumum"
            page3="Pidato Kongres"
          />
        </div>

        {/* Container1 */}
        <div className="container1-pk">
          <MainDivider text="pidato kongres" mrgn="0 0 40px 0" />
        </div>
        {/* END Container1 */}

        {/* Container2 */}
        <div className="container2-pk">
          {/* Column Card */}
          <div className="column-card-pk">
            <CardMateriPokok cardMateriPokokItem={currentPosts} />
          </div>
          {/* END Column Card */}

          {/* Column Pagination */}
          <div className="column-pagination-pk">
            <AngkaPaginationEvent
              itemEventPerPage={itemEventPerPage}
              totalPosts={cardPidatoKongres.length}
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

export default PidatoKongres;
