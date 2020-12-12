import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { useEffect } from "react";
import "./FormPdi.scss";

const Wait = lazy(() => import("../../../wait/Wait"));
const BreadCrumbs = lazy(() => import("../../../breadcrumbs/BreadCrumbs"));
const MainDivider = lazy(() => import("../../../divider/MainDivider"));

const FormPdi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense
      fallback={
        <div>
          <Wait />
        </div>
      }
    >
      <div className="wrapper-formPDI">
        {/* START LINKED */}
        <div className="linked-formPdi">
          <BreadCrumbs
            link1="Home"
            to1="/"
            link2="Informasi"
            to2="/informasi-publik"
            page3="Formulir PDI"
          />
        </div>
        {/* END */}

        {/* Container Formulir PDI */}
        <div className="container-formulirPdi">
          <div className="container">
            <div className="formgaris">
              <MainDivider text=" FORMULIR PERMOHONAN INFORMASI PUBLIK" />
            </div>
          </div>
          <div className="nikWrapper">
            <label htmlFor="basic-url">Upload identitas</label>
            <select className="form-control">
              <option>KTP</option>
              <option>KTA</option>
              <option>SIM C</option>
            </select>

            <br />
            <label>
              Upload Photo Identitas <small className="strict">*</small>
            </label>
            <input className="form-control form-control-sm" type="text" />
            <small className="error-msg" />
          </div>
          <div className="nikWrapper">
            <div className="form-group">
              <label>
                NIK / Nomor Identitas <small className="strict">*</small>
              </label>
              <input
                type="text"
                className="form-control"
                name="nomor_identitas"
                defaultValue={""}
              />
              <small className="error-msg" />
            </div>
            <div className="form-group">
              <label>
                Nama <small className="strict">*</small>
              </label>
              <input type="text" className="form-control" name="nama" />
              <small className="error-msg" />
            </div>
            <div className="form-group">
              <label>
                Alamat <small className="strict">*</small>
              </label>
              <textarea
                className="form-control"
                name="alamat"
                defaultValue={""}
              />
              <small className="error-msg" />
            </div>
            <br />
            <label htmlFor="basic-url">Pekerjaan </label>
            <input className="form-control" type="text" />
            <br />
            <label htmlFor="exampleFormControlInput1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
            <br />
            <br />
            <h6>
              {" "}
              <span>Informasi</span>
            </h6>
            <br />
            <br />
            <label htmlFor="basic-url">Informasi dibutuhkan</label>
            <input className="form-control" type="text" />
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Tujuan pengguna informasi{" "}
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
            <label htmlFor="basic-url">Cara Memperoleh Informasi ? </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                defaultValue="option1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Melihat/Mengdengar/Membaca/Mencatat
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
              <label className="form-check-label" htmlFor="exampleRadios2">
                Mendapatan salinan informai hard copy atau soft copy
              </label>
            </div>
            <br />
            <br />
            <label htmlFor="basic-url">
              Cara serah/terima salinan informasi ? *
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                defaultValue="option1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Mengambil Sendiri
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
              <label className="form-check-label" htmlFor="exampleRadios2">
                Kurir
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
              <label className="form-check-label" htmlFor="exampleRadios2">
                Pos
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
              <label className="form-check-label" htmlFor="exampleRadios2">
                Faksimili
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
              <label className="form-check-label" htmlFor="exampleRadios2">
                Email
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
              <label className="form-check-label" htmlFor="exampleRadios2">
                Lain-Lain
              </label>
            </div>
            <br />
            <br />
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-danger mb-3"
                name="btn_kirim_data"
              >
                Kirimi Data
              </button>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="form-terms">
                <h3>HAK-HAK PEMOHON INFORMASI DAN DOKUMENTASI</h3>
                <p>
                  Berdasarkan Undang-Undang Nomor 14 Tahun 2008 tentang
                  Keterbukaan Informasi Publik.{" "}
                </p>
                <div id="content">
                  <ol>
                    <li>
                      <p>
                        Pemohon Informasi berhak untuk meminta seluruh Informasi
                        yang berada di PDI. Perjuangan, <b>kecuali</b> :{" "}
                      </p>
                      <ul>
                        <li>
                          Informasi yang apabila dibuka dan diberikan kepada
                          Pemohon Informasi dapat : Mengganggu kepentingan dan
                          Strategi Politik Partai ; Mengungkap rahasia pribadi ;
                          Mengungkap isi akta otentik yang bersifat pribadi dan
                          kemauan terakhir ataupun wasiat seseorang ; Menghambat
                          proses kegiatan Program Partai ; Surat-surat internal
                          Struktur Partai dan eksternal Partai yang merupakan
                          dokumen-dokumen yang menurut sifatnya rahasia .{" "}
                        </li>
                        <li>
                          Dokumen-dokumen yang belum dikuasai dan atau belum
                          didokumentasikan.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>
                        Pemohon Informasi berhak memastikan Permohonannya telah
                        mendapatkan <b>Nomor</b> dan <b>Tanggal Pendaftaran</b>{" "}
                        dari Petugas Informasi sebagai bukti bahwa format
                        permintaan informasinya sudah lengkap.
                      </p>
                    </li>
                    <li>
                      <p>
                        Pemohon Informasi berhak mendapatkan{" "}
                        <b>Pemberitahuan Tertulis</b> mengenai diterima atau
                        tidaknya permohonan informasi dalam jangka waktu 10
                        (sepuluh) hari kerja sejak diterimanya Permohonan
                        Informasi oleh PPID PDI. Perjuangan.
                      </p>
                    </li>
                    <li>
                      <p>
                        PID PDI. Perjuangan dapat memperpanjang waktu untuk
                        memberi jawaban tertulis dalam jangka waktu 7 (tujuh)
                        hari kerja, dalam hal : Informasi yang diminta belum
                        dikuasai atau belum didokumentasikan atau belum dapat
                        diputuskan apakah informasi yang diminta termasuk yang
                        dikecualikan atau tidak.
                      </p>
                    </li>
                    <li>
                      <p>
                        Biaya yang dikenakan untuk keperluan Salinan Informasi
                        dan Dokumentasi, berdasarkan Peraturan DPP Partai atau
                        Ketentuan Turunannya.
                      </p>
                    </li>
                    <li>
                      <p>
                        Apabila Pemohon Informasi tidak puas dengan keputusan
                        yang diterima, (Permohonannya ditolak , atau
                        permohonannya diberikan hanya sebagian informasi yang
                        diminta), maka Pemohon Informasi dapat mengajukan{" "}
                        <b>keberatan</b> kepada Atasan PPID dalam jangka waktu
                        30 (tiga puluh) hari kerja sejak permohonan informasi
                        nya ditolak atau alasan keberatan lain. Atasan PPID
                        wajib memberikan tanggapan tertulis atas keberatan yang
                        diajukan Pemohon Informasi selambat-lambatnya 30 (tiga
                        puluh) hari kerja sejak diterima/dicatatnya pengajuan
                        keberatan dalam register keberatan.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* END Container Formulir PDI */}
      </div>
    </Suspense>
  );
};

export default FormPdi;
