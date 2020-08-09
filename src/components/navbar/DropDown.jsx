import React from 'react'
import './dropDown.scss'

const DropDown = ({menuItem}) => {


  return (
       <div className="list-group dropdownMenu" style={{
           position : 'absolute',
           width : '200px',
            
       }}>
           
            {menuItem.map((e)=>(
                <a href={e.listTo} className="list-group-item"  
                    
                >{e.listName}</a>
            ))}
          
            
        </div>
  )
}

export default DropDown
