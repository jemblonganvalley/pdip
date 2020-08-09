import React from 'react'

import '../carouselPemilu1/CarouselPemilu1.css'

const CarouselPemilu1 = () => {
    return (
        <>
            <div className="cont-img1">
                {/* Image1 */}
                <div className="img-1">

                </div>
                {/* END Image1 */}

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

export default CarouselPemilu1