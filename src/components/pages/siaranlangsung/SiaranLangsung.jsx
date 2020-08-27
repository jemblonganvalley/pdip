import React, { useState } from 'react'
import './SiaranLangsung.scss'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import VMedia from '../../VMedia/VMedia'
import MainDivider from '../../divider/MainDivider'
import megawati12 from '../../../img/megawati12.png'
import Cards from '../../cards/MainCards'
import SiaranPagination from './pagination/SiaranPagination'

const SiaranLangsung = ()=> {

    return (
        <div className="wrapperSL">
            <div className="linkedSL">
                <BreadCrumbs link1="Home"
                                to1="/"
                                link2="Multimedia"
                                to2="/multimedia"
                                page3="Siaran Langsung" />
            </div>

            <div className="SiaranLangsung">
                <VMedia headline="Megawati Soekarnoputri, Ketua Umum PDI Perjuangan" source="https://www.youtube.com/embed/4Y9vU1dCk78" />
            </div>

            <div className="dividerSL">
                <MainDivider text="Siaran Langsung" />
            </div>

            <div className="cardSL">
                <div className="listSL">
                    <SiaranPagination />
                </div>
            </div>
        </div>
    )
}

export default SiaranLangsung