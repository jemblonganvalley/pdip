import React from 'react'
import './BgRed.scss'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
import InstagramEmbed from 'react-instagram-embed';

const BgRed = () => {


  return (
    <>
   
    <div>
        <div className="backgroundRed" style={{
          display : 'flex',
          justifyContent : 'space-between',
          height : 'auto',
          // gap : '20px',
        }}>

          <div className="holderFrame">
            <header className='holderFrame_header'>
              <i className="icon-facebook" style={{
                fontWeight: 'bold',
                fontStyle: 'normal'
              }} id="iconGroup">f</i>
              <h5>facebook</h5>
            </header>

           <iframe className="widgetFb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPDIPerjuangan%2F&tabs=timeline&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" height={300} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowTransparency="true" allow="encrypted-media"/>


          </div>

          <div className="holderFrame">
             <header className='holderFrame_header'>
              <i class="fab fa-twitter" id="iconGroup"></i>
              <h5>twitter</h5>
            </header>
           <TwitterTimelineEmbed className="twitter-timeline"
            sourceType = 'profile'
            screenName = 'pdi_perjuangan'
            options={{
              width : '100%',
              height : 300,
              margin : 0,
              padding : 0,
            }}
           />
           </div>

            <div className="holderFrame">
             <header className='holderFrame_header'>
              <i class="fab fa-instagram" id="iconGroup"></i>
              <h5>instagram</h5>
            </header>
            {/* <InstagramEmbed
              url='https://instagr.am/p/Zw9o4/'
              hideCaption={false}
              containerTagName='div'
              screenName='pdi_perjuangan'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            /> */}
           <div class="elfsight-app-d9bdc03f-58ca-4000-b6ee-f3b1f267801f" style={{
             height: 300
           }}></div>
           </div>

      
        </div>
    </div>
    </>
  )
}

export default BgRed
