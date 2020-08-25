import React, { useState } from 'react'

import './PidatoRakornas.scss'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../../divider/MainDivider'
import CardMateriPokok from '../../../cardmateripokok/CardMateriPokok'
import AngkaPaginationEvent from '../../../paginationevent/AngkaPaginationEvent'

const PidatoRakornas = () => {

    // Create Database Card Item
    let [cardPidatoRakornas, setCardPidatoRakornas] = useState([
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb5.jpg',
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb6.jpg',
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb7.jpg',
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb5.jpg',
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb6.jpg',
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb7.jpg',
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb5.jpg',
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb6.jpg',
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb7.jpg',
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb5.jpg',
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb6.jpg',
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb7.jpg',
            txtJdlMateriPk: 'pidato rakornas',
            txtParagrapMateriPk: ''
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
                    <MainDivider text="pidato rakornas" />
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