import React from "react";
import "./CardProvinsi.scss";

const CardProvinsi = ({ img, display }) => {
  return (
    <>
      {/* Aceh */}
      <img
        loading="lazy"
        src={img}
        alt=""
        className="imgMaps"
        id="map-aceh"
        style={{
          display: `${display}`,
        }}
      />
      {/* END Aceh */}
    </>
  );
};

export default CardProvinsi;
