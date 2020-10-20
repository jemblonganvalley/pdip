import React from 'react'
import './CardSocialMedia.scss'
import { FacebookShareButton, InstapaperShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'

const CardSocialMedia = ()=>{
    return(
        <>
        <div className="socialMedia">
            <small>SHARE : </small>
              {/* Facebook Share */}
              <FacebookShareButton
                url={"https://www.npmjs.com/package/react-share"}
                quote={"PDI Perjuangan"}
                hashtag={"#PPDIPerjuangan"}
              >
                <i className="fa fa-facebook"></i>
              </FacebookShareButton>
              {/* END Facebook Share */}

              {/* Twitter Share */}
              <TwitterShareButton
                url={"https://www.npmjs.com/package/react-share"}
                quote={"PDI Perjuangan"}
                hashtag={"#PPDIPerjuangan"}
              >
                <i className="fa fa-twitter"></i>
              </TwitterShareButton>
              {/* END Twitter Share */}

              {/* Instagram Share */}
              <InstapaperShareButton
                url={"https://www.npmjs.com/package/react-share"}
                quote={"PDI Perjuangan"}
                hashtag={"#PPDIPerjuangan"}
              >
                <i className="fa fa-instagram"></i>
              </InstapaperShareButton>
              {/* END Instagram Share */}

              {/* WhatsApp Share */}
              <WhatsappShareButton
                url={"https://www.npmjs.com/package/react-share"}
                title="PPDI Perjuangan"
              >
                <i className="fa fa-whatsapp" ></i>
              </WhatsappShareButton>
              {/* END WhatsApp Share */}
        </div>
        </>
    )
}

export default CardSocialMedia