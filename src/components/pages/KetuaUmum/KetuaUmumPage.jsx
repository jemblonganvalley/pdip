// Import to React
import React from 'react'
// END Import to React
import megawati5 from '../../../img/megawati5.jpg'
import megawati6 from '../../../img/megawati6.jpg'
import megawati7 from '../../../img/megawati7.jpg'
import Cards from '../../cards/MainCards'
import './KetuaUmumPage.scss'

// Import to CSS
import './KetuaUmumPage.css'
import MainDivider from '../../divider/MainDivider'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainButton from '../../buttons/MainButton'
import CarouselKetuaUmumPage from '../../carouselKetuaUmumPage/CarouselKetuaUmumPage'
// END Import to CSS

// Create Component
const KetuaUmumPage = () => {
    return (
        <>
            <div className="wrapperKetuaUmum">
                <div className="headers">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">
                        </div>
                    </div>
                </div>
                <div className="linkedBerita">
                    <BreadCrumbs link1="Home"
                        to1="/"
                        page2="Ketua Umum"
                    />
                </div>
                {/* Container1 */}
                <div className="container-1">
                    {/* Column1 */}
                    <CarouselKetuaUmumPage />
                    {/* END Column1 */}

                    {/* Column2 */}
                    <div className="col2-container-1">
                        {/* Row1 */}
                        <div className="row1-col2">
                            <div className="box-img">

                            </div>
                            <div className="txt-img1">
                                <p className="txt-1">
                                    KONGRES
                                </p>
                            </div>
                        </div>
                        {/* END Row1 */}
                        {/* Row2 */}
                        <div className="row2-col2">
                            <div className="box-img">

                            </div>
                            <div className="txt-img2">
                                <p className="txt-2">
                                    RAKERNAS
                                </p>
                            </div>
                        </div>
                        {/* END Row2 */}
                        {/* Row3 */}
                        <div className="row3-col2">
                            <div className="box-img">

                            </div>
                            <div className="txt-img3">
                                <p className="txt-3">
                                    RAKORNAS
                                </p>
                            </div>
                        </div>
                        {/* END Row3 */}
                        {/* Row4 */}
                        <div className="row4-col2">
                            <div className="box-img">

                            </div>
                            <div className="txt-img4">
                                <p className="txt-4">
                                    INSTRUKSI
                                </p>
                            </div>
                        </div>
                        {/* END Row4 */}

                    </div>
                    {/* END Column2 */}

                    {/* Column3 */}
                    <div className="cardKetuaUmum">
                        <Cards imageCard={megawati5}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <Cards imageCard={megawati6}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <Cards imageCard={megawati7}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                    </div>
                    {/* END Column3 */}


                    <MainDivider text="Berita Foto"
                        garisMerah="7rem"
                        m="1rem 0" />

                    {/* Column5 */}
                    <div className="col5-container-1">
                        {/* Row1 */}
                        <div className="row1-video-youtube">
                            <iframe width="100%" height="120%" src="https://www.youtube.com/embed/ChkKZ3hq1Nw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        {/* END Row1 */}

                        {/* Row2 */}
                        <div className="row2-img">
                            <div className="col-txt">
                                <p className="jdl">
                                    SERUAN
                                    <br />
                                    KETUA UMUM
                                </p>
                            </div>
                        </div>
                        {/* END Row2 */}
                    </div>
                    {/* END Column5 */}
                </div>
                {/* END Container1 */}

                {/* Container2 */}
                <div className="container-2">
                    {/* Column1 */}
                    <div className="col1-container-2">
                        <p className="txt-title-col1">
                            Ut enim ad minim veniam, quis nostrud
                            <br /> exercitation ullamco laboris
                        </p>
                    </div>
                    {/* END Column1 */}
                    {/* Column2 */}
                    <div className="col2-container-2">
                        <MainButton name="lihat" />
                    </div>
                    {/* END Column2 */}
                </div>
                {/* END Container2 */}

                {/* Container3 */}
                <div className="container-3">

                    <MainDivider text="Berita Daerah"
                        garisMerah="6rem"
                        m="1rem 0" />

                    {/* Column2 */}
                    <div className="col2-cardContent-container-3">
                        <Cards imageCard={megawati5}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <Cards imageCard={megawati6}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <Cards imageCard={megawati7}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                    </div>
                    {/* END Column2 */}

                    <MainDivider text="Kegiatan Partai"
                        garisMerah="7rem"
                        m="1rem 0" />
                    {/* Column4 */}
                    <div className="col4-cardContent-container-3">
                        <Cards imageCard={megawati5}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <Cards imageCard={megawati6}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <Cards imageCard={megawati7}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                    </div>
                    {/* END Column6 */}
                </div>
            </div>
        </>
    )
}
// END Create Component

export default KetuaUmumPage