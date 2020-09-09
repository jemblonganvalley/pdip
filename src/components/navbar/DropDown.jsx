import React from 'react'
import './dropDown.scss'
import { Link } from 'react-router-dom'

const DropDown = ({menuItem}) => {


  return (
       <div className="list-group dropdownMenu">
           <span></span>
            {menuItem.map((e)=>(
                <a href={e.listTo} className="list-group-item"  
                    
                >{e.listName}</a>
            ))}
          
            <div className="arrow"></div>
        </div>
  )
}

export default DropDown
