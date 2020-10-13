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

        <div className="dividerPPDI" style={{
            padding: '0 20% 0 20%'
        }}>
            <MainDivider text="Struktur PPDI" mrgn="0 0 40px 0"/>
        </div>

        <div className="card-PPDI">
            <div className="listPPDI">
                <PpdiPagination />
            </div>
        </div>
    </div>
  )
}

export default StrukturPpdi
