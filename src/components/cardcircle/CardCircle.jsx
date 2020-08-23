import React from 'react'
import './CardCircle.scss'
import { Link } from 'react-router-dom'

const CardCircle = ({ strukturCard }) => {
    return (
        <div className="wrapperCircle" style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row'
        }}>
            {strukturCard.map((e) => {
                return (
                    <Link className="circleCard" to="/detailpengurus">
                        <div className="imageCircle" style={{
                            background: `url(${e.image})`,
                            backgroundSize: 'cover'
                        }}></div>
                        <small className="jabatan">{e.jabatan}</small>
                        <h6 className="nama">{e.nama}</h6>
                    </Link>
                )
            })}
        </div>
    )
}

export default CardCircle