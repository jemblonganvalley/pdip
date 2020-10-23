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
                  to={
                    e.params === 'all' ? `/${e.title.replace(/\s/g, '-').toLowerCase()}` : 
                    e.params === 'siaran_langsung' ? '/multimedia/siaran_langsung' : 
                    e.params === 'dokumentasi' ? '/multimedia/dokumentasi' : 
                    e.params === 'teaser' ? '/multimedia/teaser' : 
                    e.params === 'wawancara' ? '/multimedia/wawancara' : 
                    `/article/${e.params}/${e.title.replace(/\s/g, '-').toLowerCase()}`
                  }>{e.title}</Link>
            ))}
          
            <div className="arrow"></div>
        </div>
  )
}

export default DropDown
