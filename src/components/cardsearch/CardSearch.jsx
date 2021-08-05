import React from "react";
import { Link } from "react-router-dom";
import "./CardSearch.scss";

const CardSearch = ({ cardSearchItem, id, path, title, paragrap, page }) => {
  const pageSLug = () => {
    return title
      .toString()
      .replace(/[^\w-]+/g, "-")
      .toLowerCase();
  };
  const add3Dots = (string, limit) => {
    var dots = "...";
    if (string.length > limit) {
      // you can also use substr instead of substring
      string = string.substring(0, limit) + dots;
    }
    return string;
  };

  return (
    <>
      {/* {cardSearchItem.map((e) => {
        return (
          
        );
      })} */}
      {/* <a
        className="card-hasil-pencarian"
        href={`https://article.pdiperjuangan.id/detail-article/${title
          .replace(/ /g, "-")
          .toLowerCase()}/${id}/`}
      > */}

      <a
        className="card-hasil-pencarian"
        href={`https://pdiperjuangan.id/${page}/${id}/${pageSLug()}`}
      >
        <img
          loading="lazy"
          src={`http://192.168.8.18/public/${path}`}
          alt=""
          className="img-card"
        />

        <div className="column-content-card">
          <div className="column-title-card">
            <h5 className="title1-card">{title}</h5>
          </div>

          <small className="txt-paragrap-card">
            {add3Dots(
              paragrap.replace(/(<([^>]+)>)/gi, "").replace("&nbsp", ""),
              150
            )}
          </small>
        </div>
      </a>
    </>
  );
};

export default CardSearch;
