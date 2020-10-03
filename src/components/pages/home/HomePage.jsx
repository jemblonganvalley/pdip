import React, {useEffect, useState} from 'react'
// import './HomePage.css'
import './HomePage.scss'
import MainSlider from '../../slider/MainSlider'
import Informasi from '../../../img/informasii-01.png'
import Rekening from '../../../img/rekening.png'
import Calendar from '../../../img/calendarr.png'
import Lagu from '../../../img/laguperjuangan.png'
import MusicPdi from '../../musicpdi/MusicPdi'
import CardMaps from '../../cardmaps/CardMaps'
import Cards from '../../cards/MainCards'
import megawati1 from '../../../img/megawati1.jpg'
import megawati2 from '../../../img/megawati2.jpg'
import megawati3 from '../../../img/megawati3.jpg'
import megawati5 from '../../../img/megawati5.jpg'
import megawati6 from '../../../img/megawati6.jpg'
import megawati7 from '../../../img/megawati7.jpg'
import MainButton from '../../buttons/MainButton'
import MainDivider from '../../divider/MainDivider'
import laguPerjuangan from '../../../img/laguperjuangan.png'
import WidgetBerita from '../../widget/widgetBerita/WidgetBerita'
import CarouselKM from '../../carouselKM/CarouselKM'
import downloadSatu from '../../../img/lightDownSatu.png'
import downloadDua from '../../../img/lightDownDua.png'
import downloadTiga from '../../../img/lightDownTiga.png'
import MusicMobile from '../../musicPdiMobile/MusicMobile'
import WidgetBaru from '../../widgetBaru/WidgetBaru'
import KMobile from '../../carouselKMobile/KMobile'
import { useStoreState } from 'easy-peasy'
import { Link, NavLink, Redirect } from 'react-router-dom'
import { CarouselDuelBerita } from '../../carouselDualBerita/CarouselDuelBerita'


const HomePage = ()=> {

    const [berita, setBerita] = useState([])
    const [beritaVideo, setBeritaVideo] = useState([])
    const [configHome, setConfigHome] = useState([])

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

        const resBerita = await fetch('https://atur.biar.pw/api/blog/data/',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            },
            body : JSON.stringify({
                order :{"key":"id","value":"desc"} ,
	            limit : 6
            })
        })
        const dataBerita = await resBerita.json()
        setBerita(dataBerita.query.data)

    }

     const getDataBeritaVideo = async ()=>{
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

        const resBerita = await fetch('https://atur.biar.pw/api/blog/data/',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            },
            body : JSON.stringify({
                order :{"key":"id","value":"desc"} ,
	            limit : 3
            })
        })
        const dataBerita = await resBerita.json()
        setBeritaVideo(dataBerita.query.data)

    }

    const getConfigHome = async ()=>{
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

        const resConfigHome = await fetch('https://atur.biar.pw/api/web/pages/home', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            }

        })

        const dataConfigHome = await resConfigHome.json()
        // console.log(dataConfigHome)
        setConfigHome(dataConfigHome.query)
    }

    useEffect(()=>{
        getDataBerita()
        getDataBeritaVideo()
        getConfigHome()
        window.scrollTo(0,0)
    },[])

    return (
        <div classname="homepage" style={{
            overflowX : 'hidden'
        }}>

            {configHome.length > 0 && (
                <MainSlider 
                value={configHome[0].value}
                cls={configHome[0].class}
            />
            )}

            <div className="homePageTwo" >
                <div className="customRow">

                    {configHome.length > 0 && (
                        configHome[1].value.map((e,i)=>(
                         <div className="col-lg-4 custom" key={i}>
                            <div className="customBorder">
                                <img src={`https://atur.biar.pw/public/${e.image}`} alt="" width="100" height="100" />
                                <h3>{e.title}</h3>
                            </div>
                        </div>
                        ))
                    )}

                </div>

                <div className="videoPage">
                    <MainDivider text="Video" />
                    <div className="paragrapVideo">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugiat consequuntur dicta quam sequi facere eligendi voluptatibus aliquid, maiores repellat illum quos? Assumenda, soluta? Totam?</p>
                    </div>
                    <div className="bannerYoutube">
                        <div className="textYoutube">
                            <div className="wrapperText">
                                <ul className="circleYoutube">
                                    <li>
                                        <a href="youtube"><i className="fa fa-play"></i></a>
                                    </li>
                                </ul>
                                <div className="textInfoYT">
                                    <h3 className="videoTerbaru">Video Terbaru</h3>
                                    <br/>
                                    <h6 className="siaranHut">Siaran langsung HUT ke-47 PDI Perjuangan Kemayoran Jakarta. 10 Januari 2020</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cardContainer">
                          {beritaVideo.map((e,i)=>{
                                return (
                                    <Cards 
                                    id={e.id}
                                    textCategoryChild={e.category_child_name}
                                    imageCard={e.path} 
                                    textSmall={e.author}
                                    TextH5={e.title}
                                    dateTime={e.created_at}
                                    borderRadius="10px" />
                                )
                            })}
                    </div>
                    
                    <MainButton name="lihat semua"
                                margin="1rem 0" 
                                pages='videomedia'/>
                </div>

                <div className="beritaPage">
                    <MainDivider text="berita"/>
                    <div className="paragrapBerita">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugiat consequuntur dicta quam sequi facere eligendi voluptatibus aliquid, maiores repellat illum quos? Assumenda, soluta? Totam?</p>
                    </div>

                    
                </div>
            </div>

            <CarouselKM />
            <KMobile />
            

            <div className="cardContent">

                {berita.map((e,i)=>{
                    return (
                        <Cards 
                        id={e.id}
                        imageCard={e.path} 
                        textCategoryChild={e.category_child_name}
                        textSmall={e.author}
                        TextH5={e.title}
                        dateTime={e.created_at}
                        // paragrap={e.description}
                        borderRadius="10px" />
                    )
                })}
                
            </div>
           
                <span className="btnSize" >
                        <MainButton name="lihat semua"
                        margin="1rem 0" pages='/berita'/>
                </span>
            <MusicPdi/>
            <MusicMobile />
    
            <div className="beritaTerbaru" style={{
                display: 'flex',
                justifyContent : 'center',
                alignItems : 'center'
            }}>
                <MainDivider text="Foto Gallery "/>
            </div>

            <CarouselDuelBerita />

            
        </div>

    )
}

export default HomePage