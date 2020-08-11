import React from 'react'

import './CardMateriPokok.scss'

const CardMateriPokok = ({ imageCard, textSmall, TextH5, borderRadius, paragrap, icons, classIcon, href, h5Font, h5Weight, paragrapSize, width }) => {
    return (
        <>
            {/* Card Materi Pokok */}
            <div className="col col-lg-3 cardCustom" style={{
                borderRadius: borderRadius,
                width: width
            }}>
                <div className="imageCard" style={{
                    backgroundImage: `url(${imageCard})`,

                }} >
                    {/* JIKA MAU DIPAKAI CLASS, PAKAI CLASS VBMusic */}
                    <div as="div" className={`${classIcon}`} to={href} style={{ textDecoration: 'none' }} >
                        <i class={`${icons}`}></i>
                    </div>
                </div>
                <div className="text">
                    <small className="textSmall">{textSmall}</small>
                    <h5 className="textH5" style={{
                        fontSize: h5Font,
                        fontWeight: h5Weight
                    }}>{TextH5}</h5>
                    <p className="paragrap" style={{
                        fontSize: paragrapSize
                    }}>{paragrap}</p>
                </div>
            </div>
            {/* END Card Materi Pokok */}
        </>
    )
}

export default CardMateriPokok