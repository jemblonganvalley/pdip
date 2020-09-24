// Import to React
import React, { useEffect } from 'react'
// END Import to React

import pemilu13 from '../../../img/pemilu13.jpg'
import pemilu14 from '../../../img/pemilu14.jpg'
import pemilu15 from '../../../img/pemilu15.jpg'
import pemilu16 from '../../../img/pemilu16.jpg'
import pemilu17 from '../../../img/pemilu17.jpg'
import pemilu18 from '../../../img/pemilu18.jpg'
import pemilu19 from '../../../img/pemilu19.jpg'
import pemilu20 from '../../../img/pemilu20.jpg'
import pemilu21 from '../../../img/pemilu21.jpg'
import pemilu22 from '../../../img/pemilu22.jpg'
import pemilu23 from '../../../img/pemilu23.jpg'

import './BeritaPage.scss'
import { Link } from 'react-router-dom'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import CarouselBerita from '../../carouselBerita/CarouselBerita'
import Cards from '../../cards/MainCards'
import megawati5 from '../../../img/megawati5.jpg'
import megawati6 from '../../../img/megawati6.jpg'
import megawati7 from '../../../img/megawati7.jpg'

import CardInformasi from '../../cardInformasi/CardInformasi'

import BeritaSatu from '../../../img/berita1.png'
import BeritaDua from '../../../img/berita2.png'
import BeritaTiga from '../../../img/berita3.png'
import BeritaEmpat from '../../../img/berita4.png'
import MainButton from '../../buttons/MainButton'
import MainDivider from '../../divider/MainDivider'
import CardBeritaFoto from '../../cardberitafoto/CardBeritaFoto'

// Create Component
const BeritaPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className="wrapperBerita">
                <div className="headers">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">

                        </div>
                    </div>
                </div>
                <div className="linkedBerita">
                    <BreadCrumbs link1="Home"
                        to1="/"
                        page2="Berita" />
                </div>

                {/* Container1 */}
                <div className="container-1-beritaPage">
                    {/* Column1 */}
                    <CarouselBerita />
                    {/* END Column1 */}

                    {/* Column2 */}
                    <CardInformasi to1="/beritanasional" image={BeritaSatu} to2="/beritadaerah"
                        image2={BeritaDua} to3="/beritafoto"
                        image3={BeritaTiga} to4="/kegiatanpartai"
                        image4={BeritaEmpat}
                        width1="35"
                        width2="35"
                        width3="35"
                        width4="35"
                        text="berita nasional"
                        text2="berita daerah"
                        text3="berita foto"
                        text4="kegiatan partai" />
                    {/* END Column2 */}

                    {/* Column3 */}
                    <div className="cardBerita1-col3-container-1">
                        <Cards page="/page1" imageCard={pemilu13}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <Cards imageCard={pemilu14}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <Cards imageCard={pemilu15}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                    </div>
                    {/* END Column3 */}

                    {/* Column4 */}
                    <div className="col4-container-1-beritaPage">
                        <MainDivider text="Berita Foto"
                            garisMerah="7rem"
                            m="1rem 0" />
                    </div>
                    {/* END Column4 */}

                    {/* Column5 */}
                    <CardBeritaFoto pemilu16={pemilu16} pemilu17={pemilu17} title='KONGRES Ke-5 PDI Perjuangan "Solid Bergerak Untuk Indonesia Raya" Bali' paragraph1="Sekolah Sekretaris DPD & DPC PDI Perjuangan se Indonesia" paragraph2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ipsam error, quia quo blanditiis minus enim quod magni vero veritatis?" />
                    {/* END Column5 */}
                </div>
                {/* END Container1 */}

                {/* Container2 */}
                <div className="container-2-beritaPage">
                    {/* Column1 */}
                    <div className="col1-container-2-beritaPage banner-berita">
                        <h2 className="txt-title-col1">
                            Ut enim ad minim veniam, quis nostrud
                            <br /> exercitation ullamco laboris
                        </h2>
                    </div>
                    {/* END Column1 */}
                    {/* Column2 */}
                    <div className="col2-container-2-beritaPage">
                        <MainButton name="LIHAT" />
                    </div>
                    {/* END Column2 */}
                </div>
                {/* END Container2 */}

                {/* Container3 */}
                <div className="container-3-beritaPage">
                    {/* Column1 */}
                    <div className="col1-container-3-beritaPage">
                        <MainDivider text="Berita Daerah"
                            garisMerah="7rem"
                            m="1rem 0" />
                    </div>
                    {/* END Column1 */}

                    {/* Column2 */}
                    <div className="col2-cardContent-container-3-beritaPage">
                        <Cards imageCard={pemilu18}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <Cards imageCard={pemilu19}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <Cards imageCard={pemilu20}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                    </div>
                    {/* END Column2 */}

                    {/* Column3 */}
                    <div className="col3-container-3-beritaPage">
                        <MainDivider text="Kegiatan Partai"
                            garisMerah="7rem"
                            m="1rem 0" />
                    </div>
                    {/* END Column3 */}

                    {/* Column4 */}
                    <div className="col4-cardContent-container-3-beritaPage">
                        <div className="col2-cardContent-container-3-beritaPage">
                            <Cards imageCard={pemilu21}
                                textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                                TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                                paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                                borderRadius="10px" />
                            <Cards imageCard={pemilu22}
                                textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                                TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                                paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                                borderRadius="10px" />
                            <Cards imageCard={pemilu23}
                                textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                                TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                                paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                                borderRadius="10px" />
                        </div>
                    </div>
                    {/* END Column4 */}
                </div>
                {/* END Container3 */}
            </div>
        </>
    )
}
// END Create Component

export default BeritaPage