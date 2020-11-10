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
        <p className="descline">{desc}</p>
        <div className="share">
          {/* Card Social Media */}
          <CardSocialMedia />
          {/* END Card Social Media */}

          {/* <small className="marginShare">SHARE : </small>
                    <i class="fa fa-facebook marginShare" aria-hidden="true"></i>
                    <i class="fa fa-twitter marginShare" aria-hidden="true"></i>
                    <i class="fa fa-instagram marginShare" aria-hidden="true"></i>
                    <i class="fa fa-whatsapp marginShare" aria-hidden="true"></i> */}
        </div>
      </div>
    </div>
  );
};

export default QuotesBkbb
