import React from "react";
import CardSocialMedia from "../cardsocialmedia/CardSocialMedia";
import "./VMedia.scss";

const VMedia = ({ source, headline, desc, backgroundImage, descColor }) => {
  return (
    <div className="wrapperPlayVid">
      <div className="kolumVideo">
        {backgroundImage ? (
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
        ) : (
          <iframe
            className="iframe-Vmedia"
            src={source}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
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
          <small>Admin PDI Perjuangan | 1 Januari 2019</small>
          {/* <div className="countLove">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <small>0</small>
                    </div> */}
        </div>

        <h5 className="headline">{headline}</h5>
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

export default VMedia;
