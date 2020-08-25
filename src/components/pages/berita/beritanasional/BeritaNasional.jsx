import React, { useState } from 'react'

import './BeritaNasional.scss'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../../divider/MainDivider'
import CardMateriPokok from '../../../cardmateripokok/CardMateriPokok'
import AngkaPaginationEvent from '../../../paginationevent/AngkaPaginationEvent'

const BeritaNasional = () => {

    // Create Database Card Item
    let [cardBeritaNasional, setCardBeritaNasional] = useState([
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb5.jpg',
            txtJdlMateriPk: 'berita nasional',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb6.jpg',
            txtJdlMateriPk: 'berita nasional',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb7.jpg',
            txtJdlMateriPk: 'berita nasional',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb5.jpg',
            txtJdlMateriPk: 'berita nasional',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb6.jpg',
            txtJdlMateriPk: 'berita nasional',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb7.jpg',
            txtJdlMateriPk: 'berita nasional',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb5.jpg',
            txtJdlMateriPk: 'berita nasional',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb6.jpg',
            txtJdlMateriPk: 'berita nasional',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb7.jpg',
            txtJdlMateriPk: 'berita nasional',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb5.jpg',
            txtJdlMateriPk: 'berita nasional',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb6.jpg',
            txtJdlMateriPk: 'berita nasional',
            txtParagrapMateriPk: ''
        },
        {
            pageMateriPk: '',
            imgMateriPk: '../../img/bkbb7.jpg',
            txtJdlMateriPk: 'berita nasional',
            txtParagrapMateriPk: ''
        },
    ])
    // END Create Database Card Item

    let [currentPage2, setCurrentPage2] = useState(1)
    let [itemEventPerPage] = useState(9)

    const indexOfLastPost = currentPage2 * itemEventPerPage
    const indexOfFirstPost = indexOfLastPost - itemEventPerPage
    const currentPosts = cardBeritaNasional.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage2(pageNumber)

    return (
        <>
            <div className="wrapper-berita-nasional">
                <div className="linked-berita-nasional">
                    <BreadCrumbs link1="Home"
                        to1="/"
                        link2="Berita" to2="/berita" page3="Berita Nasional"
                    />
                </div>

                {/* Container1 */}
                <div className="container1-berita-nasional">
                    <MainDivider text="Berita Nasional" />
                </div>
                {/* END Container1 */}

                {/* Container2 */}
                <div className="container2-berita-nasional">
                    {/* Column Card */}
                    <div className="column-card-berita-nasional">
                        <CardMateriPokok cardMateriPokokItem={currentPosts} />
                    </div>
                    {/* END Column Card */}

                    {/* Column Pagination */}
                    <div className="column-pagination-berita-nasional">
                        <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={cardBeritaNasional.length} paginate={paginate} />
                    </div>
                    {/* END Column Pagination */}
                </div>
                {/* END Container2 */}
            </div>
        </>
    )
}

export default BeritaNasional