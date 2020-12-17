import React, { useEffect } from "react";
import "./CardSocialMedia.scss";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { lazy } from "react";
import { Suspense } from "react";

import FacebookButton from "../../img/facebookicon.svg";
import TwitterButton from "../../img/twittericon.svg";
import WhatsappButton from "../../img/whatsappicon.svg";

const CardSocialMedia = ({ imageUrl, title, url }) => {
  let quote = "PDI Perjuangan";
  let hashtag = "#PDIPERJUANGAN";
  let titleForWhatsapp = "PDI Perjuangan";

  // const share

  return (
    <Suspense fallback={<div>loading ...</div>}>
      <div className="socialMedia">
        <p className="share-socialMedia">Share : </p>
        {/* Facebook Share */}
        <FacebookShareButton
          url={window.location.href}
          quote={title}
          hashtag={hashtag}
          title={title}
        >
          <img src={FacebookButton} alt="" width="20" height="20" />
        </FacebookShareButton>
        {/* END Facebook Share */}

        {/* Twitter Share */}
        <TwitterShareButton
          url={window.location.href}
          quote={imageUrl}
          hashtag={hashtag}
          title={title}
          style={{
            marginLeft: "40px",
            marginRight: "40px",
          }}
        >
          <img src={TwitterButton} alt="" width="20" height="20" />
        </TwitterShareButton>
        {/* END Twitter Share */}

        {/* WhatsApp Share */}
        <WhatsappShareButton url={window.location.href} title={title}>
          <img src={WhatsappButton} alt="" width="20" height="20" />
        </WhatsappShareButton>
        {/* END WhatsApp Share */}
      </div>
    </Suspense>
  );
};

export default CardSocialMedia;
