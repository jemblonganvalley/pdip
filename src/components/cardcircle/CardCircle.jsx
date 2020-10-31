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
                    <Link className="circleCard" to={`/detailpengurus/${e.id}/${e.nama.replace(' ', '-')}`} key={e.id}>
                        <div className="imageCircle" style={{
                            background: `url(https://atur.biar.pw/public/${e.photo})`,
                            backgroundSize : 'cover'
                        }}></div>
                        <p className="jabatan">{e.jabatan}</p>
                        <h5 className="nama">{e.nama}</h5>
                    </Link>
                )
            })}
        </div>
    )
}

export default CardCircle