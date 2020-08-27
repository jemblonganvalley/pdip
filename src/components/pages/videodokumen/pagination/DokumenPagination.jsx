import React, { useState } from 'react'
import './DokumenPagination.scss'
import CardMultimedia from '../../../cardmultimedia/CardMultimedia'
import megawati12 from '../../../../img/megawati12.png'
import AngkaPaginationEvent from '../../../paginationevent/AngkaPaginationEvent'

const DokumenPagination = ()=> {

    let [siaran , setSiaran] = useState([
        {
            id : 1, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
        {
            id : 2, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
        {
            id : 3, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
        {
            id : 4, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
        {
            id : 5, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
        {
            id : 6, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
        {
            id : 7, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
        {
            id : 8, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
        {
            id : 9, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
        {
            id : 10, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
        {
            id : 11, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
        {
            id : 12, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
        {
            id : 13, 
            images : megawati12,
            headline : 'Admin PDI Perjuangan | 1 Januari 2019',
            isi : 'lorem ipsum dolor sit amet.'
        },
    ])

    let [currentPage, setCurrentPage] = useState(1)
    let [itemDokumen] = useState(12)
    const indexOfLastPost = currentPage * itemDokumen
    const indexOfFirstPost = indexOfLastPost - itemDokumen
    const currentPosts = siaran.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    return (
        <div className="wrapperDokumen" style={{
            display : 'flex',
            justifyContent : 'center',
            flexWrap : 'wrap'
        }}>

            <CardMultimedia siaran={currentPosts} />

            <nav aria-label="Page navigation example" style={{
                marginTop: '10px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>

                <AngkaPaginationEvent itemEventPerPage={itemDokumen} totalPosts={siaran.length} paginate={paginate} />
            </nav>

        </div>
    )
}

export default DokumenPagination