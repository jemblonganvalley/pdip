import React, {useEffect, useState} from 'react'
import logo from '../../img/pdiperjuangan02.svg'
import './MainNavbar.scss'
import {NavLink} from 'react-router-dom'
import DropDown from './DropDown'
import {useMediaQuery} from 'react-responsive'
import { useStoreState } from 'easy-peasy'

const MainNavbar = ({token})=> {


    let [show, setShow] = useState()
    let [collapse, setCollapse] = useState(false)
    let [menu, setMenu] = useState([])
    
    const getDataMenu = async function(){
    const res = await fetch('https://atur.biar.pw/api/web/config', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        Authorization : `Bearer ${token}`
      }
    })
    const data = await res.json()
    console.log(token)
    setMenu(data.query.nav)
  }

    const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
    })

    const isMobile = useMediaQuery({
    query: '(max-device-width: 599px)'
    })

    const handleShow = (e)=>{
      setShow(e.target.value)
      console.log(show);
    }

    useEffect(()=>{
      getDataMenu()
    },[])
   

    return (
      // START NAVBAR
      <>

  

        {/* DESKTOP SIZE */}
        {isDesktopOrLaptop && (

        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/" activeClassName="brand" >
                <img src={logo} alt="" width="60"  className="d-inline-block align-center active" loading="lazy" />
              </NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation" >
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                {/* MAPPING MENU */}
                 {Object.keys(menu).map((e, i)=>(
                    <li className="nav-item" style={{
                    position : 'relative'
                  }} 
                    key={i}
                    onMouseOver={()=>{
                      setShow(e)
                      // console.log(show);
                    }}

                    onMouseLeave={()=>{
                      setShow('')
                    }}
                    
                  >
                    <NavLink className="nav-link" to={e.replace(/\s/g, '-').toLowerCase()} activeClassName='active'>{e}</NavLink>

                      {show === e && (
                          <DropDown menuItem={Object.values(menu)} listIndex={i}/>
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

        )}

        {isMobile && (

        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/" activeClassName="brand" >
                <img src={logo} alt="" width="60"  className="d-inline-block align-center active" loading="lazy" />
              </NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation" >
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                 {menu.map((e)=>(
                    <li className="nav-item" style={{
                    position : 'relative'
                  }} 
                    key={e.id}
                    onClick={()=> {
                        setShow(e.name)
                    }}
                  >
                    <NavLink className="nav-link" to={e.to} activeClassName='active'>{e.name}</NavLink>
                    {show === e.name && (
                          <DropDown menuItem={e.listItem}/>
                      )}
                    {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown" expanded>
                      {e.listItem.map((e)=>(
                        <li><Link class="dropdown-item" to={e.listTo}>{e.listName}</Link></li>
                        
                      ))}
                    </ul> */}


                  </li>
                 ))}
               
                </ul>
                <form className="d-inline-flex">
                  <input className="form-control mr-2" type="text" placeholder="cari sesuatu" name="search" />
                  <button name="submit">
                      <i class="fa fa-long-arrow-right" aria-hidden="true" name="icon" ></i>
                  </button>
                </form>
              </div>
            </div>
        </nav>

        )}
        </>

    
    )
}

export default MainNavbar