import React from 'react'
import './dropDown.scss'
import { Link } from 'react-router-dom'

const DropDown = ({menuItem, listIndex}) => {


  return (
   
       <div className="list-group dropdownMenu">

         {/* {console.log(menuItem)}
         {menuItem[listIndex].map((e,i)=>{
           console.log(e.title)
         })} */}

           <span></span>
            {menuItem[listIndex].map((e, i)=>(
                <Link to={e.params} className="list-group-item"  
                  key={i} 
                >{e.title}</Link>
            ))}
          
            <div className="arrow"></div>
        </div>
  )
}

export default DropDown
