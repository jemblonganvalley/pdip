import React, {useState, useEffect} from 'react'
import downloadSatu from '../../img/downloadSatu.png'
import downloadDua from '../../img/downloadDua.png'
import downloadTiga from '../../img/downloadTiga.png'
import laguPerjuangan from '../../img/laguperjuangan.png'
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
                        <div className="download">
                            <div className="partitur downloadContent">
                                <img src={downloadSatu} alt="" width="35" />
                                <span className="downloadSpan">Download</span>
                            </div>
                            <div className="minusOn downloadContent">
                            <img src={downloadDua} alt="" width="35" />
                            <span className="downloadSpan">Download</span>
                            </div>
                            <div className="minusOn downloadContent">
                            <img src={downloadTiga} alt="" width="35" />
                            <span className="downloadSpan">Download</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="containerLirik">
                            <small>lagu perjuangan</small>
                            <span className="judulLagu" id="songTitle">
                                mars pdi perjuangan
                            </span>
                            <span className="lirik">lirik</span>
                            <p className="isiLirik">Atas Kasih dan Kehendak Yang Maha Pencipta<br/>Kita Telat Sepakat Bersatu<br/>Bersatu Dalam Satu Rampak Barisan<br/>Menentang Kemiskinan
                            <br/><br/>
                            Atas Rahmat dan Bimbingan Yang Maha Kuasa<br/>Kita Telah Bertekad Berjuang<br/>Berjuang untuk Satu Tujuan Mulia<br/>Mencapai Indonesia Sentosa
                            <br/><br/>
                            Bersama PDI Perjuangan<br/>Bersama PDI Perjuangan<br/>Wadah Kedaulatan Rakyat Indonesia<br/>Atas Berkat dan Kemurahan Yang Maha Esa<br/>PDI Perjuangan Jaya!
                            
                            Atas Kasih dan Kehendak Yang Maha Pencipta<br/>Kita Telat Sepakat Bersatu<br/>Bersatu Dalam Satu Rampak Barisan<br/>Menentang Kemiskinan
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
                                <div className="playbtn" id="play-btn" >
                                    <i class="fa fa-play"></i>
                                </div>
                            </div>
                            <div className="playMusic">
                                <audio id="player" className="audio-wrapper">
                                    <source src="http://www.lukeduncan.me/oslo.mp3" type="audio/mp3" />
                                </audio>
                                <div className="judulPlay">
                                <h5 className="judulPlays">{judul}</h5>
                                <i class="fa fa-heart"></i>
                                </div>
                                <input type="range" id="songSlider" className="song-slider" min="0" step="1" />
                                <div className="iconsPlay">
                                    <i class="fa fa-play"><span className="textPlay">0</span></i>
                                    <i class="fa fa-heart"><span className="textPlay">0</span></i>
                                    <i class="fa fa-comment"><span className="textPlay">0</span></i>
                                    <div className="times">
                                        <span className="current-time time" id="currentTime">00:00 /</span>
                                        <span className="duration time" id="duration"> 00:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
            {/* END */}

                    {/* PLAYLIST */}
                    <div className=" col-md-4 musicList">
                        <div className="headersList">
                            <img src={laguPerjuangan} alt="" width="75" />
                            <div className="textHeader">
                                <h4>Lagu<br/>Perjuangan</h4>
                            </div>
                        </div>
                        <div className="listMusic">
                            <div className="listSatu list">
                                <h5 className="judulList">Mars PDI Perjuangan</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                            </div>
                            <div className="listDua list">
                                <h5 className="judulList">Hymne PDI Perjuangan</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                            </div>
                            <div className="listTiga list">
                                <h5 className="judulList">Hymne PDI Perjuangan</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                            </div>
                            <div className="listEmpat list">
                                <h5 className="judulList">Hymne PDI Perjuangan</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                            </div>
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