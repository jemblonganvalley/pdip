import React from 'react'
import './StrukturPage.scss'
import StrukturPaginate from '../../pagination/StrukturPaginate'
import MainDivider from '../../divider/MainDivider'

const StrukturPage = ()=> {
    return (
        <div className="pageStruktur">
            {/* HEADERS */}
            <div className="headers">
                <div className="backgrounds">
                    <div className="textBackgroundPartai">
                        <h2>Solid Bergerak Untuk<br/>Indonesia Raya </h2>
                    </div>
                </div>
            </div>
            {/* END */}

            {/* LINK PARTAI */}
            <div className="linkedPartai">
                <i class="fa fa-home">
                    <span>Home / Partai /</span>
                </i>
            </div>
            {/* END */}

            <div className="pengurusPage">
                <MainDivider text="pengurus"
                                garisMerah="3rem" />
                <div className="strukturTextHead">
                    <h2>Struktur Pengurus Dewan Pimpinan Pusat<br/>PDI Perjuangan</h2>
                </div>

                <div className="pengurusList">
                    <div className="listPengurus">
                        <StrukturPaginate/>
                    </div>
                </div>
            </div>
            {/* END */}
            

        </div>
    )
}

export default StrukturPage