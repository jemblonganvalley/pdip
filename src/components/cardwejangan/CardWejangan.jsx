import React from 'react'

import './CardWejangan.scss'
import { Link } from 'react-router-dom'

const CardWejangan = ({ page, imgWejangan, icon1, txt1, icon2, txt2 }) => {
    return (
        <>
            {/* Img */}
            <Link to={page} className="imgWejangan" style={{
                backgroundImage: `url(${imgWejangan})`
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

export default CardWejangan