import React from "react";
import "./CardSocialMedia.scss";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const CardSocialMedia = ({ imageUrl }) => {
  let quote = "PDI Perjuangan";
  let hashtag = "#PDIPERJUANGAN";
  let titleForWhatsapp = "PDI Perjuangan";

  return (
    <>
      <div className="socialMedia">
        <p className="share-socialMedia">SHARE : </p>
        {/* Facebook Share */}
        <FacebookShareButton
          url={`https://pas.biar.pw/` + window.location.hostname}
          imageUrl={`https://pas.biar.pw/public/${imageUrl}`}
          quote={quote}
          hashtag={hashtag}
        >
          <i className="fa fa-facebook"></i>
        </FacebookShareButton>
        {/* END Facebook Share */}

        {/* Twitter Share */}
        <TwitterShareButton
          url={window.location.href}
          quote={quote}
          hashtag={hashtag}
        >
          <i className="fa fa-twitter"></i>
        </TwitterShareButton>
        {/* END Twitter Share */}

        {/* WhatsApp Share */}
        <WhatsappShareButton
          url={window.location.href}
          imageUrl={`https://pas.biar.pw/public/${imageUrl}`}
          title={titleForWhatsapp}
        >
          <i className="fa fa-whatsapp"></i>
        </WhatsappShareButton>
        {/* END WhatsApp Share */}
      </div>
    </>
  );
};

export default CardSocialMedia;
