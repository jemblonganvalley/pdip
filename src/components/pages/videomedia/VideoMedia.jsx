import React, { useEffect } from "react";
import { Suspense } from "react";
import { lazy } from "react";
import "./VideoMedia.scss";
import megawati from "../../../img/megawati1.jpg";

import Wait from "../../wait/Wait";
const Cards = lazy(() => import("../../cards/MainCards"));
const VMedia = lazy(() => import("../../VMedia/VMedia"));
const BreadCrumbs = lazy(() => import("../../breadcrumbs/BreadCrumbs"));

const VideoMedia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense
      fallback={
        <div>
          <Wait />
        </div>
      }
    >
      <div className="wrapperVideo">
        <div className="linkedVideo">
          <BreadCrumbs
            link1="Home"
            to1="/"
            link2="Multimedia"
            to2="/multimedia"
            page3="Video"
          />
        </div>

        {/* Card VMedia */}
        <div className="container-vmedia-page">
          <VMedia
            headline="Ketua Umum PDI Perjuangan, Hj. Megawati Soekarnoputri Meresmikan 20 Kantor Partai"
            source="https://www.youtube.com/embed/V4pM1xY9ntY"
          />
        </div>
        {/* END Card VMedia */}

        <div className="dividerVideo">
          <div className="borderVideo"></div>
        </div>
        <div className="wrapperCardVideo">
          <Cards
            imageCard={megawati}
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolor, tempora optio at nam eaque!"
            h5Font="10pt"
            h5Weight="bold"
            borderRadius="10px"
          />
          <Cards
            imageCard={megawati}
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolor, tempora optio at nam eaque!"
            h5Font="10pt"
            h5Weight="bold"
            borderRadius="10px"
          />
          <Cards
            imageCard={megawati}
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolor, tempora optio at nam eaque!"
            h5Font="10pt"
            h5Weight="bold"
            borderRadius="10px"
          />
        </div>
      </div>
    </Suspense>
  );
};

export default VideoMedia;
