import React, { useState } from 'react'

import './PidatoKongres.scss'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'
import CardMateriPokok from '../../../cardmateripokok/CardMateriPokok'
import AngkaPaginationEvent from '../../../paginationevent/AngkaPaginationEvent'
import MainDivider from '../../../divider/MainDivider'

const PidatoKongres = () => {

    // Create Database Card Item
    let [cardPidatoKongres, setCardPidatoKongres] = useState([
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb5.jpg',
            txtJdlMateriPk: 'pidato kongres',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb6.jpg',
            txtJdlMateriPk: 'pidato kongres',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb7.jpg',
            txtJdlMateriPk: 'pidato kongres',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb5.jpg',
            txtJdlMateriPk: 'pidato kongres',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb6.jpg',
            txtJdlMateriPk: 'pidato kongres',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb7.jpg',
            txtJdlMateriPk: 'pidato kongres',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb5.jpg',
            txtJdlMateriPk: 'pidato kongres',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb6.jpg',
            txtJdlMateriPk: 'pidato kongres',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb7.jpg',
            txtJdlMateriPk: 'pidato kongres',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb5.jpg',
            txtJdlMateriPk: 'pidato kongres',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb6.jpg',
            txtJdlMateriPk: 'pidato kongres',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb7.jpg',
            txtJdlMateriPk: 'pidato kongres',
            txtParagrapMateriPk: ''
        },
    ])
    // END Create Database Card Item

    let [currentPage2, setCurrentPage2] = useState(1)
    let [itemEventPerPage] = useState(9)

    const indexOfLastPost = currentPage2 * itemEventPerPage
    const indexOfFirstPost = indexOfLastPost - itemEventPerPage
    const currentPosts = cardPidatoKongres.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage2(pageNumber)

    return (
        <>
            <div className="wrapper-pidato-kongres">
                <div className="linked-pk">
                    <BreadCrumbs link1="Home"
                        to1="/"
                        link2="Ketua Umum" to2="/ketuaumum" page3="Pidato Kongres"
                    />
                </div>

                {/* Container1 */}
                <div className="container1-pk">
                    <MainDivider text="pidato kongres" />
                </div>
                {/* END Container1 */}

                {/* Container2 */}
                <div className="container2-pk">
                    {/* Column Card */}
                    <div className="column-card-pk">
                        <CardMateriPokok cardMateriPokokItem={currentPosts} />
                    </div>
                    {/* END Column Card */}

                    {/* Column Pagination */}
                    <div className="column-pagination-pk">
                        <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={cardPidatoKongres.length} paginate={paginate} />
                    </div>
                    {/* END Column Pagination */}
                </div>
                {/* END Container2 */}
            </div>
        </>
    )
}

export default PidatoKongres