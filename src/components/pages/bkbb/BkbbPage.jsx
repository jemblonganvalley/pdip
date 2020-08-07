import React from 'react'
import './BkbbPage.scss'
import backgroundHead from '../../../img/kampanye.jpg'
import pdiBook1 from '../../../img/pdibook1.png'
import pdiBook2 from '../../../img/pdibook2.png'
import pdiBook3 from '../../../img/pdibook3.png'
import laguPerjuangan from '../../../img/lagu.png'
import Partitur from '../../../img/partitur.png'
import MinusOn from '../../../img/minusone.png'
import BkbbCard from './BkbbCard'
import { useState } from 'react'
import Cards from '../../cards/MainCards'
import bkbbCard1 from '../../../img/bkbbcard.png'
import bkbbCard2 from '../../../img/bkbbcard2.png'
import bkbbCard3 from '../../../img/bkbbcard3.png'
import MainButton from '../../buttons/MainButton'
import Double from '../../../img/double.png'
import quotes1 from '../../../img/quotes3.png'
import quotes2 from '../../../img/quotes.png'
import quotes3 from '../../../img/quotes2.png'
import {Link} from 'react-router-dom'



const BkbbPage = ()=>{

 

    return (
        <div className="wrapperPartai">
            <div className="headers-bkbb">
                <div className="backgrounds-bkbb">
                    {/* <div className="textBackgroundPartai">
                        <h2>Solid Bergerak Untuk<br/>Indonesia Raya </h2>
                    </div> */}
                </div>
            </div>
            <div className="linkedPartai">
                <i class="fa fa-home">
                    <span>Home / BKBB /</span>
                </i>
            </div>
            
            <section className="lahirnyaPancasila col mx-auto">
                <div className="box-lahirnyaPancasila ">

                    <div className="redBox mt-auto">
                        <div className="col col-lg-4 red-box-title ">
                            <h2>Lahirnya Pancasila <br />1 Juni 1945</h2>
                        </div>
                        <div className="col col-lg-4 red-box-body">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quod delectus earum, eaque nemo saepe laboriosam vitae facilis eveniet repellendus unde ducimus temporibus iusto doloremque est illo. Ipsum, pariatur nulla.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="videoBungKarno col mx-auto">

                <iframe width='80%' height='90%' src="https://www.youtube.com/embed/aCOdCgUr9hI" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

            </section>

            <section className="wrapper3">
                <div className="bkbbText">
                    <small>Materi Pokok Pendukung</small>
                </div>
            </section>
            
            <div className="wrapperCard">
                <div className="cardKolum">
                    <Cards imageCard={bkbbCard1}
                            borderRadius="10px"
                            TextH5="INDONESIA MENGGUGAT TAHUN 1930"
                            paragrap="Pidato Pembelaan Bung Karno di Muka Hakim Kolonial"
                            h5Weight="bold" />
                    <Cards imageCard={bkbbCard2}
                            borderRadius="10px"
                            TextH5="KAPITALISME BANGSA SENDIRI TAHUN 1932"
                            paragrap="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                            h5Weight="bold" />
                    <Cards imageCard={bkbbCard3}
                            borderRadius="10px"
                            TextH5="MENCAPAI INDONESIA MERDEKA TAHUN 1933"
                            paragrap="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                            h5Weight="bold" />
                </div>
            </div>

            <div className="btnLihatSemua">
                <MainButton name="lihat semua"
                            margin="1rem 0"
                            pages="/materipokok" />
            </div>

            <div className="bannerBkbb">
                <img src={Double} alt="" className="custom"/>
                <h4 className="custom">BARANG SIAPA JANG INGIN MUTIARA HARUS<br/>BERANI TERJUN DI LAUTAN JANG DALAM. </h4>
                <h5 className="custom">JANGANLAH LEMBEK, MOHON PADA TUHAN SUPAYA BANGSA INDONESIA<br/>MEJADI SATU BANGSA YANG JAYA DI DUNIA, MENJADI BANGSA KUAT DAN TABAH</h5>
                <img src={Double} alt="" className="custom"/>
                <small>Bung Karno, 17 Agustus 1946</small>
            </div>

            <div className="wrapperQuotes">
                <img src={quotes1} alt="" width="300" />
                <img src={quotes2} alt="" width="300" />
                <img src={quotes3} alt="" width="300" />
            </div>

            <Link as='div' className="btnLihatSemua" to='quotes'>
                <MainButton name="lihat semua"
                            margin="1rem 0" />
            </Link>

            <div className="backGroundGray">
                
            </div>
        </div>
    )
}

export default BkbbPage