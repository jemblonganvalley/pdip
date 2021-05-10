import React from "react";

import "./CardsProfile.scss";

const CardsProfile = () => {
  return (
    <>
      {/* CARD PROFIL */}
      <div className="cardIconProfil">
        <div className="cardProfileSatu cardProfile">
          <img loading="lazy" src="" alt="" width="50" />
          <small className="textCardProfil textSatu">
            Struktur PPDI PDI Perjuangan
          </small>
        </div>
        <div className="cardProfileDua cardProfile">
          <img loading="lazy" src="" alt="" width="46" />
          <small className="textCardProfil textDua">visi / misi</small>
        </div>
        <div className="cardProfileTiga cardProfile">
          <img loading="lazy" src="" alt="" width="42" />
          <small className="textCardProfil textTiga">prosedur pelayanan</small>
        </div>
        <div className="cardProfileEmpat cardProfile">
          <img loading="lazy" src="" alt="" width="33" />
          <small className="textCardProfil textEmpat">regular PPDI</small>
        </div>
      </div>
      {/* END */}
    </>
  );
};

export default CardsProfile;
