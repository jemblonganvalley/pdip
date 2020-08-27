import React from 'react'
import './Prosedur.scss'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../divider/MainDivider'
import ProsedurPagination from './pagination/ProsedurPagination'

const Prosedur = () => {
  return (
    <div className="wrapperProsedur">
        <div className="linkedProsedur">
            <BreadCrumbs link1="Home"
                            to1="/"
                            link2="Informasi Publik"
                            to2="/informasi"
                            page3="Prosedur Pelayanan" />
        </div>

        <div className="dividerProsedur">
            <MainDivider text="Prosedur Pelayanan" />
        </div>

        <div className="cardProsedur">
            <div className="listProsedur">
                <ProsedurPagination />
            </div>
        </div>
    </div>
  )
}

export default Prosedur
