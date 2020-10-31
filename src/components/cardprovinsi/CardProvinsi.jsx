import React from 'react'
import './CardProvinsi.scss'

const CardProvinsi = ({img, display})=>{
    return(
        <>
        {/* Aceh */}
        <img src={img} alt="" className="imgMaps" id="map-aceh"
        style={{
            display: `${display}`
        }}
    />
    {/* END Aceh */}
    </>
    )
}

export default CardProvinsi