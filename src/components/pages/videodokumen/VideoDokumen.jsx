import React from 'react'
import './VideoDokumen.scss'
import VMedia from '../../VMedia/VMedia'
import DokumenPagination from './pagination/DokumenPagination'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../divider/MainDivider'

const VideoDokumen = () => {

    
  return (
    <div className="wrapperVD">
        <div className="linkedVD">
            <BreadCrumbs link1="Home"
                            to1="/"
                            link2="Multimedia"
                            to2="/multimedia"
                            page3="Video Dokumentasi" />
        </div>

        <div className="videoDokumen">
            <VMedia headline="Megawati Soekarnoputri, Ketua Umum PDI Perjuangan" source="https://www.youtube.com/embed/4Y9vU1dCk78" />
        </div>

        <div className="dividerVD">
                <MainDivider text="Video Dokumentasi" />
        </div>

        <div className="cardVD">
            <div className="listVD">
                <DokumenPagination />
            </div>
        </div>
    </div>
  )
}

export default VideoDokumen
