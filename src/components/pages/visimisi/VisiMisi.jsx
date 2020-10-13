import React from 'react'
import './VisiMisi.scss'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../divider/MainDivider'
import VisiMisiPagination from './pagination/VisiMisiPagination'

const VisiMisi = () => {
  return (
    <div className="wrapperVisiMisi">
        <div className="linkedVisiMisi">
            <BreadCrumbs link1="Home"
                            to1="/"
                            link2="Informasi Publik"
                            to2="/informasi"
                            page3="Visi Misi" />
        </div>

        <div className="dividerVisiMisi" style={{
            padding: '0 20% 0 20%'
        }}>
            <MainDivider text="Visi Misi" mrgn="0 0 40px 0"/>
        </div>

        <div className="cardVisiMisi">
            <div className="listVisiMisi">
                <VisiMisiPagination />
            </div>
        </div>

    </div>
  )
}

export default VisiMisi
