import React from 'react'
import './MainDivider.scss'

const MainDivider = ({ text, garisMerah, mrgn }) => {

    let lenText = text
    let pt = 10

    return (
        <div className="col3-container-3" style={{
            margin : mrgn
        }}>
            <div className="box-jdl-col3">
                <h5 className="txt-jdl-col3">
                    {text}
                </h5>
            </div>
            <div className="box-garis-lurus-col3">
                <div className="garis-merah" style={{
                    width: lenText.length * pt
                }}>

                </div>
            </div>
        </div>
    )
}

export default MainDivider