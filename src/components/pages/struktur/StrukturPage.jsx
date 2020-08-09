import React,{useEffect} from 'react'
import './StrukturPage.scss'
import StrukturPaginate from '../../pagination/StrukturPaginate'
import MainDivider from '../../divider/MainDivider'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'

const StrukturPage = ()=> {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
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
                <BreadCrumbs link1="home"
                                to1="/"
                                link2="Partai"
                                to2="/partai"
                                page3="Struktur Pengurus" />
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