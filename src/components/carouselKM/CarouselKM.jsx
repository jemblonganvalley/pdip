import React from 'react'
import './CarouselKM.scss'

const CarouselKM = ()=> {

    let carouselKM = [
        {
            judul : '',
            subJudul : '',
            paragrap : ''
        },
        
    ]

    return (
        <div className="wrapperKM">
            <div className="KM">
                <div className="row rowCustom">
                    <div className="col-lg-6 carousels">
                        

                    <div id="carouselnih" className="carousel slide kmCarousel" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselnih" data-slide-to={0} className="active" />
                                <li data-target="#carouselnih" data-slide-to={1} />
                                <li data-target="#carouselnih" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <h5 className="textCarousel">Ketua Umum PDI Perjuangan</h5>
                                    <h3 className="textCarousel">Ikuti Perkembangan Teknologi Informasi dengan Otak dan Hati</h3>
                                    <p className="textCarousel">
                                    Ketua umum PDI PERJUANGAN Megawati Soekarnoputri menutup Pelatihan <br/> kader Fungsional Bertugas di Kantor Partai, sekaligus <br/> membuka pembekalan Caleg DPR RI Gelombang III di kantor DPP PDI Perjuangan, Jl. Diponegoro 58, Jakarta, Kamis
                                    </p>
                                </div>
                                <div className="carousel-item ">
                                    <h5 className="textCarousel">Ketua Umum PDI Perjuangan</h5>
                                    <h3 className="textCarousel">Ikuti Perkembangan Teknologi Informasi dengan Otak dan Hati</h3>
                                    <p className="textCarousel">
                                    Ketua umum PDI PERJUANGAN Megawati Soekarnoputri menutup Pelatihan <br/> kader Fungsional Bertugas di Kantor Partai, sekaligus <br/> membuka pembekalan Caleg DPR RI Gelombang III di kantor DPP PDI Perjuangan, Jl. Diponegoro 58, Jakarta, Kamis
                                    </p>
                                </div>
                                <div className="carousel-item ">
                                    <h5 className="textCarousel">Ketua Umum PDI Perjuangan</h5>
                                    <h3 className="textCarousel">Ikuti Perkembangan Teknologi Informasi dengan Otak dan Hati</h3>
                                    <p className="textCarousel">
                                    Ketua umum PDI PERJUANGAN Megawati Soekarnoputri menutup Pelatihan <br/> kader Fungsional Bertugas di Kantor Partai, sekaligus <br/> membuka pembekalan Caleg DPR RI Gelombang III di kantor DPP PDI Perjuangan, Jl. Diponegoro 58, Jakarta, Kamis
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
                    <div className="col-lg-6 banner"></div>
                </div>
            </div>
        </div>
    )
}

export default CarouselKM