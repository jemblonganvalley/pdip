import React from 'react'

import bkbb2 from '../../../img/bkbb2.jpg'
import bkbb3 from '../../../img/bkbb3.jpg'
import bkbb4 from '../../../img/bkbb4.jpg'

import './BkbbWejangan.scss'
import CardQuotes from '../../cardquotes/CardQuotes'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainButton from '../../buttons/MainButton'

const BkbbWejangan = () => {
    return (
        <>
            <div className="wrapperBkbbWejangan">
                <div className="headersBkbbWejangan">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">

                        </div>
                    </div>
                </div>
                <div className="linkedBkbbWejangan">
                    <BreadCrumbs link1="home"
                        to1="/" link2="Bungkarno Bapak Bangsa" to2="/bungkarno"
                        page3="Quotes" />
                </div>

                {/* Container1 */}
                <div className="container-1-bkbbWejangan">
                    {/* Column1 */}
                    <div className="col1-container-1-bkbbWejangan">
                        {/* Row1 */}
                        <div className="row1-bkbbWejangan">
                            <div className="box-quotes-bkbbWejangan">
                                <i className="fas fa-quote-right"></i>

                                <h5 className="txt1" >
                                    BARANG SIAPA JANG INGIN MUTIARA HARUS BERANI TERJUN DI LAUTAN JANG DALAM.
                                </h5>

                                <br />

                                <p className="txt2">
                                    JANGANLAH LEMBEK, MOHON PADA TUHAN SUPAYA BANGSA INDONESIA MENJADI SATU BANGSA YANG JAYA DI DUNIA, MENJADI BANGSA. KUAT DAN TABAH
                                </p>

                                <i className="fas fa-quote-right"></i>

                                <small className="txt3">
                                    Bung Karno, 17 Agustus 1946
                                </small>
                            </div>
                        </div>
                        {/* END Row1 */}

                        {/* Row2 */}
                        <div className="row2-bkbbWejangan">
                            <p className="txt1">
                                Admin PDI Perjuangan | 1 Januari 2019
                            </p>

                            <h5 className="txt2">
                                Barang siapa jang ingin mutiara harus berani terjun di lautan jang dalam. Janglah lembek, mohon pada Tuhan supaya bangsa Indonesia menjadi satu bangsa yang jaya di dunia, menjadi bangsa. Kuat dan tabah
                            </h5>

                            <br />

                            <p className="txt3">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis rerum esse nihil. Reiciendis illum et voluptate quisquam, consequatur id laudantium?
                            </p>

                            <p className="txt4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi neque saepe cupiditate, porro maiores officia, sequi voluptate, amet exercitationem incidunt veniam. Mollitia soluta laborum quae quisquam aliquam neque illum. Dolores incidunt quos iure nobis rem laborum doloremque quasi beatae ad natus! Sequi, quos doloribus. Quod sequi animi illum numquam?
                            </p>

                            <div className="box-medsos-bkbbWejangan">
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
                </div>
                {/* END Container1 */}

                {/* Container2 */}
                <div className="container-2-bkbbWejangan">
                    {/* Column1 */}
                    <div className="col1-container-2-bkbbWejangan">
                        {/* CardQuotes */}
                        <CardQuotes img={bkbb2} icon1="fas fa-quote-right" txt1='NASIONALISME KITA ADALAH NASIONALISME YANG MEMBUAT KITA MENJADI "PERKAKASNYA TUHAN", DAN MEMBUAT KITA MENJADI "HIDUP DI DALAM ROH".' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia" />

                        <CardQuotes img={bkbb3} icon1="fas fa-quote-right" txt1="ORANG TIDAK DAPAT MENGABDI KEPADA TUHAN DENGAN TIDAK MENGABDI KEPADA SESAMA MANUSIA. TUHAN BERSEMAYAM DI GUBUKNYA SI MISKIN" icon2="fas fa-quote-right" txt2="Soekarno, 23 Oktober 1946" />

                        <CardQuotes img={bkbb4} icon1="fas fa-quote-right" txt1="TUJUAN SAYA IALAH UNTUK MENJADI PEMBANGUN DARI SUATU BANGSA" icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1922" />
                        {/* END CardQuotes */}
                    </div>
                    {/* END Column1 */}

                    {/* Column2 */}
                    <div className="col2-container-2">
                        <MainButton pages="/wejanganbungkarno" name="LIHAT SEMUA" margin="1rem 0" />
                    </div>
                    {/* END Column2 */}
                </div>
                {/* END Container2 */}
            </div>
        </>
    )
}

export default BkbbWejangan