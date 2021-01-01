import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import "./DetailPengurus.scss";

import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import Wait from "../../wait/Wait";

const DetailPengurus = () => {
  const { id, name, grade } = useParams();
  const [configHome, setConfigHome] = useState([]);

  const getConfigHome = async () => {
    const res = await fetch("https://data.pdiperjuangan.id/api/auth/app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        app_id: "1555309664580",
        api_secret: "4d672ce3-e422-4d8a-86ff-fabb1808a689",
      }),
    });
    const data = await res.json();

    const resConfigHome = await fetch(
      "https://data.pdiperjuangan.id/api/partai/pengurus/find",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );

    const dataConfigHome = await resConfigHome.json();
    setConfigHome(dataConfigHome.query);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getConfigHome();
  }, []);

  return (
    <React.Fragment>
      {configHome ? (
        <div className="wrapperDetail">
          {/* HEADERS */}
          {/* <div className="detailHead">
            <div className="backHead">
              <div className="textBackHead">
                <h2>
                  Solid Bergerak Untuk
                  <br />
                  Indonesia Raya{" "}
                </h2>
              </div>
            </div>
          </div> */}
          {/* END */}

          {/* LINK PARTAI */}
          <div className="linkedDetail">
            <BreadCrumbs
              link1="Home"
              to1="/"
              link2="Partai"
              to2="/partai"
              link3="Struktur Pengurus"
              to3={
                grade === "pengurus" ? "/struktur-dpp" : "/anggota-legislatif"
              }
            />
          </div>
          {/* END */}

          <div className="pengurus">
            <MainDivider text="Pengurus DPP PDI PERJUANGAN" garisMerah="4rem" />
            <div className="bidangTextHead">
              <h2>{configHome.jabatan}</h2>
            </div>
            <div className="profilPengurus">
              <div className="kolum1">
                <img
                  src={
                    `https://data.pdiperjuangan.id/public/` + configHome.photo
                  }
                  alt="photo pengurus"
                />
                <div className="textProfil">
                  <div className="ketua profilText">
                    <small className="ketuaText">Nama</small>
                    <h6 className="namaProfil">{configHome.nama}</h6>
                  </div>

                  {/* <div className="tanggalLahir profilText">
                    <small className="smallTanggal">
                      Tempat Lahir/Tanggal Lahir
                    </small>
                    <h6 className="tanggal">23 April 1970</h6>
                  </div> */}

                  {/* <div className="agama profilText">
                    <small className="agamaHead">Agama</small>
                    <h6 className="text">Islam</h6>
                  </div>
                   */}

                  <div className="email profilText">
                    <small className="emailHead">Email</small>
                    <h6 className="emailText">{configHome.email}</h6>
                  </div>
                </div>
              </div>
              <div className="kolum2">
                <div className="descProfil">
                  {/* <h6 className="biografi">biografi singkat</h6> */}
                  <div
                    dangerouslySetInnerHTML={{ __html: configHome.biografi }}
                    style={{
                      marginBottom: "1rem",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="textPengurus">
              <div className="borderBottom"></div>
            </div>
          </div>
        </div>
      ) : (
        <Wait />
      )}
    </React.Fragment>
  );
};

export default DetailPengurus;
