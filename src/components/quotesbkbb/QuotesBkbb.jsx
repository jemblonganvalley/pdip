import React from "react";
import CardSocialMedia from "../cardsocialmedia/CardSocialMedia";
import "./QuotesBkbb.scss";
import parse from "html-react-parser";
import { useState } from "react";
import { useEffect } from "react";

const QuotesBkbb = ({
  id,
  source,
  headline,
  desc,
  backgroundImage,
  descColor,
  date,
  quotesDate,
  wait,
}) => {
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaiting(false);
    }, 2000);

    return () => {};
  }, [id]);

  return (
    <>
      {id ? (
        <div className="wrapperQuotesBkbb">
          <div className="kolumQuotesBkbb">
            <img
              loading="lazy"
              src={backgroundImage}
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
              backgroundColor: descColor && `${descColor}`,
            }}
          >
            <div className="textTop">
              <small>
                Admin PDI Perjuangan {date && "|" + date.split(" ")[0]}
              </small>
            </div>

            <div className="wrapperHeadlineBkbb">
              <strong className="headline">{`" ` + headline + ` "`}</strong>
            </div>
            <div
              style={{
                margin: "20px 0",
              }}
            >
              <i>{quotesDate}</i>
            </div>
            {/* <p className="descline">{desc}</p> */}
            <div className="descline">{parse(`${desc}`)}</div>
            <div className="share">
              {/* Card Social Media */}
              <CardSocialMedia
                title={headline}
                url={`https://perjuangan.id/bung-karno-bapak-bangsa/quotes/${id}`}
              />
              {/* END Card Social Media */}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="wrapperQuotesBkbb"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>
      )}
    </>
  );
};

export default QuotesBkbb;
