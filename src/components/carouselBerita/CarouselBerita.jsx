import React from 'react'

import '../carouselBerita/CarouselBerita.scss'

const CarouselBerita = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel carousel-beritaPage slide" data-ride="carousel">
                <div className="carousel-inner box-carousel-beritaPage">
                    <div className="carousel-item active">
                        <div className="box1-beritaPage">
                            <div className="cont-img-col1">
                                <div className="col1-img">
                                    <div className="box-txt-title">
                                        <h1>Lorem ipsum dolor sit amet, consectetur adipsing elit,</h1>
                                    </div>
                                </div>
                                <div className="col2-img">
                                    <div className="garis-strip-col2">

                                    </div>
                                    <div className="box-txt-desk-col2">
                                        <p className="txt-admin">
                                            Admin PDI Perjuangan | 1 Januari
                                        </p>

                                        <p className="txt-desk-col2">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quidem ad iure harum optio corporis eligendi amet vitae dolor enim? Molestiae magnam voluptas fuga quo dolores harum dignissimos autem sint distinctio maiores quasi nemo reprehenderit maxime sunt quaerat, aliquam eligendi quas consequuntur delectus nulla eius ex, aspernatur quisquam. Error, voluptatibus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="box2-beritaPage">

                        </div>
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

        </>
    )
}

export default CarouselBerita