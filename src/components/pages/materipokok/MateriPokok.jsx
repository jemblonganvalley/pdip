import React from 'react'

import bkbb5 from '../../../img/bkbb5.jpg'
import bkbb6 from '../../../img/bkbb6.jpg'
import bkbb7 from '../../../img/bkbb7.jpg'

import './MateriPokok.scss'
import CardMateriPokok from '../../cardmateripokok/CardMateriPokok'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../divider/MainDivider'

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
                        <CardMateriPokok imageCard={bkbb5} TextH5="INDONESIA MENGGUGAT TAHUN 1930" paragrap="Pidato Pembelaan Bung Karno di Muka Hakim Kolonial" />

                        <CardMateriPokok imageCard={bkbb6} TextH5="KAPITALISME BANGSA SENDIRI TAHUN 1932" paragrap="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />

                        <CardMateriPokok imageCard={bkbb7} TextH5="MENCAPAI INDONESIA MERDEKA TAHUN 1933" paragrap="Lorem ipsum dolor sit amet, consectetur adipicising" />
                    </div>
                    {/* END Row1 */}

                    {/* Row2 */}
                    <div className="row2">
                        <CardMateriPokok imageCard={bkbb5} TextH5="INDONESIA MENGGUGAT TAHUN 1930" paragrap="Pidato Pembelaan Bung Karno di Muka Hakim Kolonial" />

                        <CardMateriPokok imageCard={bkbb6} TextH5="KAPITALISME BANGSA SENDIRI TAHUN 1932" paragrap="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />

                        <CardMateriPokok imageCard={bkbb7} TextH5="MENCAPAI INDONESIA MERDEKA TAHUN 1933" paragrap="Lorem ipsum dolor sit amet, consectetur adipicising" />
                    </div>
                    {/* END Row2 */}

                    {/* Row3 */}
                    <div className="row3">
                        <CardMateriPokok imageCard={bkbb5} TextH5="INDONESIA MENGGUGAT TAHUN 1930" paragrap="Pidato Pembelaan Bung Karno di Muka Hakim Kolonial" />

                        <CardMateriPokok imageCard={bkbb6} TextH5="KAPITALISME BANGSA SENDIRI TAHUN 1932" paragrap="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />

                        <CardMateriPokok imageCard={bkbb7} TextH5="MENCAPAI INDONESIA MERDEKA TAHUN 1933" paragrap="Lorem ipsum dolor sit amet, consectetur adipicising" />
                    </div>
                    {/* END Row3 */}
                </div>
                {/* END Column Card Materi Pokok */}

                {/* Column Pagination */}
                <div className="col-pagination-materi-pokok">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* END Column */}
            </div>
            {/* END Container2 */}
        </>
    )
}

export default MateriPokok