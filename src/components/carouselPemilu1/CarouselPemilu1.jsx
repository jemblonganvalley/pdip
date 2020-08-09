import React from 'react'

import '../carouselPemilu1/CarouselPemilu1.scss'

const CarouselPemilu1 = () => {
    return (
        <>
            {/* Carousel */}
            <div id="carouselExampleControls" className="carousel carousel1-pemiluPage slide" data-ride="carousel">
                <div className="carousel-inner box-carousel1-pemiluPage">
                    <div className="carousel-item active">
                        {/* Image1 */}
                        <div className="img-1">

                        </div>
                        {/* END Image1 */}
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

export default CarouselPemilu1