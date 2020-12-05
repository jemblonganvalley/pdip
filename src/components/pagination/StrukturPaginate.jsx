import React, { useState, useEffect } from "react";
import CardCircle from "../cardcircle/CardCircle";
import "./StrukturPaginate.scss";
import AngkaPaginationEvent from "../paginationevent/AngkaPaginationEvent";

const StrukturPaginate = ({ data, grade }) => {
  let [struktur, setStruktur] = useState(data);

  let [currentPage2, setCurrentPage2] = useState(1);
  let [itemEventPerPage] = useState(100);

  const indexOfLastPost = currentPage2 * itemEventPerPage;
  const indexOfFirstPost = indexOfLastPost - itemEventPerPage;

  const paginate = (pageNumber) => setCurrentPage2(pageNumber);

  return (
    <div className="wrapperPaginate">
      <div className="card-strukturPaginate">
        <CardCircle strukturCard={data} grade={grade} />
      </div>

      <nav
        aria-label="Page navigation example"
        style={{
          marginTop: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AngkaPaginationEvent
          itemEventPerPage={itemEventPerPage}
          totalPosts={struktur.length}
          paginate={paginate}
        />
      </nav>
    </div>
  );
};

export default StrukturPaginate;
