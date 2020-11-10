import React, { useEffect, useState } from "react";
import "./Dpd.scss";
import image from "../../img/bali.png";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import MainDivider from "../divider/MainDivider";
import CardHeader from "../cardheader/CardHeader";
import kampanye from "../../img/kampanye.jpg";
import { useParams } from "react-router-dom";
import Wait from "../wait/Wait";
import parse from "html-react-parser";

const Dpd = () => {
  const { id, nameProv } = useParams();
  const [configHome, setConfigHome] = useState();

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
      "https://atur.biar.pw/api/partai/dpd/find",
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
    console.log(configHome);
  };

  useEffect(() => {
    getConfigHome();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {configHome ? (
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
            <BreadCrumbs
              to1="/"
              link1="Home"
              to2="/partai"
              link2="Partai"
              page3="Dewan Pimpinan"
            />
          </div>
          {/* END */}

          <div className="pengurus">
            {/* Divider */}
            <div className="divider-dewan-pimpinan">
              <MainDivider text="Dewan Pimpinan Daerah" />
            </div>
            {/* END Divider */}

            <div className="dpdTextHead">
              <h1>
                Dewan Pimpinan Daerah PDI Perjuangan
                <br />
                Provinsi {nameProv}
              </h1>
            </div>
            <div className="profilDpd">
              <div className="kolum1">
                <img
                  src={`https://atur.biar.pw/public/${configHome.photo_one}`}
                  alt=""
                  width="250"
                />
                <div className="textDpd">
                  <div className="alamat dpdText">
                    <small className="alamatText">Alamat</small>
                    <h6 className="namaProfil">{configHome.address}</h6>
                  </div>
                  <div className="telpon dpdText">
                    <small className="smallTanggal">Telepon</small>
                    <h6 className="tanggal">{configHome.phone}</h6>
                  </div>
                  <div className="ketua dpdText">
                    <small className="agamaHead">Ketua</small>
                    <h6 className="text">{configHome.ketua}</h6>
                  </div>
                  <div className="sekretaris dpdText">
                    <small className="emailHead">Sekretaris</small>
                    <h6 className="emailText">{configHome.sekretaris}</h6>
                  </div>
                  <div className="bendahara dpdText">
                    <small className="emailHead">Bendahara</small>
                    <h6 className="emailText">{configHome.bendahara}</h6>
                  </div>
                </div>
              </div>

              <div className="kolum2">
                <div
                  className="peta"
                  style={{
                    backgroundImage: `url(https://atur.biar.pw/public/${configHome.photo_two})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="descPeta">
                  <h6 className="dpc">DPC PDI perjuangan kota {nameProv}</h6>
                  <div>{parse(configHome.description)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default Dpd;
