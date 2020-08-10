import React from 'react'

import './WejanganBungKarno.scss'
import CardWejangan from '../../../cardwejangan/CardWejangan'

import bkbb2 from '../../../../img/bkbb2.jpg'
import bkbb3 from '../../../../img/bkbb3.jpg'
import bkbb4 from '../../../../img/bkbb4.jpg'
import CardMateriPokok from '../../../cardmateripokok/CardMateriPokok'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'

const WejanganBungKarno = () => {
    return (
        <>
            {/* Thumbnail Wejangan Bungkarno */}
            <div className="wrapperMateri">

                <div className="linkedMateri">
                    <BreadCrumbs link1="Home" to1="/" link2="Bungkarno Bapak Bangsa" to2="/bungkarno" />
                </div>

                <div className="bkbbText">
                    <small>WEJANGAN BUNG KARNO</small>
                </div>

                {/* Column Card Wejangan Bungkarno */}
                <div className="col-card-wejangan-bungkarno">
                    {/* Box1 Image */}
                    <div className="box1-image">
                        <CardWejangan imgWejangan={bkbb2} icon1="fas fa-quote-right" txt1='NASIONALISME KITA ADALAH NASIONALISME YANG MEMBUAT KITA MENJADI "PERKAKASNYA TUHAN", DAN MEMBUAT KITA MENJADI "HIDUP DI DALAM ROH".' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1928" />

                        <CardWejangan imgWejangan={bkbb3} icon1="fas fa-quote-right" txt1='ORANG TIDAK DAPAT MENGABDI KEPADA TUHAN DENGAN TIDAK MENGABDI KEPADA SESAMA MANUSIA. TUHAN BERSEMAYAM DI GUBUKNYA SI MISKIN' icon2="fas fa-quote-right" txt2="Soekarno, 23 Oktober 1946" />

                        <CardWejangan imgWejangan={bkbb4} icon1="fas fa-quote-right" txt1='TUJUAN SAYA IALAH UNTUK MENJADI PEMBANGUN DARI SUATU BANGSA' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1922" />
                    </div>
                    {/* END Box1 Image */}

                    {/* Box2 Image */}
                    <div className="box2-image">
                        <CardWejangan imgWejangan={bkbb2} icon1="fas fa-quote-right" txt1='NASIONALISME KITA ADALAH NASIONALISME YANG MEMBUAT KITA MENJADI "PERKAKASNYA TUHAN", DAN MEMBUAT KITA MENJADI "HIDUP DI DALAM ROH".' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1928" />

                        <CardWejangan imgWejangan={bkbb3} icon1="fas fa-quote-right" txt1='ORANG TIDAK DAPAT MENGABDI KEPADA TUHAN DENGAN TIDAK MENGABDI KEPADA SESAMA MANUSIA. TUHAN BERSEMAYAM DI GUBUKNYA SI MISKIN' icon2="fas fa-quote-right" txt2="Soekarno, 23 Oktober 1946" />

                        <CardWejangan imgWejangan={bkbb4} icon1="fas fa-quote-right" txt1='TUJUAN SAYA IALAH UNTUK MENJADI PEMBANGUN DARI SUATU BANGSA' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1922" />
                    </div>
                    {/* END Box2 Image */}

                    {/* Box3 Image */}
                    <div className="box1-image">
                        <CardWejangan imgWejangan={bkbb2} icon1="fas fa-quote-right" txt1='NASIONALISME KITA ADALAH NASIONALISME YANG MEMBUAT KITA MENJADI "PERKAKASNYA TUHAN", DAN MEMBUAT KITA MENJADI "HIDUP DI DALAM ROH".' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1928" />

                        <CardWejangan imgWejangan={bkbb3} icon1="fas fa-quote-right" txt1='ORANG TIDAK DAPAT MENGABDI KEPADA TUHAN DENGAN TIDAK MENGABDI KEPADA SESAMA MANUSIA. TUHAN BERSEMAYAM DI GUBUKNYA SI MISKIN' icon2="fas fa-quote-right" txt2="Soekarno, 23 Oktober 1946" />

                        <CardWejangan imgWejangan={bkbb4} icon1="fas fa-quote-right" txt1='TUJUAN SAYA IALAH UNTUK MENJADI PEMBANGUN DARI SUATU BANGSA' icon2="fas fa-quote-right" txt2="Soekarno, Suluh Indonesia Muda, 1922" />
                    </div>
                    {/* END Box3 Image */}
                </div>
                {/* END Column Card Wejangan Bungkarno */}

                {/* Column Pagination */}
                <div className="col-pagination-materi-pokok">
                </div>
                {/* END Column Pagination */}
            </div>
            {/* END Thumbnail Wejangan Bungkarno */}
        </>
    )
}

export default WejanganBungKarno