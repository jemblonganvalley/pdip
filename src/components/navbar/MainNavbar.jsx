import React, {Component, useEffect, useState} from 'react'
import logo from '../../img/pdiperjuangan02.svg'
import './MainNavbar.scss'
import {Link, NavLink, Redirect} from 'react-router-dom'
import DropDown from './DropDown'
import {useMediaQuery} from 'react-responsive'
import { useStoreState } from 'easy-peasy'

const MainNavbar = ({token})=> {

    let [search, setSearch] = useState(false)
    let [show, setShow] = useState()
    let [collapse, setCollapse] = useState(false)
    let [menu, setMenu] = useState([])
    let [scroll, setScroll] = useState(false)

    // let pageSearch = window.location.href='/search'

    // onSubmit = ()=>{
    //   if(userFound){
    //     return <Redirect to
    //   }
    // }]

    // Onscroll
    // let [shadow, setShadow] = useState(true)

    // END onScroll

    // OnScroll Navbar
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
      // var prevScrollpos = window.pageYOffset;
      // window.onscroll = function() {
      //   var currentScrollPos = window.pageYOffset;
      //   if (prevScrollpos > currentScrollPos) {
      //     document.getElementById("navbar").style.top = "0";
      //   } else {
      //     document.getElementById("navbar").style.top = "-200px";
      //   }
      //   prevScrollpos = currentScrollPos;
      // }
    // END OnScroll Navbar
    
    const getDataMenu = async function(){
    const res = await fetch('https://atur.biar.pw/api/web/config/home', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        Authorization : `Bearer ${token}`
      }
    })
    const data = await res.json()
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
    }

    
    useEffect(()=>{
      getDataMenu()

      // onScroll BoxShadow
      // window.addEventListener('scroll', handleScroll)
      // return () => {
      //     window.removeEventListener('scroll', handleScroll)
      // }
      // END onScroll BoxShadow
    },[])

    // const handleScroll = () => {
    //   if (window.scrollY > 50) {
    //     document.querySelector('.navbar').className = 'navbar muncul'
    //   } else {
    //     document.querySelector('.navbar').className = 'navbar'
    //   }
    // }
   

    return (
      // START NAVBAR
      <>

  

        {/* DESKTOP SIZE */}
        {isDesktopOrLaptop && (

        <nav className="navbar navbar-expand-lg sticky-top" id="navbar">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/" activeClassName="brand" >
              <img src={logo} alt="" width="60" className="d-inline-block align-center active" loading="lazy"/>
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

                    onMouseLeave={() => {
                      setShow('')
                    }}

                  >
                    <NavLink className="nav-link" to={'/' + e.replace(/\s/g, '-').toLowerCase()} activeClassName='active'>{e}</NavLink>

                      {show === e && (
                          <DropDown menuItem={Object.values(menu)} listIndex={i}/>
                      )}
                      
                  </li>
                 ))}

                </ul>
                <form className="d-inline-flex" style={{
                  display: 'flex'
                }}>
                  <input className="form-control mr-2" type="text" placeholder="Cari Artikel" name="search"/>
                  <Link to='/search' name="submit" className="btn-next">
                      <i class="fas fa-search" aria-hidden="true" name="icon" ></i>
                  </Link>
                </form>
              </div>
              
            </div>

            
        </nav>

      )}

      {isMobile && (

        <nav className="navbar navbar-expand-lg sticky-top" id="navbar">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/" activeClassName="brand" >
              <img src={logo} alt="" width="60" className="d-inline-block align-center active" loading="lazy" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation" style={{
              color: '#fff'
            }}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                {Object.keys(menu).map((e, i) => (
                  <li className="nav-item" style={{
                    position: 'relative'
                  }}
                    key={e.id}
                    onClick={() => {
                      setShow(e.name)
                    }}
                  >
                      <NavLink className="nav-link" to={'/' + e.replace(/\s/g, '-').toLowerCase()} activeClassName='active'>{e}</NavLink>

                      {show === e && (
                          <DropDown menuItem={Object.values(menu)} listIndex={i}/>
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
                <input className="form-control mr-2" type="text" placeholder="cari artikel" name="search" />
                <Link to='/search' name="submit" className="btn-next">
                  <i class="fas fa-search" aria-hidden="true" name="icon" ></i>
                </Link>
              </form>

              
            </div>
          </div>
          </nav>
      )}
    </>

    )
}

export default MainNavbar