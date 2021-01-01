import React from "react";
import "./AngkaPaginationEvent.scss";
import { NavLink } from "react-router-dom";

const AngkaPaginationEvent = ({ itemEventPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / itemEventPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <React.Fragment>
      <div className="container-angka-pagination">
        <div className="col-angka-pagination">
          {pageNumbers.map((number) => (
            <div key={number} className="angka-pagination">
              <NavLink
                className="paginationLink"
                to="#"
                activeClassName="active"
              >
                {number}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AngkaPaginationEvent;
