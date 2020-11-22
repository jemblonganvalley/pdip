import notFound from "../../img/kalender.svg";
import Pengembangan from "../../img/pengembangan.svg";
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";
const NotFound = ({ imgSource, notFoundDisplay, pengembanganDisplay }) => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <img
            src={notFound}
            style={{
              display: notFoundDisplay,
            }}
          />
          <img
            src={Pengembangan}
            style={{
              display: pengembanganDisplay,
            }}
          />
          {/* <h1>OOPS</h1> */}
        </div>
        <div className="wrappertext">
          <h2
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            halaman yang anda tuju belum tersedia
          </h2>
          <Link to="/">Halaman utama</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
