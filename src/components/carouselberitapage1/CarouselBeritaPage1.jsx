import React from 'react'

import './CarouselBeritaPage1.scss'

const CarouselBeritaPage1 = () => {
    return (
        <>
            {/* Carousel Page1 */}
            {/* Section2 */}
            <div className="section2">
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

                        <div
                            className="carousel-item active img1">

                        </div>
                        <div className="carousel-item img2">

                        </div>
                        <div className="carousel-item img3">

                        </div>
                    </div>
                    <div className="box-btn">
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only ">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* END Section2 */}
            {/* END Carousel Page1*/}
        </>
    )
}

export default CarouselBeritaPage1
