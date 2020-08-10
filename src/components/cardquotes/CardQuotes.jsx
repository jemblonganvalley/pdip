import React from 'react'

import './CardQuotes.scss'

const CardQuotes = ({ img, icon1, txt1, icon2, txt2 }) => {
    return (
        <>
            {/* Img */}
            <div className="img" style={{
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
            </div>
            {/* Img */}
        </>
    )
}

export default CardQuotes