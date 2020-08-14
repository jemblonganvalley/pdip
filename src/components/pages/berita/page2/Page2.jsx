import React ,{useEffect} from 'react'

import detailartikel3 from '../../../../img/detailartikel3.jpg'
import detailartikel4 from '../../../../img/detailartikel4.jpg'
import detailartikel5 from '../../../../img/detailartikel5.jpg'
import detailartikel6 from '../../../../img/detailartikel6.jpg'


import '../page2/Page2.scss'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'
import Cards from '../../../cards/MainCards'

const Page2 = () => {

     useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className="wrapperPage2">
                <div className="headers">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">

                        </div>
                    </div>
                </div>
                <div className="linkedBerita">
                    <BreadCrumbs link1="Home" to1="/" link2="Berita" to2="/berita" page3="Berita Foto" />
                </div>

                {/* Container1 */}
                <div className="container-1">
                    {/* Column1 */}
                    <div className="col1-container-1">
                        {/* Row1 */}
                        <div className="row1">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {/* Box Indicator */}
                                    <div className="box-indicator">
                                        <p className="txt-no-slide-in">
                                            2
                                        </p>
                                        <p className="txt-no-slide-total">
                                            / 34
                                        </p>
                                    </div>
                                    {/* END Box Indicator */}

                                    <div className="carousel-item active img1">

                                    </div>
                                    <div className="carousel-item img2">

                                    </div>
                                    <div className="carousel-item img3">

                                    </div>
                                </div>

                                <div className="box-btn">
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
                        </div>
                        {/* END Row1 */}

                        {/* Row2 */}
                        <div className="row2">
                            <div className="jdl-row2">
                                <p className="txt-admin">
                                    Admin PDI Perjuangan | 1 Januari 2019
                                </p>
                                <a className="btn-fav">
                                    <i className="fas fa-heart"></i>
                                </a>
                                <p className="txt-jm-fav">
                                    98101
                                </p>
                            </div>

                            <p className="title-2">
                                Ketua Umum PDI Perjuangan, Hj. Megawati Soekarnoputri Meresmikan 20 Kantor Partai
                            </p>

                            <p className="txt-desk1">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ad, ut corporis veniam consectetur officiis fuga voluptas porro veritatis aliquid?

                                <br />
                                <br />

                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ad, ut corporis veniam consectetur officiis fuga voluptas porro veritatis aliquid?
                            </p>

                            <div className="box-medsos">
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

                    <div className="garis-vertical-tipis">
                        <div className="garis-merah-tebal">

                        </div>
                    </div>

                    {/* Column2 */}
                    <div className="col2-container-1">
                        <Cards imageCard={detailartikel3} title="Lorem ipsum dolor, sit amet consectetur adipisicing"
                            borderRadius="10px" />
                        <Cards imageCard={detailartikel4} title="Presiden ke-5 RI Megawati Soekarnoputri meresmikan patung Bung Karno di Akmil"
                            borderRadius="10px" />
                        <Cards imageCard={detailartikel5} title="Lorem ipsum dolor, sit amet consectetur adipisicing"
                            borderRadius="10px" />
                        <Cards imageCard={detailartikel6} title="Presiden ke-5 RI Megawati Soekarnoputri meresmikan patung Bung Karno di Akmil"
                            borderRadius="10px" />
                    </div>
                    {/* END Column2 */}

                </div>
                {/* END Container */}
            </div>
        </>
    )
}

export default Page2