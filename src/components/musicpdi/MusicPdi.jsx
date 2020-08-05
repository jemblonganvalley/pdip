import React from 'react'
import Partitur from '../../img/partitur.png'
import MinusOn from '../../img/minusone.png'
import laguPerjuangan from '../../img/lagu.png'
import './MusicPdi.scss'

const MusicPdi = ()=> {
    return (
        <div className="musiPdi">
            {/* CONTAINER DUA */}
            <div className="containerDua">
                <div className="contentDua">

                    {/* MUSIC */}
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
                                <div className="col-sm-4 pdiSoundBar">

                                </div>
                                <div className="col-sm-4 pdiIcons">
                                    <i class="fa fa-play">
                                        <span>0</span>
                                    </i>
                                    <i class="fa fa-heart">
                                        <span>0</span>
                                    </i>
                                    <i class="fa fa-comment">
                                        <span>0</span>
                                    </i>
                                    <div className="duration">
                                        <span className="durations">
                                            0.00 / 0.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                            
                    </div>
                    {/* END */}

                    {/* PLAYLIST */}
                    <div className="col col-md-4 musicList">
                        <div className="headersList">
                            <img src={laguPerjuangan} alt="" width="60" />
                            <h4>Lagu Perjuangan<br/>PDI Perjuangan</h4>
                        </div>
                        <div className="listSatu">
                            <h5>Mars PDI Perjuangan</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                        </div>
                        <div className="listDua">
                            <h5>Hymne PDI Perjuangan</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                        </div>
                        <div className="listTiga">
                            <h5>Hymne PDI Perjuangan</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                        </div>
                        <div className="listEmpat">
                            <h5>Hymne PDI Perjuangan</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                        </div>
                    </div>
                    {/* END */}

                </div>
            </div>
            {/* END */}
        </div>
    )
}

export default MusicPdi