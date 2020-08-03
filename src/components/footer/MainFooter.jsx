import React from 'react'
import Logo from '../../img/logo_footer.png'
import './MainFooter.scss'

const MainFooter = ()=> {
    return (
        <div className="wrapperFooter">
            <div className="wrapperContent">
                <img src={Logo} alt="" width="180" height="180" />

                <div className="textFooter">
                    <span className="heads">situation room pdi perjuangan</span>
                    <span className="body">Situs pdiperjuangan.id adalah situs resmi PDI Perjuangan. Situs ini<br/>dikelola oleh Pusat Analisa dan Pengendali Situasi (Situation Room)<br/>yang dikepalai oleh Prananda Prabowo.</span>
                    <span className="foot">Untuk dukungan dan partisipasi, kirimkan naskah atau artikel beserta<br/>foto kegiatan anda ke email : redaksi@pdiperjuangan.id</span>
                </div>
                <div className="emailFooter">
                    <i class="fa fa-envelope-o"></i>
                    <span>Email</span>
                    <small>redaksi@pdiperjuangan.id</small>
                </div>
                <div className="kontakFooter">
                    <i class="fa fa-phone"></i>
                    <span>Kontak</span>
                    <small>021-3909925</small>
                </div>
                <div className="alamatFooter">
                    <i class="fa fa-map-marker"></i>
                    <span>DPP PDI Perjuangan</span>
                    <small>Jl. Diponegoro No. 58 Menteng<br/>Jakarta Pusat 10310 </small>
                </div>
            </div>
        </div>
    )
}

export default MainFooter