import React, { Component, useEffect, useState } from "react";
import logo from "../../img/pdiperjuangan02.svg";
import "./MainNavbar.scss";
import { Link, NavLink, Redirect } from "react-router-dom";
import DropDown from "./DropDown";
import { useMediaQuery } from "react-responsive";
import pdimobile from "../../img/pdimobile.svg";
import { action, thunk, useStoreActions, useStoreState } from "easy-peasy";
import "../../database/globalState";

const MainNavbar = ({ token }) => {
  let [show, setShow] = useState(false);
  let [menu, setMenu] = useState([]);
  let [scroll, setScroll] = useState(false);

  const getDataMenu = async function () {
    const res = await fetch("https://atur.biar.pw/api/web/config/home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setMenu(data.query.nav);
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-device-width: 600px)",
  });

  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minDeviceWidth: 750, maxDeviceWidth: 1000 })
    return isTablet ? children : null
  }

  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

  const handleShow = (e) => {
    setShow(e.target.value);
  };

  // For Trigger menu dropdown (Mobile)
  let [trigger1, setTrigger1] = useState(false);
  let [trigger2, setTrigger2] = useState(false);
  let [trigger3, setTrigger3] = useState(false);
  let [trigger4, setTrigger4] = useState(false);
  let [trigger5, setTrigger5] = useState(false);
  let [trigger6, setTrigger6] = useState(false);
  let [trigger7, setTrigger7] = useState(false);
  // end For Trigger menu dropdown (Mobile)

  // For Button page menu mobile (collapse navbar)
  let [collapse1, setCollapse1] = useState(false);
  let [collapse2, setCollapse2] = useState(false);
  let [collapse3, setCollapse3] = useState(false);
  let [collapse4, setCollapse4] = useState(false);
  let [collapse5, setCollapse5] = useState(false);
  let [collapse6, setCollapse6] = useState(false);
  let [collapse7, setCollapse7] = useState(false);
  // END For Button page menu mobile (collapse navbar)
  useEffect(() => {
    getDataMenu();
  }, []);

  // Onchange text input search to text input page search
  const [value, setValue] = useState();
  const setSearch = useStoreActions((action) => action.setSearch);
  const search = useStoreState((state) => state.search);

  return (
    // START NAVBAR
    <>
      {/* DESKTOP SIZE */}
      {isDesktopOrLaptop && (
        <nav
          className="navbar navbar-expand-lg sticky-top"
          id="navbar"
          style={{
            boxShadow:
              window.scrollY > 1
                ? "-1px 7px 30px -12px rgba(0,0,0,0.75)"
                : "none",
          }}
        >
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/" activeClassName="brand">
              <img
                src={logo}
                alt=""
                width="60"
                className="d-inline-block align-center active"
                loading="lazy"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                {/* MAPPING MENU */}
                {Object.keys(menu).map((e, i) => (
                  <li
                    className="nav-item"
                    style={{
                      position: "relative",
                    }}
                    key={i}
                    onMouseOver={() => {
                      setShow(e);
                      // console.log(show);
                    }}
                    onMouseLeave={() => {
                      setShow("");
                    }}
                  >
                    <NavLink
                      className="nav-link"
                      to={"/" + e.replace(/\s/g, "-").toLowerCase()}
                      activeClassName="active"
                    >
                      {e}
                    </NavLink>

                    {show === e && (
                      <DropDown menuItem={Object.values(menu)} listIndex={i} />
                    )}
                  </li>
                ))}
              </ul>
              <form
                action={`/search/${search}`}
                className="d-inline-flex"
                style={{
                  display: "flex",
                }}
              >
                <input
                  className="form-control mr-2"
                  type="text"
                  placeholder="Cari Artikel"
                  // name="search"
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                />
                <Link
                  to={`/search/${search}`}
                  name="submit"
                  className="btn-next"
                >
                  <i
                    className="fas fa-search"
                    aria-hidden="true"
                    name="icon"
                  ></i>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      )}

      {isLandscape && (
        <nav
          className="navbar navbar-expand-lg sticky-top"
          id="navbar"
          style={{
            boxShadow:
              window.scrollY > 1
                ? "-1px 7px 30px -12px rgba(0,0,0,0.75)"
                : "none",
          }}
        >
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/" activeClassName="brand">
              <img
                src={logo}
                alt=""
                width="60"
                className="d-inline-block align-center active"
                loading="lazy"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                {/* MAPPING MENU */}
                {Object.keys(menu).map((e, i) => (
                  <li
                    className="nav-item"
                    style={{
                      position: "relative",
                    }}
                    key={i}
                    onMouseOver={() => {
                      setShow(e);
                      // console.log(show);
                    }}
                    onMouseLeave={() => {
                      setShow("");
                    }}
                  >
                    <NavLink
                      className="nav-link"
                      to={"/" + e.replace(/\s/g, "-").toLowerCase()}
                      activeClassName="active"
                    >
                      {e}
                    </NavLink>

                    {show === e && (
                      <DropDown menuItem={Object.values(menu)} listIndex={i} />
                    )}
                  </li>
                ))}
              </ul>
              <form
                action={`/search/${search}`}
                className="d-inline-flex"
                style={{
                  display: "flex",
                }}
              >
                <input
                  className="form-control mr-2"
                  type="text"
                  placeholder="Cari Artikel"
                  // name="search"
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                />
                <Link
                  to={`/search/${search}`}
                  name="submit"
                  className="btn-next"
                >
                  <i
                    className="fas fa-search"
                    aria-hidden="true"
                    name="icon"
                  ></i>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      )}


      {isMobile && (
        <nav
          className="navbar navbar-expand-lg sticky-top"
          id="navbar"
          style={{
            boxShadow:
              window.scrollY > 1
                ? "-1px 7px 30px -12px rgba(0,0,0,0.75)"
                : "none",
          }}
        >
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/" activeClassName="brand">
              <img
                src={pdimobile}
                alt=""
                width="60"
                className="d-inline-block align-center active"
                loading="lazy"
                onClick={() => {
                  setCollapse1(false);
                }}
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
              style={{
                color: "#fff",
              }}
              onClick={() => {
                setCollapse1(!collapse1);
              }}
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{
                display: collapse1 ? "block" : "none",
              }}
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                {Object.keys(menu).map((e, i) => (
                  <li
                    className="nav-item"
                    style={{
                      position: "relative",
                    }}
                    key={e.id}
                    onClick={() => {
                      setShow(e.name);
                    }}
                  >
                    <NavLink
                      className="nav-link"
                      to={"/" + e.replace(/\s/g, "-").toLowerCase()}
                      activeClassName="active"
                      onClick={() => {
                        setCollapse1(!collapse1);
                      }}
                    >
                      {e}
                    </NavLink>

                    {show === e && (
                      <DropDown menuItem={Object.values(menu)} listIndex={i} />
                    )}

                    {/* Container Dropdown menu mobile */}
                    {Object.values(menu)[i].map((e) => (
                      <div
                        className="dropdown-menu-mobile"
                        style={{
                          height: trigger1 ? "50px" : "0",
                          transition: trigger1
                            ? "0.5s ease-in-out"
                            : "0.3s ease-in",
                        }}
                      >
                        <Link
                          className="page-menu-drop-mobile"
                          style={{
                            color: "#f3f3f3",
                          }}
                        >
                          {e.title}
                        </Link>
                      </div>
                    ))}

                    {/* end Container Dropdown menu mobile */}
                  </li>
                ))}

                {/* Trigger For Menu Dropdown menu mobile */}
                <div className="btn-menu-drop-mobile">
                  {/* btn drop 1 */}
                  <li className="list-btn-menu-drop">
                    <i
                      className="fas fa-angle-down"
                      id="icon-menuDrop"
                      onClick={() => {
                        setTrigger1(!trigger1);
                      }}
                      style={{
                        transform: trigger1 ? "rotate(-180deg)" : "rotate(0)",
                        color: trigger1 ? "#333" : "#f3f3f3",
                        fontSize: trigger1 ? "20pt" : "13pt",
                        transition: trigger1
                          ? "0.5s ease-in-out"
                          : "0.3s ease-in",
                      }}
                    ></i>
                  </li>
                </div>
                {/* END Trigger For Menu Dropdown menu mobile */}

                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown" expanded>
                      {e.listItem.map((e)=>(
                        <li><Link class="dropdown-item" to={e.listTo}>{e.listName}</Link></li>
                        
                      ))}
                    </ul> */}
              </ul>
              <form className="d-inline-flex">
                <input
                  className="form-control mr-2"
                  type="text"
                  placeholder="cari artikel"
                  name="search"
                />
                <Link to="/search" name="submit" className="btn-next">
                  <i
                    className="fas fa-search"
                    aria-hidden="true"
                    name="icon"
                  ></i>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      )}
      
      
    </>
  );
};

export default MainNavbar;
