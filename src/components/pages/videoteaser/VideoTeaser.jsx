import React from 'react'
import MainDivider from '../../divider/MainDivider'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import VMedia from '../../VMedia/VMedia'
import './VideoTeaser.scss'
import TeaserPagination from './pagination/TeaserPagination'

const VideoTeaser = ()=> {
    return (
        <div className="wrapperVT">
        <div className="linkedVT">
            <BreadCrumbs link1="Home"
                            to1="/"
                            link2="Multimedia"
                            to2="/multimedia"
                            page3="Video Teaser" />
        </div>

        <div className="videoDokumen">
            <VMedia headline="Megawati Soekarnoputri, Ketua Umum PDI Perjuangan" source="https://www.youtube.com/embed/4Y9vU1dCk78" />
        </div>

        <div className="dividerVT">
                <MainDivider text="Video Teaser" />
        </div>

        <div className="cardVT">
            <div className="listVT">
                <TeaserPagination />
            </div>
        </div>
    </div>
    )
}

export default VideoTeaser