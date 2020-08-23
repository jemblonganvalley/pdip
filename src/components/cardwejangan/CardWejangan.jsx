import React from 'react'

import './CardWejangan.scss'
import { Link } from 'react-router-dom'

const CardWejangan = ({ cardWejanganBkItem }) => {
    return (
        <div className="container-card-wejangan-bk" style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {cardWejanganBkItem.map((e) => {
                return (
                    <Link to={e.pageWejanganBk} className="imgWejangan" style={{
                        backgroundImage: `url(${e.imgWejanganBk})`
                    }}>
                        <i className={e.icon1WejanganBk}></i>

                        <p className="txt1">
                            {e.txt1WejanganBk}
                        </p>

                        <i className={e.icon2WejanganBk}></i>

                        <p className="txt2">
                            {e.txt2WejanganBk}
                        </p>
                    </Link>
                )
            })}
        </div>
    )
}

export default CardWejangan