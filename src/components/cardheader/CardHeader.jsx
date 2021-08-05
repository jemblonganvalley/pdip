import React, { useEffect, useState } from "react";
import "./CardHeader.scss";

const CardHeader = ({ image, title }) => {
  return (
    <div
      className={`headers`}
      style={{
        backgroundImage: `url(http://192.168.8.18/public/${image})`,
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
