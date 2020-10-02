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
import pemilu16 from '../../../img/pemilu16.jpg'
import pemilu17 from '../../../img/pemilu17.jpg'
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



    const [berita, setBerita] = useState([])
    const [beritaVideo, setBeritaVideo] = useState([])

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

        const resBerita = await fetch('https://atur.biar.pw/api/blog/data/?page=13',{
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

        const resBerita = await fetch('https://atur.biar.pw/api/blog/data/?page=10',{
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

  

    useEffect(()=>{
        getDataBerita()
        getDataBeritaVideo()
        window.scrollTo(0,0)
    },[])

    return (
        <div classname="homepage" style={{
            overflowX: 'hidden'
        }}>
            <MainSlider headline="Solid bergerak untuk Indonesia raya"
                        headline2="Solid bergerak untuk Indonesia raya" />

            <div className="homePageTwo">
                <div className="customRow">
                    <div className="col-lg-4 custom">
                        <div className="customBorder">
                            <img src={Informasi} alt="" width="50" height="50" />
                            <h3>informasi dan dokumentasi publik</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 custom">
                        <div className="customBorder">
                            <img src={Rekening} alt="" width="50" height="50" />
                            <h3>rekening gotong royong</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 custom">
                        <div className="customBorder calendar">
                            <img src={Calendar} alt="" width="50" height="50" />
                            <h3>kalender kegiatan partai</h3>
                        </div>
                    </div>
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
                                    <br />
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
                    <MainDivider text="berita" />
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
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <MainDivider text="Berita Terbaru " />
            </div>

            <CarouselDuelBerita />

            {/* Container Card Berita Foto */}
            <div className="container-card-beritaFoto">
                {/* Card Berita Foto */}
                <CardBeritaFoto pemilu16={pemilu16} pemilu17={pemilu17} title='KONGRES Ke-5 PDI Perjuangan "Solid Bergerak Untuk Indonesia Raya" Bali' paragraph1="Sekolah Sekretaris DPD & DPC PDI Perjuangan se Indonesia" paragraph2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ipsam error, quia quo blanditiis minus enim quod magni vero veritatis?" />
                {/* END Card Berita Foto */}
            </div>
            {/* END Container Card Berita Foto*/}

        </div>
    
    )


export default HomePage