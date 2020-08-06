import React from 'react'
import './MainButton.scss'
import {Link} from 'react-router-dom'

const MainButton = ({name, margin, pages})=> {
    return (
        <Link className="btn btn2" style={{
            margin : margin
        }} to={pages} >{name}</Link>
    )
}

export default MainButton