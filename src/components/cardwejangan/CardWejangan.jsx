import React from "react";

import "./CardWejangan.scss";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const CardWejangan = ({ cardWejanganBkItem }) => {
  return (
    <div
      className="container-card-wejangan-bk"
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      {cardWejanganBkItem.map((e) => {
        return (
          <Link
            to={e.pageWejanganBk}
            className="imgWejangan"
            style={{
              backgroundImage: `url(https://data.pdiperjuangan.id/public/${e.path})`,
            }}
          >
            <i className="fas fa-quote-right"></i>

            {/* <p className="txt1">{e.title}</p> */}

            <small className="txt2">{parse(e.title)}</small>

            <i className="fas fa-quote-left"></i>
          </Link>
        );
      })}
    </div>
  );
};

export default CardWejangan;
