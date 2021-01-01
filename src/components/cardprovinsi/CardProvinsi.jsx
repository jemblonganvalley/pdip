import React from "react";
import "./CardProvinsi.scss";

const CardProvinsi = ({ img, display }) => {
  return (
    <React.Fragment>
      {/* Aceh */}
      <img
        src={img}
        alt=""
        className="imgMaps"
        id="map-aceh"
        style={{
          display: `${display}`,
        }}
      />
      {/* END Aceh */}
    </React.Fragment>
  );
};

export default CardProvinsi;
