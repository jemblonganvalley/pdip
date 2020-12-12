import React from "react";
import { Link } from "react-router-dom";
import "./CardSearch.scss";

const CardSearch = ({ cardSearchItem, id, path, title, paragrap }) => {
  return (
    <>
      {/* {cardSearchItem.map((e) => {
        return (
          
        );
      })} */}
      <Link
            className="card-hasil-pencarian"
            to={`/detail-article/${id}/`}
          >
            <img
              src={`https://data.pdiperjuangan.id/public/${path}`}
              alt=""
              className="img-card"
            />

            <div className="column-content-card">
              <div className="column-title-card">
                <small className="title1-card">{title}</small>
                {/* 
                                  <small className="title2-card">
                                    {title2}
                                  </small> */}
              </div>

              <h6 className="txt-paragrap-card">{paragrap}</h6>
            </div>
          </Link>
    </>
  );
};

export default CardSearch;
