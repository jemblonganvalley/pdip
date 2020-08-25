import React, { useState } from 'react'
import './AngkaPaginationEvent.scss'
import { Link, NavLink } from 'react-router-dom'

const AngkaPaginationEvent = ({ itemEventPerPage, totalPosts, paginate }) => {


    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / itemEventPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <div className="container-angka-pagination">
                <div className="col-angka-pagination">
                    {pageNumbers.map(number => (
                        <div key={number} className="angka-pagination" onClick={() => paginate(number)}>
                            <NavLink className="paginationLink" activeClassName="active" to="#">
                                {number}
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default AngkaPaginationEvent