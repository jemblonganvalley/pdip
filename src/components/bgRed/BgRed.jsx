import React, { useState } from "react";
import "./BgRed.scss";
import { TwitterTimelineEmbed } from "react-twitter-embed";
// import InstagramEmbed from 'react-instagram-embed';
import InstaFeedCustom from "../../components/instafeed/InstaFeedCustom";
const BgRed = () => {
  return (
    <>
      <div>
        <div className="backgroundRed">
          <div className="holderFrame">
            <header className="holderFrame_header">
              <i className="fab fa-facebook-square" id="iconGroup"></i>
              <h5>facebook</h5>
            </header>

            <div
              class="fb-page widgetFb"
              data-href="https://www.facebook.com/PDIPerjuangan/"
              data-tabs="timeline"
              // data-width="180"
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-adapt-container-width="true"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/PDIPerjuangan/"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/PDIPerjuangan/">
                  PDI Perjuangan
                </a>
              </blockquote>
            </div>
          </div>

          <div className="holderFrame">
            <header className="holderFrame_header">
              <i className="fab fa-twitter-square" id="iconGroup"></i>
              <h5>twitter</h5>
            </header>
            <TwitterTimelineEmbed
              className="twitter-timeline"
              sourceType="profile"
              screenName="pdi_perjuangan"
              options={{
                height: "500px",
                margin: 0,
                padding: 0,
              }}
            />
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
                margin: "0 10px",
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
