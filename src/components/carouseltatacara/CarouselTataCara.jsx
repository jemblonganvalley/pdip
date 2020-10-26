import React from 'react'
import './CarouselTataCara.scss'

const CarouselTataCara = ({
    img1, img2, img3, paragrapOne, paragrapTwo, paragrapThree
})=>{
    return(
        <>
        {/* SLIDER TATA CARA */}
        <div className="sliderTataCara">
        <div id="carouselTataCara" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active" style={{
                backgroundImage: 'none'
            }}>
                <img src={img1} className="imageTC"/>
                <p className="pCarousel">{paragrapOne}</p>

                {/* For Mobile */}
                <div className="box-red-mobile-sliderTataCara">
                    <p className="pCarousel-for-mobile">{paragrapOne}</p>
                </div>
                {/* END For Mobile */}
            </div>
            <div className="carousel-item" style={{
                backgroundImage: `none`
            }}>
                <img src={img2} className="imageTC"/>
                <p className="pCarousel">{paragrapTwo}</p>

                {/* For Mobile */}
                <div className="box-red-mobile-sliderTataCara">
                    <p className="pCarousel-for-mobile">{paragrapOne}</p>
                </div>
                {/* END For Mobile */}
            </div>
            <div className="carousel-item" style={{
                backgroundImage: `none`
            }}>
                <img src={img3} className="imageTC"/>
                <p className="pCarousel">{paragrapThree}</p>

                {/* For Mobile */}
                <div className="box-red-mobile-sliderTataCara">
                    <p className="pCarousel-for-mobile">{paragrapOne}</p>
                </div>
                {/* END For Mobile */}
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselTataCara" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon btn-left-tata-cara" aria-hidden="true" />
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselTataCara" role="button" data-slide="next">
            <span className="carousel-control-next-icon btn-right-tata-cara" aria-hidden="true" />
            <span className="sr-only">Next</span>
            </a>
        </div>
        </div>
        {/* END SLIDER TATA CARA */}

        </>
    )
}

export default CarouselTataCara