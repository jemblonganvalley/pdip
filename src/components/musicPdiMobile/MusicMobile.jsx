import React, { useState, useRef } from "react";
import "./MusicMobile.scss";
import downloadSatu from "../../img/lightDownSatu.png";
import laguPerjuangan from "../../img/laguperjuangan.png";
import downloadDua from "../../img/lightDownDua.png";
import downloadTiga from "../../img/lightDownTiga.png";
import { Link, NavLink } from "react-router-dom";
import AudioPlayer from "react-h5-audio-player";

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
import zIndex from "@material-ui/core/styles/zIndex";

const MusicMobile = ({ data }) => {
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

  const [indexPlay1, setIndexPlay1] = useState(0);
  const [indexPlay2, setIndexPlay2] = useState(1);
  const [indexPlay3, setIndexPlay3] = useState(2);
  const [indexPlay4, setIndexPlay4] = useState(3);

  const [play, setPlay] = useState([
    {
      song: hymne,
      minusOne: hymne_mo,
      pdf: hymne_pdf,
      lyric: `
      
              <p>
                  LIRIK
                  <br/>
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
              LIRIK
              <br/>
              <br/>
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
              LIRIK
              <br/>
              <br/>
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
              LIRIK
              <br/>
              <br/>
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

  let [show1, setShow1] = useState(false);
  let [show2, setShow2] = useState(false);
  let [show3, setShow3] = useState(false);
  let [show4, setShow4] = useState(false);

  return (
    <div className="musicPdiMobile">
      <div className="wrapperMobileMusic">
        <div className="headlineMusic">
          <img loading="lazy" src={laguPerjuangan} alt="" width="70" />
          <span className="headlineText">Lagu Perjuangan</span>
        </div>
        {/* <div className="judulMusic">
                        <h6 className="judul" >Mars PDI Perjuangan</h6>
                        <span className="judulDesc" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, numquam?</span>
                    </div> */}
        <div className="lirikMobile">
          <div className="lirikMobileContainer">
            <span>LIRIK</span>
            <div className="wrapperLirik">
              {/* <span className="liriks"
                                    dangerouslySetInnerHTML={{
                                        __html:play[indexPlay].lyric
                                    }}
                                >

                                </span> */}
            </div>
          </div>
        </div>

        <div className="playlist">
          {/* Play list 1 */}
          <div
            className="playlistSatu playlistCustom"
            style={{
              backgroundColor: show1 ? "#960001" : "#fff",
              color: show1 ? "#fff" : "#c60605",
            }}
            // onClick={()=>{
            //     setShow1(!show1);
            //     setIndexPlay1(0);
            // }}

            onClick={async () => {
              const sw1 = await setShow1(!show1);
              const ipl = await setIndexPlay1(0);
            }}
          >
            <strong>Hymne PDI Perjuangan</strong>
            <span>
              {" "}
              Api perjuangan harus tetap dinyalakan dan selalu bangkit bergerak
              berjuang bersama, PDI Perjuangan selalu bersama rakyat dalam satu
              barisan.
            </span>
          </div>
          {/* END Play list 1 */}

          {/* Modal Lirik Music 1 */}
          <div
            className="modal-lirik-musicMobile lirikMusic1"
            style={{
              height: show1 ? "60vh" : "0.1px",
              backgroundColor: show1 ? "#000" : "#fff",
              transition: show1 ? "0.4s ease-in-out" : "0.4s ease-out",
            }}
          >
            {/* Download Music */}
            <div className="wrapperDownload">
              <Link
                as="a"
                to={play[indexPlay1].song}
                download
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <img loading="lazy" src={downloadSatu} alt="" width="50" />
              </Link>
              <Link
                as="a"
                to={play[indexPlay1].minusOne}
                download
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <img loading="lazy" src={downloadDua} alt="" width="50" />
              </Link>
              <Link
                as="a"
                to={play[indexPlay1].pdf}
                download
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <img loading="lazy" src={downloadTiga} alt="" width="50" />
              </Link>
            </div>
            {/* END Download Music */}

            {/* Button Play Music Mobile1 */}
            <div className="playMusicMobile btnMusicMobile" style={{}}>
              <AudioPlayer
                src={play[indexPlay1].song}
                layout="horizontal"
                header="Lagu Perjuangan"
                showJumpControls={false}
                customAdditionalControls={[]}
                // onPlay={indexPlay1}
              />
            </div>
            {/* END Button Play Music Mobile1 */}

            <p
              className="txt-lirik-musicMobile"
              dangerouslySetInnerHTML={{
                __html: play[indexPlay1].lyric,
              }}
            ></p>
          </div>
          {/* END Modal Lirik Music 1 */}

          {/* Play list 2 */}
          <div
            className="playlistDua playlistCustom"
            style={{
              backgroundColor: show2 ? "#960001" : "#fff",
              color: show2 ? "#fff" : "#c60605",
            }}
            // onClick={()=>{
            //     setShow2(!show2);
            //     setIndexPlay2(1);
            // }}

            onClick={async () => {
              const sw2 = await setShow2(!show2);
              const ip2 = await setIndexPlay2(1);
            }}
          >
            <strong>Mars PDI Perjuangan</strong>
            <span>
              Tak ada yang tak mungkin jika Tuhan sudah berkehendak,Begitu pula
              dengan PDI Perjuangan.
            </span>
          </div>
          {/* END Play list 2 */}

          {/* Modal Lirik Music 2 */}
          <div
            className="modal-lirik-musicMobile lirikMusic2"
            style={{
              height: show2 ? "60vh" : "0.1px",
              backgroundColor: show2 ? "#000" : "#fff",
              transition: show2 ? "0.4s ease-in-out" : "0.4s ease-out",
            }}
          >
            {/* Download Music */}
            <div className="wrapperDownload">
              <Link
                as="a"
                to={play[indexPlay2].song}
                download
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <img loading="lazy" src={downloadSatu} alt="" width="50" />
              </Link>
              <Link
                as="a"
                to={play[indexPlay2].minusOne}
                download
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <img loading="lazy" src={downloadDua} alt="" width="50" />
              </Link>
              <Link
                as="a"
                to={play[indexPlay2].pdf}
                download
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <img loading="lazy" src={downloadTiga} alt="" width="50" />
              </Link>
            </div>
            {/* END Download Music */}

            {/* Button Play Music Mobile2 */}
            <div className="playMusicMobile btnMusicMobile" style={{}}>
              <AudioPlayer
                src={play[indexPlay2].song}
                layout="horizontal"
                header="Lagu Perjuangan"
                showJumpControls={false}
                customAdditionalControls={[]}
                // onPlay={indexPlay1}
              />
            </div>
            {/* END Button Play Music Mobile2 */}

            <p
              className="txt-lirik-musicMobile"
              dangerouslySetInnerHTML={{
                __html: play[indexPlay2].lyric,
              }}
            ></p>
          </div>
          {/* END Modal Lirik Music 2 */}

          {/* Play list 3 */}
          <div
            className="playlistTiga playlistCustom"
            style={{
              backgroundColor: show3 ? "#960001" : "#fff",
              color: show3 ? "#fff" : "#c60605",
            }}
            onClick={() => {
              setShow3(!show3);
              setIndexPlay3(2);
            }}
          >
            <strong>One For All For One</strong>
            <span>
              Dibalut dengan musik yang sangat enerjik memperkuat maksud dan
              tujuan dari terciptanya lagu ini untuk menggalang kebersamaan
              dalam menghadapi semua masalah yang terjadi.
            </span>
          </div>
          {/* END Play list 3 */}

          {/* Modal Lirik Music 3 */}
          <div
            className="modal-lirik-musicMobile lirikMusic3"
            style={{
              height: show3 ? "60vh" : "0.1px",
              backgroundColor: show3 ? "#000" : "#fff",
              transition: show3 ? "0.4s ease-in-out" : "0.4s ease-out",
            }}
          >
            {/* Download Music */}
            <div className="wrapperDownload">
              <Link
                as="a"
                to={play[indexPlay3].song}
                download
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <img loading="lazy" src={downloadSatu} alt="" width="50" />
              </Link>
              <Link
                as="a"
                to={play[indexPlay3].minusOne}
                download
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <img loading="lazy" src={downloadDua} alt="" width="50" />
              </Link>
              <Link
                as="a"
                to={play[indexPlay3].pdf}
                download
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <img loading="lazy" src={downloadTiga} alt="" width="50" />
              </Link>
            </div>
            {/* END Download Music */}

            {/* Button Play Music Mobile3 */}
            <div className="playMusicMobile btnMusicMobile" style={{}}>
              <AudioPlayer
                src={play[indexPlay3].song}
                layout="horizontal"
                header="Lagu Perjuangan"
                showJumpControls={false}
                customAdditionalControls={[]}
                // onPlay={indexPlay1}
              />
            </div>
            {/* END Button Play Music Mobile3 */}

            <p
              className="txt-lirik-musicMobile"
              dangerouslySetInnerHTML={{
                __html: play[indexPlay3].lyric,
              }}
            ></p>
          </div>
          {/* END Modal Lirik Music 3 */}

          {/* Play list 4 */}
          <div
            className="playlistEmpat playlistCustom"
            style={{
              backgroundColor: show4 ? "#960001" : "#fff",
              color: show4 ? "#fff" : "#c60605",
            }}
            onClick={() => {
              setShow4(!show4);
              setIndexPlay4(3);
            }}
          >
            <strong>Solid Bergerak</strong>
            <span>
              Satukan Misi, satukan Visi rapatkan barisan bergerak dengan satu
              semangat mengabdi kepada bangsa dan Negara.
            </span>
          </div>
          {/* END Play list 4 */}

          {/* Modal Lirik Music 4 */}
          <div
            className="modal-lirik-musicMobile lirikMusic4"
            style={{
              height: show4 ? "60vh" : "0.1px",
              backgroundColor: show4 ? "#000" : "#fff",
              transition: show4 ? "0.4s ease-in-out" : "0.4s ease-out",
            }}
          >
            {/* Download Music */}
            <div className="wrapperDownload">
              <Link
                as="a"
                to={play[indexPlay4].song}
                download
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <img loading="lazy" src={downloadSatu} alt="" width="50" />
              </Link>
              <Link
                as="a"
                to={play[indexPlay4].minusOne}
                download
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <img loading="lazy" src={downloadDua} alt="" width="50" />
              </Link>
              <Link
                as="a"
                to={play[indexPlay4].pdf}
                download
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <img loading="lazy" src={downloadTiga} alt="" width="50" />
              </Link>
            </div>
            {/* END Download Music */}

            {/* Button Play Music Mobile4 */}
            <div className="playMusicMobile btnMusicMobile" style={{}}>
              <AudioPlayer
                src={play[indexPlay4].song}
                layout="horizontal"
                header="Lagu Perjuangan"
                showJumpControls={false}
                customAdditionalControls={[]}
                // onPlay={indexPlay1}
              />
            </div>
            {/* END Button Play Music Mobile4 */}

            <p
              className="txt-lirik-musicMobile"
              dangerouslySetInnerHTML={{
                __html: play[indexPlay4].lyric,
              }}
            ></p>
          </div>
          {/* END Modal Lirik Music 4 */}
        </div>
      </div>
    </div>
  );
};

export default MusicMobile;
