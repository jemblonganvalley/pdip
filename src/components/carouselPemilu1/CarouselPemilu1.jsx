import React from 'react'

import '../carouselPemilu1/CarouselPemilu1.scss'
import pemilu from '../../img/pemilu.jpeg'


const CarouselPemilu1 = ({data}) => {
    return (
        <>
            {/* Carousel */}
            <div id="pemilu1" className="carousel carousel1-pemiluPage slide" data-ride="carousel">
                <div className="carousel-inner box-carousel1-pemiluPage">

                    {data.map((e,i)=>(

                        <div className={i === 0 ? "carousel-item active" : "carousel-item"} key={i}>
                            {/* Image1 */}
                            <img src={`https://atur.biar.pw/public/${e.image}`} className="img-1" />
                            {/* END Image1 */}
                        </div>
                    ))}

                </div>
                {/* Container Box Indicator Carousel */}
                <div className="container-box-indicator-pemilu1">
                    {/* Box Indicator */}
                    <div className="box-indicator-carousel-pemilu1">
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
                    {/* END Box Indicator */}
                </div>
                {/* Container Box Indicator Carousel */}
            </div>

            {/* END Carousel */}
        </>
    )
}

export default CarouselPemilu1