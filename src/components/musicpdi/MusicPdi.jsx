import React, {useState, useEffect} from 'react'
import downloadSatu from '../../img/downloadSatu.png'
import downloadDua from '../../img/downloadDua.png'
import downloadTiga from '../../img/downloadTiga.png'
import laguPerjuangan from '../../img/laguperjuangan.png'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import "react-jinke-music-player/assets/index.css";
import './MusicPdi.scss'

const MusicPdi = ({judul =  'Mars Partai Demokrasi Indonesia Perjuangan'})=> {

        const [music, setMusic] = useState([])
        const [defaultMusic, setDefaultMusic] = useState()

      const getConfigMusic = async ()=>{
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

        const resGetMusic = await fetch('https://atur.biar.pw/api/web/pages/partai', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            }

        })

        const dataConfigHome = await resGetMusic.json()
        // console.log(dataConfigHome)
        setMusic(dataConfigHome.query[3].value)
        setDefaultMusic(dataConfigHome.query[3].value[0])
    }

    useEffect(()=>{
        getConfigMusic()
    },[])

    return (
        <div className="musiPdi">
            {console.log(music)}
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
                            <p className="isiLirik">

                                  {defaultMusic && (
                                <>
                                    {defaultMusic.short_description}
                                </>
                            )}

                            </p>
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
                                <audio id="player" className="audio-wrapper" autoPlay={false}>
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
                            <img src={laguPerjuangan} alt="" width="50" />
                            <div className="textHeader">
                                <h4>Lagu<br/>Perjuangan</h4>
                            </div>
                        </div>
                        <div className="listMusic">
                            {music.length > 0 && (
                                <>
                                    {music.map((e,i)=>(
                                        <div className="listSatu list" onClick={()=>{
                                            setDefaultMusic({
                                                short_description : e.short_description,
                                                
                                            })
                                        }}>
                                            <h6 className="judulList">{e.title}</h6>
                                            {/* <small>{e.short_description}</small> */}
                                        </div>
                                    ))}
                                </>
                            )}
                       

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