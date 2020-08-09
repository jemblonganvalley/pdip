import React from 'react'

import '../carouselPemilu2/CarouselPemilu2.scss'

const CarouselPemilu2 = () => {
    return (
        <>
            {/* Carousel */}
            <div id="carouselExampleControls" className="carousel carousel2-pemiluPage slide" data-ride="carousel">
                <div className="carousel-inner box-carousel2-pemiluPage">
                    <div className="carousel-item active">
                        {/* Image2 */}
                        <div className="img-2">

                        </div>
                        {/* END Image2 */}
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

            {/* END Carousel */}
        </>
    )
}

export default CarouselPemilu2