// Import to React
import React, { useEffect, useState } from 'react'
// END Import to React

import pemilu13 from '../../../img/pemilu13.jpg'
import pemilu14 from '../../../img/pemilu14.jpg'
import pemilu15 from '../../../img/pemilu15.jpg'
import pemilu16 from '../../../img/pemilu16.jpg'
import pemilu17 from '../../../img/pemilu17.jpg'
import pemilu18 from '../../../img/pemilu18.jpg'
import pemilu19 from '../../../img/pemilu19.jpg'
import pemilu20 from '../../../img/pemilu20.jpg'
import pemilu21 from '../../../img/pemilu21.jpg'
import pemilu22 from '../../../img/pemilu22.jpg'
import pemilu23 from '../../../img/pemilu23.jpg'

import './BeritaPage.scss'
import { Link } from 'react-router-dom'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import CarouselBerita from '../../carouselBerita/CarouselBerita'
import Cards from '../../cards/MainCards'
import megawati5 from '../../../img/megawati5.jpg'
import megawati6 from '../../../img/megawati6.jpg'
import megawati7 from '../../../img/megawati7.jpg'

import CardInformasi from '../../cardInformasi/CardInformasi'

import BeritaSatu from '../../../img/berita1.png'
import BeritaDua from '../../../img/berita2.png'
import BeritaTiga from '../../../img/berita3.png'
import BeritaEmpat from '../../../img/berita4.png'
import MainButton from '../../buttons/MainButton'
import MainDivider from '../../divider/MainDivider'
import { CarouselDuelBerita } from '../../carouselDualBerita/CarouselDuelBerita'

// Create Component
const BeritaPage = () => {

    const [berita, setBerita] = useState([])
    const [beritaDaerah, setBeritaDaerah] = useState([])
    const [beritaNasional, setBeritaNasional] = useState([])
    const [beritaPartai, setBeritaPartai] = useState([])

    const getDataBerita = async ()=>{
         const res = await fetch('https://atur.biar.pw/api/auth/app', {
            method :'POST',
            headers : {
                "Content-Type" : "application/json"
        },
        body : JSON.stringify({
                    app_id : "1555309664580",
                    api_secret : "4d672ce3-e422-4d8a-86ff-fabb1808a689"
                })
        })
        const data = await res.json()

        //FETCH BERITA DAERAH
        const resBeritaDaerah = await fetch('https://atur.biar.pw/api/blog/data/?page=1',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            },
            body : JSON.stringify({
                order :{"key":"id","value":"desc"} ,
                limit : 6,
                where : {"key":"blog.id_category","value":"47"} 
            })
        })
        const dataBeritaDaerah = await resBeritaDaerah.json()
        setBeritaDaerah(dataBeritaDaerah.query.data)

        //FETCH BERITA NASIONAL
        const resBeritaNasional = await fetch('https://atur.biar.pw/api/blog/data/?page=1',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            },
            body : JSON.stringify({
                order :{"key":"id","value":"desc"} ,
                limit : 6,
                where : {"key":"blog.id_category","value":"45"} 
            })
        })
        const dataBeritaNasional = await resBeritaNasional.json()
        setBeritaNasional(dataBeritaNasional.query.data)

        //FETCH BERITA PARTAI
        const reasBeritaPartai = await fetch('https://atur.biar.pw/api/blog/data/?page=1',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            },
            body : JSON.stringify({
                order :{"key":"id","value":"desc"} ,
                limit : 6,
                where : {"key":"blog.id_category","value":"43"} 
            })
        })
        const dataBeritaPartai = await reasBeritaPartai.json()
        setBeritaPartai(dataBeritaPartai.query.data)

        }


    useEffect(() => {
        getDataBerita()
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className="wrapperBerita">
                <div className="headers">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">

                        </div>
                    </div>
                </div>
                <div className="linkedBerita">
                    <BreadCrumbs link1="Home"
                        to1="/"
                        page2="Berita" />
                </div>

                {/* Container1 */}
                <div className="container-1-beritaPage">
                    {/* Column1 */}
                    <CarouselBerita />
                    {/* END Column1 */}

                    {/* Column2 */}
                    <CardInformasi to1="/beritanasional" image={BeritaSatu} to2="/beritadaerah"
                        image2={BeritaDua} to3="/beritafoto"
                        image3={BeritaTiga} to4="/kegiatanpartai"
                        image4={BeritaEmpat}
                        width1="35"
                        width2="35"
                        width3="35"
                        width4="35"
                        text="berita nasional"
                        text2="berita daerah"
                        text3="berita foto"
                        text4="kegiatan partai" />
                    {/* END Column2 */}

                    <div className="cardContainer">
                          {beritaDaerah.map((e,i)=>{
                                return (
                                    <Cards 
                                    id={e.id}
                                    imageCard={e.path} 
                                    textSmall={e.author}
                                    TextH5={e.title}
                                    dateTime={e.created_at}
                                    borderRadius="10px" />
                                )
                            })}
                    </div>

                    {/* END Column3 */}

                    {/* Column4 */}
                    <div className="col4-container-1-beritaPage">
                        <MainDivider text="Berita Foto"
                            garisMerah="7rem"
                            m="1rem 0 0 0" />
                    </div>
                    {/* END Column4 */}

                    {/* END Column5 */}
                </div>
                {/* Column5 */}
             
                       {/* CAROUSEL DUAL BERITA */}
                  
                        <CarouselDuelBerita cat1={45} cat2={44} totalPage={3}/>
                       
                {/* END Container1 */}

                {/* Container2 */}
                <div className="container-2-beritaPage">
                    {/* Column1 */}
                    <div className="col1-container-2-beritaPage banner-berita">
                        <h2 className="txt-title-col1">
                            Ut enim ad minim veniam, quis nostrud
                            <br /> exercitation ullamco laboris
                        </h2>
                    </div>
                    {/* END Column1 */}
                    {/* Column2 */}
                    <div className="col2-container-2-beritaPage">
                        <MainButton name="LIHAT" />
                    </div>
                    {/* END Column2 */}
                </div>
                {/* END Container2 */}

                {/* Container3 */}
                <div className="container-3-beritaPage">
                    {/* Column1 */}
                        <MainDivider text="Berita Daerah"
                            garisMerah="7rem"
                            m="1rem 0 0 0" />
                    {/* END Column1 */}

                    {/* Column2 */}
                   <div className="cardContainer">
                          {beritaNasional.map((e,i)=>{
                                return (
                                    <Cards 
                                    id={e.id}
                                    imageCard={e.path} 
                                    textSmall={e.author}
                                    TextH5={e.title}
                                    dateTime={e.created_at}
                                    borderRadius="10px" />
                                )
                            })}
                    </div>
                    {/* END Column2 */}

                    {/* Column3 */}
                        <MainDivider text="Kegiatan Partai"
                            garisMerah="7rem"
                            m="1rem 0 0 0" />
                    {/* END Column3 */}

                    {/* Column4 */}
                   <div className="cardContainer">
                          {beritaPartai.map((e,i)=>{
                                return (
                                    <Cards 
                                    id={e.id}
                                    imageCard={e.path} 
                                    textSmall={e.author}
                                    TextH5={e.title}
                                    dateTime={e.created_at}
                                    borderRadius="10px" />
                                )
                            })}
                    </div>
                    {/* END Column4 */}
                </div>
                {/* END Container3 */}
            </div>
        </>
    )
}
// END Create Component

export default BeritaPage