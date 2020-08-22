import React, { useState, useEffect } from 'react'
import './EventPage.scss'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import Timeline from '../../timeline/Timeline'

import axios from 'axios'
import Posts from '../../paginationevent/Posts'
import AngkaPaginationEvent from '../../paginationevent/AngkaPaginationEvent'

const EventPage = () => {

    let [itemEvent, setItemEvent] = useState([
        {
            images: 'awqkdqdq',
            headIsi: 'Ketua Umum',
            judul: 'judul Satu',
            pargrap: 'lorem ipsum dolor sit amet'
        },
        {
            images: 'qweqew',
            headIsi: 'Kegiatan Partai',
            judul: 'judul Dua',
            pargrap: 'lorem ipsum dolor sit amet'
        },
    ])

    let [currentPage, setCurrentPage] = useState(1)
    let [timelinePage, setTimelinePage] = useState(4)


    // RIDWAN
    // Using Ustate For Pagination
    let [posts, setPosts] = useState([])
    let [loading, setLoading] = useState(false)
    let [currentPage2, setCurrentPage2] = useState(1)
    let [postsPerPage] = useState(4)
    // END Using For Pagination

    // Using UseEffect for Pagination
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
            setLoading(false)
        }

        fetchPosts();
    }, [])


    // Get Current Posts
    const indexOfLastPost = currentPage2 * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    // END Get Current Posts

    // Change Page
    const paginate = (pageNumber) => setCurrentPage2(pageNumber)
    // END Change Page
    // END RIDWAN

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
                {/* <PaginationEvent /> */}
                {/* RIDWAN */}
                <AngkaPaginationEvent postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
                {/* END RIDWAN */}
            </div>

            <div className="timeline" style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '40px 10%'

            }}>
                {itemEvent.map((e) => {
                    return (
                        <Timeline images={e.images}
                            headIsi={e.headIsi}
                            judul={e.judul}
                            paragrap={e.pargrap} />
                    )
                })}
            </div>

            {/* RIDWAN */}
            {/* Container Percobaan Pagination */}
            <div className="container-p-p">
                {/* Container Pagination Event */}
                <div className="container-pagination-event">
                    <Posts posts={currentPosts} loading={loading} />
                </div>
                {/* END Container Pagination Event */}
            </div>
            {/* END Container Percobaan Pagination */}
            {/* END RIDWAN */}
        </div>
    )
}

export default EventPage