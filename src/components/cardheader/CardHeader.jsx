import React, { useEffect, useState } from "react";
import "./CardHeader.scss";

const CardHeader = ({ image, title }) => {
  return (
    <div
      className={`headers`}
      style={{
        backgroundImage: `url(https://data.pdiperjuangan.id/public/${image})`,
      }}
    >
      <div className="backgrounds">
        <div className="textBackgroundPartai">
          {title !== "disable" && <h3 className="headerHeadline">{title}</h3>}
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
