import React, {useEffect, use} from 'react'
import logo from '../../img/logopdi.png'
import './MainNavbar.scss'
import {NavLink} from 'react-router-dom'

const MainNavbar = ()=> {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="" width="50" height="50" className="d-inline-block align-center active" loading="lazy" />
                PDI PERJUANGAN
              </NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link active" to="/partai">Partai</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/bungkarno">bung karno bapak bangsa</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/ketuaumum">ketua umum</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/multimedia">multimedia</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/berita">berita</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/informasi">informasi publik</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/pemilu">pemilu</NavLink>
                  </li>
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


    )
}

export default MainNavbar