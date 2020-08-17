import React from 'react'

import './CardQuotes.scss'
import { Link } from 'react-router-dom'

const CardQuotes = ({ page, img, icon1, txt1, icon2, txt2 }) => {
    return (
        <>
            {/* Img */}
            <Link to={page} className="imgQuotes" style={{
                backgroundImage: `url(${img})`,
                textDecoration: 'none'
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

export default CardQuotes