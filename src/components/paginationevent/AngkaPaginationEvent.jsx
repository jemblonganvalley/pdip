import React from 'react'
import './AngkaPaginationEvent.scss'

const AngkaPaginationEvent = ({ itemEventPerPage, totalPosts, paginate }) => {


    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / itemEventPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <div className="container-angka-pagination">
                <ul className="col-angka-pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="angka-pagination">
                            <a onClick={() => paginate(number)} className="paginationLink">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default AngkaPaginationEvent