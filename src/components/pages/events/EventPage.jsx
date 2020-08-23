import React, { useState, useEffect } from 'react'
import './EventPage.scss'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import Timeline from '../../timeline/Timeline'

import AngkaPaginationEvent from '../../paginationevent/AngkaPaginationEvent'


const EventPage = () => {

    let [itemEvent, setItemEvent] = useState([
        {
            id: 1,
            images: 'awqkdqdq',
            headIsi: 'Ketua Umum',
            judul: 'judul Satu',
            pargrap: 'lorem ipsum dolor sit amet'
        },
        {
            id: 2,
            images: 'qweqew',
            headIsi: 'Kegiatan Partai',
            judul: 'judul Dua',
            pargrap: 'lorem ipsum dolor sit amet'
        },
        {
            id: 3,
            images: 'qweqew',
            headIsi: 'Kegiatan Partai',
            judul: 'judul Dua',
            pargrap: 'lorem ipsum dolor sit amet'
        },
        {
            id: 4,
            images: 'qweqew',
            headIsi: 'Kegiatan Partai',
            judul: 'judul Dua',
            pargrap: 'lorem ipsum dolor sit amet'
        },
    ])

    let [currentPage, setCurrentPage] = useState(1)
    let [timelinePage, setTimelinePage] = useState(4)



    let [loading, setLoading] = useState(false)
    let [currentPage2, setCurrentPage2] = useState(1)
    let [itemEventPerPage] = useState(3)

    const indexOfLastPost = currentPage2 * itemEventPerPage
    const indexOfFirstPost = indexOfLastPost - itemEventPerPage
    const currentPosts = itemEvent.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage2(pageNumber)

    return (
        <div className="wrapperEvent">

            <div className="headEvent">
                <div className="textHeadEvent">
                    <h2>Timeline Event </h2>
                </div>
            </div>

            <div className="linkedEvent">
                <BreadCrumbs link1="Home"
                    to1="/"
                    page2="Events"
                />
            </div>

            <div className="paginationBulan">
                <ul className="wrapperBulanItem">
                    <li className="bulan-item"><a href="#" className="customBulan">
                        <i class="fa fa-arrow-left"></i>
                    </a></li>

                    <li className="bulan-item"><a href="#" className="customBulan">
                        Januari 2020
                    </a></li>

                    <li className="bulan-item"><a href="#" className="customBulan">
                        <i class="fa fa-arrow-right"></i>
                    </a></li>
                </ul>
            </div>

            <div className="paginationTimeline">
                <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={itemEvent.length} paginate={paginate} />
            </div>

            <div className="timeline" style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '40px 10%'
            }}>
                <Timeline timeline={currentPosts} />
            </div>
        </div>
    )
}

export default EventPage