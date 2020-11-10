import React, { useState } from 'react'
import './BgRed.scss'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
// import InstagramEmbed from 'react-instagram-embed';
import InstaFeedCustom from '../../components/instafeed/InstaFeedCustom'
const BgRed = () => {

  return (
    <>
   
    <div>
        <div className="backgroundRed">

          <div className="holderFrame">
            <header className='holderFrame_header'>
              <i className="fab fa-facebook-square" id="iconGroup"></i>
              <h5>facebook</h5>
            </header>

           {/* <iframe className="widgetFb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPDIPerjuangan%2F&tabs=timeline&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" height={300} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowTransparency="true" allow="encrypted-media"/> */}
           <div class="fb-page" data-href="https://www.facebook.com/PDIPerjuangan" data-tabs="timeline" data-width="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/PDIPerjuangan" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/PDIPerjuangan">PDI Perjuangan</a></blockquote></div>

          </div>

          <div className="holderFrame">
             <header className='holderFrame_header'>
             <i className="fab fa-twitter-square" id="iconGroup"></i>
              <h5>twitter</h5>
            </header>
           <TwitterTimelineEmbed className="twitter-timeline"
            sourceType = 'profile'
            screenName = 'pdi_perjuangan'
            options={{
              height : '500px',
              margin : 0,
              padding : 0,
            }}
           />
           </div>

            <div className="holderFrame">
             <header className='holderFrame_header'>
              <i className="fab fa-instagram" id="iconGroup"></i>
              <h5>instagram</h5>
            </header>
              <div className="containerInsta" style={{
                backgroundColor : '#fff',
                borderRadius : '5px',
                margin : '0 10px'
              }}>
                <insta-feed-custom username='pdiperjuangan'></insta-feed-custom>
              </div>
           </div>

      
        </div>
    </div>
    </>
  )
}

export default BgRed
