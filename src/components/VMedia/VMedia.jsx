import React from "react";
import CardSocialMedia from "../cardsocialmedia/CardSocialMedia";
import "./VMedia.scss";

const VMedia = ({
  source,
  headline,
  desc,
  backgroundImage,
  descColor,
  date,
}) => {
  return (
    <div className="wrapperPlayVid">
      <div className="kolumVideo">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            width="100%"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt={desc}
          />
        ) : (
          <iframe
            title="iframe"
            className="iframe-Vmedia"
            src={`${source}?rel=0`}
            frameBorder="0"
            disabled="autoplay; encrypted-media;"
            allow="accelerometer; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div
        className="descVideo"
        style={{
          backgroundColor: descColor && `${descColor}`,
        }}
      >
        <div className="textTop">
          <small>Admin PDI Perjuangan {date && "|" + date.split(" ")[0]}</small>
        </div>

        <h5 className="headline">{headline}</h5>
        <p className="descline">{desc}</p>
        <div className="share">
          {/* Card Social Media */}
          <CardSocialMedia />
          {/* END Card Social Media */}
        </div>
      </div>
    </div>
  );
};

export default VMedia;
