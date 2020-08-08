// Import to React
import React from 'react'
// END Import to React
import megawati5 from '../../../img/megawati5.jpg'
import megawati6 from '../../../img/megawati6.jpg'
import megawati7 from '../../../img/megawati7.jpg'
import Cards from '../../cards/MainCards'

// Import to CSS
import './KetuaUmumPage.css'
import MainDivider from '../../divider/MainDivider'
// END Import to CSS

// Create Component
const KetuaUmumPage = () => {
    return (
        <>
            <div className="wrapperKetuaUmum">
                <div className="headers">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">
                            <h2>Solid Bergerak Untuk<br />Indonesia Raya </h2>
                        </div>
                    </div>
                </div>
                <div className="linkedBerita">
                    <i class="fa fa-home">
                        <span>Home / Ketua Umum /</span>
                    </i>
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
                    <div className="col2-container-1">
                        {/* Row1 */}
                        <div className="row1-col2">
                            <div className="box-img">
                                <img src="" alt="" className="img-1" />
                            </div>
                            <div className="txt-img1">
                                <p className="txt-1">
                                    BERITA NASIONAL
                                </p>
                            </div>
                        </div>
                        {/* END Row1 */}
                        {/* Row2 */}
                        <div className="row2-col2">
                            <div className="box-img">
                                <img src="" alt="" className="img-2" />
                            </div>
                            <div className="txt-img2">
                                <p className="txt-2">
                                    BERITA DAERAH
                                </p>
                            </div>
                        </div>
                        {/* END Row2 */}
                        {/* Row3 */}
                        <div className="row3-col2">
                            <div className="box-img">
                                <img src="" alt="" className="img-3" />
                            </div>
                            <div className="txt-img3">
                                <p className="txt-3">
                                    BERITA FOTO
                                </p>
                            </div>
                        </div>
                        {/* END Row3 */}
                        {/* Row4 */}
                        <div className="row4-col2">
                            <div className="box-img">
                                <img src="" alt="" className="img-4" />
                            </div>
                            <div className="txt-img4">
                                <p className="txt-4">
                                    KEGIATAN PARTAI
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
                        <div className="row1-col5">
                            <img src="" alt="" className="img-row1" />
                            <div className="box-jdl-row1">
                                <h1>KONGRES Ke- 5 PDI Perjuangan "Solid Bergerak Untuk Indonesia Raya" Bali</h1>
                            </div>
                        </div>
                        {/* END Row1 */}
                        {/* Row2 */}
                        <div className="row2-col5">
                            {/* Column1 */}
                            <div className="col1-row2">
                                <img src="" alt="" className="img-col1" />
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
                        <button className="btn-lihat-col2">
                            LIHAT
                        </button>
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
                    {/* END Column4 */}
                </div>
                {/* END Container3 */}
            </div>
        </>
    )
}
// END Create Component

export default KetuaUmumPage