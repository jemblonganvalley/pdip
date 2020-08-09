import React, {useEffect} from 'react'
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
import WidgetBerita from '../../widget/widgetBerita/WidgetBerita'


const HomePage = ()=> {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div classname="homepage">
            <MainSlider/>
            <div className="homePageTwo">
                <div className="customRow">
                    <div className="col col-lg-4 custom ">
                        <div className="customBorder">
                            <img src={Informasi} alt="" width="50" height="50" />
                            <h3>informasi dan dokumentasi publik</h3>
                        </div>
                    </div>
                    <div className="col col-lg-4 custom ">
                        <div className="customBorder">
                            <img src={Rekening} alt="" width="50" height="50" />
                            <h3>informasi dan dokumentasi publik</h3>
                        </div>
                    </div>
                    <div className="col col-lg-4 custom ">
                        <div className="customBorder calendar">
                            <img src={Calendar} alt="" width="50" height="50" />
                            <h3>informasi dan dokumentasi publik</h3>
                        </div>
                    </div>
                </div>
                <div className="videoPage">
                    <MainDivider text="Video"
                                    garisMerah="2.5rem"
                                    m="1rem 0" />
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
                        <Cards imageCard={megawati1}
                                textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                                TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                                borderRadius="10px" />
                        <Cards imageCard={megawati2}
                                textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                                TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                                borderRadius="10px" />
                        <Cards imageCard={megawati3}
                                textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                                TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                                borderRadius="10px" />
                    </div>
                    

                    <MainButton name="lihat semua"
                                margin="1rem 0" />
                </div>

                <div className="beritaPage">
                    <MainDivider text="berita"
                                    garisMerah="2.5rem"
                                    m="1rem 0" />
                    <div className="paragrapBerita">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugiat consequuntur dicta quam sequi facere eligendi voluptatibus aliquid, maiores repellat illum quos? Assumenda, soluta? Totam?</p>
                    </div>

                    
                </div>
            </div>

            <div className="ketuaUmum">
                <div className="row rowCustom">
                    <div className="col-lg-6 carousels">
                        

                    <div id="carouselnih" className="carousel slide kmCarousel" data-ride="carousel" data-interval="0">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselnih" data-slide-to={0} className="active" />
                            <li data-target="#carouselnih" data-slide-to={1} />
                            <li data-target="#carouselnih" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                    <h5>Ketua Umum PDI PERJUANGAN</h5>
                                    <br/>
                                    <h3>Ikuti Perkembangan Teknologi Informasi dengan Otak dan Hati</h3>
                                    <br/>
                                    <br/>
                                    <p>
                                        Ketua umum PDI PERJUANGAN Megawati Soekarnoputri menutup Pelatihan <br/> kader Fungsional Bertugas di Kantor Partai, sekaligus <br/> membuka pembekalan Caleg DPR RI Gelombang III di kantor DPP PDI Perjuangan, Jl. Diponegoro 58, Jakarta, Kamis
                                    </p>
                            </div>
                            <div className="carousel-item">
                                    <h5>Ketua Umum PDI PERJUANGAN</h5>
                                    <br/>
                                    <h3>Ikuti Perkembangan Teknologi Informasi dengan Otak dan Hati</h3>
                                    <br/>
                                    <br/>
                                    <p>
                                        Ketua umum PDI PERJUANGAN Megawati Soekarnoputri menutup Pelatihan <br/> kader Fungsional Bertugas di Kantor Partai, sekaligus <br/> membuka pembekalan Caleg DPR RI Gelombang III di kantor DPP PDI Perjuangan, Jl. Diponegoro 58, Jakarta, Kamis
                                    </p>

                            </div>
                            <div className="carousel-item">
                                     <h5>Ketua Umum PDI PERJUANGAN</h5>
                                    <br/>
                                    <h3>Ikuti Perkembangan Teknologi Informasi dengan Otak dan Hati</h3>
                                    <br/>
                                    <br/>
                                    <p>
                                        Ketua umum PDI PERJUANGAN Megawati Soekarnoputri menutup Pelatihan <br/> kader Fungsional Bertugas di Kantor Partai, sekaligus <br/> membuka pembekalan Caleg DPR RI Gelombang III di kantor DPP PDI Perjuangan, Jl. Diponegoro 58, Jakarta, Kamis
                                    </p>

                            </div>
                        </div>
                    </div>
                </div>
                    <div className="col-lg-6 banner"></div>
                </div>
            </div>

            <div className="cardContent">
                <Cards imageCard={megawati5} 
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                        TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                        paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                        borderRadius="10px" />
                <Cards imageCard={megawati6} 
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                        TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                        paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                        borderRadius="10px" />
                <Cards imageCard={megawati7} 
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                        TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                        paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                        borderRadius="10px" />
                
            </div>
            <div className="cardContent">
            
                        <Cards imageCard={megawati5} 
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                        TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                        paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                        borderRadius="10px" />
                <Cards imageCard={megawati5} 
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                        TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                        paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                        borderRadius="10px" />
                <Cards imageCard={megawati5} 
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                        TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                        paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                        borderRadius="10px" />
            </div>

            <div className="btnSize">
                <MainButton name="lihat semua" />
            </div>

            <MusicPdi/>
            {/* <CardMaps/> */}

    
                <MainDivider text="Berita Terbaru "/>

            <div className="wrapperWidget">
                <WidgetBerita name="berita" col='8'/>
                <WidgetBerita name="beritaFoto" col='4'/>
            </div>

            <div className="backgroundRed"></div>
        </div>

    )
}

export default HomePage