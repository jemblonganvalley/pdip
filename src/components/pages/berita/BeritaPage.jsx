// Import to React
import React, { useEffect } from 'react'
// END Import to React

import pemilu13 from '../../../img/pemilu13.jpg'
import pemilu14 from '../../../img/pemilu14.jpg'
import pemilu15 from '../../../img/pemilu15.jpg'
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
                <div className="container-1">
                    {/* Column1 */}
                    <CarouselBerita />
                    {/* END Column1 */}

                    {/* Column2 */}
                    <CardInformasi image={BeritaSatu}
                        image2={BeritaDua}
                        image3={BeritaTiga}
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
                    <div className="col4-container-1">
                        <MainDivider text="Berita Foto"
                            garisMerah="7rem"
                            m="1rem 0" />
                    </div>
                    {/* END Column4 */}

                    {/* Column5 */}
                    <div className="col5-container-1-berita">
                        {/* Row1 */}
                        <div className="row1-col5">
                            <div className="box-img">

                            </div>
                            <div className="box-jdl-row1">
                                <h1>KONGRES Ke- 5 PDI Perjuangan "Solid Bergerak Untuk Indonesia Raya" Bali</h1>
                            </div>
                        </div>
                        {/* END Row1 */}
                        {/* Row2 */}
                        <Link to='/page2' className="row2-col5">
                            {/* Column1 */}
                            <div className="col1-row2">

                            </div>
                            {/* END Column1 */}
                            {/* Column2 */}
                            <div className="col2-row2">
                                <p className="txt-jdl-col2">
                                    Sekolah Sekretaris DPD & DPC PDI Perjuangan se Indonesia
                                </p>
                                <p className="txt-desk-col2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo ipsum modi provident ut molestiae iure, reiciendis dicta dolores, omnis sit. Praesentium quasi, numquam sint pariatur illo quaerat velit dolor!quasi, numquam sint pariatur illo quaerat velit dolor! sint pariatur illo quaerat velit dolor!
                                </p>
                            </div>
                            {/* END Column2 */}
                        </Link>
                        {/* END Row2 */}
                    </div>
                    {/* END Column5 */}
                </div>
                {/* END Container1 */}

                {/* Container2 */}
                <div className="container-2">
                    {/* Column1 */}
                    <div className="col1-container-2 banner-berita">
                        <p className="txt-title-col1">
                            Ut enim ad minim veniam, quis nostrud
                            <br /> exercitation ullamco laboris
                        </p>
                    </div>
                    {/* END Column1 */}
                    {/* Column2 */}
                    <div className="col2-container-2">
                        <MainButton name="LIHAT" />
                    </div>
                    {/* END Column2 */}
                </div>
                {/* END Container2 */}

                {/* Container3 */}
                <div className="container-3">
                    {/* Column1 */}
                    <div className="col1-container-3">
                        <MainDivider text="Berita Daerah"
                            garisMerah="7rem"
                            m="1rem 0" />
                    </div>
                    {/* END Column1 */}

                    {/* Column2 */}
                    <div className="col2-cardContent-container-3">
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
                    <div className="col3-container-3">
                        <MainDivider text="Kegiatan Partai"
                            garisMerah="7rem"
                            m="1rem 0" />
                    </div>
                    {/* END Column3 */}

                    {/* Column4 */}
                    <div className="col4-cardContent-container-3">
                        <div className="col2-cardContent-container-3">
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