import React from 'react'
import './dropDown.scss'
import { Link } from 'react-router-dom'

const DropDown = ({menuItem, listIndex}) => {

  const refresh = (pg)=>{
    window.location.href = `${pg}`;

  }

  const refresh2 = (pg)=>{
    window.location.href = `/${pg}`;

  }

  return (
   
       <div className="list-group dropdownMenu">

         {/* {console.log(menuItem)}
         {menuItem[listIndex].map((e,i)=>{
           console.log(e.title)
         })} */}

           <span></span>
            {menuItem[listIndex].map((e, i)=>(
                <Link className="list-group-item"  
                  key={i} 
                  onClick={
                    e.params !== 'all' ? ()=>{
                        refresh(`/page/${e.params}`)
                    } : ()=>{
                        refresh2(`/${e.params}`)
                    }

                  }
                  
                  >{e.title}</Link>
            ))}
          
            <div className="arrow"></div>
        </div>
  )
}

export default DropDown
