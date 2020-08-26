import React from 'react'

import '../carouselBerita/CarouselBerita.scss'

const CarouselBerita = () => {
    return (
        <>
            <div id="beritaPage" className="carousel container-carousel-beritaPage slide" data-ride="carousel">
                <div className="carousel-inner carousel-beritaPage">
                    <div className="carousel-item active">
                        <div className="col1-container-1-beritaPage">
                            <div className="cont-img-col1-beritaPage">
                                <div className="col1-img-carousel-beritaPage">
                                    <div className="box-title-carousel-beritaPage">
                                        <h1>Lorem ipsum dolor sit amet, consectetur adipsing elit,</h1>
                                    </div>
                                </div>
                                <div className="col2-img-beritaPage">
                                    <div className="garis-strip-col2-beritaPage">

                                    </div>
                                    <div className="box-txt-desk-col2-beritaPage">
                                        <p className="txt-admin-beritaPage">
                                            Admin PDI Perjuangan | 1 Januari
                                        </p>

                                        <p className="txt-desk-col2-beritaPage">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quidem ad iure harum optio corporis eligendi amet vitae dolor enim? Molestiae magnam voluptas fuga quo dolores harum dignissimos autem sint distinctio maiores quasi nemo reprehenderit maxime sunt quaerat, aliquam eligendi quas consequuntur delectus nulla eius ex, aspernatur quisquam. Error, voluptatibus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#beritaPage" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#beritaPage" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>
    )
}

export default CarouselBerita