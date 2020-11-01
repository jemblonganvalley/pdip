import React from "react";
import "./BreadCrumbs.scss";
import { Link } from "react-router-dom";

const BreadCrumbs = ({
  link1,
  link2,
  link3,
  to1,
  to2,
  page2,
  active,
  link4,
  to3,
  page3,
  page1,
}) => {
  return (
    <span className="wrapperBread">
      <ul
        className="breadcrumb"
        style={{
          background: "none",
        }}
      >
        <li>
          <i className="fa fa-home customBread"></i>
        </li>
        <li className="breadcrumb-item customBread">
          <Link to={to1}> {link1} </Link>
          {page1}
        </li>
        <li className={`breadcrumb-item  customBread`}>
          <Link to={to2}> {link2} </Link>
          {page2}
        </li>
        {link3 && (
          <li
            style={{
              color: "#6c757d",
            }}
            className={`breadcrumb-item ${active} customBread`}
          >
            <Link to={to3}> {link3} </Link> 
          </li>
        )}
      </ul>
    </span>
  );
};

export default BreadCrumbs;
