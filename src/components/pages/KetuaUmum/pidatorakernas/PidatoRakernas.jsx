import React, { useState } from 'react'

import './PidatoRakernas.scss'
import CardMateriPokok from '../../../cardmateripokok/CardMateriPokok'
import AngkaPaginationEvent from '../../../paginationevent/AngkaPaginationEvent'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../../divider/MainDivider'
import pemilu13 from '../../../../img/pemilu13.jpg'
import pemilu14 from '../../../../img/pemilu14.jpg'
import pemilu15 from '../../../../img/pemilu15.jpg'

const PidatoRakernas = () => {

    // Create Database Card Item
    let [cardPidatoRakernas, setCardPidatoRakernas] = useState([
        {
            pageMateriPk: '',
            imgMateriPk: pemilu13,
            txtJdlMateriPk: 'pidato rakernas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu14,
            txtJdlMateriPk: 'pidato rakernas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu15,
            txtJdlMateriPk: 'pidato rakernas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu13,
            txtJdlMateriPk: 'pidato rakernas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu14,
            txtJdlMateriPk: 'pidato rakernas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu15,
            txtJdlMateriPk: 'pidato rakernas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu13,
            txtJdlMateriPk: 'pidato rakernas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu14,
            txtJdlMateriPk: 'pidato rakernas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu15,
            txtJdlMateriPk: 'pidato rakernas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu13,
            txtJdlMateriPk: 'pidato rakernas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu14,
            txtJdlMateriPk: 'pidato rakernas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu15,
            txtJdlMateriPk: 'pidato rakernas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
    ])
    // END Create Database Card Item

    let [currentPage2, setCurrentPage2] = useState(1)
    let [itemEventPerPage] = useState(9)

    const indexOfLastPost = currentPage2 * itemEventPerPage
    const indexOfFirstPost = indexOfLastPost - itemEventPerPage
    const currentPosts = cardPidatoRakernas.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage2(pageNumber)

    return (
        <>
            <div className="wrapper-pidato-rakernas">
                <div className="linked-pr">
                    <BreadCrumbs link1="Home"
                        to1="/"
                        link2="Ketua Umum" to2="/ketuaumum" page3="Pidato Rakernas"
                    />
                </div>

                {/* Container1 */}
                <div className="container1-pr">
                    <MainDivider text="pidato rakernas" />
                </div>
                {/* END Container1 */}

                {/* Container2 */}
                <div className="container2-pr">
                    {/* Column Card */}
                    <div className="column-card-pr">
                        <CardMateriPokok cardMateriPokokItem={currentPosts} />
                    </div>
                    {/* END Column Card */}

                    {/* Column Pagination */}
                    <div className="column-pagination-pr">
                        <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={cardPidatoRakernas.length} paginate={paginate} />
                    </div>
                    {/* END Column Pagination */}
                </div>
                {/* END Container2 */}
            </div>
        </>
    )
}

export default PidatoRakernas