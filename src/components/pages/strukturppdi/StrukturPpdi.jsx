import React from 'react'
import './StrukturPpdi.scss'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../divider/MainDivider'
import PpdiPagination from './pagination/PpdiPagination'

const StrukturPpdi = () => {
  return (
    <div className="wrapperPPDI">
        <div className="linkedPPDI">
            <BreadCrumbs link1="Home"
                            to1="/"
                            link2="Informasi Publik"
                            to2="/informasi"
                            page3="Struktur PPDI PDI Perjuangan" />
        </div>

        <div className="dividerPPDI">
            <MainDivider text="Struktur PPDI" />
        </div>

        <div className="cardPPDI">
            <div className="listPPDI">
                <PpdiPagination />
            </div>
        </div>
    </div>
  )
}

export default StrukturPpdi
