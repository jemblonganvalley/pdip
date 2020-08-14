import React from 'react'

import './CarouselBeritaPage2.scss'

const CarouselBeritaPage2 = () => {
    return (
        <>
            {/* Carousel Page2 */}
            {/* Row 1 */}
            <div className="row1">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {/* Box Indicator */}
                        <div className="box-indicator">
                            <p className="txt-no-slide-in">
                                2
                            </p>
                            <p className="txt-no-slide-total">
                                / 34
                            </p>
                        </div>
                        {/* END Box Indicator */}

                        <div className="carousel-item active img1">

                        </div>
                        <div className="carousel-item img2">

                        </div>
                        <div className="carousel-item img3">

                        </div>
                    </div>

                    <div className="box-btn">
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>

                    </div>
                </div>
            </div>
            {/* END Row 1 */}
            {/* END Carousel Page2 */}
        </>
    )
}

export default CarouselBeritaPage2