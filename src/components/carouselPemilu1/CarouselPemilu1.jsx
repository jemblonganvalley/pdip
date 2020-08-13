import React from 'react'

import '../carouselPemilu1/CarouselPemilu1.scss'

const CarouselPemilu1 = () => {
    return (
        <>
            {/* Carousel */}
            <div id="pemilu1" className="carousel carousel1-pemiluPage slide" data-ride="carousel">
                <div className="carousel-inner box-carousel1-pemiluPage">
                    <div className="carousel-item active">
                        {/* Image1 */}
                        <div className="img-1">

                        </div>
                        {/* END Image1 */}
                    </div>
                    <div className="carousel-item">

                    </div>
                    <div className="carousel-item">

                    </div>
                </div>
                <a className="carousel-control-prev" href="#pemilu1" role="button" data-slide="prev" id="btn-left-carousel1">
                    <span className="carousel-control" aria-hidden="true" />
                    <i className="fas fa-angle-left"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#pemilu1" role="button" data-slide="next" id="btn-right-carousel1">
                    <span className="carousel-control" aria-hidden="true" />
                    <i className="fas fa-angle-right"></i>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            {/* END Carousel */}
        </>
    )
}

export default CarouselPemilu1