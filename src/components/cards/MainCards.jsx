import React from 'react'
import './MainCards.scss'
import {Link} from 'react-router-dom'

const Cards = ({imageCard, textSmall, TextH5, borderRadius, paragrap, icons, classIcon, href, h5Font, h5Weight})=> {
    return (
     
                <div className="col col-lg-3 cardCustom" style={{
                    borderRadius : borderRadius
                }}>
                    <div className="imageCard" style={{
                        backgroundImage : `url(${imageCard})`,
                    }} >
                        {/* JIKA MAU DIPAKAI CLASS, PAKAI CLASS VBMusic */}
                        <Link as="div" className={`${classIcon}`} to={href} style={{ textDecoration : 'none' }} >  
                            <i class={`${icons}`}></i>
                        </Link>
                    </div>
                    <div className="text">
                    <small className="textSmall">{textSmall}</small>
                    <h5 className="textH5" style={{
                        fontSize : h5Font,
                        fontWeight : h5Weight
                    }}>{TextH5}</h5>
                    <p className="paragrap">{paragrap}</p>
                    </div>
                </div>
                
                
        
    )
}

export default Cards