import React, { useState } from 'react'
import './EventPage.scss'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import Timeline from '../../timeline/Timeline'


const EventPage = ()=> {

    let [itemEvent, setItemEvent] = useState([
        {
            images : 'awqkdqdq',
            headIsi : 'Ketua Umum',
            judul : 'judul Satu',
            pargrap : 'lorem ipsum dolor sit amet'
        },
        {
            images : 'qweqew',
            headIsi : 'Kegiatan Partai',
            judul : 'judul Dua',
            pargrap : 'lorem ipsum dolor sit amet'
        },
    ])
    
    let [currentPage, setCurrentPage] = useState(1)
    let [timelinePage, setTimelinePage] = useState(4)

    return (
        <div className="wrapperEvent">

            <div className="headEvent">
                <div className="textHeadEvent">
                    <h2>Timeline Event </h2>
                </div>
            </div>

            <div className="linkedEvent">
            <BreadCrumbs link1="Home"
                                to1="/"
                                page2="Events"
                                 />
            </div>

            <div className="paginationBulan">
                <ul className="wrapperBulanItem">
                    <li className="bulan-item"><a href="#" className="customBulan">
                        <i class="fa fa-arrow-left"></i>
                    </a></li>

                    <li className="bulan-item"><a href="#" className="customBulan">
                        Januari 2020
                    </a></li>

                    <li className="bulan-item"><a href="#" className="customBulan">
                        <i class="fa fa-arrow-right"></i>
                    </a></li>
                </ul>
            </div>

            <div className="paginationTimeline">

            </div>

            <div className="timeline" style={{
            width : '100%',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            flexDirection : 'column',
            padding : '40px 10%'
            
        }}>
                {itemEvent.map((e)=>{
                    return (
                        <Timeline images={e.images}
                                    headIsi={e.headIsi}
                                    judul={e.judul}
                                    paragrap={e.pargrap} />
                    )
                })}
            </div>
        </div>
    )
}

export default EventPage