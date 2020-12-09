import React,{useEffect} from "react";
import "./CardSocialMedia.scss";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import FacebookButton from '../../img/facebook.svg'
import TwitterButton from '../../img/twitter.svg'
import WhatsappButton from '../../img/whatsapp.svg'

const CardSocialMedia = ({ imageUrl, title }) => {
  let quote = "PDI Perjuangan";
  let hashtag = "#PDIPERJUANGAN";
  let titleForWhatsapp = "PDI Perjuangan";

  // const share

  return (
    <>
      <div className="socialMedia">
        <p className="share-socialMedia">SHARE : </p>
        {/* Facebook Share */}
        <FacebookShareButton 
        url={window.location.href}
        quote={imageUrl}
        hashtag={hashtag}
        title={title}
          >
          <img src={FacebookButton} alt="" width='25' height='25' />
        </FacebookShareButton>
        {/* END Facebook Share */}

        {/* Twitter Share */}
        <TwitterShareButton
          url={window.location.href}
          quote={imageUrl}
          hashtag={hashtag}
          title={title}
          style={{
            marginLeft : '10px',
            marginRight : '10px'
          }}
        >
          <img src={TwitterButton} alt="" width='25' height='25' />
        </TwitterShareButton>
        {/* END Twitter Share */}

        {/* WhatsApp Share */}
        <WhatsappShareButton url={window.location.href} title={title}>
        <img src={WhatsappButton} alt="" width='25' height='25' />
          
        </WhatsappShareButton>
        {/* END WhatsApp Share */}
      </div>
    </>
  );
};

export default CardSocialMedia;
