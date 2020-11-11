import React from "react";
import CardSocialMedia from "../cardsocialmedia/CardSocialMedia";
import "./QuotesBkbb.scss";

const QuotesBkbb = ({
  source,
  headline,
  desc,
  backgroundImage,
  descColor,
  date
}) => {
  return (
    <div className="wrapperQuotesBkbb">
      <div className="kolumQuotesBkbb">
        <img
            src={backgroundImage}
            alt=""
            width="100%"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt={desc}
          />
      </div>

      <div
        className="descQuotesBkbb"
        style={{
          backgroundColor: descColor && `${descColor}`
        }}
      >
        <div className="textTop">
          <small>Admin PDI Perjuangan {date && "|" + date.split(" ")[0]}</small>
        </div>

        <div className="wrapperHeadlineBkbb">
        <h5 className="headline">{headline}</h5>
        </div>
        {/* <p className="descline">{desc}</p> */}
        <div className="descline">{desc}</div>
        <div className="share">
          {/* Card Social Media */}
          <CardSocialMedia />
          {/* END Card Social Media */}
        </div>
      </div>
    </div>
  );
};

export default QuotesBkbb
