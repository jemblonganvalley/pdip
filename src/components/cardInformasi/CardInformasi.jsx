import React from 'react'
import './CardInformasi.scss'


const CardInformasi = ({image, image2, image3, image4, text, text2, text3, text4})=> {
    return (
        <div className="cardMedia">
            <div className="siaranLangsung mediaCard">
                <img src={image} alt="" width="35" className="imgCards" />
                <small className="smallCard">{text}</small>
            </div>
            <div className="videoDokumentasi mediaCard">
                <img src={image2} alt="" width="35" className="imgCards" />
                <small className="smallCard">{text2}</small>
            </div>
            <div className="videoInteraktif mediaCard">
                <img src={image3} alt="" width="35" className="imgCards" />
                <small className="smallCard">{text3}</small>
            </div>
            <div className="siaranPers mediaCard">
                <img src={image4} alt="" width="35" className="imgCards" />
                <small className="smallCard">{text4}</small>
            </div>
        </div>
    )
}

export default CardInformasi