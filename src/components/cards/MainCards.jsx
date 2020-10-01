import React from 'react'
import './MainCards.scss'
import { Link } from 'react-router-dom'

const Cards = ({ page, margin, imageCard, textSmall, TextH5, borderRadius, paragrap, icons, classIcon, href, h5Font, h5Weight, TextH6, paragrapSize, width, dateTime }) => {
    return (

        <div className="col col-lg-3 cardCustom" style={{
            borderRadius: borderRadius,
        }}>
            <Link to={page} className="imageCard" style={{
                backgroundImage: `url(https://www.pdiperjuangan.id/cms/${imageCard})`,
                textDecoration: 'none',
                backgroundPosition : 'center'
            }} >
                {/* JIKA MAU DIPAKAI CLASS, PAKAI CLASS VBMusic */}
                <Link as="a" className={`${classIcon}`} to={href} style={{ textDecoration: 'none' }} >
                    <i className={`${icons}`} style={{
                        textDecoration: 'none'
                    }}></i>
                </Link>
            </Link>
            <div className="text">
                <small className="textSmall">{textSmall}</small> <br/>
                <small className="textSmall">{dateTime}</small>
                <p className="textH5" style={{
                    fontSize: h5Font,
                    fontWeight: h5Weight
                }}><b>{TextH5}</b></p>
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