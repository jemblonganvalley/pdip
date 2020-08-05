import React from 'react'
import './MainButton.scss'

const MainButton = ({name, margin})=> {
    return (
        <button className="btn btn2" style={{
            margin : margin
        }}>{name}</button>
    )
}

export default MainButton