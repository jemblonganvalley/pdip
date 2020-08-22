import React, { useEffect } from 'react'
import Swiper from 'swiper'
import './Timeline.scss'


const Timeline = ({images, headIsi, judul, paragrap})=> {

    

    return (
        <section className="wrapperTimeline">
            <ul className="pembungkusLine">
                <li className="timeline-item">
                    <div className="kosong">
                        <h6 className="titleline">Admin PDI Perjuangan | 1 Januari 2021</h6>
                        <div className="timelineContent">
                            <div className="imgContent" style={{
                                background : `url(https://picsum.photos/seed/${images}/200/300)`,
                                backgroundSize : 'cover',
                                backgroundPosition : 'center center'
                            }}></div>
                            <div className="isiTimeline">
                        <span className="headIsi">{headIsi}</span>
                                <h6 className="judulTimeline">{judul}</h6>
                                <p className="paragrapTimeline">
                                    {paragrap}
                                </p>
                            </div>
                        </div>
                        <div className="timelineInfo">
                            <div className="tanggal">
                                <i class="fa fa-calendar-check-o"></i>
                                <span className="bulan">10 Januari 2021</span>
                                <span className="waktu">13.00 WIB</span>
                            </div>

                            <div className="telphone">
                                <i class="fa fa-phone"></i>
                                <span className="nomor">081 289 376 201</span>
                            </div>

                            <div className="lokasi">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <span className="tempat">Hall B Jakarta International Expo</span>
                                <span className="kota">Jakarta Pusat</span>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="timeline-item">
                    <div className="kosong">
                        <h6 className="titleline">Admin PDI Perjuangan | 1 Januari 2021</h6>
                        <div className="timelineContent">
                            <div className="imgContent" style={{
                                background : `url(https://picsum.photos/seed/${images}/200/300)`,
                                backgroundSize : 'cover',
                                backgroundPosition : 'center center'
                            }}></div>
                            <div className="isiTimeline">
                        <span className="headIsi">{headIsi}</span>
                                <h6 className="judulTimeline">{judul}</h6>
                                <p className="paragrapTimeline">
                                    {paragrap}
                                </p>
                            </div>
                        </div>
                        <div className="timelineInfo">
                            <div className="tanggal">
                                <i class="fa fa-calendar-check-o"></i>
                                <span className="bulan">10 Januari 2021</span>
                                <span className="waktu">13.00 WIB</span>
                            </div>

                            <div className="telphone">
                                <i class="fa fa-phone"></i>
                                <span className="nomor">081 289 376 201</span>
                            </div>

                            <div className="lokasi">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <span className="tempat">Hall B Jakarta International Expo</span>
                                <span className="kota">Jakarta Pusat</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

    )
}

export default Timeline