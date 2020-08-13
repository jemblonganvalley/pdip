import React, {useEffect, use, useState} from 'react'
import logo from '../../img/pdiperjuangan02.svg'
import './MainNavbar.scss'
import {NavLink} from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import DropDown from './DropDown'
import { useStoreState, useStoreActions } from 'easy-peasy'

const MainNavbar = ()=> {

    let [show, setShow] = useState('')
    // let [menu, setMenu] = useState([])

    const menu = useStoreState(state => state.blogCategory)
    const setBlogCategory = useStoreActions(action => action.setBlogCategory)

   useEffect(()=>{

      // fetch('https://cms.biar.pw/api/blog/category/merger', {
      //   method : 'POST',
      //   mode : 'cors',
      //   headers : {
      //     "Content-Type" : "application/json",
      //     "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9jbXMuYmlhci5wd1wvYXBpXC9hdXRoXC9hcHAiLCJpYXQiOjE1OTcyNjYxNTQsImV4cCI6MTU5NzM1MjU1NCwibmJmIjoxNTk3MjY2MTU0LCJqdGkiOiJOOUl3MDd4S2VrNXc1bVdIIiwic3ViIjoxNCwicHJ2IjoiOGZmNjMwYTAwY2E0YTNlYWY2ZjI1NGY1YWJlNWFiMWJlZWQyNzI0OSJ9.Pu29QRdPec2vdkhdCJx1fhzyuIfIZv3wI7m9Q_ZS5EU"
      //   }
      // }).then(res => res.json())
      // .then(data =>{
      //   console.log(data.query)
      //   setMenu(data.query)
      // })

   },[])

    return (
      // START NAVBAR

        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/" activeClassName="brand" >
                <img src={logo} alt="" width="60"  className="d-inline-block align-center active" loading="lazy" />
              </NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                 {menu.map((e)=>(
                    <li className="nav-item" style={{
                    position : 'relative'
                  }} 
                    key={e.id}
                    onMouseOver={()=>{
                      setShow(e.name)
                      // console.log(show);
                    }}

                    onMouseLeave={()=>{
                      setShow('')
                    }}
                    
                  >
                    <NavLink className="nav-link" to={e.name.split(" ")[0].toLowerCase()} activeClassName='active'>{e.name}</NavLink>
                      {show === e.name && (
                          <DropDown menuItem={e.child}/>
                      )}

                  </li>
                 ))}
                  
               
                </ul>
                <form className="d-inline-flex">
                  <input className="form-control mr-2" type="text" placeholder="Search for something" name="search" />
                  <button name="submit">
                      <i class="fa fa-long-arrow-right" aria-hidden="true" name="icon" ></i>
                  </button>
                </form>
              </div>
            </div>
        </nav>

      // END NAVBAR
    
    )
}

export default MainNavbar