import React from "react";
import "./BgRed.scss";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import InstaFeedCustom from '../instafeed/InstaFeedCustom'
// import InstagramEmbed from 'react-instagram-embed';
// import { useMediaQuery } from "react-responsive";

const BgRed = () => {
  // const Desktop = ({ children }) => {
  //   const isDesktop = useMediaQuery({ minWidth: 992 });
  //   return isDesktop ? children : null;
  // };

  // const Tablet = ({ children }) => {
  //   const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 991 });
  //   return isTablet ? children : null;
  // };

  // const Mobile = ({ children }) => {
  //   const isMobile = useMediaQuery({ maxWidth: 767 });
  //   return isMobile ? children : null;
  // };

  return (
    <>
      <div>
        <div className="backgroundRed">
          <div className="holderFrame">
            <header className="holderFrame_header">
              <i className="fab fa-facebook-square" id="iconGroup"></i>
              <h5>facebook</h5>
            </header>

            <div className="containerFacebook" id="pageContainer">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/PDIPerjuangan/"
                data-tabs="timeline"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
              >
                <div className="fb-xfbml-parse-ignore">
                  <blockquote cite="https://www.facebook.com/PDIPerjuangan">
                    <a href="https://www.facebook.com/PDIPerjuangan">
                      PDI PERJUANGAN
                    </a>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="holderFrame">
            <header className="holderFrame_header">
              <i className="fab fa-twitter-square" id="iconGroup"></i>
              <h5>twitter</h5>
            </header>
            <div className="containerTwitter">
              <TwitterTimelineEmbed
                className="twitter-timeline"
                sourceType="profile"
                screenName="pdi_perjuangan"
                options={{
                  height: "500px",
                  margin: 0,
                  padding: 0,
                  // width: '600px',
                }}
              />
            </div>
          </div>

          <div className="holderFrame">
            <header className="holderFrame_header">
              <i className="fab fa-instagram" id="iconGroup"></i>
              <h5>instagram</h5>
            </header>
            <div
              className="containerInsta"
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // margin: "0 10px",
              }}
            >
              <insta-feed-custom username="pdiperjuangan"></insta-feed-custom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BgRed;
