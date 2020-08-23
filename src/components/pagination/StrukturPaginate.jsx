import React, { useState, useEffect } from 'react'
import CardCircle from '../cardcircle/CardCircle'
import megawati from '../../img/megawati.png'
import './StrukturPaginate.scss'
import AngkaPaginationEvent from '../paginationevent/AngkaPaginationEvent'

const StrukturPaginate = () => {

    let [struktur, setStruktur] = useState([
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },

    ])



    let [currentPage2, setCurrentPage2] = useState(1)
    let [itemEventPerPage] = useState(16)

    const indexOfLastPost = currentPage2 * itemEventPerPage
    const indexOfFirstPost = indexOfLastPost - itemEventPerPage
    const currentPosts = struktur.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage2(pageNumber)

    return (
        <div className="wrapperPaginate" style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            <CardCircle strukturCard={currentPosts} />

            <nav aria-label="Page navigation example" style={{
                marginTop: '10px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>

                {/* <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link prevnext" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </a>
                    </li>
                    <li className="page-item active" ><a className="page-link" href="/partai" >01</a></li>
                    <li className="page-item">
                        <a className="page-link prevnext" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                        </a>
                    </li>
                </ul> */}

                <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={struktur.length} paginate={paginate} />
            </nav>

        </div>
    )
}

export default StrukturPaginate