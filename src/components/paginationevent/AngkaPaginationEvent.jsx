import React from 'react'

// import _JSXStyle from 'styled-jsx'
import './AngkaPaginationEvent.scss'
import { useState } from 'react'

const AngkaPaginationEvent = ({ postsPerPage, totalPosts, paginate }) => {

    // Setting Hover Angka Paginate
    // let [hover, setHover] = useState(false)
    // END Setting Hover Angka Paginate

    // Number Pagination
    const pageNumbers = []
    // END Number Pagination

    // Lakukan Kondisi For
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    // END Lakukan Kondisi For

    return (
        <>
            {/* Angka Pagination */}
            <div className="container-angka-pagination">
                <ul className="col-angka-pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="angka-pagination">
                            <a onClick={() => paginate(number)} href="#" className="paginationLink">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* END Angka Pagination */}

            {/* Angka Pagination */}
            {/* <li className="angka-paginationEvent">
                <a href="" className="paginationLink" id="jsx-123" style={{
                    color: `${warnaAngka}`,
                }}>
                    {angka}
                </a>
            </li> */}
            {/* END Angka Pagination */}
        </>
    )
}

export default AngkaPaginationEvent