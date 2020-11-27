import React from "react";
import "./CardSocialMedia.scss";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { Link } from "react-router-dom";

const CardSocialMedia = ({ title }) => {
  let quote = "PDI Perjuangan";
  let hashtag = "#PDIPERJUANGAN";
  let titleForWhatsapp = "PDI Perjuangan";

  return (
    <>
      <div className="socialMedia">
        <p className="share-socialMedia">SHARE : </p>
        {/* Facebook Share */}
        <FacebookShareButton
          url={window.location.href}
          quote={title}
          hashtag={hashtag}
        >
          <i className="fa fa-facebook"></i>
        </FacebookShareButton>
        {/* END Facebook Share */}

        {/* Twitter Share */}
        <TwitterShareButton
          url={window.location.href}
          quote={title}
          hashtag={hashtag}
        >
          <i className="fa fa-twitter"></i>
        </TwitterShareButton>
        {/* END Twitter Share */}

        {/* WhatsApp Share */}
        <WhatsappShareButton url={window.location.href} title={title}>
          <i className="fa fa-whatsapp"></i>
        </WhatsappShareButton>
        {/* END WhatsApp Share */}
      </div>
    </>
  );
};

export default CardSocialMedia;
