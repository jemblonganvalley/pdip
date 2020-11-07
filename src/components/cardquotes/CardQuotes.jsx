import React from "react";

import "./CardQuotes.scss";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { useState } from "react";
import { useEffect } from "react";

const CardQuotes = ({ page, img, icon1, txt1, icon2, txt2, children }) => {
  const setRefresher = useStoreActions((action) => action.setRefresher);
  const [reload, setReload] = useState(false);

  return (
    <>
      {/* Img */}
      <Link
        onClick={() => {
          setRefresher();
        }}
        to={page}
        className="imgQuotes"
        style={{
          backgroundImage: `url(${img})`,
          textDecoration: "none",
          position: "relative",
        }}
      >
        <i className={icon1}></i>

        <p className="txt1">{txt1}</p>

        <i className={icon2}></i>

        <small className="txt2">{txt2}</small>

        {/* Background Black Transparant */}
        <div className="background-black-transparent"></div>
        {/* END Background Black Transparant */}
      </Link>
      {/* Img */}
      {children}
    </>
  );
};

export default CardQuotes;
