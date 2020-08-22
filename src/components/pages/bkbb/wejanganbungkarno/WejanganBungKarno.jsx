import React from 'react'

import './WejanganBungKarno.scss'
import CardWejangan from '../../../cardwejangan/CardWejangan'

import bkbb2 from '../../../../img/bkbb2.jpg'
import bkbb3 from '../../../../img/bkbb3.jpg'
import bkbb4 from '../../../../img/bkbb4.jpg'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../../divider/MainDivider'
import StrukturPaginate from '../../../pagination/StrukturPaginate'

const WejanganBungKarno = () => {
    return (
        <>
            {/* Thumbnail Wejangan Bungkarno */}
            <div className="wrapperWejanganThumbnail">

                <div className="linkedBkbbWBK">
                    <BreadCrumbs link1="Home" to1="/" link2="Bungkarno Bapak Bangsa" to2="/bungkarno" page3="Wejangan Bung Karno" />
                </div>
            </div>
            {/* END Thumbnail Wejangan Bungkarno */}

            {/* Container1 */}
            <div className="container1-wejanganThumbnail">
                <MainDivider text="WEJANGAN BUNG KARNO" />
            </div>
            {/* END Container1 */}

            {/* Container2 */}
            <div className="container2-wejanganThumbnail">
                {/* Column Card Wejangan Bungkarno */}
                <div className="col-card-wejanganThumbnail">
                    {/* Box1 Image */}
                    <div className="box1-image-wejanganThumbnail">
                        <CardWejangan imgWejangan={bkbb2} icon1="fas fa-quote-right" txt1='NASIONALISME KITA ADALAH NASIONALISME YANG MEMBUAT KITA MENJADI "PERKAKASNYA TUHAN", DAN MEMBUAT KITA MENJADI "HIDUP DI DALAM ROH".' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1928" />

                        <CardWejangan imgWejangan={bkbb3} icon1="fas fa-quote-right" txt1='ORANG TIDAK DAPAT MENGABDI KEPADA TUHAN DENGAN TIDAK MENGABDI KEPADA SESAMA MANUSIA. TUHAN BERSEMAYAM DI GUBUKNYA SI MISKIN' icon2="fas fa-quote-right" txt2="Soekarno, 23 Oktober 1946" />

                        <CardWejangan imgWejangan={bkbb4} icon1="fas fa-quote-right" txt1='TUJUAN SAYA IALAH UNTUK MENJADI PEMBANGUN DARI SUATU BANGSA' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1922" />
                    </div>
                    {/* END Box1 Image */}

                    {/* Box2 Image */}
                    <div className="box2-image-wejanganThumbnail">
                        <CardWejangan imgWejangan={bkbb2} icon1="fas fa-quote-right" txt1='NASIONALISME KITA ADALAH NASIONALISME YANG MEMBUAT KITA MENJADI "PERKAKASNYA TUHAN", DAN MEMBUAT KITA MENJADI "HIDUP DI DALAM ROH".' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1928" />

                        <CardWejangan imgWejangan={bkbb3} icon1="fas fa-quote-right" txt1='ORANG TIDAK DAPAT MENGABDI KEPADA TUHAN DENGAN TIDAK MENGABDI KEPADA SESAMA MANUSIA. TUHAN BERSEMAYAM DI GUBUKNYA SI MISKIN' icon2="fas fa-quote-right" txt2="Soekarno, 23 Oktober 1946" />

                        <CardWejangan imgWejangan={bkbb4} icon1="fas fa-quote-right" txt1='TUJUAN SAYA IALAH UNTUK MENJADI PEMBANGUN DARI SUATU BANGSA' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1922" />
                    </div>
                    {/* END Box2 Image */}

                    {/* Box3 Image */}
                    <div className="box1-image-wejanganThumbnail">
                        <CardWejangan imgWejangan={bkbb2} icon1="fas fa-quote-right" txt1='NASIONALISME KITA ADALAH NASIONALISME YANG MEMBUAT KITA MENJADI "PERKAKASNYA TUHAN", DAN MEMBUAT KITA MENJADI "HIDUP DI DALAM ROH".' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1928" />

                        <CardWejangan imgWejangan={bkbb3} icon1="fas fa-quote-right" txt1='ORANG TIDAK DAPAT MENGABDI KEPADA TUHAN DENGAN TIDAK MENGABDI KEPADA SESAMA MANUSIA. TUHAN BERSEMAYAM DI GUBUKNYA SI MISKIN' icon2="fas fa-quote-right" txt2="Soekarno, 23 Oktober 1946" />

                        <CardWejangan imgWejangan={bkbb4} icon1="fas fa-quote-right" txt1='TUJUAN SAYA IALAH UNTUK MENJADI PEMBANGUN DARI SUATU BANGSA' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1922" />
                    </div>
                    {/* END Box3 Image */}
                </div>
                {/* END Column Card Wejangan Bungkarno */}

                {/* Column Pagination */}
                <div className="col-pagination-wejanganThumbnail">
                    <StrukturPaginate />
                </div>
                {/* END Column Pagination */}
            </div>
            {/* END Container2 */}
        </>
    )
}

export default WejanganBungKarno