import React, {useState, useRef} from 'react'
import './MusicMobile.scss'
import downloadSatu from '../../img/lightDownSatu.png'
import laguPerjuangan from '../../img/laguperjuangan.png'
import downloadDua from '../../img/lightDownDua.png'
import downloadTiga from '../../img/lightDownTiga.png'
import { Link } from 'react-router-dom'
import AudioPlayer from 'react-h5-audio-player'

// MUSIC 1
import hymne from "../../music/HymnePDIPerjuangan/hymne.mp3";
import hymne_mo from "../../music/HymnePDIPerjuangan/Hymneminusone.mp3";
import hymne_pdf from "../../music/HymnePDIPerjuangan/Hymne.pdf";

// MUSIC 2
import mars from "../../music/MarsPDIPerjuangan/MARS.mp3";
import mars_mo from "../../music/MarsPDIPerjuangan/MARSminusone.mp3";
import mars_pdf from "../../music/MarsPDIPerjuangan/MARS.pdf";

//MUSIC 3
import allForOne from "../../music/OneForAllAllForOne/AllForOne.mp3";
import allForOne_mo from "../../music/OneForAllAllForOne/AllForOneMinusOne.mp3";
import allForOne_pdf from "../../music/OneForAllAllForOne/AllForOne.pdf";

//MUSIC 4
import solid from "../../music/SolidBergerak/SolidBergerak.mp3";
import solid_mo from "../../music/SolidBergerak/SolidBergerak.mp3";
import solid_pdf from "../../music/SolidBergerak/SolidBergerakMinusOne.mp3";

const MusicMobile = ({data})=> {

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

    const [indexPlay, setIndexPlay] = useState(0);
    const [play, setPlay] = useState([
        {
            song: hymne,
            minusOne: hymne_mo,
            pdf: hymne_pdf,
            lyric: `
      
              <p>
                  * <br />
                  Nyalakan kawan suluh perjuangan
                  Satukan diri singsingkan lengan
                  Kepalkan tangan persatuan <br /><br />
      
                  ** <br /> 
                  Nyalakan kawan api pergerakan
                  Satukan dirigemakan 
                  Pekik merdeka sejati <br /> <br />
      
                  *** <br />
                  Bangkit   bergerak
                  Berjuang    bersama
                  Tujuan   kita   Indonesia   Raya <br /><br />
      
                  Reff <br />
                  PDI   Perjuangan
                  PDI   Perjuangan
                  Gotong   royong   bersama   rakyat
                  Dalam   satu   barisan <br /><br />
      
                  PDI   Perjuangan 
                  PDI   Perjuangan
                  Satu   persaudaraan   satu   tujuan
                  Tuk   Indonesia   Raya   <br /><br />
      
                  back to: * ,** ,*** <br /><br />
      
                  Reff <br />
                  PDI   Perjuangan 
                  PDI   Perjuangan
                  Gotong   royong   bersama   rakyat
                  Dalam    satu   barisan <br /><br />
      
                  PDI   Perjuangan 
                  PDI   Perjuangan
                  Satu   persaudaraan   satu   tujuan
                  Tuk   Indonesia   Raya
                  Tuk   Indonesia   Raya
                  Tuk   Indonesia   Raya <br /><br />
              </p>
              `,
          },
          {
            song: mars,
            minusOne: mars_mo,
            pdf: mars_pdf,
            lyric: `
              <p>
              Atas Kasih dan Kehendak Yang Maha Pencipta
              Kita Telah Sepakat Bersatu
              Bersatu Dalam Satu Rampak Barisan
              Menentang Kemiskinan <br /><br />
      
              Atas Rahmat dan Bimbingan Yang Maha Kuasa
              Kita Telah Bertekad Berjuang
              Berjuang untuk Satu Tujuan Mulia
              Mencapai Indonesia Sentosa <br /><br />
      
              Bersama PDI Perjuangan
              Bersama PDI Perjuangan
              Wadah Kedaulatan Rakyat Indonesia
              Atas Berkat dan Kemurahan Yang Maha Esa <br /><br />
      
              PDI Perjuangan Jaya!
              </p>
              `,
          },
          {
            song: allForOne,
            minusOne: allForOne_mo,
            pdf: allForOne_pdf,
            lyric: `
              <p>
              Seribu masalah
              Yang silih berganti datang
              Bukan menjadi rintangan <br /><br />
      
              Jika kita slalu
              Menghadapi semua bersama
              Pastikan kita satu/utuh <br /><br />
      
              Kita slalu bersama
              Dalam gerak dan langkah
              Hadapi rintangan
              Bersatu kita bisa <br /><br />
      
              One  for all and all  for one
              Kita kan slalu hadapi semua bersama <br /><br />
      
              One for all and all for one
              sebab kita semua satu kesatuan <br /><br />
      
              One love
              One life
              One heart
              We are one
              </p>
              `,
          },
          {
            song: solid,
            minusOne: solid_mo,
            pdf: solid_pdf,
            lyric: `
              <p>
              Berderap Serentak Bergerak
              Berderap Dalam Satu Barisan
              Bergerak Dengan Satu Semangat <br /><br />
      
              Berderap Serempak
              Bergerak Serentak 
              Satukan Jiwa Pengabdian <br /><br />
      
              Mengabdi Pada Tuhan
              Dan Pada Tanah Air
              Mengabdi Pada Bangsaku <br /><br />
      
              Di Bawah Panji - Panji Partai
              Berjuang Untuk Indonesia Raya <br /><br />
      
              Back to * <br /><br />
      
              Berderap Serentak Bergerak <br /><br />
              PDI Perjuangan
              Bergerak!
              </p>
              `,
          },
        ]);
      
        const [defaultMusic, setDefaultMusic] = useState([]);
        const [musicData, setMusicData] = useState(data);

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
                                <span className="liriks"
                                    dangerouslySetInnerHTML={{
                                        __html:play[indexPlay].lyric
                                    }}
                                >

                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="wrapperDownload">
                        <Link
                            as="a"
                            to={play[indexPlay].song}
                            download
                            target="_blank"
                            style={{
                                textDecoration: 'none'
                            }}
                        >
                            <img src={downloadSatu} alt="" width="50" />
                        </Link>
                        <Link
                            as="a"
                            to={play[indexPlay].minusOne}
                            download
                            target="_blank"
                            style={{
                                textDecoration: 'none'
                            }}
                        >
                            <img src={downloadDua} alt="" width="50" />
                        </Link>
                        <Link
                            as="a"
                            to={play[indexPlay].pdf}
                            download
                            target="_blank"
                            style={{
                                textDecoration: 'none'
                            }}
                        >
                            <img src={downloadTiga} alt="" width="50" />
                        </Link>
                    </div>
                    <div className="playlist">
                        <div className="playlistSatu playlistCustom"
                            onClick={()=>{
                                setIndexPlay(0);
                            }}
                        >
                            <strong>Hymne PDI Perjuangan</strong>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, vitae.</span>
                        </div>
                        <div className="playlistDua playlistCustom"
                            onClick={()=>{
                                setIndexPlay(1);
                            }}
                        >
                            <strong>Hymne PDI Perjuangan</strong>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, vitae.</span>
                        </div>
                        <div className="playlistTiga playlistCustom"
                            onClick={()=>{
                                setIndexPlay(2);
                            }}
                        >
                            <strong>Hymne PDI Perjuangan</strong>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, vitae.</span>
                        </div>
                        <div className="playlistEmpat playlistCustom"
                            onClick={()=>{
                                setIndexPlay(3);
                            }}
                        >
                            <strong>Hymne PDI Perjuangan</strong>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, vitae.</span>
                        </div>
                    </div>
                    {/* Tombol Play Music */}
                    <div className="playMusicMobile">
                        <AudioPlayer
                            src={play[indexPlay].song}
                            layout="horizontal"
                            header="Lagu Perjuangan"
                            showJumpControls={false}
                            customAdditionalControls={[]}
                        />


                        {/* <div className="player-track">
                            <div className="time" ></div>
                            <div className="progress-bar">
                                <div className="fillBar" ></div>
                            </div>
                        </div>
                        <div className="playerControl">
                            <i class="fa fa-backward" id="prev"></i>
                            <i class="fa fa-play" id="play"></i>
                            <i class="fa fa-forward" id="next"></i>
                        </div> */}
                    </div>
                    {/* END Tombol Play Music */}
                </div>
            </div>
    )
}

export default MusicMobile