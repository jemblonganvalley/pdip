import React, { useEffect, useState } from 'react'
import './Timeline.scss'


const Timeline = ({ timeline }) => {

    let [hover, setHover] = useState(false)




    return (
        <section className="wrapperTimeline">

            <ul className="pembungkusLine">
                {timeline.map((e) => {
                    return (
                        <li className="timeline-item" onClick={() => {
                            setHover(!hover)
                        }}>
                            <div className="kosong" style={{
                                background: hover ? '#960001' : '#fff',
                                color: hover ? '#fff' : '#000'
                            }}>
                                <h6 className="titleline" style={{
                                    color: hover ? '#fff' : '#960001'
                                }}>Admin PDI Perjuangan | 1 Januari 2021</h6>
                                <div className="timelineContent" >
                                    <div className="imgContent" style={{
                                        background: `url(${e.images})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center'
                                    }}></div>
                                    <div className="isiTimeline">
                                        <span className="headIsi" style={{
                                            color: hover ? '#fff' : '#c60605'
                                        }}>{e.headIsi}</span>
                                        <h6 className="judulTimeline">{e.judul}</h6>
                                        <p className="paragrapTimeline">
                                            {e.paragrap}
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
                    )
                })}


            </ul>
        </section>

    )
}

export default Timeline