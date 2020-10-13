import React, { useState } from 'react'

import './PidatoRakornas.scss'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../../divider/MainDivider'
import CardMateriPokok from '../../../cardmateripokok/CardMateriPokok'
import AngkaPaginationEvent from '../../../paginationevent/AngkaPaginationEvent'
import pemilu13 from '../../../../img/pemilu13.jpg'
import pemilu14 from '../../../../img/pemilu14.jpg'
import pemilu15 from '../../../../img/pemilu15.jpg'

const PidatoRakornas = () => {

    // Create Database Card Item
    let [cardPidatoRakornas, setCardPidatoRakornas] = useState([
        {
            pageMateriPk: '',
            imgMateriPk: pemilu13,
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu14,
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu15,
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu13,
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu14,
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu15,
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu13,
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu14,
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu15,
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu13,
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu14,
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu15,
            txtJdlMateriPk: 'pidato rakornas',
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
    const currentPosts = cardPidatoRakornas.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage2(pageNumber)

    return (
        <>
            <div className="wrapper-pidato-rakornas">
                <div className="linked-pidato-rakornas">
                    <BreadCrumbs link1="Home"
                        to1="/"
                        link2="Ketua Umum" to2="/ketuaumum" page3="Pidato Rakornas"
                    />
                </div>

                {/* Container1 */}
                <div className="container1-pidato-rakornas">
                    <MainDivider text="pidato rakornas" mrgn="0 0 40px 0"/>
                </div>
                {/* END Container1 */}

                {/* Container2 */}
                <div className="container2-pidato-rakornas">
                    {/* Column Card */}
                    <div className="column-card-pidato-rakornas">
                        <CardMateriPokok cardMateriPokokItem={currentPosts} />
                    </div>
                    {/* END Column Card */}

                    {/* Column Pagination */}
                    <div className="column-pagination-pidato-rakornas">
                        <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={cardPidatoRakornas.length} paginate={paginate} />
                    </div>
                    {/* END Column Pagination */}
                </div>
                {/* END Container2 */}
            </div>
        </>
    )
}

export default PidatoRakornas