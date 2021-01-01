import React from "react";
import { useEffect } from "react";
import "./FormKeluhan.scss";

import BreadCrumbs from "../../../breadcrumbs/BreadCrumbs";
import MainDivider from "../../../divider/MainDivider";

const FormKeluhan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper-formKeluhan">
        {/* START LINKED */}
        <div className="linked-formKeluhan">
          <BreadCrumbs
            link1="Home"
            to1="/"
            link2="Informasi"
            to2="/informasi-publik"
            page3="Formulir Keluhan"
          />
        </div>
        {/* END */}

        <div className="formgaris">
          <MainDivider text="FORMULIR KEBERATAN INFORMASI PUBLIK" />
        </div>

        {/* Container form keluhan */}
        <div className="container-formKeluhan">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <form
              action
              className="formulir"
              method="post"
              encType="multipart/form-data"
            >
              <div className="form-group form-info">
                <label>
                  <b>Informasi Pengajuan Keberatan</b>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="nomor_registrasi">
                  Nomor Registrasi Keberatan <small className="strict">*</small>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nomor_registrasi"
                />
                <small className="error-msg" />
              </div>
              <div className="form-group">
                <label htmlFor="nomor_pemohon">
                  Nomor Pemohonan Infomasi <small className="strict">*</small>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nomor_pemohon"
                />
                <small className="error-msg" />
              </div>
              <div className="form-group">
                <label htmlFor="tanggal_pemohon">
                  Tanggal Pemohonan Informasi
                  <small className="strict">*</small>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="tanggal_pemohon"
                />
                <small className="error-msg" />
              </div>
              <div className="form-group">
                <label>
                  Tujuan Penggunaan Informasi{" "}
                  <small className="strict">*</small>
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  name="tujuan_informasi"
                />
                <small className="error-msg" />
              </div>
              <div className="form-group form-info" style={{ marginTop: 20 }}>
                <label>
                  <b>Indentitas Pemohon</b>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Jenis Identitas <small className="strict">*</small>
                </label>
                <select className="form-control" name="jenis_identitas">
                  <option value="Ktp">KTP</option>
                  <option value="Sim">SIM</option>
                  <option value="Pasport">Pasport</option>
                </select>
                <small className="error-msg" />
              </div>
              <div className="form-group">
                <label htmlFor="fileupl">
                  Upload Photo Identitas <small className="strict">*</small>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  name="fileupl"
                />
                <small className="error-msg" />
              </div>
              <div className="form-group">
                <label htmlFor="nomor_identitas">
                  NIK / Nomor Identitas <small className="strict">*</small>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nomor_identitas"
                />
                <small className="error-msg" />
              </div>
              <div className="form-group">
                <label htmlFor="nama">
                  Nama <small className="strict">*</small>
                </label>
                <input type="text" className="form-control" name="nama" />
                <small className="error-msg" />
              </div>
              <div className="form-group">
                <label>
                  Alamat <small className="strict">*</small>
                </label>
                <textarea className="form-control" name="alamat" />
                <small className="error-msg" />
              </div>
              <div className="form-group">
                <label htmlFor="no_telepon">
                  Nomor Telepon <small className="strict">*</small>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="no_telepon"
                />
                <small className="error-msg" />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Alamat Email <small className="strict">*</small>
                </label>
                <input type="email" className="form-control" name="email" />
                <small className="error-msg" />
              </div>
              <div className="form-group">
                <label htmlFor="pekerjaan">
                  Pekerjaan <small className="strict">*</small>
                </label>
                <input type="text" className="form-control" name="pekerjaan" />
                <small className="error-msg" />
              </div>
              <div className="form-group">
                <label htmlFor="instansi">
                  Instansi/Lembaga <small className="strict">*</small>
                </label>
                <input type="text" className="form-control" name="instansi" />
                <small className="error-msg" />
              </div>
              <div className="form-group">
                <label>
                  Alasan Pengajuan Keberatan ?{" "}
                  <small className="strict">*</small>
                </label>
                <small className="error-msg" />
                <div className="col-md-12" style={{ marginTop: "px" }}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Permohonan informasi ditolak
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      defaultValue="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      Informasi berkala tidak disediakan
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      defaultValue="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      Permohonan informasi tidak ditanggapi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      defaultValue="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      Permohonan informasi ditanggapi tidak sebagaimana yang di
                      minta
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      defaultValue="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      Biaya yang di kenakan tidak wajar
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      defaultValue="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      Penyampaian informasi melebihi batas waktu yang di
                      tentukan
                    </label>
                  </div>
                  <textarea
                    style={{ marginTop: 10 }}
                    id="lain-lain"
                    className="form-control"
                    name="alasan_pengajuan_lain"
                  />
                </div>
              </div>
              <div className="form-group" style={{ marginTop: 20 }}>
                <hr />
                <button
                  type="submit"
                  className="btn btn-danger pull-right"
                  name="btn_submit_data"
                >
                  Submit Data
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* end Container form keluhan */}
      </div>
    </React.Fragment>
  );
};

export default FormKeluhan;
