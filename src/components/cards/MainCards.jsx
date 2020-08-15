import React from 'react'
import './MainCards.scss'
import { Link } from 'react-router-dom'

const Cards = ({ page, imageCard, textSmall, TextH5, borderRadius, paragrap, icons, classIcon, href, h5Font, h5Weight, TextH6, paragrapSize, width }) => {
    return (

        <div className="col col-lg-3 cardCustom" style={{
            borderRadius: borderRadius,
            width: width
        }}>
            <Link to={page} className="imageCard" style={{
                backgroundImage: `url(${imageCard})`,
                textDecoration : 'none'
            }} >
                {/* JIKA MAU DIPAKAI CLASS, PAKAI CLASS VBMusic */}
                <Link as="a" className={`${classIcon}`} to={href} style={{ textDecoration: 'none' }} >
                    <i class={`${icons}`} style={{
                        textDecoration : 'none'
                    }}></i>
                </Link>
            </Link>
            <div className="text">
                <small className="textSmall">{textSmall}</small>
                <h5 className="textH5" style={{
                    fontSize: h5Font,
                    fontWeight: h5Weight
                }}>{TextH5}</h5>
                <h6 className="textH6">
                    {TextH6}
                </h6>
                <p className="paragrap" style={{
                    fontSize: paragrapSize
                }}>{paragrap}</p>
            </div>
        </div>



    )
}

export default Cards