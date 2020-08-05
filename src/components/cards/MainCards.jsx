import React from 'react'
import './MainCards.scss'

const Cards = ({imageCard, textSmall, TextH5, borderRadius, paragrap, icons, classIcon})=> {
    return (
     
                <div className="col col-lg-3 cardCustom" style={{
                    borderRadius : borderRadius
                }}>
                    <div className="imageCard" style={{
                        backgroundImage : `url(${imageCard})`,
                    }} >

                        {/* JIKA MAU DIPAKAI CLASS, PAKAI CLASS VBMusic */}
                    <div className={`${classIcon}`}>  
                                <i class={`${icons}`}></i>
                        </div>
                    </div>
                    <div className="text">
                    <small className="textSmall">{textSmall}</small>
                    <h5 className="textH5">{TextH5}</h5>
                    <p className="paragrap">{paragrap}</p>
                    </div>
                </div>
                
                
        
    )
}

export default Cards