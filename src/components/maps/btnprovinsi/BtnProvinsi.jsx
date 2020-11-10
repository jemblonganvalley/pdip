import React from 'react'
import { Link } from 'react-router-dom'
import './BtnProvinsi.scss'

const BtnProvinsi = ({pageProv, nameProv, mouseOver, mouseLeave, color, transisi})=>{
    return(
        <>
        {/* For Botton Name Provinsi For on off Display Image Provinsi */}
        <Link to={pageProv} className="btn-name-prov"
            onMouseEnter={mouseOver}
            onMouseLeave={mouseLeave}

            style={{
                color : `${color}`,
                transition: `${transisi}`
            }}
        >
            <small className="DPDText">
            DPD {nameProv}
            </small>
        </Link>
        {/* END For Botton Name Provinsi For on off Display Image Provinsi */}
        </>
    )
}

export default BtnProvinsi