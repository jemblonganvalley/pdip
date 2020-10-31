import React, { useEffect, useState } from "react";
import "./DetailPengurus.scss";
import profil from "../../../img/profil.png";
import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import { useParams } from "react-router-dom";
import Wait from "../../wait/Wait";
import parse from 'html-react-parser'

const DetailPengurus = () => {
  const { id, name } = useParams();
  const [configHome, setConfigHome] = useState([]);

  const getConfigHome = async () => {
    const res = await fetch("https://atur.biar.pw/api/auth/app", {
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
      "https://atur.biar.pw/api/partai/pengurus/find",
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
    console.log(dataConfigHome.query);
    setConfigHome(dataConfigHome.query);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getConfigHome();
  }, []);

  return (
    <>
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
              page3="Struktur Pengurus"
            />
          </div>
          {/* END */}

          <div className="pengurus">
            <MainDivider text="Pengurus DPP PDI PERJUANGAN" garisMerah="4rem" />
            <div className="bidangTextHead">
              <h2>
                {configHome.jabatan}
              </h2>
            </div>
            <div className="profilPengurus">
              <div className="kolum1">
                <img src={`https://atur.biar.pw/public/` + configHome.photo} alt="" />
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
                    <small className="emailHead">Social Media</small>
                <h6 className="emailText">{configHome.email}</h6>
                  </div>
                </div>
              </div>
              <div className="kolum2">
                <div className="descProfil">
                  <h6 className="biografi">biografi singkat</h6>
                <p dangerouslySetInnerHTML={{__html : configHome.biografi}}></p>
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
    </>
  );
};

export default DetailPengurus;
