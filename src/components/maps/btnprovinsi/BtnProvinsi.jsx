import React from "react";
import { Link } from "react-router-dom";
import "./BtnProvinsi.scss";

const BtnProvinsi = ({
  pageProv,
  nameProv,
  mouseOver,
  mouseLeave,
  color,
  transisi,
  id,
}) => {
  return (
    <>
      {/* For Botton Name Provinsi For on off Display Image Provinsi */}
      <Link
        to={`/dpd/${id}/${nameProv}`}
        className="btn-name-prov"
        onMouseEnter={mouseOver}
        onMouseLeave={mouseLeave}
        style={{
          color: `${color}`,
          transition: `${transisi}`,
        }}
      >
        DPD {nameProv}
      </Link>
      {/* END For Botton Name Provinsi For on off Display Image Provinsi */}
    </>
  );
};

export default BtnProvinsi;
