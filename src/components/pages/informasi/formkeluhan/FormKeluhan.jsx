import React from 'react'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'
import './FormKeluhan.scss'

const FormKeluhan = ()=>{
    return(
        <>
        <div className="wrapper-formKeluhan">
            {/* START LINKED */}
            <div className="linked-formKeluhan">
                <BreadCrumbs link1="Home" to1="/" link2="Informasi" to2="/informasi-publik" page3="Formulir Keluhan"/>
            </div>
            {/* END */}

            {/* Container form keluhan */}
            <div className="container-formKeluhan">
            <div className="col-md-12 col-sm-12 col-xs-12">
  <form action className="formulir" method="post" encType="multipart/form-data">
    <div className="form-group form-info">
      <label><b>Informasi Pengajuan Keberatan</b></label>
    </div>
    <div className="form-group">
      <label>Nomor Registrasi Keberatan <small className="strict">*</small></label>
      <input type="text" className="form-control" name="nomor_registrasi" defaultValue />
      <small className="error-msg" />
    </div>
    <div className="form-group">
      <label>Nomor Pemohonan Infomasi <small className="strict">*</small></label>
      <input type="text" className="form-control" name="nomor_pemohon" defaultValue />
      <small className="error-msg" />
    </div>
    <div className="form-group">
      <label>Tanggal Pemohonan Informasi <small className="strict">*</small></label>
      <input type="date" className="form-control" name="tanggal_pemohon" defaultValue />
      <small className="error-msg" />
    </div>
    <div className="form-group">
      <label>Tujuan Penggunaan Informasi <small className="strict">*</small></label>
      <textarea type="text" className="form-control" name="tujuan_informasi" defaultValue={""} />
      <small className="error-msg" />
    </div>
    <div className="form-group form-info" style={{marginTop: 20}}>
      <label><b>Indentitas Pemohon</b></label>
    </div>
    <div className="form-group">
      <label>Jenis Identitas <small className="strict">*</small></label>
      <select className="form-control" name="jenis_identitas">
        <option value="Ktp">KTP</option>
        <option value="Sim">SIM</option>
        <option value="Pasport">Pasport</option>
      </select>
      <small className="error-msg" />
    </div>
    <div className="form-group">
      <label>Upload Photo Identitas <small className="strict">*</small></label>
      <input type="file" accept="image/*" className="form-control" name="fileupl" />
      <small className="error-msg" />
    </div>
    <div className="form-group">
      <label>NIK / Nomor Identitas <small className="strict">*</small></label>
      <input type="text" className="form-control" name="nomor_identitas" defaultValue />
      <small className="error-msg" />
    </div>
    <div className="form-group">
      <label>Nama <small className="strict">*</small></label>
      <input type="text" className="form-control" name="nama" defaultValue />
      <small className="error-msg" />
    </div>
    <div className="form-group">
      <label>Alamat  <small className="strict">*</small></label>
      <textarea className="form-control" name="alamat" defaultValue={""} />
      <small className="error-msg" />
    </div>
    <div className="form-group">
      <label>Nomor Telepon <small className="strict">*</small></label>
      <input type="number" className="form-control" name="no_telepon" defaultValue />
      <small className="error-msg" />
    </div>
    <div className="form-group">
      <label>Alamat Email <small className="strict">*</small></label>
      <input type="email" className="form-control" name="email" defaultValue />
      <small className="error-msg" />
    </div>
    <div className="form-group">
      <label>Pekerjaan <small className="strict">*</small></label>
      <input type="text" className="form-control" name="pekerjaan" defaultValue />
      <small className="error-msg" />
    </div>
    <div className="form-group">
      <label>Instansi/Lembaga <small className="strict">*</small></label>
      <input type="text" className="form-control" name="instansi" defaultValue />
      <small className="error-msg" />
    </div>
    <div className="form-group">
      <label>Alasan Pengajuan Keberatan ? <small className="strict">*</small></label>
      <small className="error-msg" />
      <div className="col-md-12" style={{marginTop: 'px'}}>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Permohonan informasi ditolak
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Informasi berkala tidak disediakan
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Permohonan informasi tidak ditanggapi 
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Permohonan informasi ditanggapi tidak sebagaimana yang di minta
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Biaya yang di kenakan tidak wajar
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Penyampaian informasi melebihi batas waktu yang di tentukan
          </label>
        </div>
        <textarea style={{marginTop: 10}} id="lain-lain" className="form-control" name="alasan_pengajuan_lain" placeholder="Mohon isikan dengan alasan lain......." defaultValue={""} />
      </div>
    </div>
    <div className="form-group" style={{marginTop: 20}}>
      <hr />
      <button type="submit" className="btn btn-default pull-right">Submit Data</button>
    </div>
  </form>
</div>

            </div>
            {/* end Container form keluhan */}
        </div>
        </>
    )
}

export default FormKeluhan