import React from 'react'
import './CardSocialMedia.scss'
import { FacebookShareButton, InstapaperShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'

const CardSocialMedia = ()=>{

    let urlShare = "https://www.npmjs.com/package/react-share"
    let quote ="PDI Perjuangan"
    let hashtag = "#PPDI Perjuangan"
    let titleForWhatsapp = "PPDI Perjuangan"

    return(
        <>
        <div className="socialMedia">
            <p className="share-socialMedia">SHARE : </p>
              {/* Facebook Share */}
              <FacebookShareButton
                url={urlShare}
                quote={quote}
                hashtag={hashtag}
              >
                <i className="fa fa-facebook"></i>
              </FacebookShareButton>
              {/* END Facebook Share */}

              {/* Twitter Share */}
              <TwitterShareButton
                url={urlShare}
                quote={quote}
                hashtag={hashtag}
              >
                <i className="fa fa-twitter"></i>
              </TwitterShareButton>
              {/* END Twitter Share */}

              {/* Instagram Share */}
              <InstapaperShareButton
                url={urlShare}
                quote={quote}
                hashtag={hashtag}
              >
                <i className="fa fa-instagram"></i>
              </InstapaperShareButton>
              {/* END Instagram Share */}

              {/* WhatsApp Share */}
              <WhatsappShareButton
                url={urlShare}
                title={titleForWhatsapp}
              >
                <i className="fa fa-whatsapp"></i>
              </WhatsappShareButton>
              {/* END WhatsApp Share */}
        </div>
        </>
    )
}

export default CardSocialMedia