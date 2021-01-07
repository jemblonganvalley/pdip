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
  youtubePath,
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
            src={source}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
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
          <CardSocialMedia
            url={`article.pdiperjuangan.id/multimedia/${youtubePath}`}
            title={headline}
          />
          {/* END Card Social Media */}
        </div>
      </div>
    </div>
  );
};

export default VMedia;
