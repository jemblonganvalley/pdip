// Import to React
import React, { useEffect } from 'react'
// END Import to React
import pemilu13 from '../../../img/pemilu13.jpg'
import pemilu14 from '../../../img/pemilu14.jpg'
import pemilu15 from '../../../img/pemilu15.jpg'
import pemilu18 from '../../../img/pemilu18.jpg'
import img5 from '../../../img/img5.jpg'
import pemilu20 from '../../../img/pemilu20.jpg'

import './KetuaUmumPage.scss'

import ketuaUmumSatu from '../../../img/ketuaumum1.png'
import ketuaUmumDua from '../../../img/ketuaumum2.png'
import ketuaUmumTiga from '../../../img/ketuaumum3.png'
import ketuaUmumEmpat from '../../../img/ketuaumum4.png'

// Import to CSS
import MainDivider from '../../divider/MainDivider'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainButton from '../../buttons/MainButton'
import CarouselKetuaUmumPage from '../../carouselKetuaUmumPage/CarouselKetuaUmumPage'
import CardInformasi from '../../cardInformasi/CardInformasi'
import CardKetuaUmum from '../../cardketuaumum/CardKetuaUmum'
import Cards from '../../cards/MainCards'
// END Import to CSS

// Create Component
const KetuaUmumPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


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
                    <CardInformasi image={ketuaUmumSatu}
                        image2={ketuaUmumDua}
                        image3={ketuaUmumTiga}
                        image4={ketuaUmumEmpat}
                        text="pidato kongres"
                        text2="pidato rakernas"
                        text3="pidato rakornas"
                        text4="pidato hut" />
                    {/* END Column2 */}

                    {/* Column3 */}
                    <div className="cardKetuaUmum">
                        <CardKetuaUmum imageCardKetuaUmum={pemilu13}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <CardKetuaUmum imageCardKetuaUmum={pemilu14}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <CardKetuaUmum imageCardKetuaUmum={pemilu15}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                    </div>
                    {/* END Column3 */}

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
                    <MainDivider text="Berita Terkait"
                        garisMerah="7rem"
                        m="1rem 0" />
                </div>
                {/* END Container2 */}

                {/* Container3 */}
                <div className="container-3">
                    {/* Column4 */}
                    <div className="col4-cardContent-container-3">
                        <Cards imageCard={pemilu18}
                            textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                            TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                            borderRadius="10px" />
                        <Cards imageCard={img5}
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
                    {/* END Column6 */}
                </div>
            </div>
        </>
    )
}
// END Create Component

export default KetuaUmumPage