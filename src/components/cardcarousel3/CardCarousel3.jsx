import React from 'react'

import './CardCarousel3.scss'

const CardCarousel3 = ({ provinsi, garisMerahTipis, garisMerahTebal, kota, title1, title2, title3, title4 }) => {
    return (
        <>
            {/* Section1 JAMBI */}
            <div className="section1-column1">
                <p className="jdl-jambi-section1">
                    {provinsi}
                </p>
                <div className={garisMerahTipis}>
                    <div className={garisMerahTebal}>

                    </div>
                </div>

                {/* Column1 Section1 */}
                <div className="col1-section1">
                    <p className="title1-col1">
                        {kota}
                    </p>
                    <p className="title2-col1">
                        {title1}
                    </p>
                    <p className="txt-nama-pemimpin-bupati">
                        {title2}
                    </p>
                    <p className="title3-col1">
                        {title3}
                    </p>
                    <p className="txt-nama-wakil-bupati">
                        {title4}
                    </p>
                </div>
                {/* END Column1 Section1 */}
            </div>
            {/* END Section1 JAMBI */}
        </>
    )
}

export default CardCarousel3