// Import to React
import React, {useEffect} from 'react'
// END Import to React

// Import to CSS
import './PemiluPage.scss'
import CarouselPemilu1 from '../../carouselPemilu1/CarouselPemilu1'
import CarouselPemilu2 from '../../carouselPemilu2/CarouselPemilu2'
import Carousel3PemiluPage from '../../carousel3PemiluPage/Carousel3PemiluPage'
// END Import to CSS

// Create Component 
const PemiluPage = () => {
     useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className="wrapperPemilu">
                <div className="headers">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">
                        </div>
                    </div>
                </div>
                <div className="linkedBerita">
                    <i class="fa fa-home">
                        <span>Home / Pemilu</span>
                    </i>
                </div>

                {/* Container1 */}
                <div className="container-1">
                    {/* Column1 */}
                    <div className="col1-container-1">
                        {/* Row1 */}
                        <div className="row1-col1">
                            {/* Bagian1 */}
                            <div className="bagian1">
                                {/* Image 1 */}
                                <CarouselPemilu1 />
                                {/* END Image 1 */}
                            </div>
                            {/* END Bagian1 */}

                            {/* Bagian2 */}
                            <div className="bagian2">
                                {/* Image 2 */}
                                <CarouselPemilu2 />
                                {/* END Image 2 */}
                            </div>
                            {/* END Bagian2 */}
                        </div>
                        {/* END Row1 */}

                        {/* Row2 */}
                        <div className="row2-col1">
                            {/* Row Bagian1 */}
                            <div className="row-bagian1">
                                <div className="garis-pinggir-merah">

                                </div>
                            </div>
                            {/* END Row Bagian1 */}

                            {/* Row Bagian2 */}
                            <Carousel3PemiluPage />
                            {/* END Row Bagian2 */}
                        </div>
                        {/* END Row2 */}
                    </div>
                    {/* END Column1 */}

                    {/* Column2 */}
                    <div className="col2-container-1">
                        {/* Row1 */}
                        <div className="row1-col2">
                            <div className="col1-row1">
                            </div>
                            <div className="col2-row1">
                                <p className="txt-title">
                                    PEMILIHAN KEPALA DAERAH SERRENTAK
                                </p>
                                <p className="txt-desk">
                                    Harta kekayaan pengurus PDI Perjuangan yang menjadi pejabat negara dilaporkan kepada Komisi Pemberantasan Korupsi [KPK].
                                </p>
                            </div>
                        </div>
                        {/* END Row1 */}

                        {/* Row2 */}
                        <div className="row2-col2">
                            <div className="col1-row2">
                            </div>
                            <div className="col2-row2">
                                <p className="txt-title">
                                    PEMILIHAN CALON LEGISLATIF PDI PERJUANGAN
                                </p>
                                <p className="txt-desk">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque fugiat provident voluptates at dignissimos error ex, similique asperiores odit.
                                </p>
                            </div>
                        </div>
                        {/* END Row2 */}
                    </div>
                    {/* END Column2 */}
                </div>
                {/* END Container1 */}

                {/* Container2 */}
                <div className="container-2">
                    {/* <img src={pemilu5} alt="" /> */}
                    <div className="jdl-col1">
                        <div className="box-txt-jdl">
                            <p className="txt-jdl">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque mollitia assumenda architecto facilis et deleniti iste alias autem quo exercitationem!
                            </p>
                        </div>
                    </div>
                    <div className="btn-col2">
                        <button className="btn-lihat">
                            Lihat
                        </button>
                    </div>
                </div>
                {/* END Container2 */}

                {/* Container3 */}
                <div className="container-3">
                    <iframe width="80%" height="100%" src="https://www.youtube.com/embed/FquQvej9l8I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                {/* END Container3 */}
            </div>
        </>
    )
}
// END Create Component

export default PemiluPage