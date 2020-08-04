import React from 'react'
import './MultimediaPage.scss'
import SL from '../../../img/newspaper.png'
import VD from '../../../img/fake-news.png'
import VI from '../../../img/camera.png'
import SP from '../../../img/notebook.png'

const MultimediaPage = ()=> {
    return (
        <div className="wrapperMultimedia">
            <div className="headerMedia">
                <div className="textBannerMedia">
                    <h2>Lorem ipsum dolor<br/>sit amet consectetur<br/>adipisicing elit.</h2>
                </div>
            </div>
            <div className="linkedMedia">
                <i class="fa fa-home"><span>Home /Multimedia</span></i>
            </div>
            <div className="pidatoKU">
                <div className="col-lg-9">
                    <iframe src="https://www.youtube.com/watch?v=Y4KWZVfNKeg" ></iframe>
                </div>
                <div className="col-lg-3">
                    <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                    <span>Megawati Soekarnoputri,<br/>Ketua Umum PDI Perjuangan</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ullam dicta architecto hic expedita, harum tempore quae sunt obcaecati aperiam placeat praesentium rem voluptatibus quibusdam qui nesciunt non illo! Magni.</p>
                    <div className="socialMedia">
                        <small>SHARE : </small>
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-whatsapp" ></i>
                    </div>
                </div>
            </div>
            <div className="cardMedia">
                <div className="siaranLangsung mediaCard">
                    <img src={SL} alt="" width="35" className="imgCards" />
                    <small className="smallCard">siaran langsung</small>
                </div>
                <div className="videoDokumentasi mediaCard">
                    <img src={VD} alt="" width="35" className="imgCards" />
                    <small className="smallCard">video dokumentasi</small>
                </div>
                <div className="videoInteraktif mediaCard">
                    <img src={VI} alt="" width="35" className="imgCards" />
                    <small className="smallCard">video interaktif</small>
                </div>
                <div className="siaranPers mediaCard">
                    <img src={SP} alt="" width="35" className="imgCards" />
                    <small className="smallCard">siaran pers</small>
                </div>
            </div>

            <div className="panggung">
                <div className="textPanggung">
                    <h1 className="panggungH1">Siaran Langsung Pembukaan Rakernas I<br/>PDI Perjuangan</h1>
                    <button className="btn btnPanggung">
                        <span>kunjungi</span>
                    </button>
                </div>
            </div>

            <div className="cardMediaDua">
                <div className="col-md-4 cols1 kols">
                    <div className="cardMBody">
                        <div className="cardMBImg"></div>
                        <div className="cardTextWrapper">
                            <small className="cardSmall">Admin PDI Perjuangan | 1 Januari 2019</small>
                            <h4 className="cardH4">Lorem ipsum dolor sit.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 cols2 kols">
                    <div className="cardMBody2">
                        <div className="cardMBImg2">
                            <div className="iconPlayMedia">
                                <i class="fa fa-play"></i>
                            </div>
                        </div>
                        <div className="cardTextWrapper2">
                                <small className="cardSmall2">Admin PDI Perjuangan | 1 Januari 2019</small>
                                <h4 className="cardH42">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing
                                </h4>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MultimediaPage