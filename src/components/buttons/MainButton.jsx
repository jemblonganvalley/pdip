import React from 'react'
import './MainButton.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const MainButton = ({name, margin, pages, bgColor = "#d80010", hoverColor = "#2f3542", btnIcons, borderButton, mr})=> {

    let [hover, setHover] = useState(false)

    return (
        <Link className="btn btn2" style={{
            margin : margin,
            backgroundColor : hover ? hoverColor : bgColor,
            border : borderButton
        }} to={pages} onMouseEnter={()=> {
            setHover(!hover)
        }} onMouseLeave={()=> {
            setHover(!hover)
        }}>
            <i className={`${btnIcons}`} style={{
                marginRight : mr
            }}></i>
            {name}</Link>
    )
}

export default MainButton