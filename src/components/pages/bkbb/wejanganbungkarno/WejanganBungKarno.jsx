import React, { useState } from 'react'

import './WejanganBungKarno.scss'
import CardWejangan from '../../../cardwejangan/CardWejangan'

import bkbb2 from '../../../../img/bkbb2.jpg'
import bkbb3 from '../../../../img/bkbb3.jpg'
import bkbb4 from '../../../../img/bkbb4.jpg'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../../divider/MainDivider'
import AngkaPaginationEvent from '../../../paginationevent/AngkaPaginationEvent'

const WejanganBungKarno = () => {

    // Create Database Card Item
    let [cardWejanganBkItem, setCardWejanganBk] = useState([
        {
            pageWejanganBk: '',
            imgWejanganBk: bkbb2,
            icon1WejanganBk: 'fas fa-quote-right',
            txt1WejanganBk: 'NASIONALISME KITA ADALAH NASIONALISME YANG MEMBUAT KITA MENJADI "PERKAKASNYA TUHAN", DAN MEMBUAT KITA MENJADI "HIDUP DI DALAM ROH".',
            icon2WejanganBk: 'fas fa-quote-right',
            txt2WejanganBk: 'Soekarno, Suluh Indonesia'
        },
        {
            pageWejanganBk: '',
            imgWejanganBk: bkbb3,
            icon1WejanganBk: 'fas fa-quote-right',
            txt1WejanganBk: 'ORANG TIDAK DAPAT MENGABDI KEPADA TUHAN DENGAN TIDAK MENGABDI KEPADA SESAMA MANUSIA. TUHAN BERSEMAYAM DI GUBUKNYA SI MISKIN',
            icon2WejanganBk: 'fas fa-quote-right',
            txt2WejanganBk: 'Soekarno, 23 Oktober 1946'
        },
        {
            pageWejanganBk: '',
            imgWejanganBk: bkbb4,
            icon1WejanganBk: 'fas fa-quote-right',
            txt1WejanganBk: 'TUJUAN SAYA IALAH UNTUK MENJADI PEMBANGUN DARI SUATU BANGSA',
            icon2WejanganBk: 'fas fa-quote-right',
            txt2WejanganBk: 'Soekarno, Suluh Indonesia'
        },
        {
            pageWejanganBk: '',
            imgWejanganBk: bkbb2,
            icon1WejanganBk: 'fas fa-quote-right',
            txt1WejanganBk: 'NASIONALISME KITA ADALAH NASIONALISME YANG MEMBUAT KITA MENJADI "PERKAKASNYA TUHAN", DAN MEMBUAT KITA MENJADI "HIDUP DI DALAM ROH".',
            icon2WejanganBk: 'fas fa-quote-right',
            txt2WejanganBk: 'Soekarno, Suluh Indonesia'
        },
        {
            pageWejanganBk: '',
            imgWejanganBk: bkbb3,
            icon1WejanganBk: 'fas fa-quote-right',
            txt1WejanganBk: 'ORANG TIDAK DAPAT MENGABDI KEPADA TUHAN DENGAN TIDAK MENGABDI KEPADA SESAMA MANUSIA. TUHAN BERSEMAYAM DI GUBUKNYA SI MISKIN',
            icon2WejanganBk: 'fas fa-quote-right',
            txt2WejanganBk: 'Soekarno, 23 Oktober 1946'
        },
        {
            pageWejanganBk: '',
            imgWejanganBk: bkbb4,
            icon1WejanganBk: 'fas fa-quote-right',
            txt1WejanganBk: 'TUJUAN SAYA IALAH UNTUK MENJADI PEMBANGUN DARI SUATU BANGSA',
            icon2WejanganBk: 'fas fa-quote-right',
            txt2WejanganBk: 'Soekarno, Suluh Indonesia'
        },
        {
            pageWejanganBk: '',
            imgWejanganBk: bkbb2,
            icon1WejanganBk: 'fas fa-quote-right',
            txt1WejanganBk: 'NASIONALISME KITA ADALAH NASIONALISME YANG MEMBUAT KITA MENJADI "PERKAKASNYA TUHAN", DAN MEMBUAT KITA MENJADI "HIDUP DI DALAM ROH".',
            icon2WejanganBk: 'fas fa-quote-right',
            txt2WejanganBk: 'Soekarno, Suluh Indonesia'
        },
        {
            pageWejanganBk: '',
            imgWejanganBk: bkbb3,
            icon1WejanganBk: 'fas fa-quote-right',
            txt1WejanganBk: 'ORANG TIDAK DAPAT MENGABDI KEPADA TUHAN DENGAN TIDAK MENGABDI KEPADA SESAMA MANUSIA. TUHAN BERSEMAYAM DI GUBUKNYA SI MISKIN',
            icon2WejanganBk: 'fas fa-quote-right',
            txt2WejanganBk: 'Soekarno, 23 Oktober 1946'
        },
        {
            pageWejanganBk: '',
            imgWejanganBk: bkbb4,
            icon1WejanganBk: 'fas fa-quote-right',
            txt1WejanganBk: 'TUJUAN SAYA IALAH UNTUK MENJADI PEMBANGUN DARI SUATU BANGSA',
            icon2WejanganBk: 'fas fa-quote-right',
            txt2WejanganBk: 'Soekarno, Suluh Indonesia'
        },
        {
            pageWejanganBk: '',
            imgWejanganBk: bkbb2,
            icon1WejanganBk: 'fas fa-quote-right',
            txt1WejanganBk: 'NASIONALISME KITA ADALAH NASIONALISME YANG MEMBUAT KITA MENJADI "PERKAKASNYA TUHAN", DAN MEMBUAT KITA MENJADI "HIDUP DI DALAM ROH".',
            icon2WejanganBk: 'fas fa-quote-right',
            txt2WejanganBk: 'Soekarno, Suluh Indonesia'
        },
        {
            pageWejanganBk: '',
            imgWejanganBk: bkbb3,
            icon1WejanganBk: 'fas fa-quote-right',
            txt1WejanganBk: 'ORANG TIDAK DAPAT MENGABDI KEPADA TUHAN DENGAN TIDAK MENGABDI KEPADA SESAMA MANUSIA. TUHAN BERSEMAYAM DI GUBUKNYA SI MISKIN',
            icon2WejanganBk: 'fas fa-quote-right',
            txt2WejanganBk: 'Soekarno, 23 Oktober 1946'
        },
        {
            pageWejanganBk: '',
            imgWejanganBk: bkbb4,
            icon1WejanganBk: 'fas fa-quote-right',
            txt1WejanganBk: 'TUJUAN SAYA IALAH UNTUK MENJADI PEMBANGUN DARI SUATU BANGSA',
            icon2WejanganBk: 'fas fa-quote-right',
            txt2WejanganBk: 'Soekarno, Suluh Indonesia'
        },
    ])
    // END Create Databasae Card Item

    let [currentPage2, setCurrentPage2] = useState(1)
    let [itemEventPerPage] = useState(9)

    const indexOfLastPost = currentPage2 * itemEventPerPage
    const indexOfFirstPost = indexOfLastPost - itemEventPerPage
    const currentPosts = cardWejanganBkItem.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage2(pageNumber)

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
                <MainDivider text="WEJANGAN BUNG KARNO" mrgn="0 0 0px 0"/>
            </div>
            {/* END Container1 */}

            {/* Container2 */}
            <div className="container2-wejanganThumbnail">
                {/* Column Card Wejangan Bungkarno */}
                <div className="col-card-wejanganThumbnail" style={{
                    display: 'flex',
                }}>
                    <CardWejangan cardWejanganBkItem={currentPosts} />
                </div>
                {/* END Column Card Wejangan Bungkarno */}

                {/* Column Pagination */}
                <div className="col-pagination-wejanganThumbnail">
                    <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={cardWejanganBkItem.length} paginate={paginate} />
                </div>
                {/* END Column Pagination */}
            </div>
            {/* END Container2 */}
        </>
    )
}

export default WejanganBungKarno