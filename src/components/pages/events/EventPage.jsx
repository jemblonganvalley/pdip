import React from 'react'
import './EventPage.scss'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import Timeline from '../../timeline/Timeline'


const EventPage = ()=> {
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

            <div className="timeline" style={{
            width : '100%',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            flexDirection : 'column',
            padding : '40px 10%'
            
        }}>
                <Timeline />
            </div>
        </div>
    )
}

export default EventPage