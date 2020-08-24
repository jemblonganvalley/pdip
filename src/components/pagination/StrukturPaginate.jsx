import React, { useState, useEffect } from 'react'
import CardCircle from '../cardcircle/CardCircle'


import megawati from '../../img/megawati.png'
import hasto from '../../img/hasto.png'
import utut from '../../img/utut.png'
import komarudin from '../../img/komarudin.png'
import olly from '../../img/olly.png'
import rudi from '../../img/rudi.png'
import peter from '../../img/peter.png'
import watubun from '../../img/komar.png'
import prananda from '../../img/prananda.png'
import yasonna from '../../img/yasonna.png'
import said from '../../img/said.png'
import eriko from '../../img/eriko.png'

import './StrukturPaginate.scss'
import AngkaPaginationEvent from '../paginationevent/AngkaPaginationEvent'

const StrukturPaginate = () => {

    let [struktur, setStruktur] = useState([
        {
            id : 1,
            image: megawati,
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            id : 2,
            image: hasto,
            jabatan: 'Sekretaris Jendral',
            nama: 'Hasto Kristiyanto'
        },
        {
            id : 3,
            image: utut,
            jabatan: 'Wasekjen Bidang Internal',
            nama: 'Utut Adianto'
        },
        {
            id : 4,

            image: komarudin,
            jabatan: 'Wasekjen Bidang Kerakyatan',
            nama: 'Komarudin Watubun'
        },
        {
            id : 5,

            image: olly,
            jabatan: 'Ketua Umum',
            nama: 'Olly Dondo Kambey'
        },
        {
            id : 6,

            image: rudi,
            jabatan: 'Sekretaris Jendral',
            nama: 'Rudiyanto Chen'
        },
        {
            id : 7,

            image: peter,
            jabatan: 'Wasekjen Bidang Kerakyatan',
            nama: 'Yuliari Peter Batubara'
        },
        {
            id : 8,

            image: watubun,
            jabatan: 'Ketua Bidang Kehormatan Partai',
            nama: 'Komarudin Watubun'
        },
        {
            id : 9,

            image: prananda,
            jabatan: 'Ekonomi Kreatif & Ekonomi Digital',
            nama: 'Prananda Prabowo'
        },
        {
            id : 10,
            
            image: yasonna,
            jabatan: 'Sekretaris Jendral',
            nama: 'Yasonna H. Laoly'
        },
        {
            id : 11,

            image: said,
            jabatan: 'Wasekjen Bidang Internal',
            nama: 'Said Abdullah'
        },
        {
            id : 12,

            image: eriko,
            jabatan: 'Pemuda dan Olahraga',
            nama: 'Eriko Sotardugo'
        },
        {
            id : 13,

            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        

    ])



    let [currentPage2, setCurrentPage2] = useState(1)
    let [itemEventPerPage] = useState(12)

    const indexOfLastPost = currentPage2 * itemEventPerPage
    const indexOfFirstPost = indexOfLastPost - itemEventPerPage
    const currentPosts = struktur.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage2(pageNumber)

    return (
        <div className="wrapperPaginate" style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
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