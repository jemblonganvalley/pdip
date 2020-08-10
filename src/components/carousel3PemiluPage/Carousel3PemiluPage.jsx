import React from 'react'

import '../carousel3PemiluPage/Carousel3PemiluPage.scss'
import CardCarousel3 from '../cardcarousel3/CardCarousel3'

const Carousel3PemiluPage = () => {
    return (
        <>
            {/* Carousel */}
            <div id="pemilu3" className="carousel carousel3-pemiluPage slide" data-ride="carousel">
                <div className="carousel-inner box-carousel3-pemiluPage">
                    <div className="carousel-item active">
                        {/* Section1 Row2 */}
                        <div className="section1-row2">
                            {/* Column1 Section1 */}
                            <div className="column1-section1">
                                <CardCarousel3 provinsi="JAMBI" garisMerahTipis="garis-merah-tipis" garisMerahTebal="garis-merah-tebal" kota="SAROLANGON" title1="BUPATI" title2="Drs. H. CEK ENDRA" title3="WAKIL BUPATI" title4="H. HILALLATIL BADRI" />

                                <CardCarousel3 kota="MUARO JAMBI" title1="BUPATI" title2="Drs. H. CEK ENDRA" title3="WAKIL BUPATI" title4="H. HILALLATIL BADRI" />

                                <CardCarousel3 kota="TEBO" title1="BUPATI" title2="Drs. H. CEK ENDRA" title3="WAKIL BUPATI" title4="H. HILALLATIL BADRI" />
                            </div>
                            {/* END Column1 Section1 */}

                            {/* Column2 Section1 */}
                            <div className="column2-section1">
                                <CardCarousel3 provinsi="JAMBI" garisMerahTipis="garis-merah-tipis" garisMerahTebal="garis-merah-tebal" kota="SAROLANGON" title1="BUPATI" title2="Drs. H. CEK ENDRA" title3="WAKIL BUPATI" title4="H. HILALLATIL BADRI" />
                            </div>
                            {/* END Column2 Section1*/}
                        </div>
                        {/* END Section1 Row2 */}

                        {/* Section2 Row2 */}
                        <div className="section2-row2">
                            {/* Column1 Section2 */}
                            <div className="column1-section2">
                                <CardCarousel3 provinsi="JAMBI" garisMerahTipis="garis-merah-tipis" garisMerahTebal="garis-merah-tebal" kota="SAROLANGON" title1="BUPATI" title2="Drs. H. CEK ENDRA" title3="WAKIL BUPATI" title4="H. HILALLATIL BADRI" />
                            </div>
                            {/* END Column1 Section2 */}

                            {/* Column2 Section2 */}
                            <div className="column2-section2">
                                <CardCarousel3 provinsi="JAMBI" garisMerahTipis="garis-merah-tipis" garisMerahTebal="garis-merah-tebal" kota="SAROLANGON" title1="BUPATI" title2="Drs. H. CEK ENDRA" title3="WAKIL BUPATI" title4="H. HILALLATIL BADRI" />
                            </div>
                            {/* END Column1 Section2 */}

                            {/* Column3 Section2 */}
                            <div className="column3-section2">
                                <CardCarousel3 provinsi="JAMBI" garisMerahTipis="garis-merah-tipis" garisMerahTebal="garis-merah-tebal" kota="SAROLANGON" title1="BUPATI" title2="Drs. H. CEK ENDRA" title3="WAKIL BUPATI" title4="H. HILALLATIL BADRI" />
                            </div>
                            {/* END Column3 Section2 */}
                        </div>
                        {/* END Section2 Row2 */}

                        {/* Section3 Row2 */}
                        <div className="section3-row2">
                            {/* Column1 Section3 */}
                            <div className="column1-section3">
                                <CardCarousel3 provinsi="JAMBI" garisMerahTipis="garis-merah-tipis" garisMerahTebal="garis-merah-tebal" kota="SAROLANGON" title1="BUPATI" title2="Drs. H. CEK ENDRA" title3="WAKIL BUPATI" title4="H. HILALLATIL BADRI" />

                                <CardCarousel3 kota="SAROLANGON" title1="BUPATI" title2="Drs. H. CEK ENDRA" title3="WAKIL BUPATI" title4="H. HILALLATIL BADRI" />
                            </div>
                            {/* END Column1 Section3 */}

                            {/* Column2 Section3 */}
                            <div className="column2-section3">
                                <CardCarousel3 provinsi="JAMBI" garisMerahTipis="garis-merah-tipis" garisMerahTebal="garis-merah-tebal" kota="SAROLANGON" title1="BUPATI" title2="Drs. H. CEK ENDRA" title3="WAKIL BUPATI" title4="H. HILALLATIL BADRI" />

                                <CardCarousel3 kota="SAROLANGON" title1="BUPATI" title2="Drs. H. CEK ENDRA" title3="WAKIL BUPATI" title4="H. HILALLATIL BADRI" />
                            </div>
                            {/* END Column2 Section3 */}
                        </div>
                        {/* END Section3 Row2 */}
                    </div>
                    <div className="carousel-item">

                    </div>
                    <div className="carousel-item">

                    </div>
                </div>
                <a className="carousel-control-prev" href="#pemilu3" role="button" data-slide="prev" id="btn-left-carousel3">
                    <span className="carousel-control" aria-hidden="true" />
                    <i className="fas fa-angle-left"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#pemilu3" role="button" data-slide="next" id="btn-right-carousel3">
                    <span className="carousel-control" aria-hidden="true" />
                    <i className="fas fa-angle-right"></i>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            {/* END Carousel */}
        </>
    )
}

export default Carousel3PemiluPage