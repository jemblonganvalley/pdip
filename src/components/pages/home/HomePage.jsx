import React, {useState} from 'react'
// import './HomePage.css'
import './HomePage.scss'
import MainSlider from '../../slider/MainSlider'
import Informasi from '../../../img/informasii-01.png'
import Rekening from '../../../img/rekening.png'
import Calendar from '../../../img/calendarr.png'
import Lagu from '../../../img/laguperjuangan.png'
import MusicPdi from '../../musicpdi/MusicPdi'
import CardMaps from '../../cardmaps/CardMaps'


const HomePage = ()=> {

    

    return (
        <div classname="homepage">
            <MainSlider/>
            <div className="homePageTwo">
                <div className="row customRow">
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
                    <div className="textVideo">
                        <small>Video</small>
                    </div>
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
                            <div className="col col-lg-4">
                                <div className="imageCard"></div>
                                <div className="text">
                                    <small>Admin PDI PERJUANGAN | 1 Januari 2019</small>
                                    <h5>Lorem, ipsum dolor sit amet consectetur</h5>
                                </div>
                            </div>
                            <div className="col col-lg-4">
                            <div className="imageCard two"></div>
                                <div className="text">
                                    <small>Admin PDI PERJUANGAN | 1 Januari 2019</small>
                                    <h5>Lorem, ipsum dolor sit amet consectetur</h5>
                                </div>
                            </div>
                            <div className="col col-lg-4">
                            <div className="imageCard three"></div>
                                <div className="text">
                                    <small>Admin PDI PERJUANGAN | 1 Januari 2019</small>
                                    <h5>Lorem, ipsum dolor sit amet consectetur</h5>
                                </div>
                            </div>
                    </div>
                    

                    <MainButton name="lihat semua"
                                margin="1rem 0" />
                </div>

                <div className="beritaPage">
                <div className="textBerita">
                        <small>Berita</small>
                    </div>
                    <div className="paragrapBerita">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugiat consequuntur dicta quam sequi facere eligendi voluptatibus aliquid, maiores repellat illum quos? Assumenda, soluta? Totam?</p>
                    </div>

                    
                </div>
            </div>

            <div className="ketuaUmum">
                <div className="row rowCustom">
                    <div className="col-lg-6 carousels">
                        

                    <div id="carouselnih" className="carousel slide" data-ride="carousel" data-interval="0">
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
                <div className="col col-lg-4 colOne">
                    <div className="imageContent imageOne"></div>
                    <div className="textCard">
                    <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                    <h5 className="kolsHome">Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                    </div>

                </div>
                <div className="col col-lg-4 two">

                    <div className="imageContent imageTwo"></div>
                    <div className="textCard">
                    <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                    <h5 className="kolsHome">Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                    </div>

                </div>
                <div className="col col-lg-4 three">
                <div className="imageContent imageThree"></div>
                    <div className="textCard">
                    <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                    <h5 className="kolsHome">Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                    </div>
                </div>
                
            </div>

            <div className="cardContent2">
                <div className="col col-lg-4 colOne">
                    <div className="imageContent imageOne"></div>
                    <div className="textCard">
                    <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                    <h5 className="kolsHome">Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                    </div>

                </div>
                <div className="col col-lg-4 two">

                    <div className="imageContent imageTwo"></div>
                    <div className="textCard">
                    <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                    <h5 className="kolsHome">Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                    </div>

                </div>
                <div className="col col-lg-4 three">
                <div className="imageContent imageThree"></div>
                    <div className="textCard">
                    <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                    <h5 className="kolsHome">Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                    </div>
                </div>
                
            </div>

            <div className="btnSize">
                <button className="btn btn2">lihat semua</button>
            </div>

            <MusicPdi/>
            <CardMaps/>

            <div className="backgroundRed"></div>
        </div>

    )
}

export default HomePage