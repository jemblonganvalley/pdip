// Import to React
import React from 'react'
// END Import to React
import megawati5 from '../../../img/megawati5.jpg'
import megawati6 from '../../../img/megawati6.jpg'
import megawati7 from '../../../img/megawati7.jpg'
import Cards from '../../cards/MainCards'

import ketuaUmumSatu from '../../../img/ketuaumum1.png'
import ketuaUmumDua from '../../../img/ketuaumum2.png'
import ketuaUmumTiga from '../../../img/ketuaumum3.png'
import ketuaUmumEmpat from '../../../img/ketuaumum4.png'

// Import to CSS
import './KetuaUmumPage.css'
import MainDivider from '../../divider/MainDivider'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainButton from '../../buttons/MainButton'
import CardInformasi from '../../cardInformasi/CardInformasi'
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
                    <div className="col1-container-1">
                        <div className="cont-img-col1">
                            <div className="col1-img">
                                <div className="box-txt-title">
                                    <h1>Lorem ipsum dolor sit amet, consectetur adipsing elit,</h1>
                                </div>
                            </div>
                            <div className="col2-img">
                                <div className="garis-strip-col2">

                                </div>
                                <div className="box-txt-desk-col2">
                                    <p className="txt-admin">
                                        Admin PDI Perjuangan | 1 Januari
                                    </p>

                                    <p className="txt-desk-col2">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quidem ad iure harum optio corporis eligendi amet vitae dolor enim? Molestiae magnam voluptas fuga quo dolores harum dignissimos autem sint distinctio maiores quasi nemo reprehenderit maxime sunt quaerat, aliquam eligendi quas consequuntur delectus nulla eius ex, aspernatur quisquam. Error, voluptatibus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ChkKZ3hq1Nw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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