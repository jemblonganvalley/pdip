import React from 'react'
import './CardInformasi.scss'
import {Link} from 'react-router-dom'

const CardInformasi = ({image, image2, image3, image4, text, text2, text3, text4, to1, to2, to3, to4, width1, width2, width3, width4})=> {
    return (
        <div className="cardMedia">
            <Link to={to1} className="siaranLangsung mediaCard">
                <img src={image} alt="" width={width1} className="imgCards" />
                <small className="smallCard">{text}</small>
            </Link>
            <Link to={to2} className="videoDokumentasi mediaCard">
                <img src={image2} alt="" width={width2} className="imgCards" />
                <small className="smallCard">{text2}</small>
            </Link>
            <Link to={to3} className="videoInteraktif mediaCard">
                <img src={image3} alt="" width={width3} className="imgCards" />
                <small className="smallCard">{text3}</small>
            </Link>
            <Link to={to4} className="siaranPers mediaCard">
                <img src={image4} alt="" width={width4} className="imgCards" />
                <small className="smallCard">{text4}</small>
            </Link>
        </div>
    )
}

export default CardInformasi