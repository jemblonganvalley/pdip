import React, { useState } from 'react'
import CardMultimedia from '../../../cardmultimedia/CardMultimedia'
import AngkaPaginationEvent from '../../../paginationevent/AngkaPaginationEvent'
import './WawancaraPagination.scss'
import megawati12 from '../../../../img/megawati12.png'
import CardMateriPokok from '../../../cardmateripokok/CardMateriPokok'

const WawancaraPagination = () => {


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
    let [itemWawancara] = useState(12)
    const indexOfLastPost = currentPage * itemWawancara
    const indexOfFirstPost = indexOfLastPost - itemWawancara
    const currentPosts = siaran.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
    <div className="wrapperWawancara" style={{
        display : 'flex',
        justifyContent : 'center',
        flexWrap : 'wrap'
    }}>

        <CardMateriPokok cardMateriPokokItem={currentPosts} />
    </div>

    <nav aria-label="Page navigation example" style={{
        marginTop: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }}>

        <AngkaPaginationEvent itemEventPerPage={itemWawancara} totalPosts={siaran.length} paginate={paginate} />
    </nav>
    </>
  )
}

export default WawancaraPagination
