import React from 'react'
import './VideoMedia.scss'
import Cards from '../../cards/MainCards'
import megawati from '../../../img/megawati1.jpg'
import VMedia from '../../VMedia/VMedia'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'

const VideoMedia = ()=> {
    return (
        <div className="wrapperVideo">
            <div className="linkedVideo">
                <BreadCrumbs link1="Home"
                                to1="/"
                                link2="Multimedia"
                                to2="/multimedia"
                                page3="Video" />
            </div>

            <VMedia headline="Ketua Umum PDI Perjuangan, Hj. Megawati Soekarnoputri Meresmikan 20 Kantor Partai" />

            <div className="dividerVideo">
                <div className="borderVideo"></div>
            </div>
            <div className="wrapperCard" style={{
                display : 'flex',
                flexDirection : 'row',
                marginTop : '2rem'
            }}>
                <Cards imageCard={megawati}
                        TextH5="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolor, tempora optio at nam eaque!"
                        h5Font="10pt"
                        h5Weight="bold"
                        borderRadius="10px" />
                <Cards imageCard={megawati}
                        TextH5="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolor, tempora optio at nam eaque!"
                        h5Font="10pt"
                        h5Weight="bold"
                        borderRadius="10px" />
                <Cards imageCard={megawati}
                        TextH5="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolor, tempora optio at nam eaque!"
                        h5Font="10pt"
                        h5Weight="bold"
                        borderRadius="10px" />
                <Cards imageCard={megawati}
                        TextH5="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolor, tempora optio at nam eaque!"
                        h5Font="10pt"
                        h5Weight="bold"
                        borderRadius="10px" />
            </div>
        </div>
    )
}

export default VideoMedia