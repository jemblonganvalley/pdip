import React from 'react'
import './MainDivider.scss'

const MainDivider = ({text, garisMerah})=> {
    return (
        <div className="col3-container-3" style={{
            margin : '2rem 0'
        }}>
            <div className="box-jdl-col3">
                <p className="txt-jdl-col3">
                    {text}
                </p>
            </div>
            <div className="box-garis-lurus-col3">
                <div className="garis-merah" style={{
                    width : garisMerah
                }}>

                </div>
            </div>
        </div>
    )
}

export default MainDivider