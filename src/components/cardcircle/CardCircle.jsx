import React from 'react'
import './CardCircle.scss'
import { Link } from 'react-router-dom'

const CardCircle = ({ strukturCard }) => {
    return (
        <div className="wrapperCircle" style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent : 'space-between'
        }}>
            {strukturCard.map((e) => {
                return (
                    <Link className="circleCard" to="/detailpengurus" key={e.id}>
                        <div className="imageCircle" style={{
                            background: `url(https://atur.biar.pw/public/${e.photo})`,
                            backgroundSize : 'cover'
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