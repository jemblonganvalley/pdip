import React from 'react'

import './CardBkbbQuotes2.scss'
import { Link } from 'react-router-dom'

const CardBkbbQuotes2 = ({ to, img, icon1, txt1, icon2, txt2 }) => {
    return (
        <>
            {/* Img */}
            <Link to={to} className="img" style={{
                backgroundImage: `url(${img})`
            }}>
                <i className={icon1}></i>

                <p className="txt1">
                    {txt1}
                </p>

                <i className={icon2}></i>

                <p className="txt2">
                    {txt2}
                </p>
            </Link>
            {/* Img */}
        </>
    )
}

export default CardBkbbQuotes2