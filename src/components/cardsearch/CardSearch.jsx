import React from "react";
import { Link } from "react-router-dom";
import "./CardSearch.scss";

const CardSearch = ({ cardSearchItem }) => {
  return (
    <>
      {cardSearchItem.map((e) => {
        return (
          <Link
            className="card-hasil-pencarian"
            to={`/detail-article/${e.id}/`}
          >
            <img
              src={`https://atur.biar.pw/public/${e.path}`}
              alt=""
              className="img-card"
            />

            <div className="column-content-card">
              <div className="column-title-card">
                <small className="title1-card">{e.title}</small>
                {/* 
                                  <small className="title2-card">
                                    {e.title2}
                                  </small> */}
              </div>

              <h6 className="txt-paragrap-card">{e.paragrap}</h6>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default CardSearch;
