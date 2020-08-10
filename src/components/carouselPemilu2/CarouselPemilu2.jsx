import React from 'react'

import '../carouselPemilu2/CarouselPemilu2.scss'

const CarouselPemilu2 = () => {
    return (
        <>
            {/* Carousel */}
            <div id="pemilu2" className="carousel carousel2-pemiluPage slide" data-ride="carousel">
                <div className="carousel-inner box-carousel2-pemiluPage">
                    <div className="carousel-item active">
                        {/* Image2 */}
                        <div className="img-2">

                        </div>
                        {/* END Image2 */}
                    </div>
                    <div className="carousel-item">

                    </div>
                    <div className="carousel-item">

                    </div>
                </div>
                <a className="carousel-control-prev" href="#pemilu2" role="button" data-slide="prev" id="btn-left-carousel2">
                    <span className="carousel-control" aria-hidden="true" />
                    <i className="fas fa-angle-left"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#pemilu2" role="button" data-slide="next" id="btn-right-carousel2">
                    <span className="carousel-control" aria-hidden="true" />
                    <i className="fas fa-angle-right"></i>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            {/* END Carousel */}
        </>
    )
}

export default CarouselPemilu2