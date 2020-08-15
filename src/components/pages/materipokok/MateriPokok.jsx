import React from 'react'

import bkbb5 from '../../../img/bkbb5.jpg'
import bkbb6 from '../../../img/bkbb6.jpg'
import bkbb7 from '../../../img/bkbb7.jpg'

import './MateriPokok.scss'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../divider/MainDivider'
import Cards from '../../cards/MainCards'
import { Pagination } from 'react-bootstrap'
import StrukturPaginate from '../../pagination/StrukturPaginate'

const MateriPokok = () => {
    return (
        <>
            <div className="wrapperMateri">

                <div className="linkedMateri">
                    <BreadCrumbs link1="Home" to1="/" link2="Bung Karno Bapak Bangsa" to2="/bungkarno" />
                </div>
            </div>

            {/* Container1 */}
            <div className="container1">
                <MainDivider text="MATERI POKOK PENDUKUNG" />
            </div>
            {/* END Container1 */}

            {/* Container2 */}
            <div className="container2">
                {/* Column Card Materi Pokok */}
                <div className="col-card-materi-pokok">
                    {/* Row1 */}
                    <div className="row1">
                        <Cards imageCard={bkbb5}
                            TextH5="INDONESIA MENGGUGAT TAHUN 1930" paragrap="Pidato Pembelaan Bung Karno di Muka Hakim Kolonial" borderRadius="10px" />
                        <Cards imageCard={bkbb6}
                            TextH5="KAPITALISME BANGSA SENDIRI TAHUN 1932" paragrap="Lorem ipsum dolor sit amet, consectetur adipisicing elit" borderRadius="10px" />
                        <Cards imageCard={bkbb7}
                            TextH5="MENCAPAI INDONESIA MERDEKA TAHUN 1933" paragrap="Lorem ipsum dolor sit amet, consectetur adipicising" borderRadius="10px" />
                    </div>
                    {/* END Row1 */}

                    {/* Row2 */}
                    <div className="row2">
                        <Cards imageCard={bkbb5}
                            TextH5="INDONESIA MENGGUGAT TAHUN 1930" paragrap="Pidato Pembelaan Bung Karno di Muka Hakim Kolonial" borderRadius="10px" />
                        <Cards imageCard={bkbb6}
                            TextH5="KAPITALISME BANGSA SENDIRI TAHUN 1932" paragrap="Lorem ipsum dolor sit amet, consectetur adipisicing elit" borderRadius="10px" />
                        <Cards imageCard={bkbb7}
                            TextH5="MENCAPAI INDONESIA MERDEKA TAHUN 1933" paragrap="Lorem ipsum dolor sit amet, consectetur adipicising" borderRadius="10px" />
                    </div>
                    {/* END Row2 */}

                    {/* Row3 */}
                    <div className="row3">
                        <Cards imageCard={bkbb5}
                            TextH5="INDONESIA MENGGUGAT TAHUN 1930" paragrap="Pidato Pembelaan Bung Karno di Muka Hakim Kolonial" borderRadius="10px" />
                        <Cards imageCard={bkbb6}
                            TextH5="KAPITALISME BANGSA SENDIRI TAHUN 1932" paragrap="Lorem ipsum dolor sit amet, consectetur adipisicing elit" borderRadius="10px" />
                        <Cards imageCard={bkbb7}
                            TextH5="MENCAPAI INDONESIA MERDEKA TAHUN 1933" paragrap="Lorem ipsum dolor sit amet, consectetur adipicising" borderRadius="10px" />
                    </div>
                    {/* END Row3 */}
                </div>
                {/* END Column Card Materi Pokok */}

                {/* Column Pagination */}
                <div className="col-pagination-materi-pokok">
                    <StrukturPaginate />
                </div>
                {/* END Column Pagination */}
            </div>
            {/* END Container2 */}
        </>
    )
}

export default MateriPokok