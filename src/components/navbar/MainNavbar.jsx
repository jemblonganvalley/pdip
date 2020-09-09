import React, {useEffect, use, useState} from 'react'
import logo from '../../img/pdiperjuangan02.svg'
import './MainNavbar.scss'
import {NavLink} from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import DropDown from './DropDown'
import MediaQuery, {useMediaQuery} from 'react-responsive'
import {Link} from 'react-router-dom'

const MainNavbar = ()=> {

    let [show, setShow] = useState()
    let [collapse, setCollapse] = useState(false)
    let [menu, setMenu] = useState([

       {
        id : 1,
        name : 'partai',
        to : '/partai',
        listItem : [
          {
          listName : 'Ad/Art',
          listTo : '#Ad/Art'
          },
          {
          listName : 'Visi Dan Misi',
          listTo : '/page1'
          },
          {
          listName : 'Lambang dan Bendera',
          listTo : '#Lambang dan Bendera'
          },
          {
          listName : 'Peraturan Partai',
          listTo : '#Peraturan Partai'
          },
          {
          listName : 'Piagam PDI Perjuangan',
          listTo : '#Piagam PDI Perjuangan'
          },
          {
          listName : 'AStruktur dan Komposisi ',
          listTo : '#AStruktur dan Komposisi '
          },
          {
          listName : 'Anggota Legislatif',
          listTo : '#Anggota Legislatif'
          },
           {
          listName : 'Lagu Perjuangan',
          listTo : '#Lagu Perjuangan'
          },
        ]
      },
       {
        id : 2,
        name : 'bung karno bapak bangsa',
        to : '/bungkarno',
        listItem : [
          {
          listName : 'Pidato Bung Karno 1 Juni  1945',
          listTo : '/page1'
          },
          {
          listName : 'Indonesia Menggugat',
          listTo : '#Indonesia Menggugat'
          },
          {
          listName : 'Mencapai Indonesia Merdeka',
          listTo : '#Mencapai Indonesia Merdeka'
          },
          {
          listName : 'Membangun Dunia kembali 1960',
          listTo : '#Membangun Dunia kembali 1960'
          },
          {
          listName : 'Nawaksara tahun 1966',
          listTo : '#Nawaksara tahun 1966'
          },
          {
          listName : 'Kapitalisme Bangsa sendiri Tahun 1932',
          listTo : '#Kapitalisme Bangsa sendiri Tahun 1932'
          },
          {
          listName : 'Deklarasi Ekonomi Tahun 1963; dan',
          listTo : '#Deklarasi Ekonomi Tahun 1963; dan'
          },
           {
          listName : 'Marhenisme adalah Teori Perjuangan Tahun 1965',
          listTo : '#Marhenisme adalah Teori Perjuangan Tahun 1965'
          },
        ]
      },
       {
        id : 3,
        name : 'ketua umum',
        to : '/ketuaumum',
        listItem : [
          {
          listName : 'Kongres',
          listTo : '/pidatokongres'
          },
          {
          listName : 'Rakernas',
          listTo : '/pidatorakernas'
          },
          {
          listName : 'Rakornas',
          listTo : '/pidatorakornas'
          },
          {
          listName : 'HUT',
          listTo : '/pidatohut'
          }
        ]
      },
       {
        id : 4,
        name : 'multimedia',
        to : '/multimedia',
        listItem : [
          {
          listName : 'Siaran Pers',
          listTo : '#Siaran Pers'
          },
          {
          listName : 'Streaming',
          listTo : '/videomedia'
          },
          {
          listName : 'Video',
          listTo : '#Video'
          },
          {
          listName : 'Video Dokumentasi',
          listTo : '/videdokumen'
          },
          {
          listName : 'Teaser Video',
          listTo : '/videoteaser'
          }
        ]
      },
       {
        id : 5,
        name : 'berita',
        to : '/berita',
        listItem : [
          {
          listName : 'Nasional',
          listTo : '/beritanasional'
          },
          {
          listName : 'Daerah',
          listTo : '/beritadaerah'
          },
          {
          listName : 'Kegiatan Partai',
          listTo : '/kegiatanpartai'
          },
          {
          listName : 'Foto',
          listTo : '#Foto'
          },
          {
          listName : 'Foto Berita',
          listTo : '#Foto Berita'
          },
          {
          listName : 'Infografis',
          listTo : '#Infografis'
          }
        ]
      },
       {
        id : 6,
        name : 'informasi publik',
        to : '/informasi',
        listItem : [
          {
          listName : 'Profil PPID',
          listTo : '#Profil PPID'
          },
          {
          listName : 'Struktur PPID PDI PERJUANGAN',
          listTo : '#Struktur PPID PDI PERJUANGAN'
          },
          {
          listName : 'Maklumat PPID',
          listTo : '#Maklumat PPID'
          },
          {
          listName : 'Tugas Dan Fungsi PPID',
          listTo : '#Tugas Dan Fungsi PPID'
          },
          {
          listName : 'Regulasi',
          listTo : '#Regulasi'
          },
          {
          listName : 'LHKPN',
          listTo : '#LHKPN'
          },
          {
          listName : 'Laporan Keuangan',
          listTo : '#Laporan Keuangan'
          },
           {
          listName : 'Regulasi',
          listTo : '#Regulasi'
          },
          {
          listName : 'Formulir Permintaan Informasi Publik',
          listTo : '#Formulir Permintaan Informasi Publik'
          },
          {
          listName : 'Tata Cara Memperoleh Informasi',
          listTo : '#Tata Cara Memperoleh Informasi'
          },
          
        ]
      },
       {
        id : 7,
        name : 'pemilu',
        to : '/pemilu',
        listItem : [
          {
          listName : 'Pilkada',
          listTo : '#Pilkada'
          },
          {
          listName : 'Pileg',
          listTo : '#Pileg'
          },
          {
          listName : 'Pilpres',
          listTo : '#Pilpres'
          }
        ]
      },
      {
        id : 7,
        name : 'Events',
        to : '/event',
        listItem : [
          {

          }
        ]
      }

    ])

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
                    <NavLink className="nav-link" to={e.to} activeClassName='active'>{e.name}</NavLink>
                      {show === e.name && (
                          <DropDown menuItem={e.listItem}/>
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