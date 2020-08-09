import React, {useState, useEffect} from 'react'
import Partitur from '../../img/partitur.png'
import MinusOn from '../../img/minusone.png'
import laguPerjuangan from '../../img/lagu.png'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import "react-jinke-music-player/assets/index.css";
import './MusicPdi.scss'

const MusicPdi = ({judul =  'Mars Partai Demokrasi Indonesia Perjuangan'})=> {

    

    

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
                        <div className="wrapperPlayerMusic">
                            <div className="playButton">
                                <div className="playbtn">
                                    <i class="fa fa-play"></i>
                                </div>
                            </div>
                            <div className="playMusic">
                                <div className="judulPlay">
                                <h5 className="judulPlays">{judul}</h5>
                                <i class="fa fa-heart"></i>
                                </div>
                                <div className="progress" style={{height: 1}}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: '1%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="iconsPlay">
                                    <i class="fa fa-play">0</i>
                                    <i class="fa fa-heart">0</i>
                                    <i class="fa fa-comment">0</i>
                                    <span className="duration">0:00</span>
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
                            <h5 className="judulList">Mars PDI Perjuangan</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                        </div>
                        <div className="listDua">
                            <h5 className="judulList">Hymne PDI Perjuangan</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                        </div>
                        <div className="listTiga">
                            <h5 className="judulList">Hymne PDI Perjuangan</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                        </div>
                        <div className="listEmpat">
                            <h5 className="judulList">Hymne PDI Perjuangan</h5>
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