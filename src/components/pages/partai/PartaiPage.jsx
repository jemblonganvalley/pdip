import React from 'react'
import './PartaiPage.scss'
import backgroundHead from '../../../img/kampanye.jpg'
import pdiBook1 from '../../../img/pdibook1.png'
import pdiBook2 from '../../../img/pdibook2.png'
import pdiBook3 from '../../../img/pdibook3.png'
import {Link} from 'react-router-dom'


import pdiLogo from '../../../img/pdibanteng.png'
import MusicPdi from '../../musicpdi/MusicPdi'
import MainButton from '../../buttons/MainButton'

const PartaiPage = ()=>{
    return (
    
    // START PARTAI
    
        <div className="wrapperPartai">

            {/* HEADERS */}
            <div className="headers">
                <div className="backgrounds">
                    <div className="textBackgroundPartai">
                        <h2>Solid Bergerak Untuk<br/>Indonesia Raya </h2>
                    </div>
                </div>
            </div>
            {/* END */}

            {/* LINK PARTAI */}
            <div className="linkedPartai">
                <i class="fa fa-home">
                    <span>Home / Partai /</span>
                </i>
            </div>
            {/* END */}

            {/* CONTAINER SATU */}
            <div className="containerSatu">
                <div className="contentSatu">
                    <div className="col col-lg-4">
                        <div className="wrapperContentSatu">
                            <div className="col-md-4">
                                <img src={pdiBook1} alt="" width="60" />
                                <div className="textContent textContentSatu">
                                    <h4>AD/ART<br/>PDI Perjuangan</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias inventore nobis doloremque.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={pdiBook2} alt="" width="60" />
                                <div className="textContent textContentDua">
                                    <h4>Peraturan<br/>PDI Perjuangan</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias inventore nobis doloremque.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={pdiBook3} alt="" width="60" />
                                <div className="textContent textContentTiga">
                                    <h4>Piagam<br/>PDI Perjuangan</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias inventore nobis doloremque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-8">
                        <div className="wrapperCarousel">
                            
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval={0}>
                            <ol className="carousel-indicators carouselPartai">
                                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="carouselImgSatu"></div>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et fuga sit.</h3>
                                </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carouselImgSatu">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et fuga sit.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carouselImgSatu">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et fuga sit.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* END */}

            <MusicPdi/>

            {/* CONTAINER TIGA */}
            <div className="containerTiga">
                <div className="col-lg-3">
                        <img src={pdiLogo} alt="" width="180" />
                </div>
                <div className="col-lg-9 textBanteng">
                    <h1>Lambang PDI Perjuangan</h1>
                    <ul>
                        <li>Lambang PDI Perjuangan berupa gambar banteng hitam bermoncong putih dengan latar merah di dalam lingkaran bergaris hitam dan putih.</li>
                        <li>Warna dasar merah melambangkan berani mengambil resiko dalam memperjuangkan keadilan dan kebenaran untuk rakyat.</li>
                        <li>Mata merah dengan pandangan tajam melambangkan selalu waspada terhadap ancaman dalam berjuang.</li>
                        <li>Moncong putih melambangkan dapat dipercaya dan berkomitmen dalam memperjuangkan keadilan dan kebenaran</li>
                        <li>Lingkaran melambangkan tekad yang bulat dan perjuangan yang terus-menerus tanpa terputus</li>
                    </ul>
                </div>
            </div>
            {/* END */}

                {/* BUTTON UNDUH */}
                <div className="btnUnduh">
                    <button className="btn"><a href={pdiLogo} download="pdilogo"><span>unduh lambang</span></a></button>
                </div>
                {/* END */}

                {/* PENGURUS */}
                <div className="pengurusPage">
                    <div className="textPengurus">
                        <small>Pengurus</small>
                    </div>
                    <div className="paragrapPengurus">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugiat consequuntur dicta quam sequi facere eligendi voluptatibus aliquid, maiores repellat illum quos? Assumenda, soluta? Totam?</p>
                    </div>
                </div>
                {/* END */}

                {/* PHOTO PENGURUS */}
                <div className="photoPengurus">
                    <h2>Struktur Pengurus Dewan Pimpinan Pusat<br/>PDI Perjuangan</h2>
                    <Link className="btn" to="/struktur"><span>lihat</span></Link>
                    
                </div>
                {/* END */}

                {/* MAPS */}
                <div className="maps">
                    <h5>dewan pimpinan daerah pdi perjuangan</h5>
                    <div className="imageMaps">

                    </div>
                </div>
                {/* END */}

                {/* ANGGOTA LEGISLATIF */}
                <div className="anggotaLegislatif">
                    <h1>Anggota Legislatif</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a voluptatem mollitia dolorum ea architecto, aliquid quidem fugit accusamus saepe ab repudiandae eos ipsum! Quaerat omnis dolores quidem reiciendis distinctio.</p>
                    <div className="btnGroup">
                        <MainButton name="DPR RI" margin="0 10px" pages="/dpd" />
                        <MainButton name="DPRD Provinsi" margin="0 10px" />
                        <MainButton name="DPRD Kabupaten Kota" margin="0 10px" />
                    </div>
                </div>
                {/* END */}
                
                <div className="backgroundRed"></div>
        </div>
    )
}

export default PartaiPage