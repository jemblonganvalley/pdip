import React, { useEffect } from 'react'

import pemilu18 from '../../../../img/pemilu18.jpg'
import pemilu19 from '../../../../img/pemilu19.jpg'
import pemilu20 from '../../../../img/pemilu20.jpg'

import '../page1/Page1.scss'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'
import Cards from '../../../cards/MainCards'
import CarouselBeritaPage1 from '../../../carouselberitapage1/CarouselBeritaPage1'
import MainDivider from '../../../divider/MainDivider'

const Page1 = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="wrapperBeritaPage1">
                <div className="headers-BeritaPage1">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">
                            <h2 className="txt-backg-beritaPage1">
                                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPICISING ELIT,
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="linkedBeritaPage1">
                    <BreadCrumbs link1="Home" to1="/" link2="Berita" to2="/berita" page3="Detail Berita" />
                </div>

                {/* Container1 */}
                <div className="container-1-beritaPage1">
                    {/* Column1 */}
                    <div className="col1-container-1-beritaPage1">
                        {/* Section1 */}
                        <div className="section1-col1-beritaPage1">
                            <p className="txt-title">
                                Sekolah Sekretaris DPD & DPC PDI Perjuangan se-Indonesia
                            </p>
                        </div>
                        {/* END Section1 */}

                        {/* Section2 */}
                        <div className="section2-col1-beritaPage1">
                            {/* Row1 */}
                            {/* <div className="row1-beritaPage1">
                                <div className="box-btn">
                                    <button className="btn-love">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <p className="jm-fav">
                                        0
                                    </p>
                                </div>
                            </div> */}
                            {/* END Row1 */}

                            {/* Row2 */}
                            <div className="row2-beritaPage1">
                                <small className="date">Admin PDI Perjuangan | 15 May 2016</small>
                                <div className="garis-panjang-tipis">
                                    <div className="garis-merah-tebal">

                                    </div>
                                </div>
                            </div>
                            {/* END Row2 */}

                            {/* Row3 */}
                            {/* <div className="row3"> */}
                            {/* <div className="box-btn"> */}
                            {/* <p className="jm-share">
                                        96
                                    </p>
                                    <button className="btn-love">
                                        <i className="fas fa-share"></i>
                                    </button> */}
                            {/* </div> */}
                            {/* </div> */}
                            {/* END Row3 */}
                        </div>
                        {/* END Section2 */}
                    </div>
                    {/* END Column1 */}

                    {/* Column2 */}
                    <div className="col2-container-1-beritaPage1">
                        {/* Section1 */}
                        <div className="section1-beritaPage1">
                            <p className="txt-desk-section1-beritaPage1">
                                So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distincly to perceive that my own individuality was now merged in a joint stock company of two ; that my free will had received a mortal.
                            </p>
                        </div>
                        {/* END Section1 */}

                        {/* Section2 */}
                        <CarouselBeritaPage1 />
                        {/* END Section2 */}

                        {/* Section3 */}
                        <div className="section3-beritaPage1">
                            <p className="txt-desk-section3-beritaPage1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat provident enim, commodi culpa minima incidunt cum nam fugit sequi! Nisi, suscipit. Magnam eos dolorem soluta, enim consectetur assumenda, atque, quia itaque voluptatibus possimus voluptatem! Aspernatur tenetur voluptatem modi unde fugit neque eligendi aliquid molestiae harum consequatur, ducimus explicabo porro fuga.

                                <br />
                                <br />

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat provident enim, commodi culpa minima incidunt cum nam fugit sequi! Nisi, suscipit. Magnam eos dolorem soluta, enim consectetur assumenda, atque, quia itaque voluptatibus possimus voluptatem! Aspernatur tenetur voluptatem modi unde fugit neque eligendi aliquid molestiae harum consequatur, ducimus explicabo porro fuga.

                                <br />
                                <br />

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat provident enim, commodi culpa minima incidunt cum nam fugit sequi! Nisi, suscipit. Magnam eos dolorem soluta, enim consectetur assumenda, atque, quia itaque voluptatibus possimus voluptatem! Aspernatur tenetur voluptatem modi unde fugit neque eligendi aliquid molestiae harum consequatur, ducimus explicabo porro fuga.
                            </p>
                        </div>
                        {/* END Section3 */}

                        {/* Section4 */}
                        <div className="section4-beritaPage1">
                            <i className="fas fa-quote-right"></i>

                            <h5 className="txt-desk-section4-beritaPage1">
                                In the tumultuos business of cutting-in and attending to a whale, there is much
                            </h5>
                        </div>
                        {/* END Section4 */}

                        {/* Section5 */}
                        <div className="section5-beritaPage1">
                            <p className="txt-desk-section5-beritaPage1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis alias laudantium quibusdam. Perspiciatis iure deleniti, dignissimos debitis ratione id illum sunt quidem odio quia eius nesciunt earum voluptatibus dolor porro corporis suscipit quam adipisci molestias sit. Dolores optio, dicta eos omnis quam aspernatur! Consequuntur, ad. Aliquid modi nobis fugiat inventore, beatae deleniti rem autem ea officia quam, eaque laborum quasi. Pariatur, odit? Omnis distinctio ea voluptate voluptatem libero accusantium quisquam inventore molestiae natus perferendis. Nobis at accusamus iste deleniti!

                                <br />
                                <br />

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis voluptate eligendi est accusamus! Minima distinctio rem maxime, non veritatis dolor aspernatur quae rerum obcaecati fugiat quis inventore aut vitae velit tenetur, nostrum minus at delectus fuga dolorem assumenda perspiciatis ipsam est ea! Laborum adipisci facilis eum minus, necessitatibus ducimus?
                            </p>

                            <div className="garis-panjang">
                            </div>

                            <div className="box-medsos-beritaPage1">
                                <div className="socialMedia">
                                    <small>SHARE : </small>
                                    <i class="fa fa-facebook"></i>
                                    <i class="fa fa-twitter"></i>
                                    <i class="fa fa-instagram"></i>
                                    <i class="fa fa-whatsapp" ></i>
                                </div>
                            </div>
                        </div>
                        {/* END Section5 */}

                        {/* Section6 */}
                        <div className="section6-beritaPage1">
                            {/* Column1 */}

                            {/* END Column1 */}

                            {/* Column2 */}

                            {/* END Column2 */}
                        </div>
                        {/* END Section6 */}
                    </div>


                    {/* END Column2 */}
                </div>
                {/* END Container1 */}

                <div className="col1-section6-beritaPage1">
                    <MainDivider text="Berita Terbaru"
                        garisMerah="7rem"
                        m="1rem 0" />
                </div>

                <div className="col2-section6-beritaPage1">
                    <Cards imageCard={pemilu18}
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019" TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing." paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                        borderRadius="10px" />
                    <Cards imageCard={pemilu19}
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019" TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing." paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                        borderRadius="10px" />
                    <Cards imageCard={pemilu20}
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019" TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing." paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur neque minima eum temporibus. Ipsa at fugit rerum veritatis sint?"
                        borderRadius="10px" />
                </div>
            </div>
        </>
    )
}

export default Page1