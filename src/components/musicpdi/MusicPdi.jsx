import React, {useState, useEffect} from 'react'
import downloadSatu from '../../img/downloadSatu.png'
import downloadDua from '../../img/downloadDua.png'
import downloadTiga from '../../img/downloadTiga.png'
import laguPerjuangan from '../../img/laguperjuangan.png'
import "react-jinke-music-player/assets/index.css";
import './MusicPdi.scss'
import AudioPlayer from 'react-h5-audio-player';
import './styles.scss';

// MUSIC 1
const Music1 = '../../music/HymnePDIPerjuangan/hymne.mp3'
const MinOne1 = '../../music/HymnePDIPerjuangan/hymneminusone.mp3'

// MUSIC 2
const Music2 = '../../music/MarsPDIPerjuangan/MARS.mp3'
const MinOne2 = '../../music/MarsPDIPerjuangan/MARSminusone.mp3'

//MUSIC 3
const Music3 = '../../music/OneForAllAllForOne/AllForOne.mp3'
const MinOne3 = '../../music/OneForAllAllForOne/AllForOneMinusOne.mp3'

//MUSIC 4
const Music4 = '../../music/SolidBergerak/AllForOne.mp3'
const MinOne4 = '../../music/SolidBergerak/AllForOne.mp3'



const MusicPdi = ({judul =  'Mars Partai Demokrasi Indonesia Perjuangan', data})=> {

    const [defaultMusic, setDefaultMusic] = useState([])
    const [musicData, setMusicData] = useState(data)
    
    const [music, setMusic] = useState({
        mp3 : Music1,
        mo : MinOne1,
    })

 

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
                            <div className="plyr" style={{
                                background: `url()`,
                            }}>
                                <div className="backplyr">
                                    <div className="iconMusic">
                                        <i className="fa fa-play"></i>
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
                            <span className="downloadSpan">Minus One</span>
                            </div>
                            <div className="minusOn downloadContent">
                            <img src={downloadTiga} alt="" width="35" />
                            <span className="downloadSpan">Partitur</span>
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
                                <p className="isiLirik">
                                    

                                </p>
                          
                        </div>
                    </div>
                </div>

                    <div className="col-md-12 playerMusic">
                        <div className="wrapperPlayerMusic">
                            <AudioPlayer 
                                src={music.mp3}
                                layout='horizontal'
                                header='Lagu Perjuangan'
                                showJumpControls={false}
                                customAdditionalControls={[]}
                            />
                        </div>
                    </div>
                </div>
                    
            </div>
            {/* END */}

                    {/* PLAYLIST */}
                    <div className=" col-md-4 musicList">
                        <div className="headersList">
                            <img src={laguPerjuangan} alt="" width="50" />
                            <div className="textHeader">
                                <h4>Lagu<br/>Perjuangan</h4>
                            </div>
                        </div>
                        <div className="listMusic">

                                        <div className="listSatu list" >
                                            <h6 className="judulList">Hymne PDI Perjuangan</h6>
                                            <small></small>
                                        </div>

                                         <div className="listSatu list" >
                                            <h6 className="judulList">Mars PDI Perjuangan</h6>
                                            <small></small>
                                        </div>

                                         <div className="listSatu list" >
                                            <h6 className="judulList">One For All All For One</h6>
                                            <small></small>
                                        </div>

                                         <div className="listSatu list" >
                                            <h6 className="judulList">Solid Bergerak</h6>
                                            <small></small>
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