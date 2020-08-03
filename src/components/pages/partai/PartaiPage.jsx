import React from 'react'
import './PartaiPage.scss'
import backgroundHead from '../../../img/kampanye.jpg'
import pdiBook1 from '../../../img/pdibook1.png'
import pdiBook2 from '../../../img/pdibook2.png'
import pdiBook3 from '../../../img/pdibook3.png'
import laguPerjuangan from '../../../img/lagu.png'
import Partitur from '../../../img/partitur.png'
import MinusOn from '../../../img/minusone.png'

const PartaiPage = ()=>{
    return (
        <div className="wrapperPartai">
            <div className="headers">
                <div className="backgrounds">
                    <div className="textBackgroundPartai">
                        <h2>Solid Bergerak Untuk<br/>Indonesia Raya </h2>
                    </div>
                </div>
            </div>
            <div className="linkedPartai">
                <i class="fa fa-home">
                    <span>Home / Partai /</span>
                </i>
            </div>
            <div className="containerSatu">
                <div className="contentSatu">
                    <div className="col col-lg-4">
                        <div className="wrapperContentSatu">
                            <div className="col-md-4">
                                <img src={pdiBook1} alt="" width="60" />
                                <div className="textContent textContentSatu">
                                    <h4>AD/ART<br/>PDI Perjuangan</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias inventore nobis doloremque.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={pdiBook2} alt="" width="60" />
                                <div className="textContent textContentDua">
                                    <h4>Peraturan<br/>PDI Perjuangan</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias inventore nobis doloremque.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={pdiBook3} alt="" width="60" />
                                <div className="textContent textContentTiga">
                                    <h4>Piagam<br/>PDI Perjuangan</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias inventore nobis doloremque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-8">
                        <div className="wrapperCarousel">
                            
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval={0}>
                            <ol className="carousel-indicators carouselPartai">
                                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="carouselImgSatu"></div>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et fuga sit.</h3>
                                </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carouselImgSatu">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et fuga sit.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carouselImgSatu">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et fuga sit.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="containerDua">
                <div className="contentDua">
                    <div className="col col-md-8 musicPlayer">
                        <div className="wrapperContentMusic">
                        <div className="contentMusic">
                            <div className="col-sm-4">
                                <div className="plyr">
                                    <div className="backplyr">
                                        <div className="iconMusic">
                                            <i class="fa fa-play"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="partitur">
                                    <img src={Partitur} alt="" width="140" />
                                </div>
                                <div className="minusOn">
                                <img src={MinusOn} alt="" width="140" />
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="containerLirik">
                                    <small>lagu perjuangan</small>
                                    <span className="judulLagu">
                                        mars pdi perjuangan
                                    </span>
                                    <span className="lirik">lirik</span>
                                    <p>Atas Kasih dan Kehendak Yang Maha Pencipta<br/>Kita Telat Sepakat Bersatu<br/>Bersatu Dalam Satu Rampak Barisan<br/>Menentang Kemiskinan
                                    <br/><br/>
                                    Atas Rahmat dan Bimbingan Yang Maha Kuasa<br/>Kita Telah Bertekad Berjuang<br/>Berjuang untuk Satu Tujuan Mulia<br/>Mencapai Indonesia Sentosa
                                    <br/><br/>
                                    Bersama PDI Perjuangan<br/>Bersama PDI Perjuangan<br/>Wadah Kedaulatan Rakyat Indonesia<br/>Atas Berkat dan Kemurahan Yang Maha Esa<br/>PDI Perjuangan Jaya! </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 playerMusic">
                            <div className="col-sm-2 mulai">
                                <div className="mulaiIcon">
                                    <i class="fa fa-play"></i>
                                </div>
                            </div>
                            <div className="col-sm-10 rythm">
                                <div className="col-sm-4 pdiJudul">
                                    <h4>Mars Partai Demokrasi Indonesia Perjuangan</h4>
                                        <i class="fa fa-heart"></i>
                                </div>
                                <div className="col-sm-4 pdiSoundBar"></div>
                                <div className="col-sm-4 pdiIcons"></div>
                            </div>
                        </div>
                        </div>
                            
                    </div>
                    <div className="col col-md-4"></div>
                </div>
            </div>
        </div>
    )
}

export default PartaiPage