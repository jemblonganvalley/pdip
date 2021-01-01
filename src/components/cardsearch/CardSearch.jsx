import React from "react";
import { Link } from "react-router-dom";
import "./CardSearch.scss";

const CardSearch = ({ cardSearchItem, id, path, title, paragrap }) => {
  const add3Dots = (string, limit) => {
    var dots = "...";
    if (string.length > limit) {
      // you can also use substr instead of substring
      string = string.substring(0, limit) + dots;
    }
    return string;
  };

  return (
    <React.Fragment>
      {/* {cardSearchItem.map((e) => {
        return (
          
        );
      })} */}
      <Link className="card-hasil-pencarian" to={`/detail-article/${id}/`}>
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

          <p className="txt-paragrap-card">
            {add3Dots(
              paragrap.replace(/(<([^>]+)>)/gi, "").replace("&nbsp", ""),
              150
            )}
          </p>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default CardSearch;
