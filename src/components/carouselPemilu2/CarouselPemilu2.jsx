import React from 'react'

import '../carouselPemilu2/CarouselPemilu2.css'

const CarouselPemilu2 = () => {
    return (
        <>
            <div className="cont-img2">
                {/* Image2 */}
                <div className="img-2">

                </div>
                {/* END Image2 */}

                {/* Button Pagination */}
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <i className="fas fa-angle-left" aria-hidden="true"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <i className="fas fa-angle-right" aria-hidden="true"></i>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* END Button Pagination */}
            </div>

        </>
    )
}

export default CarouselPemilu2