import React from "react";
import { Link } from "react-router-dom";

import "./CardBeritaFoto.scss";

const CardBeritaFoto = ({
  pemilu16,
  pemilu17,
  title,
  paragraph1,
  paragraph2,
}) => {
  return (
    <React.Fragment>
      {/* Column5 */}
      <div className="wrapper-cardBerFoto">
        {/* Row1 */}
        <div className="row1-col5-cardBerFoto">
          <img src={pemilu16} className="box-img" alt="pemilihan umum"></img>
          <div className="box-jdl-row1">
            <h1>{title}</h1>
          </div>
        </div>
        {/* END Row1 */}
        {/* Row2 */}
        <Link to="/page2" className="row2-col5-cardBerFoto">
          {/* Column1 */}
          <img
            src={pemilu17}
            className="col1-row2-cardBerFoto"
            alt="pemilihan umum"
          ></img>
          {/* END Column1 */}
          {/* Column2 */}
          <div className="col2-row2-cardBerFoto">
            <h5 className="txt-jdl-col2">{paragraph1}</h5>
            <p className="txt-desk-col2">{paragraph2}</p>
          </div>
          {/* END Column2 */}
        </Link>
        {/* END Row2 */}
      </div>
      {/* END Column5 */}
    </React.Fragment>
  );
};

export default CardBeritaFoto;
