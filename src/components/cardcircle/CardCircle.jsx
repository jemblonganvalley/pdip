import React from 'react'
import './CardCircle.scss'

const CardCircle = ({image, jabatan, nama})=> {
    return (
        <div className="circleCard">
            <div className="imageCircle" style={{
                background : `url(${image})`,
                backgroundSize : 'cover'
            }}></div>
            <small className="jabatan">{jabatan}</small>
            <h6 className="nama">{nama}</h6>
        </div>
    )
}

export default CardCircle