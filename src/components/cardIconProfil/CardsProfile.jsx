import React from 'react'
import IconCardSatu from '../../img/networking.png'
import IconCardDua from '../../img/target.png'
import IconCardTiga from '../../img/cs.png'
import IconCardEmpat from '../../img/law-book.png'
import './CardsProfile.scss'

const CardsProfile = ()=> {
    return (
        <>
        {/* CARD PROFIL */}
        <div className="cardIconProfil">
            <div className="cardProfileSatu cardProfile">
                <img src={IconCardSatu} alt="" width="50" />
                <small className="textCardProfil textSatu">Struktur PPDI PDI Perjuangan</small>
            </div>
            <div className="cardProfileDua cardProfile">
                <img src={IconCardDua} alt="" width="46" />
                <small className="textCardProfil textDua">visi / misi</small>
            </div>
            <div className="cardProfileTiga cardProfile">
                <img src={IconCardTiga} alt="" width="42" />
                <small className="textCardProfil textTiga">prosedur pelayanan</small>
            </div>
            <div className="cardProfileEmpat cardProfile">
                <img src={IconCardEmpat} alt="" width="33" />
                <small className="textCardProfil textEmpat">regular PPDI</small>
            </div>
        </div>
        {/* END */}
        </>
    )
}

export default CardsProfile