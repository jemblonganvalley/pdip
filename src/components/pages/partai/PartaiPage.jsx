import React from 'react'
import './PartaiPage.scss'
import backgroundHead from '../../../img/kampanye.jpg'
import pdiBook1 from '../../../img/pdibook1.png'
import pdiBook2 from '../../../img/pdibook2.png'
import pdiBook3 from '../../../img/pdibook3.png'
import laguPerjuangan from '../../../img/lagu.png'
import Partitur from '../../../img/partitur.png'
import MinusOn from '../../../img/minusone.png'
import pdiLogo from '../../../img/pdibanteng.png'

const PartaiPage = ()=>{
    return (
        <div className="wrapperPartai">
            <div className="headers">
                <div className="backgrounds">
                    <div className="textBackgroundPartai">
                        <h2>Solid Bergerak Untuk<br/>Indonesia Raya </h2>
                    </div>
                </div>
            </div>
            <div className="linkedPartai">
                <i class="fa fa-home">
                    <span>Home / Partai /</span>
                </i>
            </div>
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

            <div className="containerDua">
                <div className="contentDua">
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
                                <div className="partitur">
                                    <img src={Partitur} alt="" width="140" />
                                </div>
                                <div className="minusOn">
                                <img src={MinusOn} alt="" width="140" />
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="containerLirik">
                                    <small>lagu perjuangan</small>
                                    <span className="judulLagu">
                                        mars pdi perjuangan
                                    </span>
                                    <span className="lirik">lirik</span>
                                    <p>Atas Kasih dan Kehendak Yang Maha Pencipta<br/>Kita Telat Sepakat Bersatu<br/>Bersatu Dalam Satu Rampak Barisan<br/>Menentang Kemiskinan
                                    <br/><br/>
                                    Atas Rahmat dan Bimbingan Yang Maha Kuasa<br/>Kita Telah Bertekad Berjuang<br/>Berjuang untuk Satu Tujuan Mulia<br/>Mencapai Indonesia Sentosa
                                    <br/><br/>
                                    Bersama PDI Perjuangan<br/>Bersama PDI Perjuangan<br/>Wadah Kedaulatan Rakyat Indonesia<br/>Atas Berkat dan Kemurahan Yang Maha Esa<br/>PDI Perjuangan Jaya! </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 playerMusic">
                            <div className="col-sm-2 mulai">
                                <div className="mulaiIcon">
                                    <i class="fa fa-play"></i>
                                </div>
                            </div>
                            <div className="col-sm-10 rythm">
                                <div className="col-sm-4 pdiJudul">
                                    <h4>Mars Partai Demokrasi Indonesia Perjuangan</h4>
                                        <i class="fa fa-heart"></i>
                                </div>
                                <div className="col-sm-4 pdiSoundBar">

                                </div>
                                <div className="col-sm-4 pdiIcons">
                                    <i class="fa fa-play">
                                        <span>0</span>
                                    </i>
                                    <i class="fa fa-heart">
                                        <span>0</span>
                                    </i>
                                    <i class="fa fa-comment">
                                        <span>0</span>
                                    </i>
                                    <div className="duration">
                                        <span className="durations">
                                            0.00 / 0.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                            
                    </div>
                    <div className="col col-md-4 musicList">
                        <div className="headersList">
                            <img src={laguPerjuangan} alt="" width="60" />
                            <h4>Lagu Perjuangan<br/>PDI Perjuangan</h4>
                        </div>
                        <div className="listSatu">
                            <h5>Mars PDI Perjuangan</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                        </div>
                        <div className="listDua">
                            <h5>Hymne PDI Perjuangan</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                        </div>
                        <div className="listTiga">
                            <h5>Hymne PDI Perjuangan</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                        </div>
                        <div className="listEmpat">
                            <h5>Hymne PDI Perjuangan</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est totam. Et?</p>
                        </div>
                    </div>
                </div>
            </div>

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

                <div className="btnUnduh">
                    <button className="btn"><span>unduh lambang</span></button>
                </div>

                <div className="pengurusPage">
                    <div className="textPengurus">
                        <small>Pengurus</small>
                    </div>
                    <div className="paragrapPengurus">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugiat consequuntur dicta quam sequi facere eligendi voluptatibus aliquid, maiores repellat illum quos? Assumenda, soluta? Totam?</p>
                    </div>
                </div>

                <div className="photoPengurus">
                    <h2>Struktur Pengurus Dewan Pimpinan Pusat<br/>PDI Perjuangan</h2>
                    <button className="btn"><span>lihat</span></button>
                </div>

                <div className="maps">
                    <h5>dewan pimpinan daerah pdi perjuangan</h5>
                    <div className="imageMaps">

                    </div>
                </div>

                <div className="anggotaLegislatif">
                    <h1>Anggota Legislatif</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a voluptatem mollitia dolorum ea architecto, aliquid quidem fugit accusamus saepe ab repudiandae eos ipsum! Quaerat omnis dolores quidem reiciendis distinctio.</p>
                    <div className="btnGroup">
                        <button className="btn"><span>DPR RI</span></button>
                        <button className="btn"><span>DPRD Provinsi</span></button>
                        <button className="btn"><span>DPRD Kabupaten Kota</span></button>
                    </div>
                </div>
                <div className="backgroundRed"></div>
        </div>
    )
}

export default PartaiPage