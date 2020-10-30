import React, { useEffect } from 'react'

import detailartikel3 from '../../../../img/detailartikel3.jpg'
import detailartikel4 from '../../../../img/detailartikel4.jpg'
import detailartikel5 from '../../../../img/detailartikel5.jpg'
import detailartikel6 from '../../../../img/detailartikel6.jpg'


import '../page2/Page2.scss'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'
import Cards from '../../../cards/MainCards'
import CarouselBeritaPage2 from '../../../carouselberitapage2/CarouselBeritaPage2'

const Page2 = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="wrapperBeritaPage2">
                <div className="headers-beritaPage2">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">

                        </div>
                    </div>
                </div>
                <div className="linkedBeritaPage2">
                    <BreadCrumbs link1="Home" to1="/" link2="Berita" to2="/berita" page3="Berita Foto" />
                </div>

                {/* Container1 */}
                <div className="container-1-beritaPage2">
                    {/* Column1 */}
                    <div className="col1-container-1-beritaPage2">
                        {/* Row1 */}
                        <CarouselBeritaPage2 />
                        {/* END Row1 */}

                        {/* Row2 */}
                        <div className="row2-beritaPage2">
                            <div className="jdl-row2-beritaPage2">
                                {/* Column Txt Admin */}
                                <div className="column-txt-admin">
                                    <p className="txt-admin">
                                        Admin PDI Perjuangan | 1 Januari 2019
                                    </p>
                                </div>
                                {/* END Column Txt Admin */}

                                {/* Column Button Love */}
                                <div className="column-txt-btn-heart">
                                    <a className="btn-fav">
                                        <i className="fas fa-heart"></i>
                                    </a>
                                    <p className="txt-jm-fav">
                                        0
                                    </p>
                                </div>
                                {/* END Column Button Love */}
                            </div>

                            <h5 className="title-2-beritaPage2">
                                Ketua Umum PDI Perjuangan, Hj. Megawati Soekarnoputri Meresmikan 20 Kantor Partai
                            </h5>

                            <p className="txt-desk1-beritaPage2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ad, ut corporis veniam consectetur officiis fuga voluptas porro veritatis aliquid?

                                <br />
                                <br />

                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ad, ut corporis veniam consectetur officiis fuga voluptas porro veritatis aliquid?
                            </p>

                            <div className="box-medsos-beritaPage2">
                                <div className="socialMedia">
                                    <small>SHARE : </small>
                                    <i class="fa fa-facebook"></i>
                                    <i class="fa fa-twitter"></i>
                                    <i class="fa fa-instagram"></i>
                                    <i class="fa fa-whatsapp" ></i>
                                </div>
                            </div>
                        </div>
                        {/* END Row2 */}
                    </div>
                    {/* END Column1 */}

                    <div className="container-garis-vertical">
                        <div className="garis-vertical-tipis">
                            <div className="garis-merah-tebal">

                            </div>
                        </div>
                    </div>

                    {/* Column2 */}
                    <div className="col2-container-1-beritaPage2">
                        {/* <Cards imageCard={detailartikel3} TextH6="Lorem ipsum dolor, sit amet consectetur adipisicing eliteiusmod tempor indicidunt"
                            borderRadius="10px" />
                        <Cards imageCard={detailartikel4} TextH6="Presiden ke-5 RI Megawati Soekarnoputri meresmikan patung Bung Karno di Akmil"
                            borderRadius="10px" />
                        <Cards imageCard={detailartikel5} TextH6="Lorem ipsum dolor, sit amet consectetur adipisicing eliteiusmod tempor indicidunt"
                            borderRadius="10px" />
                        <Cards imageCard={detailartikel6} TextH6="Presiden ke-5 RI Megawati Soekarnoputri meresmikan patung Bung Karno di Akmil"
                            borderRadius="10px" /> */}
                    </div>
                    {/* END Column2 */}

                </div>
                {/* END Container */}
            </div>
        </>
    )
}

export default Page2