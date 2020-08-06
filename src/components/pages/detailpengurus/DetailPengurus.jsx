import React from 'react'
import './DetailPengurus.scss'

const DetailPengurus = ()=> {
    return (
        <div className="wrapperDetail">
            {/* HEADERS */}
            <div className="detailHead">
                <div className="backHead">
                    <div className="textBackHead">
                        <h2>Solid Bergerak Untuk<br/>Indonesia Raya </h2>
                    </div>
                </div>
            </div>
            {/* END */}
            
            {/* LINK PARTAI */}
            <div className="linkedDetail">
                <i class="fa fa-home">
                    <span>Home / Partai /</span>
                </i>
            </div>
            {/* END */}
        </div>
    )
}

export default DetailPengurus