import React from 'react'
import './BgRed.scss'
import {TwitterTimelineEmbed} from 'react-twitter-embed'


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
              <h3>facebook</h3>
            </header>

           <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPDIPerjuangan%2F&tabs=timeline&width=250&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width={250} height={300} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowTransparency="true" allow="encrypted-media" />


          </div>

          <div className="holderFrame">
             <header className='holderFrame_header'>
              <h3>twitter</h3>
            </header>
           <TwitterTimelineEmbed 
            sourceType = 'profile'
            screenName = 'pdi_perjuangan'
            options={{
              width : 250,
              height : 300,
              margin : 0,
              padding : 0,
            }}
           />
           </div>

            <div className="holderFrame">
             <header className='holderFrame_header'>
              <h3>instagram</h3>
            </header>
           <div class="elfsight-app-d9bdc03f-58ca-4000-b6ee-f3b1f267801f"></div>
           </div>

      
        </div>
    </div>
    </>
  )
}

export default BgRed
