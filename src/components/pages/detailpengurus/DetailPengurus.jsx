import React,{useEffect} from 'react'
import './DetailPengurus.scss'
import profil from '../../../img/profil.png'
import MainDivider from '../../divider/MainDivider'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'

const DetailPengurus = ()=> {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className="wrapperDetail">
            {/* HEADERS */}
            {/* <div className="detailHead">
                <div className="backHead">
                    <div className="textBackHead">
                        <h2>Solid Bergerak Untuk<br/>Indonesia Raya </h2>
                    </div>
                </div>
            </div> */}
            {/* END */}
            
            {/* LINK PARTAI */}
            <div className="linkedDetail">
                <BreadCrumbs link1="Home"
                                to1="/"
                                link2="Partai"
                                to2="/partai"
                                page3="Struktur Pengurus"
                                 />
            </div>
            {/* END */}

            <div className="pengurus">
                <MainDivider text="Pengurus"
                                garisMerah="4rem" />
                <div className="bidangTextHead">
                    <h2>Bidang Ekonomi Kreatif dan<br/>Ekonomi Digital</h2>
                </div>
                <div className="profilPengurus">
                    <div className="kolum1">
                        <img src={profil} alt="" />
                        <div className="textProfil">
                            <div className="ketua profilText">
                                <small className="ketuaText">Ketua</small>
                                <h6 className="namaProfil">muhammad Prananda Prabowo</h6>
                            </div>
                            <div className="tanggalLahir profilText">
                                <small className="smallTanggal">Tempat Lahir/Tanggal Lahir</small>
                                <h6 className="tanggal">23 April 1970</h6>
                            </div>
                            <div className="agama profilText">
                                <small className="agamaHead">Agama</small>
                                <h6 className="text">Islam</h6>
                            </div>
                            <div className="email profilText">
                                <small className="emailHead">Email</small>
                                <h6 className="emailText">email@pdiperjuangan.id</h6>
                            </div>
                        </div>
                    </div>
                    <div className="kolum2">
                        <div className="descProfil">
                            <h6 className="biografi">biografi singkat</h6>
                            <p>Prabowo dikenal sebagai ideolog dan peminat teknologi komunikasi dan informasi. Ia pertama kali muncul saat Megawati mengajaknya dalam konferensi pers bersama sang adik, Puan Maharani, menjelang pembukaan Kongres III PDIP 2010 di Bali[3][4][5]. Di PDI-Perjuangan, ia ditempatkan sebagai Kepala Ruang Pengendali dan Analisis Situasi (Situation Room) DPP PDI-Perjuangan.</p>
                            <p>Ia adalah konseptor beberapa pidato politik Megawati. Salah satu sentuhan pidatonya yang dianggap cukup bisa menggambarkan cara pandangnya terhadap dunia politik adalah ketika ia menyisipkan penggalan nasihat dari Kitab Bhagawad Gita, "karmanye vadhikaraste ma phaleshu kada chana" ("kerjakan seluruh kewajibanmu dengan sungguh-sungguh tanpa menghitung untung-rugi"). Pidato yang dibacakan pada Pembukaan Kongres III PDI Perjuangan tahun 2010 tersebut memang kemudian menjadi salah satu pidato Megawati yang paling banyak mendapatkan pujian dari berbagai pihak.
                            </p>
                            <h6 className="descBidang">Bidang Ekonomi Kreatif dan Ekonomi Digital</h6>
                            <p>DPP PDI Perjuangan bidang Ekonomi Kreatif (PDIPKreatif), mengembangkan ekonomi kreatif berbasis seni-budaya; warisan budaya nasional, serta mengedepankan kreativitas dan inovasi. Dari 16 subsektor ekonomi kreatif, kuliner Indonesia menjadi bagian perhatian bidang Ekonomi Kreatif. Selain perlu diperkenalkan, didata, dan didokumentasikan, PDIPKreatif menilai kekayaan kuliner Indonesia dapat menjadi penggerak ekonomi masyarakat.</p>
                        </div>
                    </div>
                </div>
                <div className="textPengurus">
                    <div className="borderBottom"></div>
                </div>

            </div>
        </div>
    )
}

export default DetailPengurus