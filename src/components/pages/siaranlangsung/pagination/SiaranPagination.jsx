import React, { useState } from 'react'
import './SiaranPagination.scss'
import Cards from '../../../cards/MainCards'
import megawati12 from '../../../../img/megawati12.png'
import CardMultimedia from '../../../cardmultimedia/CardMultimedia'
import AngkaPaginationEvent from '../../../paginationevent/AngkaPaginationEvent'
import CardMateriPokok from '../../../cardmateripokok/CardMateriPokok'

const SiaranPagination = ()=> {

    let [siaran , setSiaran] = useState([
        {
            pageMateriPk : 1, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 2, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 3, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 4, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 5, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 6, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 7, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 8, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 9, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 10, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 11, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 12, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 13, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
    ])

    let [currentPage, setCurrentPage] = useState(1)
    let [itemSiaran] = useState(12)
    const indexOfLastPost = currentPage * itemSiaran
    const indexOfFirstPost = indexOfLastPost - itemSiaran
    const currentPosts = siaran.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
        <div className="wrapperSiaran">
             {/* <CardMultimedia siaran={currentPosts} /> */}

             <CardMateriPokok cardMateriPokokItem={currentPosts}/>

            
        </div>

        <nav aria-label="Page navigation example" style={{
            marginTop: '0px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>

            <AngkaPaginationEvent itemEventPerPage={itemSiaran} totalPosts={siaran.length} paginate={paginate} />
        </nav>

        </>
    )
}

export default SiaranPagination