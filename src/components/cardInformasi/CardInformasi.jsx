import React from "react";
import "./CardInformasi.scss";
import { Link } from "react-router-dom";

const CardInformasi = ({
  image,
  image2,
  image3,
  image4,
  text,
  text2,
  text3,
  text4,
  to1,
  to2,
  to3,
  to4,
  width1,
  width2,
  width3,
  width4,
  paddingBottom,
  bgColor1,
  color1,
  hover1,
}) => {
  return (
    <div
      className="cardMedia"
      style={{
        paddingBottom: paddingBottom,
      }}
    >
      <div className="box-cardMedia">
        <Link to={to1} className="siaranLangsung mediaCard">
          <img
            loading="lazy"
            src={image}
            alt=""
            width={width1}
            className="imgCards"
          />
          <h6 className="smallCard">{text}</h6>
        </Link>
      </div>

      <div className="box-cardMedia">
        <Link to={to2} className="videoDokumentasi mediaCard">
          <img
            loading="lazy"
            src={image2}
            alt=""
            width={width2}
            className="imgCards"
          />
          <h6 className="smallCard">{text2}</h6>
        </Link>
      </div>

      <div className="box-cardMedia">
        <Link to={to3} className="videoInteraktif mediaCard">
          <img
            loading="lazy"
            src={image3}
            alt=""
            width={width3}
            className="imgCards"
          />
          <h6 className="smallCard">{text3}</h6>
        </Link>
      </div>

      <div className="box-cardMedia">
        <Link to={to4} className="siaranPers mediaCard">
          <img
            loading="lazy"
            src={image4}
            alt=""
            width={width4}
            className="imgCards"
          />
          <h6 className="smallCard">{text4}</h6>
        </Link>
      </div>
    </div>
  );
};

export default CardInformasi;
