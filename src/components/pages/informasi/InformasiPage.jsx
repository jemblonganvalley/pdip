import React from 'react'
import './InformasiPage.scss'
import IconCardSatu from '../../../img/networking.png'
import IconCardDua from '../../../img/target.png'
import IconCardTiga from '../../../img/cs.png'
import IconCardEmpat from '../../../img/law-book.png'
import IconHartaSatu from '../../../img/lh.png'
import IconHartaDua from '../../../img/income.png'
import ConsentWhite from '../../../img/consentwhite.png'
import Consentblack from '../../../img/consentblack.png'
import CardMaps from '../../cardmaps/CardMaps'

const InformasiPage = ()=> {
    return (

        // START INFORMASI
        <div className="wrapperInformasi">

            {/* START HEADERS */}
            <div className="headInformasi">
                <div className="textHeadInformasi">
                    <h2>pejabat pengelola<br/>informasi dan dokumentasi<br/><span className="pdip">pdi perjuangan</span> </h2>
                </div>
            </div>
            {/* END */}

            {/* START LINKED */}
            <div className="linkedInformasi">
                <i class="fa fa-home"><span>Home /Informasi Publik</span></i>
            </div>
            {/* END */}

            {/* START PROFIL */}
            <div className="profilContainer">
                <div className="textProfil">
                    <small className="profil">Profil</small>
                </div>

                <div className="paragrapProfil">
                    <div className="paragrapKiri">
                        <h5 className="merdeka">Merdeka !!</h5>
                        <h4 className="solid">" Solid Bergerak untuk Indonesia Raya "</h4>
                        <p className="textParagrap">Salah satu elemen penting dalam mewujudkan penyelenggaraan Partai pelopor yang ideologis dan modern adalah terpenuhinya hak publik untuk memperoleh informasi sesuai dengan peraturan perundang-undangan yang berlaku. Hak masyarakat untuk memperoleh Informasi menjadi sangat penting karena semakin terbuka sistem Penyelenggaraan Pengelolaan Partai kepada publik, maka program partai terutama dalam hal pendidikan politik bagi masyarakat dalam kehidupan berbangsa dan bernegara semakin dapat diwujudkan dan dipertanggungjawabkan. Hak setiap orang untuk memperoleh Informasi juga relevan untuk meningkatkan kualitas pelibatan masyarakat dalam proses pengambilan keputusan publik. Partisipasi atau pelibatan masyarakat tidak banyak berarti tanpa jaminan keterbukaan Informasi Publik.
                        <br/><br/>
                        Berdasarkan Undang-undang UU No.14 Tahun 2008 tentang Keterbukaan Informasi Publik sebagai landasan hukum yang mengatur berkaitan baik mengenai hak dan kewajiban setiap orang untuk memperoleh Informasi, maupun hak dan kewajiban Badan Publik untuk menyediakan dan melayani permintaan Informasi dan dokumentasi yang menjadi kewenangannya. Sebagai Partai Politik, PDI Perjuangan berkomitmen untuk membuka akses atas Informasi Publik tersebut terbuka untuk masyarakat luas.</p>
                    </div>
                    <div className="paragrapKanan">
                        <div className="backgroundPK">
                            <h4 className="maklumat">Maklumat Keterbukaan<br/>Informasi Publik</h4>
                            <p className="textParagrapKanan">Berkomitmen Memberikan Pelayanan Optimal<br/>untuk Memenuhi Hak Publik Memperoleh<br/>Informasi Sesuai dengan Peraturan<br/>Perundang-undangan yang Berlaku</p>
                        </div>
                    </div>
                </div>

                {/* divider */}
                <div className="divider"></div>
                {/* divider */}

                {/* CARD PROFIL */}
                <div className="cardIconProfil">
                    <div className="cardProfileSatu cardProfile">
                        <img src={IconCardSatu} alt="" width="50" />
                        <small className="textCardProfil textSatu">Struktur PPDI PDI Perjuangan</small>
                    </div>
                    <div className="cardProfileDua cardProfile">
                        <img src={IconCardDua} alt="" width="46" />
                        <small className="textCardProfil textDua">visi / misi</small>
                    </div>
                    <div className="cardProfileTiga cardProfile">
                        <img src={IconCardTiga} alt="" width="42" />
                        <small className="textCardProfil textTiga">prosedur pelayanan</small>
                    </div>
                    <div className="cardProfileEmpat cardProfile">
                        <img src={IconCardEmpat} alt="" width="33" />
                        <small className="textCardProfil textEmpat">regular PPDI</small>
                    </div>
                </div>
                {/* END */}

                {/* YOUTUBE PPDI */}
                <div className="ytProfil">
                    <div className="ytIframe">
                    <iframe  src="https://www.youtube.com/embed/V4pM1xY9ntY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="iframeProfil" ></iframe>
                    </div>
                </div>
                {/* END */}

                {/* CARD LAPORAN */}
                <div className="containerLaporan">
                    <div className="cardLaporan cardLaporanSatu">
                        <img src={IconHartaSatu} alt="" width="45" className="imageHarta" />
                        <div className="textHarta">
                            <h6 className="hartaKekayaan h5Harta">Laporan harta kekayaan<br/>pejabat negara (LHKPN)</h6>
                            <p className="paragrapHarta">Harta kekayaan pengurus PDI Perjuangan yang menjadi pejabat negara dilaporkan kepada Komisi Pemberantasan Korupsi (KPK).</p>
                        </div>
                    </div>
                    <div className="cardLaporan cardLaporanDua">
                        <img src={IconHartaDua} alt="" width="45" className="imageHarta" />
                        <div className="textHarta">
                            <h6 className="keuangan h5Harta">Laporan kekayaan<br/>PDI Perjuangan</h6>
                            <p className="paragrapHarta">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores quasi labore rerum reprehenderit quis perspiciatis sequi necessitatibus adipisci ipsa.</p>
                        </div>
                    </div>
                </div>
                {/* END */}

            </div>
            {/* END */}

            {/* START TATA CARA */}
            <div className="tataCaraContainer">
                <div className="textTataCara">
                    <small className="tataCara">tata cara</small>
                </div>

            </div>
            {/* END */}

            {/* SLIDER TATA CARA */}
            <div className="sliderTataCara">
                <div id="carouselExampleControls" className="carousel slide overflow-hidden" data-ride="carousel" data-interval={0}>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="imageTC">
                                    <p className="pCarousel">Pemohon informasi publik mengisi formulir permohonan informasi dengan menyertakan identitas yang masih berlaku (KTP, SIM, Paspor). Bagi lembaga publik pemohon informasi menyertakan Akta Notaris/SK Pembentukan.</p>
                                    <button className="btn kunjungi">kunjungin halaman</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="imageTC"></div>

                        </div>
                        <div className="carousel-item ">
                            <div className="imageTC"></div>

                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
            {/* END */}

            {/* Container dua */}
            <div className="infoDua">
                
                {/* kolom formulir */}
                <div className="kolomFormulir kolomFormulirSatu">
                    <img src={ConsentWhite} alt="" width="50" />
                    <h4 className="textFormulir">Formulir Permohonan<br/>Informasi Publik</h4>
                </div>
                <div className="kolomFormulir kolomFormulirDua">
                    <img src={Consentblack} alt="" width="50" />
                    <h4 className="textFormulir">Formulir Keberatan<br/>atas Pelayanan Informasi</h4>
                </div>
                {/* END */}
            </div>
            {/* END */}

            <CardMaps/>


        </div>
    )
}

export default InformasiPage