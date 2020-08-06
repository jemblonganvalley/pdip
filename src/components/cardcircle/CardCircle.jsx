import React from 'react'
import './CardCircle.scss'
import {Link} from 'react-router-dom'

const CardCircle = ({image, jabatan, nama})=> {
    return (
        <Link className="circleCard" to="/detailpengurus">
            <div className="imageCircle" style={{
                background : `url(${image})`,
                backgroundSize : 'cover'
            }}></div>
            <small className="jabatan">{jabatan}</small>
            <h6 className="nama">{nama}</h6>
        </Link>
    )
}

export default CardCircle