import React from 'react'

import '../carousel3PemiluPage/Carousel3PemiluPage.scss'
import pemilu2 from '../../img/pemilu2.jpg'

const Carousel3PemiluPage = () => {
    return (
        <>
            {/* Carousel */}
            <div id="pemilu3" className="carousel carousel3-pemiluPage slide" data-ride="carousel">
                <div className="carousel-inner box-carousel3-pemiluPage">
                    <div className="carousel-item active">
                        <img src={pemilu2} className="img1">

                        </img>
                    </div>
                    <div className="carousel-item">

                    </div>
                    <div className="carousel-item">

                    </div>
                </div>
                {/* Container Box Indicator Carousel */}
                <div className="container-box-indicator-pemilu3">
                    {/* Box Indicator */}
                    <div className="box-indicator-carousel-pemilu3">
                        <a className="carousel-control-prev" href="#pemilu3" role="button" data-slide="prev" id="btn-left-carousel3">
                            <span className="carousel-control" aria-hidden="true" />
                            <i className="fas fa-angle-left"></i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#pemilu3" role="button" data-slide="next" id="btn-right-carousel3">
                            <span className="carousel-control" aria-hidden="true" />
                            <i className="fas fa-angle-right"></i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    {/* END Box Indicator */}
                </div>
                {/* END Container Box Indicator Carousel */}
            </div>

            {/* END Carousel */}
        </>
    )
}

export default Carousel3PemiluPage