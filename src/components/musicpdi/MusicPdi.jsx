import React, { useState, useEffect } from "react";
import downloadSatu from "../../img/downloadSatu.png";
import downloadDua from "../../img/downloadDua.png";
import downloadTiga from "../../img/downloadTiga.png";
import laguPerjuangan from "../../img/laguperjuangan.png";
import "react-jinke-music-player/assets/index.css";
import "./MusicPdi.scss";
import AudioPlayer from "react-h5-audio-player";
import "./styles.scss";

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
import { Link } from "react-router-dom";

const MusicPdi = ({
  judul = "Mars Partai Demokrasi Indonesia Perjuangan",
  data,
}) => {
  const [indexPlay, setIndexPlay] = useState(0);
  const [play, setPlay] = useState([
    {
      song: hymne,
      title: "HYME PDI PERJUANGAN",
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
      title: "MARS PDI PERJUANGAN",
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
      title: "ONE FOR ALL AND ALL FOR ONE",
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
      title: "SOLID BERGERAK",
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
    <div className="musiPdi">
      {/* CONTAINER DUA */}
      <div className="containerDua">
        <div className="contentDua">
          {/* MUSIC */}
          <div className="col col-md-8 musicPlayer">
            <div className="wrapperContentMusic">
              <div className="contentMusic" style={{ height: "100%" }}>
                <div className="col-sm-4">
                  <div
                    className="plyr"
                    style={{
                      background: `url()`,
                    }}
                  >
                    <div className="backplyr">
                      <div className="iconMusic">
                        <i className="fa fa-play"></i>
                      </div>
                    </div>
                  </div>

                  <div className="download">
                    <Link
                      as="a"
                      to={play[indexPlay].song}
                      download
                      target="_blank"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="partitur downloadContent">
                        <img src={downloadSatu} alt="" width="35" />
                        <span className="downloadSpan">Unduh Lagu</span>
                      </div>
                    </Link>
                    <Link
                      as="a"
                      to={play[indexPlay].minusOne}
                      download
                      target="_blank"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="minusOn downloadContent">
                        <img src={downloadDua} alt="" width="35" />
                        <span className="downloadSpan">Minus One</span>
                      </div>
                    </Link>
                    <Link
                      as="a"
                      to={play[indexPlay].pdf}
                      download
                      target="_blank"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="minusOn downloadContent">
                        <img src={downloadTiga} alt="" width="35" />
                        <span className="downloadSpan">Partitur</span>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="col-sm-8">
                  <div className="containerLirik">
                    <small>lagu perjuangan</small>
                    <span className="judulLagu" id="songTitle">
                      {play[indexPlay].title}
                    </span>
                    <span className="lirik">lirik</span>
                    <p
                      className="isiLirik"
                      dangerouslySetInnerHTML={{
                        __html: play[indexPlay].lyric,
                      }}
                      style={{
                        width: "80%",
                        height: "100%",
                      }}
                    ></p>
                  </div>
                </div>
              </div>

              <div className="col-md-12 playerMusic">
                <div className="wrapperPlayerMusic">
                  <AudioPlayer
                    src={play[indexPlay].song}
                    layout="horizontal"
                    header="Lagu Perjuangan"
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
                <h4>
                  Lagu
                  {/* <br /> */}
                  Perjuangan
                </h4>
              </div>
            </div>
            <div className="listMusic">
              <div
                className="listSatu list"
                onClick={() => {
                  setIndexPlay(0);
                }}
              >
                <h6 className="judulList">Hymne PDI Perjuangan</h6>
                <small>
                  Api perjuangan harus tetap dinyalakan dan selalu bangkit
                  bergerak berjuang bersama, PDI Perjuangan selalu bersama
                  rakyat dalam satu barisan.
                </small>
              </div>

              <div
                className="listSatu list"
                onClick={() => {
                  setIndexPlay(1);
                }}
              >
                <h6 className="judulList">Mars PDI Perjuangan</h6>
                <small>
                  Tak ada yang tak mungkin jika Tuhan sudah berkehendak, Begitu
                  pula dengan PDI Perjuangan.
                </small>
              </div>

              <div
                className="listSatu list"
                onClick={() => {
                  setIndexPlay(2);
                }}
              >
                <h6 className="judulList">One For All All For One</h6>
                <small>
                  Dibalut dengan musik yang sangat enerjik memperkuat maksud dan
                  tujuan dari terciptanya lagu ini untuk menggalang kebersamaan
                  dalam menghadapi semua masalah yang terjadi.
                </small>
              </div>

              <div
                className="listSatu list"
                onClick={() => {
                  setIndexPlay(3);
                }}
              >
                <h6 className="judulList">Solid Bergerak</h6>
                <small>
                  Satukan Misi, satukan Visi rapatkan barisan bergerak dengan
                  satu semangat mengabdi kepada bangsa dan Negara.
                </small>
              </div>
            </div>
          </div>
          {/* END */}
        </div>
      </div>
      {/* END */}
    </div>
  );
};

export default MusicPdi;
