import React from 'react'
import './Regulasi.scss'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../divider/MainDivider'
import RegulasiPagination from './pagination/RegulasiPagination'

const Regulasi = () => {
  return (
    <div className="wrapperRegulasi">
        <div className="linkedRegulasi">
            <BreadCrumbs link1="Home"
                            to1="/"
                            link2="Informasi Publik"
                            to2="/informasi"
                            page3="Regulasi Pelayanan" />
        </div>

        <div className="dividerRegulasi">
            <MainDivider text="Regulasi Pelayanan" />
        </div>

        <div className="cardRegulasi">
            <div className="listRegulasi">
                <RegulasiPagination />
            </div>
        </div>
    </div>
  )
}

export default Regulasi
