import React from 'react'
import './Dpd.scss'
import image from '../../img/bali.png'
import BreadCrumbs from '../breadcrumbs/BreadCrumbs'
import MainDivider from '../divider/MainDivider'
import CardHeader from '../cardheader/CardHeader'
import kampanye from '../../img/kampanye.jpg'

const Dpd = ()=> {
    return (
        <div className="dpdWrapper">
            {/* HEADERS */}
            {/* <div className="dpdHead">
                <div className="backDpd">
                    <div className="textDpdHead">
                        <h2>Solid Bergerak Untuk<br/>Indonesia Raya </h2>
                    </div>
                </div>
            </div> */}
            {/* END */}

            {/* Card Header */}
            {/* <CardHeader /> */}
            {/* END Card Header */}

            {/* LINK PARTAI */}
            <div className="linkedDetail">
                <BreadCrumbs to1="/"
                                link1="Home"
                                to2="/partai"
                                link2="Partai"
                                page3="Dewan Pimpinan" />
            </div>
            {/* END */}

            <div className="pengurus">
                {/* Divider */}
                <div className="divider-dewan-pimpinan">
                <MainDivider text="Dewan Pimpinan" />
                </div>
                {/* END Divider */}
                
                <div className="dpdTextHead">
                    <h1>Dewan Pimpinan Daerah PDI Perjuangan<br/>Provinsi Bali</h1>
                </div>
                <div className="profilDpd">
                    <div className="kolum1">
                        <img src={image} alt="" width="250" />
                        <div className="textDpd">
                            <div className="alamat dpdText">
                                <small className="alamatText">Alamat</small>
                                <h6 className="namaProfil">Jl. Banteng Baru kelurahan no.4, renon, kec. denpasar sel., kota denpasar, bali 80234</h6>
                            </div>
                            <div className="telpon dpdText">
                                <small className="smallTanggal">Telepon</small>
                                <h6 className="tanggal">(0361) 233630</h6>
                            </div>
                            <div className="ketua dpdText">
                                <small className="agamaHead">Ketua</small>
                                <h6 className="text">DR. ir. Wayan koster, MM</h6>
                            </div>
                            <div className="sekretaris dpdText">
                                <small className="emailHead">Sekretaris</small>
                                <h6 className="emailText">i gusti ngurah jaya negara, se</h6>
                            </div>
                            <div className="bendahara dpdText">
                                <small className="emailHead">Bendahara</small>
                                <h6 className="emailText">ni putu cynthta indraningsing, ba-e-h</h6>
                            </div>
                        </div>
                    </div>
                    <div className="kolum2">
                        <div className="peta"></div>
                        <div className="descPeta">
                            <h6 className="dpc">DPC PDI perjuangan kota denpasar</h6>
                            <small>Ketua</small>
                            <small className="ketua1 small">I gusti Ngurah gede, sh</small>
                            <small>sekretaris</small>
                            <small className="sekretaris1 small">I kadek agus arya wibawa, se, mm</small>
                            <small>bendahara</small>
                            <small className="bendahara1 small">I ketut suteja kumara, st</small>
                            <h6 className="dpc">DPC PDI Perjuangan kabupaten badung</h6>
                            <small>Ketua</small>
                            <small className="ketua2 small">I nyoman giri prasta, S.sos</small>
                            <small>sekretaris</small>
                            <small className="sekretaris2 small">Dr. drs. i putu parwata MK, MM</small>
                            <small>bendahara</small>
                            <small className="bendahara2 small">i nyoman dirga yusa, se</small>
                            <h6 className="dpc">DPC PDI Perjuangan kabupaten tabanan</h6>
                            <small>Ketua</small>
                            <small className="ketua3 small">Dr. i komang gede sanjaya, se., mm</small>
                            <small>sekretaris</small>
                            <small className="sekretaris3 small">i nyoman arnawa, sos</small>
                            <small>bendahara</small>
                            <small className="bendahara3 small">a. a. nyoman dharma putra, s.sos</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dpd