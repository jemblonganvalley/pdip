import React, { useEffect, useState } from "react";
import { image_url, image_url_2 } from "../../config/config";
import "./CardHeader.scss";

const CardHeader = ({ image, title }) => {
  return (
    <div
      className={`headers`}
      style={{
        backgroundImage: `url(${image_url}${image})`,
      }}
    >
      <div className="backgrounds">
        <div className="textBackgroundPartai">
          {title !== "disable" && <h5 className="headerHeadline">{title}</h5>}
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
