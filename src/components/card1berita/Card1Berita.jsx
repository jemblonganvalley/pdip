import React from 'react'

import './Card1Berita.scss'

import { Link } from 'react-router-dom'

const Card1Berita = ({ page, imageCard, textSmall, TextH5, borderRadius, paragrap, icons, classIcon, href, h5Font, h5Weight, paragrapSize, width, title }) => {
    return (
        // Card1 Berita
        <div className="col col-lg-3 cardCustom" style={{
            borderRadius: borderRadius,
            width: width
        }}>
            <Link to={page} className="imageCard" style={{
                backgroundImage: `url(${imageCard})`,
            }} >
                {/* JIKA MAU DIPAKAI CLASS, PAKAI CLASS VBMusic */}
                <Link as="div" className={`${classIcon}`} to={href} style={{ textDecoration: 'none' }} >
                    <i class={`${icons}`}></i>
                </Link>
            </Link>
            <div className="text">
                <small className="textSmall">{textSmall}</small>
                <h5 className="textH5" style={{
                    fontSize: h5Font,
                    fontWeight: h5Weight
                }}>{TextH5}</h5>
                <p className="paragrap" style={{
                    fontSize: paragrapSize
                }}>{paragrap}</p>
                <p className="title">
                    {title}
                </p>
            </div>
        </div>
        // END Card1 Berita
    )
}

export default Card1Berita