import React, { useEffect, useState } from 'react'
import './InformasiPage.scss'
import IconCardSatu from '../../../img/networking.png'
import IconCardDua from '../../../img/target.png'
import IconCardTiga from '../../../img/cs.png'
import IconCardEmpat from '../../../img/law-book.png'
import IconHartaSatu from '../../../img/lh.png'

import ppidSatu from '../../../img/ppid.png'
import ppidDua from '../../../img/ppid2.png'
import ppidTiga from '../../../img/ppid3.png'
import ppidEmpat from '../../../img/ppid4.png'

import IconHartaDua from '../../../img/income.png'
import ConsentWhite from '../../../img/consentwhite.png'
import Consentblack from '../../../img/consentblack.png'
import CardMaps from '../../cardmaps/CardMaps'
import CardsProfile from '../../cardIconProfil/CardsProfile'
import MainDivider from '../../divider/MainDivider'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import WidgetBerita from '../../widget/widgetBerita/WidgetBerita'
import CardInformasi from '../../cardInformasi/CardInformasi'
import WidgetBaru from '../../widgetBaru/WidgetBaru'
import { CarouselDuelBerita } from '../../carouselDualBerita/CarouselDuelBerita'
import CarouselKM from '../../carouselKM/CarouselKM'

const InformasiPage = () => {

        const [gallery, setGallery] = useState([])
        const [configHome, setConfigHome] = useState([])

      const getGallery = async ()=>{
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

        const resGallery = await fetch('https://atur.biar.pw/api/gallery/data?page=2', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            }

        })

        const dataGallery = await resGallery.json()
        // console.log(dataGallery)
        setGallery(dataGallery.query.data)
    }

    const getConfigHome = async () => {
    const res = await fetch("https://atur.biar.pw/api/auth/app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        app_id: "1555309664580",
        api_secret: "4d672ce3-e422-4d8a-86ff-fabb1808a689",
      }),
    });
    const data = await res.json();

    const resConfigHome = await fetch(
      "https://atur.biar.pw/api/web/pages/home",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

    const dataConfigHome = await resConfigHome.json();
    setConfigHome(dataConfigHome.query);
  };

    useEffect(() => {
        getGallery()
        getConfigHome()
        window.scrollTo(0, 0)
    }, [])

    return (

        // START INFORMASI
        <div className="wrapperInformasi">

            {/* START HEADERS */}
            <div className="headInformasi">
                <div className="textHeadInformasi">
                    <h2>pejabat pengelola<br />informasi dan dokumentasi<br /><span className="pdip">pdi perjuangan</span> </h2>
                </div>
            </div>
            {/* END */}

            {/* START LINKED */}
            <div className="linkedInformasi">
                <BreadCrumbs link1="Home"
                    to1="/"
                    page2="Informasi"
                />
            </div>
            {/* END */}

            {/* START PROFIL */}
            <div className="profilContainer">
                <MainDivider text="Profil"
                    garisMerah="2rem" />

                <div className="paragrapProfil">
                    <div className="paragrapKiri">
                        <h5 className="merdeka">Merdeka !!</h5>
                        <h4 className="solid">" Solid Bergerak untuk Indonesia Raya "</h4>
                        <p className="textParagrap">Salah satu elemen penting dalam mewujudkan penyelenggaraan Partai pelopor yang ideologis dan modern adalah terpenuhinya hak publik untuk memperoleh informasi sesuai dengan peraturan perundang-undangan yang berlaku. Hak masyarakat untuk memperoleh Informasi menjadi sangat penting karena semakin terbuka sistem Penyelenggaraan Pengelolaan Partai kepada publik, maka program partai terutama dalam hal pendidikan politik bagi masyarakat dalam kehidupan berbangsa dan bernegara semakin dapat diwujudkan dan dipertanggungjawabkan. Hak setiap orang untuk memperoleh Informasi juga relevan untuk meningkatkan kualitas pelibatan masyarakat dalam proses pengambilan keputusan publik. Partisipasi atau pelibatan masyarakat tidak banyak berarti tanpa jaminan keterbukaan Informasi Publik.
                        <br /><br />
                        Berdasarkan Undang-undang UU No.14 Tahun 2008 tentang Keterbukaan Informasi Publik sebagai landasan hukum yang mengatur berkaitan baik mengenai hak dan kewajiban setiap orang untuk memperoleh Informasi, maupun hak dan kewajiban Badan Publik untuk menyediakan dan melayani permintaan Informasi dan dokumentasi yang menjadi kewenangannya. Sebagai Partai Politik, PDI Perjuangan berkomitmen untuk membuka akses atas Informasi Publik tersebut terbuka untuk masyarakat luas.</p>
                    </div>
                    <div className="paragrapKanan">
                        <div className="backgroundPK">
                            <h4 className="maklumat">Maklumat Keterbukaan<br />Informasi Publik</h4>
                            <p className="textParagrapKanan">Berkomitmen Memberikan Pelayanan Optimal<br />untuk Memenuhi Hak Publik Memperoleh<br />Informasi Sesuai dengan Peraturan<br />Perundang-undangan yang Berlaku</p>
                        </div>
                    </div>
                </div>

                {/* divider */}
                <div className="divider"></div>
                {/* divider */}

                <CardInformasi image={ppidSatu}
                    image2={ppidDua}
                    image3={ppidTiga}
                    image4={ppidEmpat}
                    text="Struktur PPDI PDI Perjuangan"
                    width1="45"
                    width2="45"
                    width3="30"
                    width4="31"
                    text2="visi / misi"
                    text3="prosedur pelayanan"
                    text4="regulasi PPDI"
                    to1="/strukturppdi"
                    to2="/visimisi"
                    to3="/prosedur"
                    to4="/regulasi" />

                

                {/* CARD LAPORAN */}
                <div className="containerLaporan">
                    <div className="cardLaporan cardLaporanSatu">
                        <img src={IconHartaSatu} alt="" width="45" className="imageHarta" />
                        <div className="textHarta">
                            <h6 className="hartaKekayaan h5Harta">Laporan harta kekayaan<br />pejabat negara (LHKPN)</h6>
                            <p className="paragrapHarta">Harta kekayaan pengurus PDI Perjuangan yang menjadi pejabat negara dilaporkan kepada Komisi Pemberantasan Korupsi (KPK).</p>
                        </div>
                    </div>
                    <div className="cardLaporan cardLaporanDua">
                        <img src={IconHartaDua} alt="" width="45" className="imageHarta" />
                        <div className="textHarta">
                            <h6 className="keuangan h5Harta">Laporan kekayaan<br />PDI Perjuangan</h6>
                            <p className="paragrapHarta">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores quasi labore rerum reprehenderit quis perspiciatis sequi necessitatibus adipisci ipsa.</p>
                        </div>
                    </div>
                </div>
                {/* END */}

            </div>
            {/* END */}

            {/* YOUTUBE PPDI */}
            <div className="ytProfil">
                <div className="ytIframe">
                    <iframe src="https://www.youtube.com/embed/V4pM1xY9ntY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="iframeProfil" ></iframe>
                </div>
            </div>
            {/* END */}

            {/* START TATA CARA */}
            <div className="tataCaraContainer">
                <MainDivider text="tata Cara"
                    garisMerah="4rem"
                />

            </div>
            {/* END */}

            {/* SLIDER TATA CARA */}
                <CarouselKM data={configHome}/>
            {/* END */}

            {/* Container dua */}
            <div className="infoDua" style={{
                margin : '40px 0',
            }}>

                {/* kolom formulir */}
                <div className="kolomFormulir kolomFormulirSatu">
                    <img src={ConsentWhite} alt="" width="50" />
                    <h4 className="textFormulir">Formulir Permohonan<br />Informasi Publik</h4>
                </div>
                <div className="kolomFormulir kolomFormulirDua">
                    <img src={Consentblack} alt="" width="50" />
                    <h4 className="textFormulir">Formulir Keberatan<br />atas Pelayanan Informasi</h4>
                </div>
                {/* END */}
            </div>
            {/* END */}

            {/* <CardMaps/> */}

            <CarouselDuelBerita current_page={2} data={gallery}/>                    

            <div className="widgetMobile">
                <WidgetBerita width="100%" />
                <WidgetBerita width="100%" margin=".5rem 0" />
            </div>
        </div>
    )
}

export default InformasiPage