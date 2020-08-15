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
import laguPerjuangan from '../../../img/laguperjuangan.png'
import WidgetBerita from '../../widget/widgetBerita/WidgetBerita'
import CarouselKM from '../../carouselKM/CarouselKM'
import downloadSatu from '../../../img/lightDownSatu.png'
import downloadDua from '../../../img/lightDownDua.png'
import downloadTiga from '../../../img/lightDownTiga.png'


const HomePage = ()=> {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div classname="homepage">
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
                    <MainDivider text="berita"/>
                    <div className="paragrapBerita">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugiat consequuntur dicta quam sequi facere eligendi voluptatibus aliquid, maiores repellat illum quos? Assumenda, soluta? Totam?</p>
                    </div>

                    
                </div>
            </div>

            <CarouselKM />
            <div className="wrapperKMobile">
                 <div className="col-lg-8 carouselMobile"></div>
                 <div className="col-lg-4">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                            <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            
                        <div className="carousel-item active">
                            <img src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
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
            <div className="musicPdiMobile">
                <div className="wrapperMobileMusic">
                    <div className="headlineMusic">
                        <img src={laguPerjuangan} alt="" width="70" />
                        <span className="headlineText">Lagu Perjuangan</span>
                    </div>
                    <div className="judulMusic">
                        <h6 className="judul">Mars PDI Perjuangan</h6>
                        <span className="judulDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, numquam?</span>
                    </div>
                    <div className="lirikMobile">
                        <div className="lirikMobileContainer">
                            <span>LIRIK</span>
                            <div className="wrapperLirik">
                                <span className="liriks">Atas Kasih dan Kehendak Yang Maha Pencipta<br/>Kita Telah Sepakat Bersatu<br/>Bersatu Dalam Rampak Barisa<br/>Menentang Kemiskinan</span>
                                <span className="liriks">Atas Rahmat dan Bimbingan Yang Maha Kuasa<br/>Kita Telah Bertekad Berjuang<br/>Berjuang untuk Satu Tujuan Mulia<br/>Mencapai Indonesia Sentosa</span>
                                <span className="liriks">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ab sit nobis maxime. Nihil magni, illo voluptate quibusdam quaerat necessitatibus doloremque veritatis fugit reiciendis, numquam praesentium, error autem adipisci blanditiis.</span>
                            </div>
                        </div>
                    </div>
                    <div className="wrapperDownload">
                        <img src={downloadSatu} alt="" width="50" />
                        <img src={downloadDua} alt="" width="50" />
                        <img src={downloadTiga} alt="" width="50" />
                    </div>
                    <div className="playlist">
                        <div className="playlistSatu playlistCustom">
                            <strong>Hymne PDI Perjuangan</strong>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, vitae.</span>
                        </div>
                        <div className="playlistDua playlistCustom">
                            <strong>Hymne PDI Perjuangan</strong>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, vitae.</span>
                        </div>
                        <div className="playlistTiga playlistCustom">
                            <strong>Hymne PDI Perjuangan</strong>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, vitae.</span>
                        </div>
                        <div className="playlistEmpat playlistCustom">
                            <strong>Hymne PDI Perjuangan</strong>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, vitae.</span>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="beritaTerbaru" style={{
                display: 'flex',
                justifyContent : 'center',
                alignItems : 'center'
            }}>
                <MainDivider text="Berita Terbaru "/>
            </div>
            <div className="wrapperWidget">
                <WidgetBerita name="berita" col="7" />
                <div className="verticalDivider" style={{
                    width : '2px',
                    height : '50vh',
                    display : 'flex',
                    margin : '10px'
                    
                }}></div>
                <WidgetBerita name="beritaFoto" col="4" />
            </div>

            
        </div>

    )
}

export default HomePage