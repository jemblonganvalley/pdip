import React, { useState, useEffect } from 'react'

import axios from 'axios'

import './PaginationEvent.scss'
import AngkaPaginationEvent from './AngkaPaginationEvent'
import Posts from './Posts'

const PaginationEvent = () => {

    // END Using UseEffect for Pagination

    // Database For Angka Pagination Event
    // let [angkaPaginate, setAngkaPaginate] = useState([
    //     {
    //         angka: '1',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '2',
    //         warnaAngka: '#000'
    //     },
    //     {
    //         angka: '3',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '4',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '5',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '6',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '7',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '8',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '9',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '10',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '11',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '12',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '13',
    //         warnaAngka: '#000'
    //     },
    //     {
    //         angka: '14',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '15',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '16',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '17',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '18',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '19',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '20',
    //         warnaAngka: '#000'
    //     },
    //     {
    //         angka: '21',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '22',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '23',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '24',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '25',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '26',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '27',
    //         warnaAngka: '#000'
    //     },
    //     {
    //         angka: '28',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '29',
    //         warnaAngka: '#d80010'
    //     },
    //     {
    //         angka: '30',
    //         warnaAngka: '#d80010'
    //     }
    // ])
    // END Database For Angka Pagination Event

    // Using Ustate For Pagination
    let [posts, setPosts] = useState([])
    let [loading, setLoading] = useState(false)
    let [currentPage, setCurrentPage] = useState(1)
    let [postsPerPage] = useState(10)
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
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    // END Get Current Posts

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    // END Change Page

    return (
        <>
            {/* Container Pagination Event */}
            <div className="container-pagination-event">
                <Posts posts={currentPosts} loading={loading} />
                <AngkaPaginationEvent postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
            </div>
            {/* END Container Pagination Event */}



            {/* Container */}
            {/* <div className="container-paginationEvent">
                <ul className="col-angka-paginationEvent"> */}
            {/* Mapping Data Angka Paginate */}
            {/* {
                        angkaPaginate.map((e) => {
                            return (
                                <AngkaPaginationEvent warnaAngka={e.warnaAngka} angka={e.angka} />
                            )
                        })
                    } */}
            {/* END Mapping Data Angka Paginate */}
            {/* </ul>
            </div> */}
            {/* END Container */}
        </>
    )
}

export default PaginationEvent