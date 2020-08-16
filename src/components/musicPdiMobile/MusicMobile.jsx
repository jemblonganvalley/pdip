import React, {useState, useRef} from 'react'
import './MusicMobile.scss'
import downloadSatu from '../../img/lightDownSatu.png'
import laguPerjuangan from '../../img/laguperjuangan.png'
import downloadDua from '../../img/lightDownDua.png'
import downloadTiga from '../../img/lightDownTiga.png'

const MusicMobile = ()=> {

    // let [playing, setPlaying] = useState(false)
    // let [play, setPlay] = useState(false)
    // let [pause, setPause] = useState(false)

    // const artistName = useRef(null)
    // const musicName =  useRef(null)
    // const time = useRef(null)
    // const fillBar = useRef(null)

    // let audioData = []

    // let song = new Audio()
    // let currentSong = 0
    // window.onload = load()

    // function load() {
    //     audioData = [
    //         {
    //             musicName : "Mars PDI Perjuangan",
    //             artist : "PDI Perjuangan",
    //             src : "https://github.com/cuneydbolukoglu/CodePen/blob/master/audioplayer/audio/1.mp3?raw=true"
    //         }
    //     ]
    //     artistName.html(audioData[currentSong].artist)
    //     musicName.html(audioData[currentSong].musicName)
    //     song.src = audioData[currentSong].src
    // }

    // function playSong() {
    //     let curSong = audioData[currentSong]
    //     artistName.html(curSong.artist)
    //     musicName.html(curSong.musicName)
    //     song.src = curSong.src
    //     song.play()
    // }

    return (
        <div className="musicPdiMobile">
                <div className="wrapperMobileMusic">
                    <div className="headlineMusic">
                        <img src={laguPerjuangan} alt="" width="70" />
                        <span className="headlineText">Lagu Perjuangan</span>
                    </div>
                    <div className="judulMusic">
                        <h6 className="judul" >Mars PDI Perjuangan</h6>
                        <span className="judulDesc" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, numquam?</span>
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
                    <div className="playMusicMobile">
                        <div className="player-track">
                            <div className="time" ></div>
                            <div className="progress-bar">
                                <div className="fillBar" ></div>
                            </div>
                        </div>
                        <div className="playerControl">
                            <i class="fa fa-backward" id="prev"></i>
                            <i class="fa fa-play" id="play"></i>
                            <i class="fa fa-forward" id="next"></i>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MusicMobile