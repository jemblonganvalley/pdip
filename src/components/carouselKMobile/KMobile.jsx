import React from 'react'
import './KMobile.scss'
import megawati4 from '../../img/megawati4.jpg'

const KMobile = () => {
  return (
    <div className="wrapperKMobile">
        <div className="KMobile">
                <div className="row rowCustomMobile">
                    <div className="carousels">
                    <div id="carouselnih" className="carousel slide kmCarousel" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselnih" data-slide-to={0} className="active" />
                                <li data-target="#carouselnih" data-slide-to={1} />
                                <li data-target="#carouselnih" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                            <div className="carousel-item active itemKMobile">
                            <div className="col-lg-6 bannerMobile" style={{
                                background : `url(${megawati4})`,
                                backgroundSize: 'cover'

                            }}></div>
                                <div className="col-lg-6 textKM">
                                    <h5 className="textCarousel">Ketua Umum PDI Perjuangan</h5>
                                    <h3 className="textCarousel">Ikuti Perkembangan Teknologi Informasi dengan Otak dan Hati</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KMobile
